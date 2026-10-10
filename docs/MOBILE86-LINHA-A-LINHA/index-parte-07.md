# index.html — Parte 7

Linhas **1501 a 1750** da MOBILE86.

### Linha 1501

```text
function settingsFromSave(){autoRealm=true;shadowsOn=!MOBILE_RUNNER;flipHero=false;hapticsOn=SAVE.settings?.haptics!==false;musicVolume=Math.max(0,Math.min(1,Number(SAVE.settings?.musicVolume??.70)));sfxVolume=Math.max(0,Math.min(1,Number(SAVE.settings?.sfxVolume??.85)));ambientVolume=Math.max(0,Math.min(1,Number(SAVE.settings?.ambientVolume??.65)));soundOn=(musicVolume>0||sfxVolume>0||ambientVolume>0);gameLanguage=detectGameLanguage();SAVE.settings={...SAVE.settings,autoRealm:true,sound:soundOn,shadows:shadowsOn,flipHero:false,haptics:hapticsOn,musicVolume,sfxVolume,ambientVolume,language:gameLanguage}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1502

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 1503

```text
function b64buf(s){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1504

```text
 const raw=String(s??'').trim();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1505

```text
 const data=raw.match(/^data:[^,]*;base64,(.+)$/i)?.[1]||raw;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1506

```text
 if(!data||data.length<64||!/^[A-Za-z0-9+/=\r\n]+$/.test(data))throw new Error('Dados Base64 3D inválidos');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1507

```text
 const clean=data.replace(/\s+/g,'');const bin=atob(clean),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return u.buffer
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1508

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1509

```text
const GLTF_CACHE={};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1510

```text
function loadGLTFAsset(src){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1511

```text
 const url=String(src??'').trim();if(!url)return Promise.reject(new Error('Asset 3D sem caminho'));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1512

```text
 if(GLTF_CACHE[url])return GLTF_CACHE[url];
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1513

```text
 GLTF_CACHE[url]=new Promise((res,rej)=>{const fail=e=>rej(new Error('Falha ao carregar asset 3D "'+url+'": '+(e&&e.message?e.message:String(e||'erro desconhecido'))));if(/\.fbx(?:$|[?#])/i.test(url)){if(!fbxLoader)return rej(new Error('FBXLoader indisponível para "'+url+'"'));fbxLoader.load(url,obj=>res({scene:obj,animations:obj.animations||[]}),undefined,fail)}else loader.load(url,res,undefined,fail)});
```

**Explicação:** Ajusta elementos centrais da renderização 3D, como cena, câmera ou renderizador.

### Linha 1514

```text
 return GLTF_CACHE[url]
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1515

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1516

```text
let sfxMaster=null,ambientMaster=null,sfxNoiseBuffer=null,tobogganWindSource=null,tobogganWindGain=null,tobogganWaterSource=null,tobogganWaterGain=null,realmMusicNodes=[],realmMusicId='';
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1517

```text
function ensureAudio(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1518

```text
 if(!soundOn)return null;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1519

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1520

```text
   audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1521

```text
   if(audioCtx.state==='suspended')audioCtx.resume().catch(()=>{});
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1522

```text
   if(!sfxMaster){sfxMaster=audioCtx.createGain();sfxMaster.connect(audioCtx.destination)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1523

```text
   if(!ambientMaster){ambientMaster=audioCtx.createGain();ambientMaster.connect(audioCtx.destination)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1524

```text
   sfxMaster.gain.value=.72*sfxVolume;ambientMaster.gain.value=.92*ambientVolume;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1525

```text
   return audioCtx;
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1526

```text
 }catch(e){return null}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 1527

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1528

```text
function applyAudioSettings(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1529

```text
 soundOn=(musicVolume>0||sfxVolume>0||ambientVolume>0);
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1530

```text
 if(sfxMaster)sfxMaster.gain.value=.72*sfxVolume;if(ambientMaster)ambientMaster.gain.value=.92*ambientVolume;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1531

```text
 if(menuAdventureTheme&&!menuAdventureTheme.paused)menuAdventureTheme.volume=Math.min(.42,.145*musicVolume);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1532

```text
 if(maxHealmsTheme&&!maxHealmsTheme.paused)maxHealmsTheme.volume=Math.min(.55,.245*musicVolume);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1533

```text
 if(!soundOn){stopAmbientBed();stopWeatherAudio();stopTobogganWind();stopTobogganWater();stopRealmMusic()}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1534

```text
 else if(started&&!paused){const cfg=REALMS[realmIndex];if(cfg)startRealmMusic(cfg.id)}
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 1535

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1536

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 1537

```text
async function preloadFootsteps(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1538

```text
 if(footstepBuffers.length)return footstepBuffers;if(footstepLoadPromise)return footstepLoadPromise;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1539

```text
 const ctx=ensureAudio();if(!ctx)return [];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1540

```text
 footstepLoadPromise=Promise.all(FOOTSTEP_SRCS.map(async src=>{try{const r=await fetch(src,{cache:'force-cache'});if(!r.ok)throw new Error('HTTP '+r.status);const ab=await r.arrayBuffer();return await ctx.decodeAudioData(ab.slice(0))}catch(e){console.warn('PASSO VAREK NÃO CARREGOU',src,e);return null}})).then(a=>{footstepBuffers=a.filter(Boolean);return footstepBuffers}).catch(()=>[]);
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1541

```text
 return footstepLoadPromise
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1542

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1543

```text
function playVarekFootstep(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1544

```text
 if(!soundOn||!sfxMaster||!audioCtx||!footstepBuffers.length)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1545

```text
 const ctx=audioCtx,src=ctx.createBufferSource(),g=ctx.createGain(),buf=footstepBuffers[footstepIndex++%footstepBuffers.length];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1546

```text
 src.buffer=buf;const speedRatio=Math.max(0,Math.min(1,(speed-RUN_SPEED_BASE)/Math.max(.001,RUN_SPEED_MAX-RUN_SPEED_BASE)));
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1547

```text
 src.playbackRate.value=.96+speedRatio*.13+(Math.random()-.5)*.035;g.gain.value=.105+(footstepIndex%2?-.008:.006);src.connect(g);g.connect(sfxMaster);src.start();
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1548

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1549

```text
function updateVarekFootsteps(dt){footstepTimer=0;return} // MOBILE37: sem passos contínuos durante a corrida
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1550

```text
function resetFootsteps(){footstepTimer=0}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1551

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 1552

```text
function getNoiseBuffer(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1553

```text
 const ctx=ensureAudio();if(!ctx)return null;if(sfxNoiseBuffer)return sfxNoiseBuffer;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1554

```text
 const len=Math.max(1,Math.floor(ctx.sampleRate*1.5));sfxNoiseBuffer=ctx.createBuffer(1,len,ctx.sampleRate);const d=sfxNoiseBuffer.getChannelData(0);let last=0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1555

```text
 for(let i=0;i<len;i++){const w=Math.random()*2-1;last=last*.82+w*.18;d[i]=last}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1556

```text
 // Match the last samples to the start of the loop: eliminates the periodic click on mobile speakers.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1557

```text
 const fade=Math.min(2048,Math.floor(len/8));for(let i=0;i<fade;i++){const u=(i+1)/fade;d[len-fade+i]=d[len-fade+i]*(1-u)+d[i]*u}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1558

```text
 return sfxNoiseBuffer
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1559

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1560

```text
function sfxTone(f0,f1,dur,vol=.05,type='sine',delay=0){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1561

```text
 const ctx=ensureAudio();if(!ctx||!sfxMaster)return;const t=ctx.currentTime+delay,o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.setValueAtTime(Math.max(20,f0),t);o.frequency.exponentialRampToValueAtTime(Math.max(20,f1),t+dur);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.0002,vol),t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(sfxMaster);o.start(t);o.stop(t+dur+.02)
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1562

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1563

```text
function sfxNoise(dur=.15,vol=.04,f0=1200,f1=320,type='lowpass',delay=0){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1564

```text
 const ctx=ensureAudio(),buf=getNoiseBuffer();if(!ctx||!buf||!sfxMaster)return;const t=ctx.currentTime+delay,s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=buf;f.type=type;f.frequency.setValueAtTime(Math.max(40,f0),t);f.frequency.exponentialRampToValueAtTime(Math.max(40,f1),t+dur);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.0002,vol),t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(f);f.connect(g);g.connect(sfxMaster);s.start(t);s.stop(t+dur+.02)
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1565

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1566

```text
function haptic(pattern){try{if(MOBILE_RUNNER&&hapticsOn&&navigator.vibrate)navigator.vibrate(pattern)}catch(e){}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1567

```text
function playTobogganWindBurst(dur=.34){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1568

```text
 const ctx=ensureAudio(),buf=getNoiseBuffer();if(!ctx||!buf||!sfxMaster)return;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1569

```text
 const s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=buf;f.type='lowpass';f.frequency.value=560;f.Q.value=.32;const t=ctx.currentTime;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.011,t+.035);g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(f);f.connect(g);g.connect(sfxMaster);s.start(t);s.stop(t+dur+.03)
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1570

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1571

```text
function playGroundSkidSlide(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1572

```text
 const ctx=ensureAudio(),buf=getNoiseBuffer();if(!ctx||!buf||!sfxMaster)return;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1573

```text
 const t=ctx.currentTime,s=ctx.createBufferSource(),bp=ctx.createBiquadFilter(),lp=ctx.createBiquadFilter(),g=ctx.createGain();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1574

```text
 s.buffer=buf;bp.type='bandpass';bp.frequency.setValueAtTime(760,t);bp.frequency.exponentialRampToValueAtTime(250,t+.30);bp.Q.value=.48;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1575

```text
 lp.type='lowpass';lp.frequency.value=980;lp.Q.value=.22;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1576

```text
 g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.019,t+.018);g.gain.setTargetAtTime(.010,t+.08,.075);g.gain.exponentialRampToValueAtTime(.0001,t+.32);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1577

```text
 s.connect(bp);bp.connect(lp);lp.connect(g);g.connect(sfxMaster);s.start(t);s.stop(t+.35);
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1578

```text
 sfxTone(185,112,.18,.015,'triangle',.025);sfxTone(118,84,.12,.009,'sine',.12)
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1579

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1580

```text
function playDiamondBell(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1581

```text
 sfxTone(392,392,.28,.024,'sine');
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1582

```text
 sfxTone(784,760,.24,.012,'sine',.018);
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1583

```text
 sfxTone(1176,1110,.18,.006,'triangle',.035)
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1584

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1585

```text
function playRainSlideBurst(dur=.42){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1586

```text
 const ctx=ensureAudio(),buf=getNoiseBuffer();if(!ctx||!buf||!sfxMaster)return;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1587

```text
 const t=ctx.currentTime,s=ctx.createBufferSource(),hp=ctx.createBiquadFilter(),bp=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=buf;hp.type='highpass';hp.frequency.value=900;bp.type='bandpass';bp.frequency.value=2350;bp.Q.value=.62;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.030,t+.018);g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(hp);hp.connect(bp);bp.connect(g);g.connect(sfxMaster);s.start(t);s.stop(t+dur+.03);for(let i=0;i<5;i++){const d=.035+i*.065+Math.random()*.025;sfxTone(1650+Math.random()*520,760+Math.random()*280,.045,.006,'sine',d)}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1588

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1589

```text
function playSFX(name){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1590

```text
 if(!soundOn)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1591

```text
 switch(name){
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1592

```text
   case 'jump': sfxTone(88,145,.13,.050,'triangle');sfxNoise(.16,.024,520,1450,'bandpass',.015);break;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1593

```text
   case 'gemCollect': playDiamondBell();break;
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1594

```text
   case 'starCollect': sfxTone(520,880,.075,.030,'triangle');sfxTone(880,1320,.095,.022,'sine',.045);sfxTone(1320,1760,.08,.010,'sine',.105);break;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1595

```text
   case 'waterCollect': sfxTone(410,760,.11,.026,'sine');sfxTone(760,1120,.09,.020,'triangle',.055);sfxNoise(.13,.010,1800,620,'bandpass',.015);break;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1596

```text
   case 'land': sfxTone(92,42,.15,.065,'sine');sfxNoise(.11,.042,520,120,'lowpass');haptic(18);break;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1597

```text
   case 'slide': playGroundSkidSlide();break;
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1598

```text
   case 'hit': sfxTone(115,42,.22,.090,'sine');sfxNoise(.14,.072,1900,280,'lowpass');sfxTone(210,95,.10,.030,'square',.012);haptic([35,25,55]);break;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1599

```text
   case 'fall': sfxNoise(.82,.060,1800,180,'bandpass');sfxTone(120,38,.72,.060,'sine',.08);sfxNoise(.18,.052,420,90,'lowpass',.58);haptic([55,35,85]);break;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1600

```text
   case 'lifeLost': sfxTone(92,34,.48,.080,'sine');sfxTone(145,48,.34,.038,'triangle',.03);break;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1601

```text
   case 'tobogganHit': sfxNoise(.30,.070,2600,360,'bandpass');sfxTone(105,44,.22,.075,'sine');haptic([25,18,45]);break;
```

**Explicação:** Controla alguma parte do sistema de descida/tobogã, incluindo estado, visual, física ou interface.

### Linha 1602

```text
   case 'shield': sfxTone(330,760,.18,.040,'triangle');sfxTone(660,980,.12,.025,'sine',.04);haptic(15);break;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1603

```text
   case 'firework': sfxTone(1180,1540,.09,.006,'sine');break;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1604

```text
   case 'finalChime': sfxTone(392,392,.38,.014,'sine');sfxTone(523,523,.42,.012,'sine',.14);sfxTone(659,659,.50,.010,'sine',.29);sfxNoise(.34,.006,1800,900,'bandpass',.20);break;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1605

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1606

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1607

```text
function startTobogganWind(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1608

```text
 if(tobogganWindSource||ambientVolume<=0)return;const ctx=ensureAudio(),buf=getNoiseBuffer();if(!ctx||!buf||!ambientMaster)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1609

```text
 const lava=tobogganForcedMode==='lava'||(tobogganForcedMode!=='flooded'&&REALMS[realmIndex]?.id==='ember');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1610

```text
 const s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=buf;s.loop=true;f.type='lowpass';f.frequency.value=lava?570:390;f.Q.value=.30;g.gain.value=.0001;s.connect(f);f.connect(g);g.connect(ambientMaster);const t=ctx.currentTime;g.gain.setTargetAtTime(lava?.010:.0055,t,.55);s.start();tobogganWindSource=s;tobogganWindGain=g
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1611

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1612

```text
function startTobogganWater(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1613

```text
 if(tobogganWaterSource||ambientVolume<=0||tobogganGroup?.userData?.mode==='lava')return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1614

```text
 const ctx=ensureAudio(),buf=getNoiseBuffer();if(!ctx||!buf||!ambientMaster)return;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1615

```text
 const s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=buf;s.loop=true;f.type='lowpass';f.frequency.value=245;f.Q.value=.28;g.gain.value=.0001;s.connect(f);f.connect(g);g.connect(ambientMaster);s.start();g.gain.setTargetAtTime(.007,ctx.currentTime,.60);tobogganWaterSource=s;tobogganWaterGain=g
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1616

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1617

```text
function stopTobogganWater(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1618

```text
 const s=tobogganWaterSource,g=tobogganWaterGain,ctx=audioCtx;tobogganWaterSource=null;tobogganWaterGain=null;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1619

```text
 if(!s)return;try{if(ctx&&g){g.gain.cancelScheduledValues(ctx.currentTime);g.gain.setTargetAtTime(.0001,ctx.currentTime,.09);setTimeout(()=>{try{s.stop()}catch(_){}},330)}else s.stop()}catch(_){}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1620

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1621

```text
function stopTobogganWind(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1622

```text
 if(!tobogganWindSource)return;try{const ctx=ensureAudio(),s=tobogganWindSource,g=tobogganWindGain;tobogganWindSource=null;tobogganWindGain=null;if(ctx&&g){g.gain.cancelScheduledValues(ctx.currentTime);g.gain.setTargetAtTime(.0001,ctx.currentTime,.10);setTimeout(()=>{try{s.stop()}catch(e){}},350)}else s.stop()}catch(e){tobogganWindSource=null;tobogganWindGain=null}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1623

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1624

```text
function beep(freq=220,dur=.055,vol=.025,type='sine'){if(!soundOn)return;try{const ctx=ensureAudio();if(!ctx||!sfxMaster)return;const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=freq;g.gain.value=vol;o.connect(g);g.connect(sfxMaster);o.start();g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+dur);o.stop(ctx.currentTime+dur)}catch(e){}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1625

```text
// ===== PLAYER 0.15 • VAREK VULCÂNICO REWORK 2 =====
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1626

```text
// Base PLAYER 0.14 preservada. Mudança visual somente no outfit Vulcânico.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1627

```text
// REWORK 2: base natural preservada + armadura maior de obsidiana, magma concentrado e silhueta premium.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1628

```text
// ===== PLAYER 0.18 • ELENCO VAREKS + PREVIEWS FRENTE/VERSO =====
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1629

```text
// Página inicial recebe uma composição original mais alegre/de aventura.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1630

```text
// O áudio dos vídeos NÃO foi alterado. O tema narrativo anterior continua reservado para momentos da história/final.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1631

```text
const MAX_HEALMS_THEME_SRC='max-healms-theme.m4a';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1632

```text
const MAX_HEALMS_MENU_ADVENTURE_SRC=MAX_HEALMS_THEME_SRC; // 0.39: menu = mesma música oficial do vídeo
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1633

```text
let maxHealmsTheme=null,menuAdventureTheme=null,themeFadeTimer=null,menuThemeFadeTimer=null,themeMomentTimer=null,themeGestureReady=false;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1634

```text
function ensureMaxHealmsTheme(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1635

```text
 if(!soundOn)return null;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1636

```text
 if(!maxHealmsTheme){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1637

```text
  const a=new Audio(MAX_HEALMS_THEME_SRC);a.preload='metadata';a.loop=true;a.volume=0;a.playsInline=true;maxHealmsTheme=a;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1638

```text
  a.addEventListener('error',()=>console.warn('TEMA NARRATIVO MAX HEALMS NÃO CARREGOU'));
```

**Explicação:** Registra um evento de interação ou ciclo de vida e define o que deve acontecer quando ele ocorrer.

### Linha 1639

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1640

```text
 return maxHealmsTheme;
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1641

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1642

```text
function ensureMenuAdventureTheme(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1643

```text
 if(!soundOn)return null;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1644

```text
 if(!menuAdventureTheme){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1645

```text
  const a=new Audio(MAX_HEALMS_MENU_ADVENTURE_SRC);a.preload='auto';a.loop=true;a.volume=0;a.playsInline=true;menuAdventureTheme=a;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1646

```text
  a.addEventListener('error',()=>console.warn('TEMA DE AVENTURA DO MENU NÃO CARREGOU'));
```

**Explicação:** Registra um evento de interação ou ciclo de vida e define o que deve acontecer quando ele ocorrer.

### Linha 1647

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1648

```text
 return menuAdventureTheme;
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1649

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1650

```text
function clearThemeTimers(){if(themeFadeTimer){clearInterval(themeFadeTimer);themeFadeTimer=null}if(menuThemeFadeTimer){clearInterval(menuThemeFadeTimer);menuThemeFadeTimer=null}if(themeMomentTimer){clearTimeout(themeMomentTimer);themeMomentTimer=null}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1651

```text
function fadeThemeTo(target=.10,duration=1800,opts={}){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1652

```text
 const a=ensureMaxHealmsTheme();if(!a)return Promise.resolve(false);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1653

```text
 if(themeFadeTimer){clearInterval(themeFadeTimer);themeFadeTimer=null}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1654

```text
 if(themeMomentTimer&&opts.keepMoment!==true){clearTimeout(themeMomentTimer);themeMomentTimer=null}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1655

```text
 if(Number.isFinite(opts.startAt)){try{a.currentTime=Math.max(0,Math.min((a.duration||55)-.5,opts.startAt))}catch(_){}}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1656

```text
 if(typeof opts.loop==='boolean')a.loop=opts.loop;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1657

```text
 const p=a.play();if(p&&p.catch)p.catch(()=>{});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1658

```text
 const start=a.volume,goal=Math.max(0,Math.min(.55,target*musicVolume)),steps=Math.max(1,Math.round(duration/50));let i=0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1659

```text
 return new Promise(resolve=>{themeFadeTimer=setInterval(()=>{i++;const t=Math.min(1,i/steps),e=1-Math.pow(1-t,2);a.volume=start+(goal-start)*e;if(t>=1){clearInterval(themeFadeTimer);themeFadeTimer=null;if(goal<=.0005&&opts.pauseAtEnd!==false){a.pause()}resolve(true)}},50)});
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1660

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1661

```text
function fadeMenuAdventureTo(target=.14,duration=1200,opts={}){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1662

```text
 const a=ensureMenuAdventureTheme();if(!a)return Promise.resolve(false);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1663

```text
 if(menuThemeFadeTimer){clearInterval(menuThemeFadeTimer);menuThemeFadeTimer=null}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1664

```text
 a.loop=true;const p=a.play();if(p&&p.catch)p.catch(()=>{});
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1665

```text
 const start=a.volume,goal=Math.max(0,Math.min(.42,target*musicVolume)),steps=Math.max(1,Math.round(duration/50));let i=0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1666

```text
 return new Promise(resolve=>{menuThemeFadeTimer=setInterval(()=>{i++;const t=Math.min(1,i/steps),e=1-Math.pow(1-t,2);a.volume=start+(goal-start)*e;if(t>=1){clearInterval(menuThemeFadeTimer);menuThemeFadeTimer=null;if(goal<=.0005&&opts.pauseAtEnd!==false){a.pause()}resolve(true)}},50)});
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1667

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1668

```text
function playMenuTheme(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1669

```text
 if(!soundOn||musicVolume<=0||started||UI.storyPanel?.classList.contains('show'))return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1670

```text
 // 0.39: Menu usa a mesma música oficial do trailer/vídeo.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1671

```text
 if(maxHealmsTheme&&!maxHealmsTheme.paused)fadeThemeTo(0,500,{pauseAtEnd:true,keepMoment:true});
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1672

```text
 fadeMenuAdventureTo(.145,1500,{pauseAtEnd:false});
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1673

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1674

```text
function stopTheme(duration=700){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1675

```text
 if(menuAdventureTheme)fadeMenuAdventureTo(0,duration,{pauseAtEnd:true});
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1676

```text
 if(maxHealmsTheme&&!maxHealmsTheme.paused)fadeThemeTo(0,duration,{pauseAtEnd:true,keepMoment:true});
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1677

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1678

```text
function playThemeMoment(startAt=14,duration=4800,vol=.105){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1679

```text
 if(!soundOn||musicVolume<=0)return;if(menuAdventureTheme&&!menuAdventureTheme.paused)fadeMenuAdventureTo(0,450,{pauseAtEnd:true});clearThemeTimers();const a=ensureMaxHealmsTheme();if(!a)return;a.loop=false;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1680

```text
 fadeThemeTo(vol,900,{startAt,loop:false,keepMoment:true});themeMomentTimer=setTimeout(()=>{themeMomentTimer=null;fadeThemeTo(0,1400,{pauseAtEnd:true,keepMoment:true})},duration);
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1681

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1682

```text
function playFinalTheme(){stopRealmMusic();if(!soundOn||musicVolume<=0)return;if(menuAdventureTheme&&!menuAdventureTheme.paused)fadeMenuAdventureTo(0,450,{pauseAtEnd:true});clearThemeTimers();const a=ensureMaxHealmsTheme();if(!a)return;a.loop=false;fadeThemeTo(.245,2300,{startAt:0,loop:false,keepMoment:true})}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1683

```text
function unlockThemeFromGesture(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1684

```text
 if(themeGestureReady)return;themeGestureReady=true;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1685

```text
 const menu=ensureMenuAdventureTheme(),story=ensureMaxHealmsTheme();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1686

```text
 try{ensureAudio()}catch(_){}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1687

```text
 if(story){story.volume=0;const sp=story.play();if(sp&&sp.then)sp.then(()=>{story.pause();story.currentTime=0}).catch(()=>{})}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1688

```text
 if(menu){menu.volume=0;const mp=menu.play();if(mp&&mp.then)mp.then(()=>{if(!started&&!UI.storyPanel?.classList.contains('show'))playMenuTheme();else menu.pause()}).catch(()=>{})}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1689

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1690

```text
window.addEventListener('pointerdown',unlockThemeFromGesture,{once:true,capture:true});
```

**Explicação:** Registra um evento de interação ou ciclo de vida e define o que deve acontecer quando ele ocorrer.

### Linha 1691

```text
window.addEventListener('keydown',unlockThemeFromGesture,{once:true,capture:true});
```

**Explicação:** Registra um evento de interação ou ciclo de vida e define o que deve acontecer quando ele ocorrer.

### Linha 1692

```text
function ambientTone(f0,f1,dur,vol=.02,type='sine',delay=0){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1693

```text
 const ctx=ensureAudio();if(!ctx||!ambientMaster||ambientVolume<=0)return;const t=ctx.currentTime+delay,o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.setValueAtTime(Math.max(20,f0),t);o.frequency.exponentialRampToValueAtTime(Math.max(20,f1),t+dur);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.0002,vol),t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(ambientMaster);o.start(t);o.stop(t+dur+.02)
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1694

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1695

```text
function ambientNoise(dur=.15,vol=.02,f0=1200,f1=320,type='lowpass',delay=0){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1696

```text
 const ctx=ensureAudio(),buf=getNoiseBuffer();if(!ctx||!buf||!ambientMaster||ambientVolume<=0)return;const t=ctx.currentTime+delay,s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=buf;f.type=type;f.frequency.setValueAtTime(Math.max(40,f0),t);f.frequency.exponentialRampToValueAtTime(Math.max(40,f1),t+dur);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.0002,vol),t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(f);f.connect(g);g.connect(ambientMaster);s.start(t);s.stop(t+dur+.02)
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1697

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1698

```text
const REALM_MUSIC_PROFILE={vpath:[196,293.7,392],vruins:[174.6,261.6,349.2],ember:[146.8,220,293.7],ruins:[164.8,246.9,329.6],forest:[220,329.6,440],celestial:[261.6,392,523.3]};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1699

```text
function stopRealmMusic(){for(const n of realmMusicNodes){try{n.gain?.gain?.setTargetAtTime?.(.0001,audioCtx?.currentTime||0,.12);setTimeout(()=>{try{n.osc?.stop()}catch(_){}},380)}catch(_){}}realmMusicNodes=[];realmMusicId=''}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1700

```text
function startRealmMusic(id){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1701

```text
 if(!soundOn||musicVolume<=0||!started||paused||gameOver)return;const ctx=ensureAudio();if(!ctx)return;if(realmMusicId===id&&realmMusicNodes.length)return;stopRealmMusic();const notes=REALM_MUSIC_PROFILE[id]||REALM_MUSIC_PROFILE.forest;realmMusicId=id;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1702

```text
 notes.slice(0,2).forEach((freq,i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type=i?'sine':'triangle';o.frequency.value=freq*(i?1:.5);g.gain.value=.0001;o.connect(g);g.connect(ctx.destination);o.start();g.gain.setTargetAtTime((i?.006:.009)*musicVolume,ctx.currentTime,.9);realmMusicNodes.push({osc:o,gain:g})});
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1703

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1704

```text
// ===== PLAYER 0.11 • AMBIENTE VIVO POR REINO =====
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1705

```text
// Áudio procedural: mantém o pacote leve e evita carregar vários arquivos externos.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1706

```text
let ambientBedSource=null,ambientBedGain=null,ambientBedFilter=null,ambientRealmId='',ambientAnimalTimer=4;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1707

```text
const AMBIENT_PROFILES={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1708

```text
 vpath:{bed:{type:'bandpass',freq:310,q:.38,vol:.0058},animals:['eagle','bat','beast']},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1709

```text
 vruins:{bed:{type:'lowpass',freq:360,q:.28,vol:.0056},animals:['crow','bat','owl']},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1710

```text
 ember:{bed:{type:'lowpass',freq:245,q:.30,vol:.0062},animals:['crow','wolf','beast']},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1711

```text
 ruins:{bed:{type:'bandpass',freq:520,q:.42,vol:.0050},animals:['owl','crow','bat']},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1712

```text
 forest:{bed:{type:'bandpass',freq:1050,q:.34,vol:.0048},animals:['birds','insects','owl']},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1713

```text
 celestial:{bed:{type:'highpass',freq:1450,q:.28,vol:.0038},animals:['eagle','birds','wings']}
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1714

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1715

```text
function stopAmbientBed(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1716

```text
 const src=ambientBedSource,g=ambientBedGain,ctx=audioCtx;ambientBedSource=null;ambientBedGain=null;ambientBedFilter=null;ambientRealmId='';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1717

```text
 if(!src)return;try{if(ctx&&g){g.gain.cancelScheduledValues(ctx.currentTime);g.gain.setTargetAtTime(.0001,ctx.currentTime,.12);setTimeout(()=>{try{src.stop()}catch(_){}},420)}else src.stop()}catch(_){}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1718

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1719

```text
function startAmbientBed(realmId){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1720

```text
 if(!soundOn||ambientVolume<=0)return;const p=AMBIENT_PROFILES[realmId]||AMBIENT_PROFILES.forest,ctx=ensureAudio(),buf=getNoiseBuffer();if(!ctx||!buf||!ambientMaster)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1721

```text
 stopAmbientBed();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1722

```text
 const src=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain();src.buffer=buf;src.loop=true;f.type=p.bed.type;f.frequency.value=p.bed.freq;f.Q.value=p.bed.q;g.gain.value=.0001;src.connect(f);f.connect(g);g.connect(ambientMaster);src.start();g.gain.setTargetAtTime(p.bed.vol,ctx.currentTime,.65);ambientBedSource=src;ambientBedFilter=f;ambientBedGain=g;ambientRealmId=realmId;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1723

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1724

```text
function playAmbientAnimal(kind){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1725

```text
 if(!soundOn)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1726

```text
 switch(kind){
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1727

```text
  case 'birds':{
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1728

```text
   const n=3+Math.floor(Math.random()*3);for(let i=0;i<n;i++){const d=i*(.085+Math.random()*.045),f=1750+Math.random()*950;ambientTone(f,f*(1.24+Math.random()*.22),.07+.025*Math.random(),.0042,'sine',d);if(i%2===0)ambientTone(f*1.18,f*.92,.055,.0028,'triangle',d+.045)}break;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1729

```text
  }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1730

```text
  case 'insects':{
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1731

```text
   for(let i=0;i<7;i++){const d=i*.052+Math.random()*.018;ambientTone(3000+Math.random()*900,3500+Math.random()*1200,.018+.012*Math.random(),.0022,'square',d)}break;
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1732

```text
  }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1733

```text
  case 'owl':
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1734

```text
   ambientTone(430,345,.34,.0060,'sine');ambientTone(385,310,.38,.0052,'sine',.28);ambientTone(520,410,.17,.0025,'triangle',.06);break;
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1735

```text
  case 'crow':
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1736

```text
   ambientTone(610,300,.19,.0065,'sawtooth');ambientNoise(.16,.0034,1350,460,'bandpass',.015);ambientTone(525,265,.22,.0058,'sawtooth',.25);break;
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1737

```text
  case 'bat':
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1738

```text
   ambientNoise(.20,.0036,4200,1700,'highpass');for(let i=0;i<3;i++)ambientTone(3900+i*420,5600-i*260,.035,.0023,'sine',.035+i*.055);break;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1739

```text
  case 'wolf':
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1740

```text
   ambientTone(205,365,.72,.0055,'sine');ambientTone(365,255,.55,.0045,'triangle',.52);break;
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1741

```text
  case 'eagle':
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1742

```text
   ambientTone(1550,820,.28,.0052,'triangle');ambientTone(980,1780,.18,.0034,'sine',.23);break;
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1743

```text
  case 'beast':
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1744

```text
   ambientTone(86,48,.82,.0058,'sawtooth');ambientNoise(.72,.0038,260,70,'lowpass',.05);break;
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1745

```text
  case 'wings':
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1746

```text
   ambientNoise(.16,.0038,1800,650,'bandpass');ambientNoise(.14,.0032,1600,520,'bandpass',.22);ambientTone(1250,1750,.10,.0020,'sine',.12);break;
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1747

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1748

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1749

```text
function updateAmbientAudio(dt){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1750

```text
 const cfg=REALMS[realmIndex],allowed=!!(soundOn&&started&&!paused&&!gameOver&&!shelterActive&&!shelterChoiceOpen&&!portalTransitioning&&!tobogganActive&&cfg);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

