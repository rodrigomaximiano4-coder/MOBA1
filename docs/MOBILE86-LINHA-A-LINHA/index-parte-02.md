# index.html — Parte 2

Linhas **251 a 500** da MOBILE86.

### Linha 251

```text
      <button class="btn secondary" id="nerisLowerQuick" type="button">NERIS • TÚNEL / PONTE COBERTA</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 252

```text
      <button class="btn secondary" id="vhalorDropQuick" type="button">VHALOR • QUEDA DA PONTE</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 253

```text
      <button class="btn secondary" id="vhalorFloodQuick" type="button">VHALOR • TÚNEL INUNDADO</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 254

```text
      <button class="btn primary" id="vhalorFloodExitQuick" type="button">VHALOR • 6s ANTES DA SAÍDA INUNDADA</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 255

```text
    </div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 256

```text
    <div class="eyebrow" style="margin-top:14px">DESCIDAS / SEQUÊNCIAS</div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 257

```text
    <div class="qaQuickGrid">
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 258

```text
      <button class="btn secondary" id="riverQuick" type="button">TERRAS DOS DRAGÕES • DESCIDA DO RIO</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 259

```text
      <button class="btn secondary" id="lavaQuick" type="button">VALE DAS CINZAS • DESCIDA VULCÂNICA</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 260

```text
      <button class="btn secondary" id="floodedQuick" type="button">VHALOR • CANOA NA PASSAGEM INUNDADA</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 261

```text
    </div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 262

```text
    <div class="eyebrow" style="margin-top:14px">HISTÓRIA / FINAIS</div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 263

```text
    <div class="qaQuickGrid">
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 264

```text
      <button class="btn secondary" data-final-test="j2start" type="button">JORNADA 2 • ABERTURA COM LYRA</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 265

```text
      <button class="btn secondary" data-final-test="j1" type="button">FINAL • JORNADA 1</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 266

```text
      <button class="btn secondary" data-final-test="j2final" type="button">FINAL • JORNADA 2</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 267

```text
    </div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 268

```text
    <div class="cardActions">
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 269

```text
      <button class="btn secondary" id="scenarioTestClose" type="button">VOLTAR AO MENU NORMAL</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 270

```text
    </div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 271

```text
  </div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 272

```text
</div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 273

```text
<script src="max-realms-security.js"></script>
```

**Explicação:** Inicia um bloco JavaScript ou carrega um arquivo JavaScript externo.

### Linha 274

```text
<script>
```

**Explicação:** Inicia um bloco JavaScript ou carrega um arquivo JavaScript externo.

### Linha 275

```text
// MAX HEALMS MOBILE ENGINE LOADER 1.2 • LOCAL FIRST
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 276

```text
// Prioridade: arquivos locais do pacote -> CDNs de contingência.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 277

```text
window.__MR_ENGINE_READY=(async()=>{
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 278

```text
  const attempts=[];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 279

```text
  if(window.__MR_ORIGIN_AUTHORIZED===false){attempts.push('BLOQUEADO • ORIGEM NÃO AUTORIZADA');window.__MR_ENGINE_LOG=attempts;return {ok:false,stage:'LICENÇA / ORIGEM NÃO AUTORIZADA',attempts};}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 280

```text
  const loadScript=(src,timeout=7000)=>new Promise((resolve,reject)=>{
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 281

```text
    const el=document.createElement('script'); let finished=false;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 282

```text
    const timer=setTimeout(()=>finish(false,new Error('timeout')),timeout);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 283

```text
    const finish=(ok,err)=>{if(finished)return;finished=true;clearTimeout(timer);if(!ok){try{el.remove()}catch(_){}}ok?resolve(src):reject(err||new Error('falha'))};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 284

```text
    el.src=src; el.async=false; el.onload=()=>finish(true); el.onerror=()=>finish(false,new Error('falha ao carregar '+src)); document.head.appendChild(el);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 285

```text
  });
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 286

```text
  async function tryList(kind,list,test){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 287

```text
    if(test())return true;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 288

```text
    for(const src of list){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 289

```text
      try{await loadScript(src); attempts.push('OK '+kind+' '+src); if(test()){window.__MR_ENGINE_SOURCE=src;return true}}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 290

```text
      catch(e){attempts.push('ERRO '+kind+' '+src)}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 291

```text
    }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 292

```text
    return false;
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 293

```text
  }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 294

```text
  const threeOk=await tryList('THREE',[
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 295

```text
    'three.min.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 296

```text
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 297

```text
    'https://unpkg.com/three@0.128.0/build/three.min.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 298

```text
    'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 299

```text
    'https://raw.githubusercontent.com/mrdoob/three.js/r128/build/three.min.js'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 300

```text
  ],()=>!!window.THREE);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 301

```text
  if(!threeOk){window.__MR_ENGINE_LOG=attempts;return {ok:false,stage:'THREE',attempts}}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 302

```text
  const gltfOk=await tryList('GLTF',[
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 303

```text
    'GLTFLoader.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 304

```text
    'https://unpkg.com/three@0.128.0/examples/js/loaders/GLTFLoader.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 305

```text
    'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 306

```text
    'https://raw.githubusercontent.com/mrdoob/three.js/r128/examples/js/loaders/GLTFLoader.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 307

```text
    'https://raw.githack.com/mrdoob/three.js/r128/examples/js/loaders/GLTFLoader.js'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 308

```text
  ],()=>!!(window.THREE&&THREE.GLTFLoader));
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 309

```text
  if(!gltfOk){window.__MR_ENGINE_LOG=attempts;return {ok:false,stage:'GLTFLoader',attempts}}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 310

```text
  // FBX é opcional nesta linha: os assets ativos desta build usam GLB/GLTF.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 311

```text
  await tryList('FBX-OPCIONAL',[
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 312

```text
    'FBXLoader.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 313

```text
    'https://unpkg.com/three@0.128.0/examples/js/loaders/FBXLoader.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 314

```text
    'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/FBXLoader.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 315

```text
    'https://raw.githubusercontent.com/mrdoob/three.js/r128/examples/js/loaders/FBXLoader.js',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 316

```text
    'https://raw.githack.com/mrdoob/three.js/r128/examples/js/loaders/FBXLoader.js'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 317

```text
  ],()=>!!(window.THREE&&THREE.FBXLoader));
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 318

```text
  await tryList('SKELETON',['SkeletonUtils.js'],()=>!!(window.THREE&&THREE.SkeletonUtils));
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 319

```text
  window.__MR_ENGINE_LOG=attempts;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 320

```text
  return {ok:true,attempts};
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 321

```text
})();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 322

```text
</script>
```

**Explicação:** Encerra o bloco JavaScript.

### Linha 323

```text
<script>
```

**Explicação:** Inicia um bloco JavaScript ou carrega um arquivo JavaScript externo.

### Linha 324

```text
const ASSETS = {"varekAdventurer":"varek-adventurer.glb","varekOriginalRun":"varek-original-run.glb","varekOriginalWalk":"varek-original-run.glb","varekOriginalSlide":"varek-original-slide.glb","varekVorenRun":"varek-voren-run.glb","varekVorenWalk":"varek-voren-run.glb","varekVorenSlide":"varek-voren-slide.glb","hunterRaven":"raven.glb","lyraRun":"lyra-run.glb","lyraSlide":"lyra-slide.glb","wife":"wife.glb"};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 325

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 326

```text
(() => {
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 327

```text
'use strict';
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 328

```text
const $=id=>document.getElementById(id), canvas=$('threeCanvas'), app=$('app');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 329

```text
const UI={menu:$('menu'),hud:$('hud'),pause:$('pause'),hint:$('hint'),toast:$('toast'),loading:$('loading'),loadingText:$('loadingText'),error:$('error'),distance:$('distance'),stars:$('stars'),score:$('score'),runTime:$('runTime'),lives:$('lives'),gems:$('gems'),water:$('water'),realmName:$('realmName'),fps:$('fps'),status3d:$('status3d'),realmPanel:$('realmPanel'),storyPanel:$('storyPanel'),upgradePanel:$('upgradePanel'),profilePanel:$('profilePanel'),shopPanel:$('shopPanel'),diamondShopPanel:$('diamondShopPanel'),rankingPanel:$('rankingPanel'),shelterPanel:$('shelterPanel'),shelterChoicePanel:$('shelterChoicePanel'),pausePanel:$('pausePanel'),realmGrid:$('realmGrid'),activeRealmStatus:$('activeRealmStatus'),pauseTitle:$('pauseTitle'),pauseText:$('pauseText'),revivePanel:$('revivePanel'),reviveTitle:$('reviveTitle'),reviveText:$('reviveText'),reviveWallet:$('reviveWallet'),reviveRank:$('reviveRank'),journeyEndPanel:$('journeyEndPanel'),journeyEndTitle:$('journeyEndTitle'),journeyEndText:$('journeyEndText'),journeyEndEyebrow:$('journeyEndEyebrow'),shelterPrompt:$('shelterPrompt'),shelterCounter:$('shelterCounter'),shelterHydrationBefore:$('shelterHydrationBefore'),shelterHydrationNow:$('shelterHydrationNow'),shelterHydrationStatus:$('shelterHydrationStatus'),fallFlash:$('fallFlash'),effortPulse:$('effortPulse'),tobogganHud:$('tobogganHud'),tobogganTime:$('tobogganTime'),tobogganFx:$('tobogganFx'),finalVictory:$('finalVictory'),finalPlacement:$('finalPlacement'),finalResultLine:$('finalResultLine'),finalEndingText:$('finalEndingText'),finalUnlockLine:$('finalUnlockLine'),arrivalBanner:$('arrivalBanner'),scenarioTestPanel:$('scenarioTestPanel'),weatherCanvas:$('weatherCanvas'),weatherFlash:$('weatherFlash')};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 330

```text
let renderer,scene,camera,clock,loader,fbxLoader,hero,mixer,heroRoot,currentAction=null,currentActionName='',sun,hemi;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 331

```text
let hunters=[];
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 332

```text
let huntersVisible=false,huntersTimer=0,hunterStage=0,huntersLoadPromise=null;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 333

```text
let lyraRoot=null,lyraModel=null,lyraMixer=null,lyraActions={},lyraAction=null,lyraActionName='';
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 334

```text
let wifeRoot=null,wifeModel=null,wifeLoadPromise=null,finalFamilyMode=false,finalFamilyPhase='',finalArrivalGroup=null,finalSceneClock=0,finalFireworkTimer=0;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 335

```text
let finalFireworks=[],finalPetals=[],finalPetalTimer=0,finalChimePlayed=false;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 336

```text
let accessoryGroup=null,capTemplates={},capLoadPromises={};
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 337

```text
let roadGroup,decorGroup,itemGroup,sceneryGroup,worldRoot,skyGroup,tobogganGroup,tobogganCart=null,tobogganLyraCart=null,shelter3D=null;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 338

```text
let W=0,H=0,started=false,paused=false,gameOver=false,currentJourney=1,journeyRunFinished=false,lastDeathReason='',lastDeathMessage='';
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 339

```text
let endlessMode=false,endlessLap=1,realmCheckpointPanelOpen=false,realmCheckpointNextIndex=null,realmCheckpointReward=0,realmCheckpointBonusClaimed=false;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 340

```text
let portalTransitioning=false,reviveStep=0,tobogganApproachStage=0,tobogganRoadBlend=0;let pendingJourneyStart=null,rewardedContinueCount=0,rewardedAdRunning=false,rewardedAdTimer=null,rewardedAdResolve=null;const MAX_REWARDED_CONTINUES_PER_RUN=2;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 341

```text
let forcedAdRunning=false,forcedAdTimer=null,forcedAdResolve=null;const FORCED_AD_MIN_INTERVAL_MS=60000;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 342

```text
const MOBILE_RUNNER=(matchMedia('(pointer:coarse)').matches||innerWidth<=740);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 343

```text
const DEVICE_MEMORY=navigator.deviceMemory||4,HARDWARE_THREADS=navigator.hardwareConcurrency||4;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 344

```text
const LOW_END_MOBILE=MOBILE_RUNNER&&(DEVICE_MEMORY<=3||HARDWARE_THREADS<=4);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 345

```text
const MOBILE_PIXEL_RATIO_MAX=LOW_END_MOBILE?.78:.94,MOBILE_PIXEL_RATIO_MIN=LOW_END_MOBILE?.66:.76;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 346

```text
const TARGET_PIXEL_RATIO=MOBILE_RUNNER?MOBILE_PIXEL_RATIO_MAX:1.4;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 347

```text
let mobilePixelRatioCurrent=TARGET_PIXEL_RATIO,mobilePerfLowSamples=0,mobilePerfHighSamples=0,mobilePerfLastAdjust=0,mobilePerfGuard=false;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 348

```text
const RUN_SPEED_BASE=MOBILE_RUNNER?36.0:20.2;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 349

```text
const RUN_SPEED_MAX=MOBILE_RUNNER?40.0:34.0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 350

```text
let distance=0,lives=3,water=100,speed=RUN_SPEED_BASE,targetLane=0,lane=0,jumpY=0,jumpV=0,slideTimer=0,slideCooldown=0,hitCooldown=0;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 351

```text
let runStars=0,runGems=0,elapsed=0,timePenalty=0,shieldCharges=0;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 352

```text
let runStartGems=0,runSpentGems=0,runRewardedAds=0,runInterstitialAds=0,runPaidContinues=0,runRealmRewards=0;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 353

```text
let shelterActive=false,shelterAvailable=false,shelterTimer=0,shelterDecisionDone=false,shelterChoiceOpen=false,shelterHydrationBefore=100;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 354

```text
let fallingDeath=false,holeRecoveryActive=false,fallTimer=0,deathRecorded=false,effortTimer=0,hydrationBand=2;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 355

```text
let curveStrength=0,curveTarget=.45,curveTimer=3.2;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 356

```text
let realmIndex=0,realmStartDistance=0,autoRealm=true,soundOn=true,flipHero=false,shadowsOn=true,hapticsOn=true,musicVolume=.70,sfxVolume=.85,ambientVolume=.65;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 357

```text
let spawnTimer=1.1,gemTimer=2.8,starTimer=.55,waterTimer=9.5,realmLoading=false;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 358

```text
const TOBOGGAN_DURATION=30,TOBOGGAN_SPEED=MOBILE_RUNNER?35.6:37.5,LAVA_TOBOGGAN_SPEED=MOBILE_RUNNER?40.0:38.4,TOBOGGAN_LOOP=MOBILE_RUNNER?260:420; // 52 * 5 m on mobile: no uncovered water gap
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 359

```text
const REALM_DISTANCE_J1=2200,REALM_DISTANCE_J2=3000,ENDLESS_REALM_DISTANCE=1800;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 360

```text
const DISTANCE_SCALE=.50,TOBOGGAN_DISTANCE_SCALE=.52;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 361

```text
const SHELTER_START_Z=-720,SHELTER_LOOP_Z=2600;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 362

```text
const REVIVE_SEQUENCE=[{lives:1,price:150},{lives:2,price:300},{lives:3,price:500},{lives:1,price:650},{lives:2,price:900},{lives:3,price:1200}];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 363

```text
let tobogganActive=false,tobogganTimer=0,tobogganElapsed=0,tobogganTravel=0,tobogganPhase=0,tobogganAutoDone=false,tobogganPrevSpeed=RUN_SPEED_BASE,tobogganHitCooldown=0,tobogganTestLaunch=false,tobogganForcedMode=null,tobogganExitAtDistance=null;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 364

```text
let postTobogganExitProgress=null,lastGuidanceRealm=-1,lastRankNoticeAt=0,realmDistanceNotices=new Set();
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 365

```text
const tobogganSegments=[],tobogganHazards=[],tobogganTunnel=[],tobogganLavaBase=[],tobogganCollectibles=[];let tobogganTrackTexture=null,tobogganTrackMode='river';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 366

```text
const obstacles=[],collectibles=[],roadSegments=[],decorObjects=[],sceneryChunks=[];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 367

```text
let fpsFrames=0,fpsAccum=0,lastTime=performance.now(),audioCtx=null;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 368

```text
// MAX HEALMS MOBILE70 • RELEASE CANDIDATE 5 • ANÁLISE AUTOMÁTICA DE MONETIZAÇÃO
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 369

```text
const weatherCanvas=$('weatherCanvas'),weatherCtx=weatherCanvas?weatherCanvas.getContext('2d'):null;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 370

```text
let weatherMode='none',weatherParticles=[],weatherLightningTimer=8,weatherLightningAlpha=0,weatherTestMode=false,weatherTestOverride=null,weatherFrameAccumulator=0;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 371

```text
let atmosphereMode='none',atmosphereParticles=[];
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 372

```text
let openingImpactStage=0,openingBridgeActive=false,openingDragonGroup=null,openingDragonWingL=null,openingDragonWingR=null,openingDragonShadow=null;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 373

```text
let openingBridgePulse=0,openingBridgeDamage=0,openingCameraShake=0,openingCreakTimer=0;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 374

```text
const bridgeDetailGroups=[];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 375

```text
const kharvorUpperBridgeGroups=[];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 376

```text
const forestClosedBridgeGroups=[];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 377

```text
let kharvorLayerY=0,kharvorFallStage=0,kharvorFallImpact=0,kharvorBreakFx=null,forestUnderpassActive=false,vhalorFloodVisualActive=false;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 378

```text
let bridgeDropSafetyCleared=false;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 379

```text
function isBridgeDropRealm(){const id=REALMS[realmIndex]?.id;return id==='vruins'||id==='forest'||id==='ruins'}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 380

```text
function isBridgeDropTransitionZone(progress){return isBridgeDropRealm()&&progress>=448&&progress<=535}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 381

```text
function clearBridgeDropApproach(){for(let i=obstacles.length-1;i>=0;i--){const o=obstacles[i];if(o.position.z>-30&&o.position.z<12){itemGroup.remove(o);disposeObject(o);obstacles.splice(i,1)}}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 382

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 383

```text
const KHARVOR_LOWER_Y=-5.2,FOREST_LOWER_Y=-4.6;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 384

```text
function setForestUnderpassVisual(active){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 385

```text
 active=!!active;if(forestUnderpassActive===active)return;forestUnderpassActive=active;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 386

```text
 const cfg=REALMS[realmIndex];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 387

```text
 if(active){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 388

```text
   if(app){app.style.backgroundImage='none';app.style.backgroundColor='#132018'}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 389

```text
   if(scene){scene.background=new THREE.Color(0x132018);if(scene.fog){scene.fog.color.set(0x23382a);scene.fog.near=15;scene.fog.far=70}}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 390

```text
   if(sceneryGroup)sceneryGroup.visible=false;if(decorGroup)decorGroup.visible=false;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 391

```text
 }else{
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 392

```text
   if(sceneryGroup)sceneryGroup.visible=true;if(decorGroup&&!tobogganActive)decorGroup.visible=true;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 393

```text
   if(cfg&&cfg.id==='forest'&&scene){setRealmBackground(cfg);if(scene.fog){scene.fog.color.set(cfg.fog);scene.fog.near=currentJourney===2?Math.max(17,cfg.fogNear-4):cfg.fogNear;scene.fog.far=currentJourney===2?Math.max(78,cfg.fogFar-10):cfg.fogFar}}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 394

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 395

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 396

```text
function setVhalorFloodVisual(active){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 397

```text
 active=!!active;if(vhalorFloodVisualActive===active)return;vhalorFloodVisualActive=active;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 398

```text
 const cfg=REALMS[realmIndex];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 399

```text
 if(active){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 400

```text
   // O túnel inundado precisa ter leitura de profundidade: teto presente, laterais fechadas e horizonte longo à frente.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 401

```text
   if(kharvorBreakFx)kharvorBreakFx.visible=false;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 402

```text
   if(app){app.style.backgroundImage='none';app.style.backgroundColor='#101817'}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 403

```text
   if(scene){scene.background=new THREE.Color(0x101817);if(scene.fog){scene.fog.color.set(0x1a2725);scene.fog.near=15;scene.fog.far=96}}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 404

```text
   if(sceneryGroup)sceneryGroup.visible=false;if(decorGroup)decorGroup.visible=false;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 405

```text
 }else if(cfg&&cfg.id==='ruins'&&scene){
```

**Explicação:** Ajusta elementos centrais da renderização 3D, como cena, câmera ou renderizador.

### Linha 406

```text
   if(sceneryGroup)sceneryGroup.visible=true;if(decorGroup&&!tobogganActive)decorGroup.visible=true;setRealmBackground(cfg);if(scene.fog){scene.fog.color.set(cfg.fog);scene.fog.near=currentJourney===2?Math.max(17,cfg.fogNear-4):cfg.fogNear;scene.fog.far=currentJourney===2?Math.max(78,cfg.fogFar-10):cfg.fogFar}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 407

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 408

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 409

```text
function resetKharvorBridge(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 410

```text
 kharvorLayerY=0;kharvorFallStage=0;kharvorFallImpact=0;bridgeDropSafetyCleared=false;setForestUnderpassVisual(false);setVhalorFloodVisual(false);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 411

```text
 if(roadGroup){roadGroup.position.y=0;roadGroup.visible=true}if(itemGroup){itemGroup.position.y=0;itemGroup.visible=true}if(shelter3D){shelter3D.position.y=0;shelter3D.visible=true}if(sceneryGroup)sceneryGroup.visible=true;if(decorGroup&&!tobogganActive)decorGroup.visible=true;if(heroRoot&&!finalFamilyMode)heroRoot.visible=true;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 412

```text
 for(const g of kharvorUpperBridgeGroups){g.visible=false;g.position.y=4.70}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 413

```text
 for(const g of forestClosedBridgeGroups){g.visible=false;g.position.y=0}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 414

```text
 if(kharvorBreakFx)kharvorBreakFx.visible=false;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 415

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 416

```text
function restoreVarekAfterTransition(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 417

```text
 if(!heroRoot)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 418

```text
 finalFamilyMode=false;
```

**Explicação:** Controla a apresentação cinematográfica e o quadro compacto dos finais.

### Linha 419

```text
 heroRoot.visible=true;
```

**Explicação:** Controla o modelo, posição, visibilidade ou animação de Varek.

### Linha 420

```text
 heroRoot.position.set(laneX?laneX(lane):0,Math.max(0,jumpY||0),0);
```

**Explicação:** Controla o modelo, posição, visibilidade ou animação de Varek.

### Linha 421

```text
 heroRoot.rotation.set(0,Math.PI+(flipHero?Math.PI:0),0);
```

**Explicação:** Controla o modelo, posição, visibilidade ou animação de Varek.

### Linha 422

```text
 if(heroRoot.scale&&heroRoot.userData&&heroRoot.userData.baseScale){heroRoot.scale.copy(heroRoot.userData.baseScale)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 423

```text
 else if(heroRoot.scale){heroRoot.scale.set(Math.abs(heroRoot.scale.x)||1,Math.abs(heroRoot.scale.y)||1,Math.abs(heroRoot.scale.z)||1)}
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 424

```text
 if(hero)hero.visible=true;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 425

```text
 slideTimer=0;slideCooldown=0;jumpY=0;jumpV=0;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 426

```text
 try{playHero('Running',.06)}catch(_){}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 427

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 428

```text
function ensureKharvorBreakFx(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 429

```text
 if(kharvorBreakFx||!worldRoot)return kharvorBreakFx;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 430

```text
 const g=new THREE.Group();g.name='MAX_HEALMS_GRANDE_RUPTURA_PONTE';g.visible=false;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 431

```text
 const voidMat=new THREE.MeshBasicMaterial({color:0x000000,side:THREE.DoubleSide,depthWrite:true});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 432

```text
 const edgeMat=new THREE.MeshStandardMaterial({color:0x463e36,roughness:1});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 433

```text
 const darkEdgeMat=new THREE.MeshStandardMaterial({color:0x28231f,roughness:1});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 434

```text
 const mossMat=new THREE.MeshBasicMaterial({color:0x40543a,transparent:true,opacity:.66,side:THREE.DoubleSide});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 435

```text
 const pts=[],count=18,rx=4.05,rz=2.62;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 436

```text
 for(let i=0;i<count;i++){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 437

```text
   const a=i/count*Math.PI*2;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 438

```text
   const jag=1+Math.sin(i*2.11)*.13+Math.sin(i*.83+1.2)*.08+(i===3||i===11?-.20:0)+(i%4===0?.07:0);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 439

```text
   pts.push(new THREE.Vector2(Math.cos(a)*rx*jag,Math.sin(a)*rz*jag));
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 440

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 441

```text
 const shape=new THREE.Shape(pts);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 442

```text
 const mouth=new THREE.Mesh(new THREE.ShapeGeometry(shape),voidMat);mouth.rotation.x=-Math.PI/2;mouth.position.y=.13;mouth.renderOrder=9;g.add(mouth);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 443

```text
 const abyss=new THREE.Mesh(new THREE.CylinderGeometry(3.45,1.95,4.2,14,1,true),new THREE.MeshBasicMaterial({color:0x010101,side:THREE.BackSide}));abyss.position.y=-2.2;abyss.scale.set(1.0,1,0.68);g.add(abyss);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 444

```text
 // Lajes quebradas grandes: dão leitura de uma ponte realmente rompida, sem borda circular limpa.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 445

```text
 for(let i=0;i<14;i++){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 446

```text
   const a=i/14*Math.PI*2+(i%2)*.11,rr=.92+(i%4)*.04;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 447

```text
   const x=Math.cos(a)*4.05*rr,z=Math.sin(a)*2.62*rr;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 448

```text
   const slab=new THREE.Mesh(new THREE.BoxGeometry(.70+(i%4)*.25,.14+(i%3)*.07,.76+(i%5)*.22),i%3?edgeMat:darkEdgeMat);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 449

```text
   slab.position.set(x,.16-Math.abs(Math.sin(a))*.04,z);slab.rotation.set((i%3-1)*.10,-a+(i%2?.13:-.10),(i%2?1:-1)*.10);g.add(slab)
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 450

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 451

```text
 // Trincas radiais se prolongam para fora do buraco, quebrando o aspecto de "círculo desenhado".
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 452

```text
 for(let i=0;i<7;i++){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 453

```text
   const a=i/7*Math.PI*2+.19*Math.sin(i*1.7),len=.95+(i%3)*.38;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 454

```text
   const crack=new THREE.Mesh(new THREE.BoxGeometry(.08,.025,len),new THREE.MeshBasicMaterial({color:0x171411}));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 455

```text
   crack.position.set(Math.cos(a)*(4.18+len*.24),.145,Math.sin(a)*(2.78+len*.24));crack.rotation.y=-a;g.add(crack)
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 456

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 457

```text
 for(let i=0;i<7;i++){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 458

```text
   const a=(i/7)*Math.PI*2+.20,m=new THREE.Mesh(new THREE.PlaneGeometry(.8+.18*(i%3),.38+.10*(i%2)),mossMat);m.rotation.x=-Math.PI/2;m.rotation.z=a;m.position.set(Math.cos(a)*3.45,.18,Math.sin(a)*2.28);g.add(m)
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 459

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 460

```text
 worldRoot.add(g);kharvorBreakFx=g;return g;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 461

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 462

```text
function updateKharvorBridge(dt,progress){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 463

```text
 const cfg=REALMS[realmIndex],id=cfg&&cfg.id,isKharvor=id==='vruins',isForest=id==='forest',isVhalor=id==='ruins';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 464

```text
 const sequenceRealm=isKharvor||isForest||isVhalor;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 465

```text
 if(!sequenceRealm){if(Math.abs(kharvorLayerY)>.01||forestUnderpassActive||vhalorFloodVisualActive)resetKharvorBridge();return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 466

```text
 const total=realmTargetDistance();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 467

```text
 const tunnelStart=500,tunnelEnd=Math.max(980,total-520),previewStart=420;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 468

```text
 const preview=progress>=previewStart&&progress<tunnelStart;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 469

```text
 const inside=progress>=tunnelStart&&progress<tunnelEnd;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 470

```text
 const holeFx=kharvorBreakFx;if(holeFx)holeFx.visible=false;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 471

```text
 // MOBILE41: nenhum túnel exige queda de nível. Pista, Varek, itens e câmera permanecem em Y=0.
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 472

```text
 kharvorLayerY=0;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 473

```text
 if(roadGroup)roadGroup.position.y=0;if(itemGroup)itemGroup.position.y=0;if(shelter3D)shelter3D.position.y=0;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 474

```text
 if(heroRoot&&!finalFamilyMode&&Math.abs(heroRoot.position.y-jumpY)<6)heroRoot.position.y=jumpY-(slideTimer>0?.035:0);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 475

```text
 // Limpa obstáculos imediatamente antes da boca do túnel para a entrada ser legível.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 476

```text
 if(progress>=previewStart&&progress<535&&!bridgeDropSafetyCleared){bridgeDropSafetyCleared=true;clearBridgeDropApproach();spawnTimer=Math.max(spawnTimer,1.15)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 477

```text
 // Kharvor e Neris usam corredor reto, com teto/paredes visíveis antes da entrada.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 478

```text
 for(const g of kharvorUpperBridgeGroups){g.visible=isKharvor&&(preview||inside);g.position.y=4.70}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 479

```text
 for(const g of forestClosedBridgeGroups){g.visible=isForest&&(preview||inside);g.position.y=4.25}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 480

```text
 if(isForest)setForestUnderpassVisual(inside);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 481

```text
 if(isKharvor){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 482

```text
   if(sceneryGroup)sceneryGroup.visible=!inside;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 483

```text
   if(decorGroup)decorGroup.visible=!inside&&!tobogganActive;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 484

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 485

```text
 if((isKharvor||isForest)&&progress>=tunnelStart&&kharvorFallStage<1){kharvorFallStage=1;toast('▰ TÚNEL À FRENTE • MANTENHA A LINHA');haptic([12,18,12])}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 486

```text
 if((isKharvor||isForest)&&progress>=tunnelEnd&&kharvorFallStage<2){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 487

```text
   kharvorFallStage=2;for(const g of kharvorUpperBridgeGroups)g.visible=false;for(const g of forestClosedBridgeGroups)g.visible=false;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 488

```text
   if(isForest)setForestUnderpassVisual(false);if(sceneryGroup)sceneryGroup.visible=true;if(decorGroup&&!tobogganActive)decorGroup.visible=true;toast('✓ SAÍDA DO TÚNEL • PONTE ABERTA')
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 489

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 490

```text
 // MOBILE42: Vhalor tem água, então a mudança de nível volta a fazer sentido visualmente.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 491

```text
 if(isVhalor){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 492

```text
   if(progress>=tunnelStart&&!tobogganActive&&!tobogganAutoDone){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 493

```text
     kharvorFallStage=1;kharvorFallImpact=1;openingCameraShake=Math.max(openingCameraShake,.72);haptic([20,18,48]);
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 494

```text
     setVhalorFloodVisual(true);toast('🛶 QUEDA PARA A PASSAGEM INUNDADA');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 495

```text
     startToboggan(false,'flooded',distance+(tunnelEnd-progress));
```

**Explicação:** Controla alguma parte do sistema de descida/tobogã, incluindo estado, visual, física ou interface.

### Linha 496

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 497

```text
   if(!tobogganActive&&progress>=tunnelEnd){setVhalorFloodVisual(false);if(kharvorFallStage<2){kharvorFallStage=2;toast('✓ SAÍDA DA PASSAGEM INUNDADA')}}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 498

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 499

```text
 kharvorFallImpact=Math.max(0,kharvorFallImpact-dt*1.6);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 500

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

