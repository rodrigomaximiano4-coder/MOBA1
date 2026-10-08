import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const out=path.join(root,'www');
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});

const exact=[
  'index.html',
  'three.min.js',
  'GLTFLoader.js',
  'FBXLoader.js',
  'SkeletonUtils.js',
  'max-realms-security.js'
];

const extensions=new Set([
  '.glb','.gltf','.bin',
  '.jpg','.jpeg','.png','.webp',
  '.mp3','.m4a','.wav','.ogg',
  '.mp4','.webm'
]);

const denyNames=new Set([
  'PLAY-STORE-PRODUCT-CATALOG.json',
  'PLAY-STORE-RELEASE-READINESS.md',
  'SHA256.txt',
  'LEIA-ME.txt',
  'README.txt',
  'LICENSE-PROPRIETARY.txt',
  'PRIVACY-POLICY.html',
  'DELETE-ACCOUNT.html',
  'privacy.html'
]);

const denyPrefixes=['MOBILE','TESTE','QA-','ADM-'];

for(const name of fs.readdirSync(root)){
  const src=path.join(root,name);
  if(!fs.statSync(src).isFile()) continue;
  if(denyNames.has(name)) continue;
  if(denyPrefixes.some(p=>name.toUpperCase().startsWith(p))) continue;
  const ext=path.extname(name).toLowerCase();
  if(exact.includes(name)||extensions.has(ext)){
    fs.copyFileSync(src,path.join(out,name));
  }
}

for(const name of exact){
  const target=path.join(out,name);
  if(!fs.existsSync(target)) throw new Error('Arquivo obrigatório ausente: '+name);
}

console.log('MAX HEALMS Android web bundle preparado em www/');
