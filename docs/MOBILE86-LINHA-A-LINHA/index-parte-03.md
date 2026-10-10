# index.html — Parte 3

Linhas **501 a 750** da MOBILE86.

### Linha 501

```text
let weatherAudioSource=null,weatherAudioFilter=null,weatherAudioGain=null,weatherAudioMode='none';
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 502

```text
const REALM_WEATHER={vpath:'strongWind',vruins:'extremeRain',forest:'drizzle',celestial:'strongWind'};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 503

```text
const REALM_ATMOSPHERE={ember:'volcanicAsh',ruins:'ruinDust',forest:'fallingLeaves'};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 504

```text
let footstepBuffers=[],footstepLoadPromise=null,footstepTimer=0,footstepIndex=0;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 505

```text
const FOOTSTEP_SRCS=['step-01.mp3','step-02.mp3','step-03.mp3','step-04.mp3','step-05.mp3','step-06.mp3'];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 506

```text
const LANE_X=[-2.25,0,2.25];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 507

```text
const CELESTIAL_BG='celestial.png';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 508

```text
let celestialTexture=null;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 509

```text
const REALM_BACKGROUNDS={'forest':'forest.jpg','ruins':'ruins.jpg','ember':'ember.jpg','vpath':'vpath.jpg','vruins':'vruins.jpg'};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 510

```text
const REALM_BG_CACHE={};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 511

```text
function realmBackgroundSrc(cfg){return cfg&&cfg.celestial?CELESTIAL_BG:(cfg?REALM_BACKGROUNDS[cfg.id]:null)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 512

```text
function applyRealmCssBackground(cfg){const src=realmBackgroundSrc(cfg);if(!app)return;if(src){app.style.backgroundImage=`url("${src}")`;app.style.backgroundColor='#07110d';if(MOBILE_RUNNER){app.style.backgroundSize='auto 100%';const pos={vpath:'50% 45%',vruins:'50% 45%',ember:'50% 46%',ruins:'50% 44%',forest:'50% 43%',celestial:'50% 44%'};app.style.backgroundPosition=pos[(cfg&&cfg.id)||'']||'50% 45%'}else{app.style.backgroundSize='cover';app.style.backgroundPosition='center center'}}else{app.style.backgroundImage='none';app.style.backgroundColor='#07110d'}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 513

```text
function prepareRealmTexture(src,key){if(!src)return null;if(REALM_BG_CACHE[key])return REALM_BG_CACHE[key];const loaderBg=new THREE.TextureLoader();const t=loaderBg.load(src,tex=>{tex.encoding=THREE.sRGBEncoding;tex.minFilter=THREE.LinearFilter;tex.magFilter=THREE.LinearFilter;tex.needsUpdate=true;const current=REALMS&&REALMS[realmIndex];if(current&&((current.celestial&&key==='celestial')||current.id===key)){scene.background=tex}},undefined,err=>{console.warn('FUNDO DO REINO NÃO CARREGOU NO WEBGL • fallback CSS mantido',src,err)});t.encoding=THREE.sRGBEncoding;t.minFilter=THREE.LinearFilter;t.magFilter=THREE.LinearFilter;REALM_BG_CACHE[key]=t;return t}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 514

```text
function getRealmBackground(id){const src=REALM_BACKGROUNDS[id];return prepareRealmTexture(src,id)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 515

```text
function getCelestialTexture(){if(celestialTexture)return celestialTexture;celestialTexture=prepareRealmTexture(CELESTIAL_BG,'celestial');return celestialTexture}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 516

```text
function setRealmBackground(cfg){applyRealmCssBackground(cfg);if(MOBILE_RUNNER){scene.background=null;return}const tex=cfg&&cfg.celestial?getCelestialTexture():getRealmBackground(cfg&&cfg.id);scene.background=tex||new THREE.Color((cfg&&cfg.bg)||0x07110d)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 517

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 518

```text
const REALMS=[
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 519

```text
 {id:'vpath',name:'TERRAS DOS DRAGÕES',short:'TERRAS DOS DRAGÕES',asset:null,bg:0x321611,fog:0x28110d,fogNear:25,fogFar:105,road:[0x4d3d37,0x3b302d,0x5a4640],edge:0x3a2925,accent:0xe05a20,sceneryWidth:24,sceneryZ:-54},
```

**Explicação:** Ajusta elementos centrais da renderização 3D, como cena, câmera ou renderizador.

### Linha 520

```text
 {id:'vruins',name:'RUÍNAS DE KHARVOR',short:'RUÍNAS DE KHARVOR',asset:null,bg:0x2b1411,fog:0x23100d,fogNear:23,fogFar:116,road:[0x4b4d50,0x45474a,0x525458],edge:0x35373a,accent:0x91a7c2,sceneryWidth:23,sceneryZ:-51},
```

**Explicação:** Ajusta elementos centrais da renderização 3D, como cena, câmera ou renderizador.

### Linha 521

```text
 {id:'ember',name:'VALE DAS CINZAS',short:'VALE DAS CINZAS',asset:null,bg:0x321b1b,fog:0x2b1717,fogNear:26,fogFar:108,road:[0x4a3f3a,0x443a36,0x514640],edge:0x342a27,accent:0xff6c2d,sceneryWidth:23,sceneryZ:-52},
```

**Explicação:** Ajusta elementos centrais da renderização 3D, como cena, câmera ou renderizador.

### Linha 522

```text
 {id:'ruins',name:'RUÍNAS DE VHALOR',short:'RUÍNAS DE VHALOR',asset:null,bg:0x91a899,fog:0x7f9387,fogNear:30,fogFar:136,road:[0x6f756e,0x686e68,0x777d75],edge:0x4f574f,accent:0x9b8c68,sceneryWidth:22,sceneryZ:-50},
```

**Explicação:** Ajusta elementos centrais da renderização 3D, como cena, câmera ou renderizador.

### Linha 523

```text
 {id:'forest',name:'FLORESTA DE NERIS',short:'FLORESTA DE NERIS',asset:null,bg:0x9dc0a4,fog:0x8ba596,fogNear:34,fogFar:148,road:[0x74684f,0x6f654e,0x7d7157],edge:0x536048,accent:0x829b61,sceneryWidth:23,sceneryZ:-52},
```

**Explicação:** Ajusta elementos centrais da renderização 3D, como cena, câmera ou renderizador.

### Linha 524

```text
 {id:'celestial',name:'REINO CELESTIAL',short:'REINO CELESTIAL',asset:null,celestial:true,bg:0xf2c987,fog:0xd8c9a9,fogNear:46,fogFar:185,road:[0xa9885e,0x92724e,0xb69668],edge:0x7d684b,accent:0xe9c36a,sceneryWidth:0,sceneryZ:-54}
```

**Explicação:** Ajusta elementos centrais da renderização 3D, como cena, câmera ou renderizador.

### Linha 525

```text
]
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 526

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 527

```text
const JOURNEY1_ORDER=[0,1,2,3,4,5];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 528

```text
const JOURNEY2_ORDER=[0,1,2,3,4,5];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 529

```text
function getJourneyOrder(){return currentJourney===2?JOURNEY2_ORDER:JOURNEY1_ORDER}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 530

```text
function checkpointField(journey){return Number(journey)===2?'j2Checkpoint':'j1Checkpoint'}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 531

```text
function getJourneyCheckpoint(journey=currentJourney){const order=Number(journey)===2?JOURNEY2_ORDER:JOURNEY1_ORDER;return Math.max(0,Math.min(order.length-1,Number(SAVE?.[checkpointField(journey)]||0)))}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 532

```text
function setJourneyCheckpoint(journey,pos){const order=Number(journey)===2?JOURNEY2_ORDER:JOURNEY1_ORDER;SAVE[checkpointField(journey)]=Math.max(0,Math.min(order.length-1,Number(pos)||0))}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 533

```text
function realmRewardClaimId(journey,idx){return 'J'+Number(journey)+'-R'+Number(idx)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 534

```text
function refreshJourneyMenu(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 535

```text
 if(SAVE&&!SAVE.profileCompleted){SAVE.j1Checkpoint=0;SAVE.j2Checkpoint=0;SAVE.journey2Unlocked=false;SAVE.journey2Completed=false}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 536

```text
 const j1=$('start'),j2=$('journey2'),end=$('endless'),cp1=getJourneyCheckpoint(1),cp2=getJourneyCheckpoint(2),u2=!!SAVE?.journey2Unlocked,ue=!!SAVE?.journey2Completed;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 537

```text
 if(j1)j1.textContent=cp1>0&&!u2?'▶ CONTINUAR • '+REALMS[JOURNEY1_ORDER[cp1]].short:'▶ JORNADA 1 • A FUGA';
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 538

```text
 if(j2){j2.disabled=!u2;j2.textContent=!u2?'🔒 JORNADA 2 • O RESGATE':(cp2>0&&!ue?'⚔ CONTINUAR • '+REALMS[JOURNEY2_ORDER[cp2]].short:'⚔ JORNADA 2 • O RESGATE')}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 539

```text
 if(end){end.disabled=!ue;end.textContent=ue?'∞ ENDLESS • CORRIDA SEM FIM':tr('endless')}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 540

```text
 if(j1&&cp1===0&&!u2)j1.textContent=tr('play');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 541

```text
 if(j2&&!u2)j2.textContent=tr('j2');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 542

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 543

```text
function showRealmCheckpoint(pos,nextIndex){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 544

```text
 if(realmCheckpointPanelOpen||endlessMode)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 545

```text
 const journey=currentJourney,done=REALMS[realmIndex],next=REALMS[nextIndex],claimId=realmRewardClaimId(journey,realmIndex),claims=SAVE.realmRewardClaims||(SAVE.realmRewardClaims=[]),first=!claims.includes(claimId);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 546

```text
 realmCheckpointPanelOpen=true;realmCheckpointNextIndex=nextIndex;realmCheckpointBonusClaimed=false;paused=true;huntersVisible=false;hunters.forEach(h=>h.root.visible=false);
```

**Explicação:** Controla os caçadores e sua posição, animação ou participação na perseguição.

### Linha 547

```text
 setJourneyCheckpoint(journey,pos+1);realmCheckpointReward=first?(journey===2?15:10):0;
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 548

```text
 if(first){claims.push(claimId);SAVE.gems+=realmCheckpointReward;runRealmRewards+=realmCheckpointReward}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 549

```text
 saveState();refreshJourneyMenu();
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 550

```text
 const p=$('realmCheckpointPanel'),t=$('realmCheckpointTitle'),x=$('realmCheckpointText'),r=$('realmCheckpointRewardText'),dbl=$('realmCheckpointDouble');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 551

```text
 if(t)t.textContent='✓ '+done.short+' '+gt('completed');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 552

```text
 if(x)x.innerHTML=gt('saved')+'<br><b>'+gt('next')+': '+next.name+'</b>';
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 553

```text
 if(r)r.textContent=first?gt('reward')+' • 💎 +'+realmCheckpointReward:gt('already');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 554

```text
 if(dbl){dbl.disabled=!first;dbl.textContent=first?gt('double')+(realmCheckpointReward*2):gt('received')}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 555

```text
 p?.classList.add('show');haptic([16,28,16])
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 556

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 557

```text
async function continueRealmCheckpoint(){if(!realmCheckpointPanelOpen||realmCheckpointNextIndex==null)return;const next=realmCheckpointNextIndex;realmCheckpointPanelOpen=false;realmCheckpointNextIndex=null;$('realmCheckpointPanel')?.classList.remove('show');await portalToRealm(next)}
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 558

```text
function exitRealmCheckpoint(){realmCheckpointPanelOpen=false;realmCheckpointNextIndex=null;$('realmCheckpointPanel')?.classList.remove('show');backMenu()}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 559

```text
async function doubleRealmCheckpointReward(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 560

```text
 if(!realmCheckpointPanelOpen||realmCheckpointBonusClaimed||realmCheckpointReward<=0)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 561

```text
 const b=$('realmCheckpointDouble');if(b){b.disabled=true;b.textContent=gt('ad')+'...'}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 562

```text
 let ok=false;try{ok=await AdService.showRewardedRealmBonus()}catch(e){console.warn('REWARD REALM BONUS',e)}
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 563

```text
 if(ok){realmCheckpointBonusClaimed=true;SAVE.gems+=realmCheckpointReward;saveState();const r=$('realmCheckpointRewardText');if(r)r.textContent=gt('reward')+' x2 • 💎 +'+(realmCheckpointReward*2);if(b)b.textContent=gt('received');toast(gt('reward')+' x2 • 💎 +'+realmCheckpointReward)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 564

```text
 else if(b){b.disabled=false;b.textContent=gt('double')+(realmCheckpointReward*2)}
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 565

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 566

```text
async function advanceJourneyRealm(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 567

```text
 if(realmLoading||journeyRunFinished||portalTransitioning||realmCheckpointPanelOpen)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 568

```text
 const order=getJourneyOrder(),pos=order.indexOf(realmIndex);if(pos<0){await portalToRealm(order[0]);return}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 569

```text
 if(endlessMode){if(pos<order.length-1)await portalToRealm(order[pos+1]);else{endlessLap++;await portalToRealm(order[0]);toast('∞ ENDLESS • VOLTA '+endlessLap)}return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 570

```text
 if(pos<order.length-1){showRealmCheckpoint(pos,order[pos+1]);return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 571

```text
 finishJourney()
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 572

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 573

```text
function showJourney1ResultPanel(r,isTest=false){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 574

```text
 const result=r||{distance:distance,finalTime:elapsed+timePenalty,score:runScore(),rank:previewRunRank()};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 575

```text
 const eco=result.economy||{},ma=sessionMonetizationAnalysis(result,false);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 576

```text
 UI.journeyEndPanel.classList.remove('show');
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 577

```text
 const ey=UI.finalVictory?.querySelector('.ey');if(ey)ey.textContent='MAX HEALMS • FIM DA JORNADA 1';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 578

```text
 if($('finalFamilyTitle'))$('finalFamilyTitle').textContent=gt('reunion');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 579

```text
 if(UI.finalEndingText)UI.finalEndingText.textContent='Varek alcançou a fronteira e reencontrou sua família. A paz dura pouco: Lyra é sequestrada, e a Jornada 2 começa com o resgate.';
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 580

```text
 if(UI.finalPlacement)UI.finalPlacement.textContent='🏆 '+gt('localPlacement')+' #'+Math.max(1,result.rank||1);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 581

```text
 if(UI.finalResultLine)UI.finalResultLine.textContent=
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 582

```text
   gt('time')+' '+fmtTime(result.finalTime||0)+' • '+(result.score||runScore())+' '+gt('score')+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 583

```text
   ' • ⭐ '+runStars+' • 💎 '+gt('collected')+' '+(eco.collectedGems??runGems)+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 584

```text
   ' • 💎 GASTOS '+(eco.spentGems??runSpentGems)+' • ▶ ADS '+(eco.rewardedAds??runRewardedAds)+'+'+(eco.interstitialAds??runInterstitialAds)+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 585

```text
   ' • RECEITA SIM. '+brl(ma.adEstimate)+(isTest?' • MODO TESTE':'');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 586

```text
 if(UI.finalUnlockLine)UI.finalUnlockLine.textContent=isTest?'TESTE • FINAL JORNADA 1':'✓ '+gt('j2Unlocked');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 587

```text
 const replay=$('finalReplay'),menu=$('finalMenu');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 588

```text
 if(replay){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 589

```text
   replay.textContent=isTest?'↻ REVER FINAL JORNADA 1':'⚔ INICIAR JORNADA 2 • O RESGATE';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 590

```text
   replay.onclick=isTest?(()=>{UI.finalVictory?.classList.remove('show');void startFinalSceneTest('j1')}):(()=>{hideFamilyScene();UI.finalVictory?.classList.remove('show');requestJourneyStart(2)});
```

**Explicação:** Define diretamente a ação executada ao tocar ou clicar no elemento.

### Linha 591

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 592

```text
 if(menu){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 593

```text
   menu.textContent=isTest?'🧪 VOLTAR AOS CENÁRIOS':'☰ MENU PRINCIPAL';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 594

```text
   menu.onclick=isTest?(()=>returnToScenarioHub()):(()=>{hideFamilyScene();backMenu()});
```

**Explicação:** Define diretamente a ação executada ao tocar ou clicar no elemento.

### Linha 595

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 596

```text
 if(UI.finalVictory)UI.finalVictory.classList.add('show');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 597

```text
 playSFX('finalChime')
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 598

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 599

```text
function finishJourney(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 600

```text
 if(journeyRunFinished||endlessMode)return;journeyRunFinished=true;paused=true;huntersVisible=false;hunters.forEach(h=>{if(h.action)h.action.paused=true;h.root.visible=false});const r=recordRun();
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 601

```text
 if(currentJourney===1){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 602

```text
   SAVE.journey2Unlocked=true;SAVE.j1Checkpoint=0;saveState();playThemeMoment(7,7200,.135);
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 603

```text
   UI.journeyEndPanel.classList.remove('show');
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 604

```text
   showFamilyScene('j1final').catch(err=>console.warn('Cena final J1',err));
```

**Explicação:** Controla a apresentação cinematográfica e o quadro compacto dos finais.

### Linha 605

```text
   setTimeout(()=>{if(journeyRunFinished&&currentJourney===1)showJourney1ResultPanel(r,false)},2200)
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 606

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 607

```text
 else{SAVE.j2Checkpoint=0;saveState();showFinalArrival(r,false).catch(err=>console.warn('FRONTEIRA FINAL',err))}
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 608

```text
 refreshJourneyMenu()
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 609

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 610

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 611

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 612

```text
const LEGACY_SAVE_KEY='maxHealms.player.preview.v1';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 613

```text
const SAVE_KEY='maxHealms.player.varek.rc6';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 614

```text
const HERO_OUTFITS={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 615

```text
 outfit_varek_original:{id:'outfit_varek_original',label:'VAREK ORIGINAL',free:true,price:0,mode:'meshy',height:2.34,run:'varekOriginalRun',walk:'varekOriginalWalk',slide:'varekOriginalSlide'},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 616

```text
 outfit_varek_adventurer:{id:'outfit_varek_adventurer',label:'VAREK AVENTUREIRO',free:false,priceBRL:14.99,storeSku:'max_healms_varek_adventurer',mode:'meshy',height:2.34,run:'varekAdventurer',walk:'varekAdventurer',slide:'varekAdventurer'},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 617

```text
 outfit_varek_voren:{id:'outfit_varek_voren',label:'VAREK VOREN',free:false,priceBRL:14.99,storeSku:'max_healms_varek_voren',mode:'meshy',height:2.34,run:'varekVorenRun',walk:'varekVorenWalk',slide:'varekVorenSlide'}
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 618

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 619

```text
const STORE_OUTFIT_IDS=['outfit_varek_original','outfit_varek_adventurer','outfit_varek_voren'];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 620

```text
const LEGACY_OUTFIT_MAP={outfit_varek:'outfit_varek_original',outfit_darik_original:'outfit_varek_original',outfit_darik_voren:'outfit_varek_voren'};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 621

```text
const VALID_OUTFITS=Object.keys(HERO_OUTFITS);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 622

```text
const ACTIVE_VAREK_IDS=new Set(STORE_OUTFIT_IDS);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 623

```text
const OUTFIT_PRODUCT_TO_ID={'max_healms_varek_adventurer':'outfit_varek_adventurer','max_healms_varek_voren':'outfit_varek_voren'};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 624

```text
function makeUUID(){try{return crypto.randomUUID()}catch(_){return 'mr-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,11)}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 625

```text
function freshSave(){return {uuid:makeUUID(),name:'',nickname:'',country:'',email:'',profileCompleted:false,profileSavedAt:0,accountMode:'guest',accountLinked:false,accountEmail:'',accountProvider:'guest',privacyConsentAt:0,signupRewardClaimed:false,welcomeBonusGranted:0,premiumOwned:false,premiumBonusClaimed:false,ownedProducts:[],purchaseHistory:[],lastForcedAdAt:0,forcedAdsShown:0,gems:0,starsTotal:0,xp:0,bestScore:0,bestDistance:0,bestStars:0,bestTime:0,journey2Unlocked:false,journey2Completed:false,j1Checkpoint:0,j2Checkpoint:0,realmRewardClaims:[],endlessBestDistance:0,upgrades:{shield:0,magnet:0,xp:0},inventory:['outfit_varek_original'],consumables:{shield:0,magnetMinutes:0,canteen:0},equipped:{cap:null,trail:null,outfit:'outfit_varek_original',boots:null,backpack:null},runs:[],qaSession:{startedAt:0,runs:0,distance:0,stars:0,collectedGems:0,realmRewards:0,spentGems:0,rewardedAds:0,interstitialAds:0,paidContinues:0,adEstimateBRL:0},settings:{autoRealm:true,sound:true,shadows:true,flipHero:false,haptics:true,musicVolume:.70,sfxVolume:.85,ambientVolume:.65}}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 626

```text
function loadSave(){let s=freshSave();try{const stored=localStorage.getItem(SAVE_KEY)||localStorage.getItem('maxHealms.player.varek.rc5')||localStorage.getItem('maxHealms.player.varek.rc4')||localStorage.getItem(LEGACY_SAVE_KEY);const raw=JSON.parse(stored||'null');if(raw){s={...s,...raw,upgrades:{...s.upgrades,...(raw.upgrades||{})},consumables:{...s.consumables,...(raw.consumables||{})},equipped:{...s.equipped,...(raw.equipped||{})},settings:{...s.settings,...(raw.settings||{})},inventory:Array.isArray(raw.inventory)?raw.inventory:[],runs:Array.isArray(raw.runs)?raw.runs:[]}}}catch(e){}return s}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 627

```text
let SAVE=loadSave();
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 628

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 629

```text
// MOBILE66 • RELEASE CANDIDATE — SIMULAÇÃO DE INSTALAÇÃO NOVA.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 630

```text
// ?freshLaunch=1 apaga todo o save local do jogador UMA VEZ: perfil, ranking,
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 631

```text
// campanha, moedas, inventário e configurações. Depois remove o parâmetro da URL
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 632

```text
// e o jogo volta a salvar normalmente, como aconteceria após uma instalação limpa.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 633

```text
const FRESH_LAUNCH_ONCE=new URLSearchParams(location.search).get('freshLaunch')==='1';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 634

```text
if(FRESH_LAUNCH_ONCE){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 635

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 636

```text
   const remove=[];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 637

```text
   for(let i=0;i<localStorage.length;i++){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 638

```text
     const k=localStorage.key(i)||'';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 639

```text
     if(/^maxHealms\./i.test(k)||/^max_healms_/i.test(k))remove.push(k);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 640

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 641

```text
   remove.forEach(k=>localStorage.removeItem(k));
```

**Explicação:** Lê ou grava dados persistentes do jogador no armazenamento local.

### Linha 642

```text
 }catch(e){}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 643

```text
 SAVE=freshSave();
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 644

```text
 SAVE.j1Checkpoint=0;SAVE.j2Checkpoint=0;SAVE.journey2Unlocked=false;SAVE.journey2Completed=false;
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 645

```text
 SAVE.runs=[];SAVE.bestScore=0;SAVE.bestDistance=0;SAVE.bestStars=0;SAVE.bestTime=0;
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 646

```text
 SAVE.gems=0;SAVE.starsTotal=0;SAVE.xp=0;SAVE.realmRewardClaims=[];SAVE.profileCompleted=false;
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 647

```text
 SAVE.name='';SAVE.nickname='';SAVE.country='';SAVE.email='';SAVE.accountLinked=false;SAVE.accountMode='guest';SAVE.accountEmail='';SAVE.accountProvider='guest';SAVE.qaSession={startedAt:Date.now(),runs:0,distance:0,stars:0,collectedGems:0,realmRewards:0,spentGems:0,rewardedAds:0,interstitialAds:0,paidContinues:0,adEstimateBRL:0};
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 648

```text
 try{localStorage.setItem(SAVE_KEY,JSON.stringify(SAVE))}catch(e){}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 649

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 650

```text
   const u=new URL(location.href);u.searchParams.delete('freshLaunch');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 651

```text
   history.replaceState(null,'',u.pathname+(u.searchParams.toString()?'?'+u.searchParams.toString():'')+u.hash)
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 652

```text
 }catch(e){}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 653

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 654

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 655

```text
// MOBILE37 • RESET SEGURO DE PROGRESSO PARA TESTE.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 656

```text
// ?resetProgress=1 zera campanha/ranking/moedas de jogo, mas preserva identidade,
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 657

```text
// configurações e compras permanentes. O parâmetro é removido logo após executar,
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 658

```text
// evitando novo reset ao atualizar a página.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 659

```text
const PRODUCTION_CLEAN_ONCE=new URLSearchParams(location.search).get('productionClean')==='1';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 660

```text
if(PRODUCTION_CLEAN_ONCE){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 661

```text
 const previous=SAVE||freshSave();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 662

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 663

```text
   const remove=[];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 664

```text
   for(let i=0;i<localStorage.length;i++){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 665

```text
     const k=localStorage.key(i)||'';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 666

```text
     if(/^maxHealms\./i.test(k)||/^max_healms_/i.test(k))remove.push(k);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 667

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 668

```text
   remove.forEach(k=>localStorage.removeItem(k));
```

**Explicação:** Lê ou grava dados persistentes do jogador no armazenamento local.

### Linha 669

```text
 }catch(e){}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 670

```text
 SAVE=freshSave();
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 671

```text
 SAVE.uuid=previous.uuid||SAVE.uuid;
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 672

```text
 SAVE.name=previous.name||'';SAVE.nickname=previous.nickname||'';
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 673

```text
 SAVE.country=previous.country||'';SAVE.countryCode=previous.countryCode||'';
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 674

```text
 SAVE.profileCompleted=previous.profileCompleted===true;SAVE.profileSavedAt=Number(previous.profileSavedAt||0);
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 675

```text
 SAVE.settings={...SAVE.settings,...(previous.settings||{})};
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 676

```text
 SAVE.premiumOwned=previous.premiumOwned===true;SAVE.premiumBonusClaimed=previous.premiumBonusClaimed===true;
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 677

```text
 SAVE.ownedProducts=Array.isArray(previous.ownedProducts)?[...previous.ownedProducts]:[];
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 678

```text
 SAVE.purchaseHistory=Array.isArray(previous.purchaseHistory)?[...previous.purchaseHistory]:[];
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 679

```text
 SAVE.inventory=Array.from(new Set(['outfit_varek_original',...(Array.isArray(previous.inventory)?previous.inventory:[])]));
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 680

```text
 SAVE.equipped={...SAVE.equipped,...(previous.equipped||{})};
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 681

```text
 SAVE.qaSession={startedAt:Date.now(),runs:0,distance:0,stars:0,collectedGems:0,realmRewards:0,spentGems:0,rewardedAds:0,interstitialAds:0,paidContinues:0,adEstimateBRL:0};
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 682

```text
 try{localStorage.setItem(SAVE_KEY,JSON.stringify(SAVE))}catch(e){}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 683

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 684

```text
   const u=new URL(location.href);u.searchParams.delete('productionClean');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 685

```text
   history.replaceState(null,'',u.pathname+(u.searchParams.toString()?'?'+u.searchParams.toString():'')+u.hash)
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 686

```text
 }catch(e){}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 687

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 688

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 689

```text
const RESET_PROGRESS_ONCE=new URLSearchParams(location.search).get('resetProgress')==='1';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 690

```text
if(RESET_PROGRESS_ONCE){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 691

```text
 const previous=SAVE||freshSave(),clean=freshSave();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 692

```text
 clean.uuid=previous.uuid||clean.uuid;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 693

```text
 clean.name=previous.name||'';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 694

```text
 clean.nickname=previous.nickname||'';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 695

```text
 clean.country=previous.country||'';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 696

```text
 clean.email=previous.email||'';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 697

```text
 clean.profileCompleted=previous.profileCompleted===true;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 698

```text
 clean.profileSavedAt=Number(previous.profileSavedAt||0);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 699

```text
 clean.accountMode=previous.accountMode||'guest';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 700

```text
 clean.accountLinked=previous.accountLinked===true;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 701

```text
 clean.accountEmail=previous.accountEmail||'';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 702

```text
 clean.accountProvider=previous.accountProvider||'guest';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 703

```text
 clean.privacyConsentAt=Number(previous.privacyConsentAt||0);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 704

```text
 clean.premiumOwned=previous.premiumOwned===true;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 705

```text
 clean.premiumBonusClaimed=previous.premiumBonusClaimed===true;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 706

```text
 clean.ownedProducts=Array.isArray(previous.ownedProducts)?[...previous.ownedProducts]:[];
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 707

```text
 clean.purchaseHistory=Array.isArray(previous.purchaseHistory)?[...previous.purchaseHistory]:[];
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 708

```text
 clean.inventory=Array.isArray(previous.inventory)?[...previous.inventory]:['outfit_varek_original'];
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 709

```text
 clean.equipped={...clean.equipped,...(previous.equipped||{})};
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 710

```text
 clean.settings={...clean.settings,...(previous.settings||{})};
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 711

```text
 SAVE=clean;
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 712

```text
 try{localStorage.setItem(SAVE_KEY,JSON.stringify(SAVE))}catch(e){}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 713

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 714

```text
   const u=new URL(location.href);u.searchParams.delete('resetProgress');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 715

```text
   history.replaceState(null,'',u.pathname+(u.searchParams.toString()?'?'+u.searchParams.toString():'')+u.hash)
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 716

```text
 }catch(e){}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 717

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 718

```text
const migrateOutfitId=id=>LEGACY_OUTFIT_MAP[id]||id;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 719

```text
SAVE.ownedProducts=Array.isArray(SAVE.ownedProducts)?Array.from(new Set(SAVE.ownedProducts.map(id=>id==='max_healms_darik_adventurer'?'max_healms_varek_adventurer':id==='max_healms_darik_voren'?'max_healms_varek_voren':id))):[];
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 720

```text
const ownedPaidOutfits=new Set(Object.entries(OUTFIT_PRODUCT_TO_ID).filter(([sku])=>SAVE.ownedProducts.includes(sku)).map(([,id])=>id));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 721

```text
SAVE.inventory=Array.from(new Set(['outfit_varek_original',...(SAVE.inventory||[]).map(migrateOutfitId).filter(id=>id==='outfit_varek_original'||ownedPaidOutfits.has(id))]));
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 722

```text
const migratedEquipped=migrateOutfitId(SAVE.equipped&&SAVE.equipped.outfit);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 723

```text
SAVE.equipped={cap:null,trail:null,outfit:(SAVE.inventory.includes(migratedEquipped)&&ACTIVE_VAREK_IDS.has(migratedEquipped))?migratedEquipped:'outfit_varek_original',boots:null,backpack:null};
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 724

```text
SAVE.consumables={shield:0,magnetMinutes:0,canteen:0};
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 725

```text
SAVE.profileCompleted=SAVE.profileCompleted===true;
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 726

```text
SAVE.profileSavedAt=Number(SAVE.profileSavedAt||0);
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 727

```text
SAVE.j1Checkpoint=Math.max(0,Math.min(5,Number(SAVE.j1Checkpoint||0)));SAVE.j2Checkpoint=Math.max(0,Math.min(5,Number(SAVE.j2Checkpoint||0)));SAVE.realmRewardClaims=Array.isArray(SAVE.realmRewardClaims)?SAVE.realmRewardClaims:[];SAVE.endlessBestDistance=Math.max(0,Number(SAVE.endlessBestDistance||0));SAVE.qaSession=(SAVE.qaSession&&typeof SAVE.qaSession==='object')?SAVE.qaSession:{startedAt:0,runs:0,distance:0,stars:0,collectedGems:0,realmRewards:0,spentGems:0,rewardedAds:0,interstitialAds:0,paidContinues:0,adEstimateBRL:0};
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 728

```text
if(!SAVE.profileCompleted){if((SAVE.name||'').toUpperCase()==='JOGADOR')SAVE.name='';if((SAVE.nickname||'').toUpperCase()==='JOGADOR')SAVE.nickname='';if((SAVE.country||'').toUpperCase()==='BRASIL')SAVE.country=''}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 729

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 730

```text
const TEST_MODE=false;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 731

```text
function gemText(){return TEST_MODE?'∞':String(SAVE.gems)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 732

```text
function canAffordGems(price){return TEST_MODE||SAVE.gems>=price}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 733

```text
function spendGems(price){if(TEST_MODE)return true;if(SAVE.gems<price)return false;SAVE.gems-=price;if(started||gameOver||shelterActive)runSpentGems+=Number(price)||0;return true}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 734

```text
let saveQueueTimer=null;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 735

```text
function saveState(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 736

```text
 if(saveQueueTimer){clearTimeout(saveQueueTimer);saveQueueTimer=null}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 737

```text
 try{localStorage.setItem(SAVE_KEY,JSON.stringify(SAVE))}catch(e){}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 738

```text
 refreshMenuStats()
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 739

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 740

```text
function queueRunSave(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 741

```text
 if(saveQueueTimer)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 742

```text
 saveQueueTimer=setTimeout(()=>{saveQueueTimer=null;try{localStorage.setItem(SAVE_KEY,JSON.stringify(SAVE))}catch(e){}refreshMenuStats()},1400)
```

**Explicação:** Lê ou grava dados persistentes do jogador no armazenamento local.

### Linha 743

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 744

```text
function flushRunSave(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 745

```text
 if(saveQueueTimer){clearTimeout(saveQueueTimer);saveQueueTimer=null}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 746

```text
 try{localStorage.setItem(SAVE_KEY,JSON.stringify(SAVE))}catch(e){}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 747

```text
 refreshMenuStats()
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 748

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 749

```text
document.addEventListener('visibilitychange',()=>{if(document.hidden)flushRunSave()},{passive:true});
```

**Explicação:** Registra um evento de interação ou ciclo de vida e define o que deve acontecer quando ele ocorrer.

### Linha 750

```text
window.addEventListener('pagehide',flushRunSave,{passive:true});
```

**Explicação:** Registra um evento de interação ou ciclo de vida e define o que deve acontecer quando ele ocorrer.

