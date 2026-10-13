'use strict';
const http = require('node:http');
const {Pool} = require('pg');
const {initializeSchema} = require('./schema');
const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || '0.0.0.0';
const MAX_BODY = 8192;
const BODY_TIMEOUT = 10000;
const CORS_ORIGIN = process.env.ALLOWED_ORIGIN || '';
const pool = process.env.DATABASE_URL
  ? new Pool({connectionString:process.env.DATABASE_URL,connectionTimeoutMillis:5000,
      idleTimeoutMillis:10000,max:2})
  : null;
if(pool) pool.on('error',()=>console.error('Database idle connection error'));
let schemaStatus='pending';
async function databaseStatus() {
  if(!pool)return 'not_configured';
  try {await pool.query('SELECT 1');return 'connected'}
  catch(err){console.error('Database health check failed:',err.code||'connection_error');return 'unavailable'}
}
const service = http.createServer(async (req,res) => {
  const headers = {'Content-Type':'application/json; charset=utf-8',
    'Cache-Control':'no-store','X-Content-Type-Options':'nosniff',
    'Referrer-Policy':'no-referrer'};
  if (CORS_ORIGIN && req.headers.origin === CORS_ORIGIN) {
    headers['Access-Control-Allow-Origin']=CORS_ORIGIN;
    headers['Vary']='Origin';
    headers['Access-Control-Allow-Headers']='Content-Type, Authorization';
    headers['Access-Control-Allow-Methods']='GET, POST, OPTIONS';
  }
  function reply(code,body){res.writeHead(code,headers);res.end(JSON.stringify(body))}
  if(req.method==='GET' && req.url==='/health')
    return reply(200,{ok:true,service:'max-healms-backend',stage:'preparacao',
      paymentsEnabled:false,database:await databaseStatus(),schema:schemaStatus});
  if(req.method==='OPTIONS')return reply(204,{});
  if(req.url==='/api/purchases/verify' && req.method==='POST') {
    // Fail closed: no real Play verification, authenticated identity,
    // atomic fulfillment, or refund processing has been configured.
    let size=0;let rejected=false;
    req.setTimeout(BODY_TIMEOUT,()=>req.destroy());
    req.on('data',b=>{size+=b.length;if(size>MAX_BODY&&!rejected){rejected=true;reply(413,{error:'payload_too_large'});req.resume()}});
    req.on('end',()=>{if(!rejected)reply(503,{ok:false,code:'PURCHASES_NOT_CONFIGURED',message:'Compras ainda indisponiveis. Nenhum credito concedido.'})});
    return;
  }
  return reply(404,{error:'not_found'});
});
(async()=>{
  try{
    schemaStatus=await initializeSchema(pool);
    if(schemaStatus==='ready')console.log('MAX HEALMS staging database schema ready');
    else console.warn('MAX HEALMS schema not configured');
  }catch(error){
    schemaStatus='error';
    console.error('MAX HEALMS schema init failed:',error.code||'schema_error');
  }
  service.listen(PORT,HOST,()=>console.log('MAX HEALMS backend staging listening on port '+PORT));
})();
