# index.html — Parte 6

Linhas **1251 a 1500** da MOBILE86.

### Linha 1251

```text
   if(status)status.innerHTML='<b class="good">'+(purchasedNow?'COMPRA CONCLUÍDA':'VISUAL SELECIONADO')+'</b> • '+cfg.label;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1252

```text
   renderShop();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1253

```text
   await reloadHeroOutfit();
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 1254

```text
   toast((purchasedNow?'COMPRA LIBERADA PARA SEMPRE • ':'VISUAL EQUIPADO • ')+cfg.label);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1255

```text
 }catch(err){
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 1256

```text
   console.error('LOJA • ERRO',err);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1257

```text
   if(status)status.innerHTML='<b class="danger">ERRO NA LOJA</b> • '+String(err&&err.message||err);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1258

```text
   toast(purchasedNow?'COMPRA SALVA • FALHA APENAS AO EQUIPAR':'ERRO AO PROCESSAR A LOJA');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1259

```text
 }finally{shopBusy=false;renderShop();saveState()}
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1260

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1261

```text
let outfitPreviewRenderer=null,outfitPreviewCanvas=null;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1262

```text
function getOutfitPreviewRenderer(w,h){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1263

```text
 if(!window.THREE)return null;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1264

```text
 if(!outfitPreviewCanvas)outfitPreviewCanvas=document.createElement('canvas');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1265

```text
 if(!outfitPreviewRenderer){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1266

```text
   outfitPreviewRenderer=new THREE.WebGLRenderer({canvas:outfitPreviewCanvas,alpha:true,antialias:false,preserveDrawingBuffer:true,powerPreference:'low-power'});
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1267

```text
   outfitPreviewRenderer.setPixelRatio(1);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1268

```text
   outfitPreviewRenderer.outputEncoding=THREE.sRGBEncoding;
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1269

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1270

```text
 outfitPreviewRenderer.setSize(w,h,false);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1271

```text
 return outfitPreviewRenderer
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1272

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1273

```text
async function renderOutfitThumb(canvasId,outfitId,rotationY=Math.PI){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1274

```text
 const canvas=$(canvasId);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1275

```text
 if(!canvas||canvas.dataset.ready==='1'||canvas.dataset.loading==='1'||!loader)return false;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1276

```text
 canvas.dataset.loading='1';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1277

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1278

```text
   const cfg=HERO_OUTFITS[outfitId]||HERO_OUTFITS.outfit_varek_original;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1279

```text
   const src=cfg.mode==='varek'?ASSETS.varek:ASSETS[cfg.run];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1280

```text
   if(!src)throw new Error('asset do visual não encontrado');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1281

```text
   const gltf=await loadGLTFAsset(src);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1282

```text
   const ps=new THREE.Scene(),w=MOBILE_RUNNER?180:260,h=MOBILE_RUNNER?220:300;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1283

```text
   const pc=new THREE.PerspectiveCamera(30,w/h,.01,50),r=getOutfitPreviewRenderer(w,h);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1284

```text
   if(!r)throw new Error('renderer indisponível');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1285

```text
   ps.add(new THREE.HemisphereLight(0xf2fbf7,0x111719,1.75));
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1286

```text
   const key=new THREE.DirectionalLight(0xffdfae,1.8);key.position.set(2.7,4.5,4);ps.add(key);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1287

```text
   const fill=new THREE.DirectionalLight(0x8fc9ff,.9);fill.position.set(-3,2.2,2);ps.add(fill);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1288

```text
   const model=cloneModelScene(gltf.scene);setSRGB(model);applyOutfitStyle(model,cfg);model.rotation.y=rotationY;model.updateMatrixWorld(true);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1289

```text
   let box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3());
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1290

```text
   model.scale.setScalar(2.25/Math.max(.001,size.y));model.updateMatrixWorld(true);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1291

```text
   box=new THREE.Box3().setFromObject(model);const center=box.getCenter(new THREE.Vector3());
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1292

```text
   model.position.x-=center.x;model.position.y-=box.min.y;model.position.z-=center.z;model.updateMatrixWorld(true);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1293

```text
   box=new THREE.Box3().setFromObject(model);size=box.getSize(new THREE.Vector3());
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1294

```text
   const cy=(box.min.y+box.max.y)/2,half=Math.max(size.y*.58,size.x*.60,.8);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1295

```text
   const dist=half/Math.tan(THREE.MathUtils.degToRad(pc.fov)/2)*1.16;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1296

```text
   pc.position.set(0,cy,dist);pc.lookAt(0,cy,0);pc.far=dist+size.z*4+10;pc.updateProjectionMatrix();ps.add(model);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1297

```text
   r.render(ps,pc);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1298

```text
   const ctx=canvas.getContext('2d',{alpha:true});if(!ctx)throw new Error('canvas indisponível');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1299

```text
   canvas.width=w;canvas.height=h;ctx.clearRect(0,0,w,h);ctx.drawImage(outfitPreviewCanvas,0,0,w,h);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1300

```text
   canvas.dataset.ready='1';canvas.dataset.loading='';canvas.dataset.error='';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1301

```text
   return true
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1302

```text
 }catch(e){
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 1303

```text
   console.warn('LOJA PREVIEW',canvasId,e);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1304

```text
   canvas.dataset.loading='';canvas.dataset.error='1';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1305

```text
   try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1306

```text
     const ctx=canvas.getContext('2d'),w=canvas.width||180,h=canvas.height||220;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1307

```text
     if(ctx){ctx.clearRect(0,0,w,h);ctx.fillStyle='rgba(12,17,20,.94)';ctx.fillRect(0,0,w,h);ctx.fillStyle='#f4c56a';ctx.textAlign='center';ctx.font='700 13px sans-serif';ctx.fillText(HERO_OUTFITS[outfitId]?.label||'VAREK',w/2,h/2)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1308

```text
   }catch(_){}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 1309

```text
   return false
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1310

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1311

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1312

```text
async function ensureOutfitPreviews(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1313

```text
 const queue=[
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1314

```text
  ['previewOriginalFront','previewOriginalBack','outfit_varek_original'],
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1315

```text
  ['previewAdventurerFront','previewAdventurerBack','outfit_varek_adventurer'],
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1316

```text
  ['previewVorenFront','previewVorenBack','outfit_varek_voren']
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1317

```text
 ];
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1318

```text
 for(const [frontId,backId,id] of queue){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1319

```text
   await renderOutfitThumb(frontId,id,Math.PI);
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 1320

```text
   await new Promise(r=>setTimeout(r,50));
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 1321

```text
   await renderOutfitThumb(backId,id,0);
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 1322

```text
   await new Promise(r=>setTimeout(r,50));
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 1323

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1324

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1325

```text
function trailPulse(dt){}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1326

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 1327

```text
const SUPPORTED_LANGS=['pt-BR','en','es','fr','de','it','ja','ko','zh-CN'];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1328

```text
const COUNTRY_CODES="AF,AL,DZ,AS,AD,AO,AI,AQ,AG,AR,AM,AW,AU,AT,AZ,BS,BH,BD,BB,BY,BE,BZ,BJ,BM,BT,BO,BQ,BA,BW,BV,BR,IO,BN,BG,BF,BI,CV,KH,CM,CA,KY,CF,TD,CL,CN,CX,CC,CO,KM,CG,CD,CK,CR,CI,HR,CU,CW,CY,CZ,DK,DJ,DM,DO,EC,EG,SV,GQ,ER,EE,SZ,ET,FK,FO,FJ,FI,FR,GF,PF,TF,GA,GM,GE,DE,GH,GI,GR,GL,GD,GP,GU,GT,GG,GN,GW,GY,HT,HM,VA,HN,HK,HU,IS,IN,ID,IR,IQ,IE,IM,IL,IT,JM,JP,JE,JO,KZ,KE,KI,KP,KR,KW,KG,LA,LV,LB,LS,LR,LY,LI,LT,LU,MO,MG,MW,MY,MV,ML,MT,MH,MQ,MR,MU,YT,MX,FM,MD,MC,MN,ME,MS,MA,MZ,MM,NA,NR,NP,NL,NC,NZ,NI,NE,NG,NU,NF,MK,MP,NO,OM,PK,PW,PS,PA,PG,PY,PE,PH,PN,PL,PT,PR,QA,RE,RO,RU,RW,BL,SH,KN,LC,MF,PM,VC,WS,SM,ST,SA,SN,RS,SC,SL,SG,SX,SK,SI,SB,SO,ZA,GS,SS,ES,LK,SD,SR,SJ,SE,CH,SY,TW,TJ,TZ,TH,TL,TG,TK,TO,TT,TN,TR,TM,TC,TV,UG,UA,AE,GB,US,UM,UY,UZ,VU,VE,VN,VG,VI,WF,EH,YE,ZM,ZW".split(',');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1329

```text
const I18N={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1330

```text
 'pt-BR':{play:'▶ JOGAR • JORNADA 1',j2:'🔒 JORNADA 2 • O RESGATE',characters:'👤 PERSONAGENS',diamonds:'💎 DIAMANTES',profile:'👤 PERFIL',more:'☰ MAIS',ranking:'🏆 RANKING',progress:'🌍 PROGRESSO',story:'🎬 HISTÓRIA',upgrades:'⬆ UPGRADES',settings:'⚙ CONFIGURAÇÕES',endless:'🔒 ENDLESS • CONCLUA A HISTÓRIA',cost:'📊 CUSTO / GANHO',settingsTitle:'⚙ Configurações',language:'IDIOMA',saveSettings:'SALVAR CONFIGURAÇÕES',languageText:'O idioma é detectado automaticamente pelo aparelho e pode ser alterado a qualquer momento.',profileTitle:'👤 Perfil e acesso',country:'PAÍS',selectCountry:'Selecione seu país',save:'SALVAR ALTERAÇÕES',back:'VOLTAR AO MENU',name:'NOME',nickname:'NOME NO RANKING',email:'E-MAIL',password:'SENHA'},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1331

```text
 en:{play:'▶ PLAY • JOURNEY 1',j2:'🔒 JOURNEY 2 • THE RESCUE',characters:'👤 CHARACTERS',diamonds:'💎 DIAMONDS',profile:'👤 PROFILE',more:'☰ MORE',ranking:'🏆 RANKING',progress:'🌍 PROGRESS',story:'🎬 STORY',upgrades:'⬆ UPGRADES',settings:'⚙ SETTINGS',endless:'🔒 ENDLESS • FINISH THE STORY',cost:'📊 COST / REVENUE',settingsTitle:'⚙ Settings',language:'LANGUAGE',saveSettings:'SAVE SETTINGS',languageText:'Language is detected automatically from your device and can be changed at any time.',profileTitle:'👤 Profile & access',country:'COUNTRY',selectCountry:'Select your country',save:'SAVE CHANGES',back:'BACK TO MENU',name:'NAME',nickname:'RANKING NAME',email:'EMAIL',password:'PASSWORD'},
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 1332

```text
 es:{play:'▶ JUGAR • JORNADA 1',j2:'🔒 JORNADA 2 • EL RESCATE',characters:'👤 PERSONAJES',diamonds:'💎 DIAMANTES',profile:'👤 PERFIL',more:'☰ MÁS',ranking:'🏆 RANKING',progress:'🌍 PROGRESO',story:'🎬 HISTORIA',upgrades:'⬆ MEJORAS',settings:'⚙ CONFIGURACIÓN',endless:'🔒 ENDLESS • TERMINA LA HISTORIA',cost:'📊 COSTO / INGRESO',settingsTitle:'⚙ Configuración',language:'IDIOMA',saveSettings:'GUARDAR CONFIGURACIÓN',languageText:'El idioma se detecta automáticamente desde el dispositivo y puede cambiarse en cualquier momento.',profileTitle:'👤 Perfil y acceso',country:'PAÍS',selectCountry:'Selecciona tu país',save:'GUARDAR CAMBIOS',back:'VOLVER AL MENÚ',name:'NOMBRE',nickname:'NOMBRE EN RANKING',email:'CORREO',password:'CONTRASEÑA'},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1333

```text
 fr:{play:'▶ JOUER • VOYAGE 1',j2:'🔒 VOYAGE 2 • LE SAUVETAGE',characters:'👤 PERSONNAGES',diamonds:'💎 DIAMANTS',profile:'👤 PROFIL',more:'☰ PLUS',ranking:'🏆 CLASSEMENT',progress:'🌍 PROGRESSION',story:'🎬 HISTOIRE',upgrades:'⬆ AMÉLIORATIONS',settings:'⚙ PARAMÈTRES',endless:'🔒 ENDLESS • TERMINEZ L’HISTOIRE',cost:'📊 COÛT / REVENU',settingsTitle:'⚙ Paramètres',language:'LANGUE',saveSettings:'ENREGISTRER LES PARAMÈTRES',languageText:'La langue est détectée automatiquement sur l’appareil et peut être modifiée à tout moment.',profileTitle:'👤 Profil et accès',country:'PAYS',selectCountry:'Choisissez votre pays',save:'ENREGISTRER',back:'RETOUR AU MENU',name:'NOM',nickname:'NOM DU CLASSEMENT',email:'E-MAIL',password:'MOT DE PASSE'},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1334

```text
 de:{play:'▶ SPIELEN • REISE 1',j2:'🔒 REISE 2 • DIE RETTUNG',characters:'👤 CHARAKTERE',diamonds:'💎 DIAMANTEN',profile:'👤 PROFIL',more:'☰ MEHR',ranking:'🏆 RANGLISTE',progress:'🌍 FORTSCHRITT',story:'🎬 GESCHICHTE',upgrades:'⬆ UPGRADES',settings:'⚙ EINSTELLUNGEN',endless:'🔒 ENDLESS • GESCHICHTE ABSCHLIESSEN',cost:'📊 KOSTEN / ERTRAG',settingsTitle:'⚙ Einstellungen',language:'SPRACHE',saveSettings:'EINSTELLUNGEN SPEICHERN',languageText:'Die Sprache wird automatisch vom Gerät erkannt und kann jederzeit geändert werden.',profileTitle:'👤 Profil & Zugang',country:'LAND',selectCountry:'Land auswählen',save:'ÄNDERUNGEN SPEICHERN',back:'ZURÜCK ZUM MENÜ',name:'NAME',nickname:'RANGLISTENNAME',email:'E-MAIL',password:'PASSWORT'},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1335

```text
 it:{play:'▶ GIOCA • VIAGGIO 1',j2:'🔒 VIAGGIO 2 • IL SALVATAGGIO',characters:'👤 PERSONAGGI',diamonds:'💎 DIAMANTI',profile:'👤 PROFILO',more:'☰ ALTRO',ranking:'🏆 CLASSIFICA',progress:'🌍 PROGRESSO',story:'🎬 STORIA',upgrades:'⬆ POTENZIAMENTI',settings:'⚙ IMPOSTAZIONI',endless:'🔒 ENDLESS • COMPLETA LA STORIA',cost:'📊 COSTO / RICAVO',settingsTitle:'⚙ Impostazioni',language:'LINGUA',saveSettings:'SALVA IMPOSTAZIONI',languageText:'La lingua viene rilevata automaticamente dal dispositivo e può essere cambiata in qualsiasi momento.',profileTitle:'👤 Profilo e accesso',country:'PAESE',selectCountry:'Seleziona il tuo paese',save:'SALVA MODIFICHE',back:'TORNA AL MENU',name:'NOME',nickname:'NOME CLASSIFICA',email:'EMAIL',password:'PASSWORD'},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1336

```text
 ja:{play:'▶ プレイ • ジャーニー1',j2:'🔒 ジャーニー2 • 救出',characters:'👤 キャラクター',diamonds:'💎 ダイヤ',profile:'👤 プロフィール',more:'☰ その他',ranking:'🏆 ランキング',progress:'🌍 進行状況',story:'🎬 ストーリー',upgrades:'⬆ アップグレード',settings:'⚙ 設定',endless:'🔒 エンドレス • ストーリー完了後',cost:'📊 コスト / 収益',settingsTitle:'⚙ 設定',language:'言語',saveSettings:'設定を保存',languageText:'端末の言語を自動検出し、いつでも変更できます。',profileTitle:'👤 プロフィールとアクセス',country:'国',selectCountry:'国を選択',save:'変更を保存',back:'メニューに戻る',name:'名前',nickname:'ランキング名',email:'メール',password:'パスワード'},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1337

```text
 ko:{play:'▶ 플레이 • 여정 1',j2:'🔒 여정 2 • 구출',characters:'👤 캐릭터',diamonds:'💎 다이아몬드',profile:'👤 프로필',more:'☰ 더보기',ranking:'🏆 랭킹',progress:'🌍 진행도',story:'🎬 스토리',upgrades:'⬆ 업그레이드',settings:'⚙ 설정',endless:'🔒 ENDLESS • 스토리 완료 후',cost:'📊 비용 / 수익',settingsTitle:'⚙ 설정',language:'언어',saveSettings:'설정 저장',languageText:'기기 언어를 자동 감지하며 언제든 변경할 수 있습니다.',profileTitle:'👤 프로필 및 접속',country:'국가',selectCountry:'국가 선택',save:'변경 저장',back:'메뉴로 돌아가기',name:'이름',nickname:'랭킹 이름',email:'이메일',password:'비밀번호'},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1338

```text
 'zh-CN':{play:'▶ 开始 • 旅程1',j2:'🔒 旅程2 • 营救',characters:'👤 角色',diamonds:'💎 钻石',profile:'👤 个人资料',more:'☰ 更多',ranking:'🏆 排名',progress:'🌍 进度',story:'🎬 故事',upgrades:'⬆ 升级',settings:'⚙ 设置',endless:'🔒 无尽模式 • 完成故事后解锁',cost:'📊 成本 / 收益',settingsTitle:'⚙ 设置',language:'语言',saveSettings:'保存设置',languageText:'游戏会自动检测设备语言，也可以随时手动更改。',profileTitle:'👤 个人资料与登录',country:'国家/地区',selectCountry:'选择国家/地区',save:'保存更改',back:'返回菜单',name:'姓名',nickname:'排名昵称',email:'电子邮箱',password:'密码'}
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1339

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1340

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 1341

```text
const GAME_TEXT={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1342

```text
 'pt-BR':{
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1343

```text
  distance:'DISTÂNCIA',stars:'ESTRELAS',score:'PONTOS',lives:'VIDAS',gems:'DIAMANTES',water:'ÁGUA',time:'TEMPO',realm:'REINO',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1344

```text
  j1:'JORNADA 1 • A FUGA',j2:'JORNADA 2 • O RESGATE',continue:'CONTINUAR',menu:'MENU',next:'PRÓXIMO',saved:'Progresso salvo automaticamente.',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1345

```text
  completed:'CONCLUÍDO',reward:'RECOMPENSA',already:'CHECKPOINT JÁ CONCLUÍDO • PROGRESSO MANTIDO',double:'▶ ANÚNCIO • DOBRAR PARA 💎 +',received:'✓ x2 RECEBIDO',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1346

```text
  ad:'ANÚNCIO',life:'VIDA',livesWord:'VIDAS',runEnded:'A jornada terminou',paidLimit:'LIMITE DE CONTINUAÇÕES PAGAS DESTA CORRIDA ATINGIDO',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1347

```text
  portal:'PORTAL',portalCrossed:'PORTAL ATRAVESSADO',pause:'Jornada pausada',resume:'Continuar',restart:'Reiniciar',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1348

```text
  shelter:'Abrigo • Hidratação',enterShelter:'Entrar no abrigo?',enter:'ENTRAR NO ABRIGO',keepRunning:'CONTINUAR CORRENDO',exitNoBuy:'SAIR SEM COMPRAR / CONTINUAR →',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1349

```text
  hydrationFull:'Hidratação completa.',hydrationCurrent:'Hidratação atual:',insufficient:'DIAMANTES INSUFICIENTES',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1350

```text
  kidnapped:'Lyra foi sequestrada',reunion:'REENCONTRO',hunter:'O CAÇADO VIROU CAÇADOR.',huntStarts:'A FUGA TERMINOU. A CAÇADA COMEÇA.',
```

**Explicação:** Controla a presença, animação ou estado de Lyra.

### Linha 1351

```text
  rawTime:'TEMPO BRUTO',penalties:'PENALIDADES',finalTime:'TEMPO FINAL',position:'POSIÇÃO',spent:'GASTOS',ads:'ANÚNCIOS',continues:'CONTINUAÇÕES',finalBalance:'SALDO FINAL',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1352

```text
  j2Unlocked:'✓ JORNADA 2 DESBLOQUEADA • O RESGATE',family:'FAMÍLIA REUNIDA',localPlacement:'COLOCAÇÃO LOCAL',collected:'COLETADOS',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1353

```text
  settingsSaved:'CONFIGURAÇÕES SALVAS',profileSaved:'PERFIL SALVO'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1354

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1355

```text
 en:{
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1356

```text
  distance:'DISTANCE',stars:'STARS',score:'SCORE',lives:'LIVES',gems:'DIAMONDS',water:'WATER',time:'TIME',realm:'REALM',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1357

```text
  j1:'JOURNEY 1 • THE ESCAPE',j2:'JOURNEY 2 • THE RESCUE',continue:'CONTINUE',menu:'MENU',next:'NEXT',saved:'Progress saved automatically.',
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1358

```text
  completed:'COMPLETED',reward:'REWARD',already:'CHECKPOINT ALREADY COMPLETED • PROGRESS KEPT',double:'▶ AD • DOUBLE TO 💎 +',received:'✓ x2 RECEIVED',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1359

```text
  ad:'AD',life:'LIFE',livesWord:'LIVES',runEnded:'The run has ended',paidLimit:'PAID CONTINUE LIMIT REACHED FOR THIS RUN',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1360

```text
  portal:'PORTAL',portalCrossed:'PORTAL CROSSED',pause:'Journey paused',resume:'Continue',restart:'Restart',
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1361

```text
  shelter:'Shelter • Hydration',enterShelter:'Enter the shelter?',enter:'ENTER SHELTER',keepRunning:'KEEP RUNNING',exitNoBuy:'LEAVE WITHOUT BUYING / CONTINUE →',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1362

```text
  hydrationFull:'Hydration full.',hydrationCurrent:'Current hydration:',insufficient:'NOT ENOUGH DIAMONDS',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1363

```text
  kidnapped:'Lyra was kidnapped',reunion:'REUNION',hunter:'THE HUNTED BECAME THE HUNTER.',huntStarts:'THE ESCAPE IS OVER. THE HUNT BEGINS.',
```

**Explicação:** Controla a presença, animação ou estado de Lyra.

### Linha 1364

```text
  rawTime:'RAW TIME',penalties:'PENALTIES',finalTime:'FINAL TIME',position:'POSITION',spent:'SPENT',ads:'ADS',continues:'CONTINUES',finalBalance:'FINAL BALANCE',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1365

```text
  j2Unlocked:'✓ JOURNEY 2 UNLOCKED • THE RESCUE',family:'FAMILY REUNITED',localPlacement:'LOCAL PLACEMENT',collected:'COLLECTED',
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1366

```text
  settingsSaved:'SETTINGS SAVED',profileSaved:'PROFILE SAVED'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1367

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1368

```text
 es:{
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1369

```text
  distance:'DISTANCIA',stars:'ESTRELLAS',score:'PUNTOS',lives:'VIDAS',gems:'DIAMANTES',water:'AGUA',time:'TIEMPO',realm:'REINO',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1370

```text
  j1:'JORNADA 1 • LA HUIDA',j2:'JORNADA 2 • EL RESCATE',continue:'CONTINUAR',menu:'MENÚ',next:'SIGUIENTE',saved:'Progreso guardado automáticamente.',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1371

```text
  completed:'COMPLETADO',reward:'RECOMPENSA',already:'CHECKPOINT YA COMPLETADO • PROGRESO MANTENIDO',double:'▶ ANUNCIO • DUPLICAR A 💎 +',received:'✓ x2 RECIBIDO',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1372

```text
  ad:'ANUNCIO',life:'VIDA',livesWord:'VIDAS',runEnded:'La carrera terminó',paidLimit:'LÍMITE DE CONTINUACIONES PAGADAS ALCANZADO',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1373

```text
  portal:'PORTAL',portalCrossed:'PORTAL ATRAVESADO',pause:'Jornada pausada',resume:'Continuar',restart:'Reiniciar',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1374

```text
  shelter:'Refugio • Hidratación',enterShelter:'¿Entrar al refugio?',enter:'ENTRAR AL REFUGIO',keepRunning:'SEGUIR CORRIENDO',exitNoBuy:'SALIR SIN COMPRAR / CONTINUAR →',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1375

```text
  hydrationFull:'Hidratación completa.',hydrationCurrent:'Hidratación actual:',insufficient:'DIAMANTES INSUFICIENTES',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1376

```text
  kidnapped:'Lyra fue secuestrada',reunion:'REENCUENTRO',hunter:'EL CAZADO SE CONVIRTIÓ EN CAZADOR.',huntStarts:'LA HUIDA TERMINÓ. COMIENZA LA CAZA.',
```

**Explicação:** Controla a presença, animação ou estado de Lyra.

### Linha 1377

```text
  rawTime:'TIEMPO BRUTO',penalties:'PENALIZACIONES',finalTime:'TIEMPO FINAL',position:'POSICIÓN',spent:'GASTADO',ads:'ANUNCIOS',continues:'CONTINUACIONES',finalBalance:'SALDO FINAL',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1378

```text
  j2Unlocked:'✓ JORNADA 2 DESBLOQUEADA • EL RESCATE',family:'FAMILIA REUNIDA',localPlacement:'POSICIÓN LOCAL',collected:'RECOGIDOS',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1379

```text
  settingsSaved:'CONFIGURACIÓN GUARDADA',profileSaved:'PERFIL GUARDADO'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1380

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1381

```text
 fr:{
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1382

```text
  distance:'DISTANCE',stars:'ÉTOILES',score:'POINTS',lives:'VIES',gems:'DIAMANTS',water:'EAU',time:'TEMPS',realm:'ROYAUME',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1383

```text
  j1:'VOYAGE 1 • LA FUITE',j2:'VOYAGE 2 • LE SAUVETAGE',continue:'CONTINUER',menu:'MENU',next:'SUIVANT',saved:'Progression enregistrée automatiquement.',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1384

```text
  completed:'TERMINÉ',reward:'RÉCOMPENSE',already:'CHECKPOINT DÉJÀ TERMINÉ • PROGRESSION CONSERVÉE',double:'▶ PUB • DOUBLER À 💎 +',received:'✓ x2 REÇU',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1385

```text
  ad:'PUB',life:'VIE',livesWord:'VIES',runEnded:'La course est terminée',paidLimit:'LIMITE DE CONTINUATIONS PAYANTES ATTEINTE',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1386

```text
  portal:'PORTAIL',portalCrossed:'PORTAIL TRAVERSÉ',pause:'Voyage en pause',resume:'Continuer',restart:'Recommencer',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1387

```text
  shelter:'Abri • Hydratation',enterShelter:'Entrer dans l’abri ?',enter:'ENTRER DANS L’ABRI',keepRunning:'CONTINUER À COURIR',exitNoBuy:'SORTIR SANS ACHETER / CONTINUER →',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1388

```text
  hydrationFull:'Hydratation complète.',hydrationCurrent:'Hydratation actuelle :',insufficient:'DIAMANTS INSUFFISANTS',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1389

```text
  kidnapped:'Lyra a été enlevée',reunion:'RETROUVAILLES',hunter:'LE TRAQUÉ DEVIENT CHASSEUR.',huntStarts:'LA FUITE EST TERMINÉE. LA CHASSE COMMENCE.',
```

**Explicação:** Controla a presença, animação ou estado de Lyra.

### Linha 1390

```text
  rawTime:'TEMPS BRUT',penalties:'PÉNALITÉS',finalTime:'TEMPS FINAL',position:'POSITION',spent:'DÉPENSÉ',ads:'PUBLICITÉS',continues:'CONTINUATIONS',finalBalance:'SOLDE FINAL',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1391

```text
  j2Unlocked:'✓ VOYAGE 2 DÉBLOQUÉ • LE SAUVETAGE',family:'FAMILLE RÉUNIE',localPlacement:'CLASSEMENT LOCAL',collected:'COLLECTÉS',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1392

```text
  settingsSaved:'PARAMÈTRES ENREGISTRÉS',profileSaved:'PROFIL ENREGISTRÉ'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1393

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1394

```text
 de:{
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1395

```text
  distance:'DISTANZ',stars:'STERNE',score:'PUNKTE',lives:'LEBEN',gems:'DIAMANTEN',water:'WASSER',time:'ZEIT',realm:'REICH',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1396

```text
  j1:'REISE 1 • DIE FLUCHT',j2:'REISE 2 • DIE RETTUNG',continue:'WEITER',menu:'MENÜ',next:'WEITER',saved:'Fortschritt automatisch gespeichert.',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1397

```text
  completed:'ABGESCHLOSSEN',reward:'BELOHNUNG',already:'CHECKPOINT BEREITS ABGESCHLOSSEN • FORTSCHRITT BEHALTEN',double:'▶ WERBUNG • VERDOPPELN AUF 💎 +',received:'✓ x2 ERHALTEN',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1398

```text
  ad:'WERBUNG',life:'LEBEN',livesWord:'LEBEN',runEnded:'Der Lauf ist beendet',paidLimit:'LIMIT FÜR BEZAHLTE FORTSETZUNGEN ERREICHT',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1399

```text
  portal:'PORTAL',portalCrossed:'PORTAL DURCHQUERT',pause:'Reise pausiert',resume:'Weiter',restart:'Neu starten',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1400

```text
  shelter:'Unterstand • Hydration',enterShelter:'Unterstand betreten?',enter:'UNTERSTAND BETRETEN',keepRunning:'WEITERLAUFEN',exitNoBuy:'OHNE KAUF VERLASSEN / WEITER →',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1401

```text
  hydrationFull:'Hydration vollständig.',hydrationCurrent:'Aktuelle Hydration:',insufficient:'NICHT GENUG DIAMANTEN',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1402

```text
  kidnapped:'Lyra wurde entführt',reunion:'WIEDERVEREINIGUNG',hunter:'DER GEJAGTE WIRD ZUM JÄGER.',huntStarts:'DIE FLUCHT IST VORBEI. DIE JAGD BEGINNT.',
```

**Explicação:** Controla a presença, animação ou estado de Lyra.

### Linha 1403

```text
  rawTime:'ROHZEIT',penalties:'STRAFEN',finalTime:'ENDZEIT',position:'POSITION',spent:'AUSGEGEBEN',ads:'WERBUNG',continues:'FORTSETZUNGEN',finalBalance:'ENDGUTHABEN',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1404

```text
  j2Unlocked:'✓ REISE 2 FREIGESCHALTET • DIE RETTUNG',family:'FAMILIE VEREINT',localPlacement:'LOKALE PLATZIERUNG',collected:'GESAMMELT',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1405

```text
  settingsSaved:'EINSTELLUNGEN GESPEICHERT',profileSaved:'PROFIL GESPEICHERT'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1406

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1407

```text
 it:{
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1408

```text
  distance:'DISTANZA',stars:'STELLE',score:'PUNTI',lives:'VITE',gems:'DIAMANTI',water:'ACQUA',time:'TEMPO',realm:'REGNO',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1409

```text
  j1:'VIAGGIO 1 • LA FUGA',j2:'VIAGGIO 2 • IL SALVATAGGIO',continue:'CONTINUA',menu:'MENU',next:'SUCCESSIVO',saved:'Progresso salvato automaticamente.',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1410

```text
  completed:'COMPLETATO',reward:'RICOMPENSA',already:'CHECKPOINT GIÀ COMPLETATO • PROGRESSO MANTENUTO',double:'▶ ANNUNCIO • RADDOPPIA A 💎 +',received:'✓ x2 RICEVUTO',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1411

```text
  ad:'ANNUNCIO',life:'VITA',livesWord:'VITE',runEnded:'La corsa è terminata',paidLimit:'LIMITE CONTINUA PAGATE RAGGIUNTO',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1412

```text
  portal:'PORTALE',portalCrossed:'PORTALE ATTRAVERSATO',pause:'Viaggio in pausa',resume:'Continua',restart:'Ricomincia',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1413

```text
  shelter:'Rifugio • Idratazione',enterShelter:'Entrare nel rifugio?',enter:'ENTRA NEL RIFUGIO',keepRunning:'CONTINUA A CORRERE',exitNoBuy:'ESCI SENZA COMPRARE / CONTINUA →',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1414

```text
  hydrationFull:'Idratazione completa.',hydrationCurrent:'Idratazione attuale:',insufficient:'DIAMANTI INSUFFICIENTI',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1415

```text
  kidnapped:'Lyra è stata rapita',reunion:'RICONGIUNGIMENTO',hunter:'LA PREDA DIVENTA CACCIATORE.',huntStarts:'LA FUGA È FINITA. INIZIA LA CACCIA.',
```

**Explicação:** Controla a presença, animação ou estado de Lyra.

### Linha 1416

```text
  rawTime:'TEMPO GREZZO',penalties:'PENALITÀ',finalTime:'TEMPO FINALE',position:'POSIZIONE',spent:'SPESI',ads:'ANNUNCI',continues:'CONTINUE',finalBalance:'SALDO FINALE',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1417

```text
  j2Unlocked:'✓ VIAGGIO 2 SBLOCCATO • IL SALVATAGGIO',family:'FAMIGLIA RIUNITA',localPlacement:'POSIZIONE LOCALE',collected:'RACCOLTI',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1418

```text
  settingsSaved:'IMPOSTAZIONI SALVATE',profileSaved:'PROFILO SALVATO'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1419

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1420

```text
 ja:{
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1421

```text
  distance:'距離',stars:'スター',score:'スコア',lives:'ライフ',gems:'ダイヤ',water:'水分',time:'時間',realm:'王国',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1422

```text
  j1:'ジャーニー1 • 逃走',j2:'ジャーニー2 • 救出',continue:'続ける',menu:'メニュー',next:'次へ',saved:'進行状況を自動保存しました。',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1423

```text
  completed:'クリア',reward:'報酬',already:'チェックポイントクリア済み • 進行状況を保持',double:'▶ 広告 • 倍増 💎 +',received:'✓ x2 受取済み',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1424

```text
  ad:'広告',life:'ライフ',livesWord:'ライフ',runEnded:'ラン終了',paidLimit:'有料コンティニュー上限に到達',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1425

```text
  portal:'ポータル',portalCrossed:'ポータル通過',pause:'一時停止',resume:'続ける',restart:'やり直す',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1426

```text
  shelter:'シェルター • 水分補給',enterShelter:'シェルターに入る？',enter:'シェルターに入る',keepRunning:'走り続ける',exitNoBuy:'購入せず退出 / 続ける →',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1427

```text
  hydrationFull:'水分100%。',hydrationCurrent:'現在の水分:',insufficient:'ダイヤが足りません',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1428

```text
  kidnapped:'Lyraがさらわれた',reunion:'再会',hunter:'追われる者が追う者へ。',huntStarts:'逃走は終わった。追跡が始まる。',
```

**Explicação:** Controla a presença, animação ou estado de Lyra.

### Linha 1429

```text
  rawTime:'基本タイム',penalties:'ペナルティ',finalTime:'最終タイム',position:'順位',spent:'使用',ads:'広告',continues:'コンティニュー',finalBalance:'最終残高',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1430

```text
  j2Unlocked:'✓ ジャーニー2 解放 • 救出',family:'家族再会',localPlacement:'ローカル順位',collected:'獲得',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1431

```text
  settingsSaved:'設定を保存しました',profileSaved:'プロフィールを保存しました'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1432

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1433

```text
 ko:{
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1434

```text
  distance:'거리',stars:'별',score:'점수',lives:'목숨',gems:'다이아몬드',water:'수분',time:'시간',realm:'왕국',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1435

```text
  j1:'여정 1 • 탈출',j2:'여정 2 • 구출',continue:'계속',menu:'메뉴',next:'다음',saved:'진행 상황이 자동 저장되었습니다.',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1436

```text
  completed:'완료',reward:'보상',already:'체크포인트 완료됨 • 진행 유지',double:'▶ 광고 • 두 배 💎 +',received:'✓ x2 받음',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1437

```text
  ad:'광고',life:'목숨',livesWord:'목숨',runEnded:'달리기가 끝났습니다',paidLimit:'유료 이어하기 한도 도달',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1438

```text
  portal:'포털',portalCrossed:'포털 통과',pause:'여정 일시정지',resume:'계속',restart:'다시 시작',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1439

```text
  shelter:'쉼터 • 수분',enterShelter:'쉼터에 들어갈까요?',enter:'쉼터 입장',keepRunning:'계속 달리기',exitNoBuy:'구매 없이 나가기 / 계속 →',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1440

```text
  hydrationFull:'수분 충전 완료.',hydrationCurrent:'현재 수분:',insufficient:'다이아몬드 부족',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1441

```text
  kidnapped:'Lyra가 납치되었습니다',reunion:'재회',hunter:'쫓기던 자가 사냥꾼이 되었다.',huntStarts:'도주는 끝났다. 추격이 시작된다.',
```

**Explicação:** Controla a presença, animação ou estado de Lyra.

### Linha 1442

```text
  rawTime:'기본 시간',penalties:'패널티',finalTime:'최종 시간',position:'순위',spent:'사용',ads:'광고',continues:'이어하기',finalBalance:'최종 잔액',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1443

```text
  j2Unlocked:'✓ 여정 2 잠금 해제 • 구출',family:'가족 재회',localPlacement:'로컬 순위',collected:'획득',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1444

```text
  settingsSaved:'설정 저장됨',profileSaved:'프로필 저장됨'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1445

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1446

```text
 'zh-CN':{
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1447

```text
  distance:'距离',stars:'星星',score:'分数',lives:'生命',gems:'钻石',water:'水分',time:'时间',realm:'王国',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1448

```text
  j1:'旅程1 • 逃亡',j2:'旅程2 • 营救',continue:'继续',menu:'菜单',next:'下一步',saved:'进度已自动保存。',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1449

```text
  completed:'完成',reward:'奖励',already:'检查点已完成 • 进度保留',double:'▶ 广告 • 双倍至 💎 +',received:'✓ x2 已领取',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1450

```text
  ad:'广告',life:'生命',livesWord:'生命',runEnded:'本局已结束',paidLimit:'本局付费续命次数已达上限',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1451

```text
  portal:'传送门',portalCrossed:'已穿过传送门',pause:'旅程已暂停',resume:'继续',restart:'重新开始',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1452

```text
  shelter:'避难所 • 补水',enterShelter:'进入避难所？',enter:'进入避难所',keepRunning:'继续奔跑',exitNoBuy:'不购买 / 继续 →',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1453

```text
  hydrationFull:'水分已满。',hydrationCurrent:'当前水分:',insufficient:'钻石不足',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1454

```text
  kidnapped:'Lyra被绑架了',reunion:'重逢',hunter:'猎物变成了猎人。',huntStarts:'逃亡结束。追猎开始。',
```

**Explicação:** Controla a presença, animação ou estado de Lyra.

### Linha 1455

```text
  rawTime:'原始时间',penalties:'惩罚',finalTime:'最终时间',position:'排名',spent:'已花费',ads:'广告',continues:'续命',finalBalance:'最终余额',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1456

```text
  j2Unlocked:'✓ 旅程2 已解锁 • 营救',family:'家人团聚',localPlacement:'本地排名',collected:'已收集',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1457

```text
  settingsSaved:'设置已保存',profileSaved:'个人资料已保存'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1458

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1459

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1460

```text
function gt(k){return (GAME_TEXT[gameLanguage]&&GAME_TEXT[gameLanguage][k])||GAME_TEXT['pt-BR'][k]||k}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1461

```text
function applyGameplayLanguage(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1462

```text
 const ids={hudDistanceLabel:'distance',hudStarsLabel:'stars',hudScoreLabel:'score',hudLivesLabel:'lives',hudGemsLabel:'gems',hudWaterLabel:'water',hudTimeLabel:'time',hudRealmLabel:'realm'};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1463

```text
 for(const [id,k] of Object.entries(ids)){const el=$(id);if(el)el.textContent=gt(k)}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1464

```text
 if(UI.pauseTitle&&!started)UI.pauseTitle.textContent=gt('pause');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1465

```text
 const ra=$('resume'),rr=$('restart');if(ra)ra.textContent=gt('resume');if(rr)rr.textContent=gt('restart');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1466

```text
 const sc=$('shelterChoicePanel');if(sc){const h=sc.querySelector('h2');if(h)h.textContent='🏕 '+gt('enterShelter')}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1467

```text
 if($('shelterAccept'))$('shelterAccept').textContent=gt('enter');if($('shelterDecline'))$('shelterDecline').textContent=gt('keepRunning');if($('shelterExit'))$('shelterExit').textContent=gt('exitNoBuy');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1468

```text
 const sh=$('shelterPanel');if(sh){const h=sh.querySelector('h2');if(h)h.textContent='🏕 '+gt('shelter')}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1469

```text
 if($('finalFamilyTitle'))$('finalFamilyTitle').textContent=gt('family');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1470

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1471

```text
function detectGameLanguage(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1472

```text
 const saved=SAVE?.settings?.language;if(SUPPORTED_LANGS.includes(saved))return saved;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1473

```text
 const list=[...(navigator.languages||[]),navigator.language||''];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1474

```text
 for(const raw of list){const x=String(raw||'').toLowerCase();if(x.startsWith('pt'))return 'pt-BR';if(x.startsWith('zh'))return 'zh-CN';const short=x.split('-')[0];if(SUPPORTED_LANGS.includes(short))return short}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1475

```text
 return 'en';
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1476

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1477

```text
let gameLanguage='pt-BR';
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1478

```text
function tr(k){return (I18N[gameLanguage]&&I18N[gameLanguage][k])||I18N['pt-BR'][k]||k}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1479

```text
function populateCountries(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1480

```text
 const el=$('profileCountry');if(!el)return;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1481

```text
 const current=SAVE.countryCode||el.value||'';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1482

```text
 let dn=null;try{dn=new Intl.DisplayNames([gameLanguage],{type:'region'})}catch(_){}
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1483

```text
 const rows=COUNTRY_CODES.map(code=>({code,name:dn?dn.of(code):code})).filter(x=>x.name).sort((a,b)=>a.name.localeCompare(b.name,gameLanguage));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1484

```text
 el.innerHTML='<option value="">'+tr('selectCountry')+'</option>'+rows.map(x=>'<option value="'+x.code+'">'+String(x.name).replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</option>').join('');
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1485

```text
 if(current&&COUNTRY_CODES.includes(current))el.value=current;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1486

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1487

```text
function applyLanguage(lang,save=true){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1488

```text
 gameLanguage=SUPPORTED_LANGS.includes(lang)?lang:'en';document.documentElement.lang=gameLanguage;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1489

```text
 const set=(id,v)=>{const el=$(id);if(el)el.textContent=v};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1490

```text
 set('start',tr('play'));if(!SAVE.journey2Unlocked)set('journey2',tr('j2'));set('characterShop',tr('characters'));set('diamondShop',tr('diamonds'));set('profile',tr('profile'));set('mobileMore',tr('more'));set('ranking',tr('ranking'));set('realms',tr('progress'));set('story',tr('story'));set('upgrades',tr('upgrades'));set('settings',tr('settings'));if(!SAVE.journey2Completed)set('endless',tr('endless'));set('lastRunAnalysisMain',tr('cost'));set('lastRunAnalysis',tr('cost'));
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 1491

```text
 const sp=$('settingsPanel');if(sp){const h=sp.querySelector('h2');if(h)h.textContent=tr('settingsTitle')}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1492

```text
 set('settingsLanguageTitle',tr('language'));set('settingsLanguageText',tr('languageText'));set('settingsSave',tr('saveSettings')||tr('save'));
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1493

```text
 const pp=$('profilePanel');if(pp){const h=pp.querySelector('h2');if(h)h.textContent=tr('profileTitle')}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1494

```text
 set('profileLanguageLabel',tr('language'));const pcl=$('profileCountryLabel');if(pcl)pcl.textContent=tr('country')+' / REGIÃO';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1495

```text
 populateCountries();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1496

```text
 const labels=$('profilePanel')?.querySelectorAll('.field>label');if(labels){for(const l of labels){const inp=l.parentElement?.querySelector('input,select');if(!inp)continue;if(inp.id==='profileName')l.innerHTML=tr('name')+' <span class="requiredMark">*</span>';if(inp.id==='profileNickname')l.textContent=tr('nickname');if(inp.id==='profileEmail')l.textContent=tr('email');if(inp.id==='accountPassword')l.textContent=tr('password')}}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1497

```text
 set('profileSave',tr('save'));set('profileClose',tr('back'));
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1498

```text
 const ls=$('settingsLanguage');if(ls)ls.value=gameLanguage;const pls=$('profileLanguage');if(pls)pls.value=gameLanguage;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1499

```text
 applyGameplayLanguage();if(save){SAVE.settings={...SAVE.settings,language:gameLanguage};saveState()}
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 1500

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

