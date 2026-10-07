/*
 MAX HEALMS — runtime origin protection
 Copyright (c) 2026 Rodrigo Maximiano. All rights reserved.
 This is a deterrence / anti-cloning layer, not a substitute for server-side purchase validation.
*/
(function(){
  'use strict';
  const h=(location.hostname||'').toLowerCase();
  const p=(location.protocol||'').toLowerCase();
  const allowedHosts=new Set([
    '127.0.0.1',
    'localhost',
    'rodrigomaximiano4-coder.github.io',
    'appassets.androidplatform.net'
  ]);
  const allowedProtocols=new Set(['http:','https:','capacitor:','ionic:']);
  const allowed=allowedProtocols.has(p) && allowedHosts.has(h);
  window.__MR_ORIGIN_AUTHORIZED=allowed;
  window.__MR_SECURITY={
    product:'MAX HEALMS',
    owner:'MAX HEALMS',
    copyright:'© 2026 MAX HEALMS. All rights reserved.',
    build:'MAX-HEALMS-PLAYER-0.32',
    origin:location.origin,
    authorized:allowed
  };

  function showBlocked(reason){
    const render=()=>{
      document.documentElement.style.background='#061012';
      document.body.innerHTML='<main style="min-height:100vh;display:grid;place-items:center;background:#061012;color:#fff;font-family:Segoe UI,Arial,sans-serif;padding:28px"><section style="max-width:760px"><div style="color:#f4c56a;font-weight:900;letter-spacing:.12em;font-size:12px">MAX HEALMS • PROTEÇÃO DE DISTRIBUIÇÃO</div><h1 style="font-size:34px;margin:12px 0">Cópia/origem não autorizada</h1><p style="line-height:1.6;color:#c9d3cf">Esta distribuição oficial do <b>MAX HEALMS</b> não autoriza hospedagem, redistribuição ou monetização por terceiros. Execução comercial, hospedagem, redistribuição ou monetização por terceiros não é autorizada.</p><p style="line-height:1.6;color:#95a7a0">Motivo: '+reason+'</p><small style="color:#748780">© 2026 MAX HEALMS • Todos os direitos reservados.</small></section></main>';
    };
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',render,{once:true}); else render();
  }

  if(window.top!==window.self){
    window.__MR_ORIGIN_AUTHORIZED=false;
    showBlocked('incorporação em frame/iframe não autorizada');
    return;
  }
  if(!allowed){
    showBlocked('host '+(h||'(sem host)')+' não autorizado');
  }
})();
