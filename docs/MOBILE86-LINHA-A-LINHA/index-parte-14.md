# index.html — Parte 14

Linhas **3251 a 3500** da MOBILE86.

### Linha 3251

```text
 playHero('Roll_Dodge_1',.04);
```

**Explicação:** Controla Varek.

### Linha 3252

```text
 if(currentAction){
```

**Explicação:** Executa condicionalmente.

### Linha 3253

```text
   currentAction.paused=false;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3254

```text
   const dur=currentAction.getClip?.().duration||.92;
```

**Explicação:** Declara constante JavaScript.

### Linha 3255

```text
   currentAction.timeScale=Math.max(.85,Math.min(2.35,dur/.92));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3256

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3257

```text
 playSFX('slide')
```

**Explicação:** Controla áudio e efeitos.

### Linha 3258

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3259

```text
function applyBarrierSlideVisual(){
```

**Explicação:** Declara função reutilizável.

### Linha 3260

```text
 if(!heroRoot||slideTimer<=0||tobogganActive)return;
```

**Explicação:** Executa condicionalmente.

### Linha 3261

```text
 // A animação GLB faz o corpo rolar/deslizar. Aqui só baixamos levemente a raiz para garantir passagem visual sob a barreira.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3262

```text
 heroRoot.position.y=kharvorLayerY+jumpY-.075;
```

**Explicação:** Controla Varek.

### Linha 3263

```text
 heroRoot.rotation.x=-.025
```

**Explicação:** Controla Varek.

### Linha 3264

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3265

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 3266

```text
function freezeHuntersAtDeath(){huntersVisible=false;hunters.forEach(h=>{if(h.action)h.action.paused=true})}
```

**Explicação:** Declara função reutilizável.

### Linha 3267

```text
function clearDangerZone(){for(let i=obstacles.length-1;i>=0;i--){const o=obstacles[i];if(Math.abs(o.position.z)<7){itemGroup.remove(o);disposeObject(o);obstacles.splice(i,1)}}for(const h of tobogganHazards){if(Math.abs(h.userData.z)<7)h.userData.hit=true}}
```

**Explicação:** Declara função reutilizável.

### Linha 3268

```text
function beginDeath(reason,message,delay=650){if(deathRecorded)return;if(tobogganActive){playTobogganPose();if(heroRoot){const _lava=tobogganGroup?.userData?.mode==='lava';heroRoot.position.y=tobogganY(0)+(_lava?LAVA_HERO_Y:RIVER_HERO_Y)+(_lava?LAVA_CART_LIFT:0);heroRoot.position.z=RIVER_HERO_Z;heroRoot.rotation.x=_lava?-.06:-.12}applyTobogganCrouchPose(hero,false);playLyraTobogganPose()}stopTobogganWind();deathRecorded=true;gameOver=true;lastDeathReason=reason;lastDeathMessage=message;const dw=$('descentWarning');if(dw)dw.classList.remove('show');if(UI.effortPulse)UI.effortPulse.classList.remove('show');effortTimer=0;freezeHuntersAtDeath();if(lyraAction)lyraAction.paused=true;setTimeout(()=>{if(!gameOver)return;paused=true;UI.reviveTitle.textContent=reason==='hole'?'Varek caiu no abismo':reason==='dehydration'?'Varek perdeu as forças':reason==='toboggan'?'A descida venceu Varek':'As caçadoras alcançaram Varek';UI.reviveText.textContent=message+' • Continue deste ponto ou volte ao início.';UI.reviveWallet.textContent='💎 '+gemText();updateDeathRankPreview();updateReviveOffer();const rs=$('runEconomySummary');if(rs)rs.innerHTML=renderSessionMonetizationSummary(null,true);UI.revivePanel.classList.add('show');updateHUD()},delay)}
```

**Explicação:** Declara função reutilizável.

### Linha 3269

```text
function fallIntoAbyss(){haptic([38,28,62]);
```

**Explicação:** Declara função reutilizável.

### Linha 3270

```text
 if(gameOver||holeRecoveryActive||fallingDeath)return;
```

**Explicação:** Executa condicionalmente.

### Linha 3271

```text
 lives=Math.max(0,lives-1);hunterStage=Math.min(3,hunterStage+1);fallingDeath=true;fallTimer=0;jumpY=0;jumpV=0;slideTimer=0;freezeHuntersAtDeath();if(lyraAction)lyraAction.paused=true;if(UI.fallFlash)UI.fallFlash.classList.add('show');effortBurst('BURACO • -1 VIDA');playSFX('fall');updateHUD();
```

**Explicação:** Controla Lyra.

### Linha 3272

```text
 if(lives<=0){lives=0;gameOver=true;playSFX('lifeLost');beginDeath('hole','Varek caiu no abismo e ficou sem vidas',700);return}
```

**Explicação:** Executa condicionalmente.

### Linha 3273

```text
 holeRecoveryActive=true;hitCooldown=2.2;toast('BURACO • -1 VIDA • '+lives+(lives===1?' VIDA RESTANTE':' VIDAS RESTANTES'));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3274

```text
 setTimeout(()=>{if(gameOver||deathRecorded)return;fallingDeath=false;holeRecoveryActive=false;fallTimer=0;clearDangerZone();if(heroRoot){heroRoot.position.y=kharvorLayerY;heroRoot.rotation.x=0;heroRoot.rotation.z=0}if(UI.fallFlash)UI.fallFlash.classList.remove('show');hunters.forEach(h=>{h.root.visible=false;h.z=h.restZ;h.targetZ=h.restZ;if(h.action)h.action.paused=false});huntersVisible=false;if(lyraAction)lyraAction.paused=false;slideTimer=0;playHero('Running',.08);forceLyraRun();setLyraJourneyState();clock.getDelta();updateHUD();setTimeout(()=>triggerHunters(),300)},820)
```

**Explicação:** Controla Jornada 1/2 e progressão.

### Linha 3275

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3276

```text
function dehydrationDeath(){if(gameOver)return;water=0;fallingDeath=false;playHero('Roll_Dodge_1',.10);toast('Varek perdeu as forças por desidratação');beginDeath('dehydration','A fuga foi interrompida por desidratação e exaustão',500);updateHUD()}
```

**Explicação:** Declara função reutilizável.

### Linha 3277

```text
function hurt(text){if(hitCooldown>0||gameOver||shelterActive)return;if(shieldCharges>0){shieldCharges--;hitCooldown=.7;playSFX('shield');toast('ESCUDO BLOQUEOU O ERRO');return}hitCooldown=1.1;lives--;hunterStage=Math.min(3,hunterStage+1);playSFX('hit');triggerHunters();if(lives<=0){lives=0;playSFX('lifeLost');jumpY=0;jumpV=0;slideTimer=0;playHero('Roll_Dodge_1',.08);beginDeath('collision','As caçadoras alcançaram Varek',600)}else setTimeout(()=>toast(text+' • -1 VIDA'),420)}
```

**Explicação:** Declara função reutilizável.

### Linha 3278

```text
function resumeAfterContinue(extraLives,sourceLabel){lives=extraLives;gameOver=false;paused=false;deathRecorded=false;fallingDeath=false;holeRecoveryActive=false;fallTimer=0;hitCooldown=1.8;tobogganHitCooldown=1.6;clearDangerZone();if(lastDeathReason==='dehydration')water=Math.max(35,water);if(heroRoot){heroRoot.position.y=tobogganActive?(tobogganY(0)+(tobogganGroup?.userData?.mode==='lava'?LAVA_HERO_Y:RIVER_HERO_Y)+(tobogganGroup?.userData?.mode==='lava'?LAVA_CART_LIFT:0)):kharvorLayerY;heroRoot.position.z=tobogganActive?RIVER_HERO_Z:0;heroRoot.rotation.x=tobogganActive?-.12:0;heroRoot.rotation.z=0}if(UI.fallFlash)UI.fallFlash.classList.remove('show');UI.revivePanel.classList.remove('show');hunters.forEach(h=>{h.root.visible=false;h.z=h.restZ;h.targetZ=h.restZ;if(h.action)h.action.paused=false});huntersVisible=false;if(lyraAction)lyraAction.paused=false;if(tobogganActive){slideTimer=999;playTobogganPose();playLyraTobogganPose()}else{slideTimer=0;playHero('Running',.10);forceLyraRun()}setLyraJourneyState();toast(sourceLabel+' • +'+extraLives+(extraLives===1?' VIDA':' VIDAS'));lastDeathReason='';lastDeathMessage='';clock.getDelta();updateHUD()}
```

**Explicação:** Declara função reutilizável.

### Linha 3279

```text
function reviveWithLives(extraLives){if(!gameOver)return;if(reviveStep>=REVIVE_SEQUENCE.length){setReviveStatus('As continuações pagas desta corrida terminaram. Use o anúncio premiado, se disponível, ou volte ao início.');return}const offer=REVIVE_SEQUENCE[reviveStep];if(extraLives!==offer.lives){setReviveStatus('A oferta atual é +'+offer.lives+(offer.lives===1?' vida':' vidas')+' por 💎 '+offer.price+'.');return}const price=offer.price;if(!canAffordGems(price)){const missing=Math.max(0,price-SAVE.gems);setReviveStatus('SALDO INSUFICIENTE • você possui 💎 '+SAVE.gems+' e precisa de 💎 '+price+'. Faltam 💎 '+missing+'. Você pode assistir ao anúncio para continuar com +1 vida.');toast('SALDO DE DIAMANTES INSUFICIENTE');return}if(!spendGems(price)){setReviveStatus('Não foi possível descontar os diamantes. Tente novamente.');return}reviveStep++;saveState();setReviveStatus('Pagamento confirmado • 💎 '+price+' descontados.',true);resumeAfterContinue(extraLives,'CONTINUAR • 💎 '+price)}
```

**Explicação:** Declara função reutilizável.

### Linha 3280

```text
function finishRewardedAd(result){if(rewardedAdTimer){clearInterval(rewardedAdTimer);rewardedAdTimer=null}rewardedAdRunning=false;const p=$('rewardedAdPanel');if(p)p.classList.remove('show');const done=rewardedAdResolve;rewardedAdResolve=null;if(done)done(!!result)}
```

**Explicação:** Declara função reutilizável.

### Linha 3281

```text
function closeRewardedAd(){finishRewardedAd(false)}
```

**Explicação:** Declara função reutilizável.

### Linha 3282

```text
function simulateRewardedAd(mode='continue'){return new Promise(resolve=>{if(rewardedAdRunning){resolve(false);return}rewardedAdRunning=true;rewardedAdResolve=resolve;const realmBonus=mode==='realmBonus';let left=5;const panel=$('rewardedAdPanel'),count=$('rewardedAdCount'),txt=$('rewardedAdText');if(count)count.textContent=left;if(txt)txt.textContent=realmBonus?'Assista até o fim para dobrar a recompensa deste reino.':'Ao concluir, você recebe +1 vida e retorna deste ponto. Limite: 2 anúncios por corrida.';panel?.classList.add('show');rewardedAdTimer=setInterval(()=>{left--;if(count)count.textContent=Math.max(0,left);if(left<=0){clearInterval(rewardedAdTimer);rewardedAdTimer=null;if(txt)txt.textContent=realmBonus?'RECOMPENSA x2 LIBERADA':'RECOMPENSA LIBERADA • +1 VIDA';setTimeout(()=>finishRewardedAd(true),300)}},1000)})}
```

**Explicação:** Declara função reutilizável.

### Linha 3283

```text
function finishForcedInterstitial(result){if(forcedAdTimer){clearInterval(forcedAdTimer);forcedAdTimer=null}forcedAdRunning=false;$('interstitialAdPanel')?.classList.remove('show');const done=forcedAdResolve;forcedAdResolve=null;if(done)done(!!result)}
```

**Explicação:** Declara função reutilizável.

### Linha 3284

```text
function simulateForcedInterstitial(){return new Promise(resolve=>{if(forcedAdRunning){resolve(false);return}forcedAdRunning=true;forcedAdResolve=resolve;let left=5;const panel=$('interstitialAdPanel'),count=$('interstitialAdCount'),txt=$('interstitialAdText');if(count)count.textContent=left;if(txt)txt.textContent='Plano FREE • anúncio obrigatório após derrota. Premium remove este anúncio.';panel?.classList.add('show');forcedAdTimer=setInterval(()=>{left--;if(count)count.textContent=Math.max(0,left);if(left<=0){clearInterval(forcedAdTimer);forcedAdTimer=null;if(txt)txt.textContent='ANÚNCIO CONCLUÍDO • VOLTANDO AO MENU';setTimeout(()=>finishForcedInterstitial(true),350)}},1000)})}
```

**Explicação:** Declara função reutilizável.

### Linha 3285

```text
const AdService={
```

**Explicação:** Declara constante JavaScript.

### Linha 3286

```text
 async showRewardedContinue(){try{if(window.MaxHealmsAds&&typeof window.MaxHealmsAds.showRewardedContinue==='function'){return !!(await window.MaxHealmsAds.showRewardedContinue())}}catch(e){console.warn('Rewarded bridge',e)}if(NATIVE_PRODUCTION){console.warn('ADS: ponte nativa ausente em produção');return false}return simulateRewardedAd()},
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3287

```text
 async showRewardedRealmBonus(){try{if(window.MaxHealmsAds&&typeof window.MaxHealmsAds.showRewardedRealmBonus==='function'){return !!(await window.MaxHealmsAds.showRewardedRealmBonus())}if(window.MaxHealmsAds&&typeof window.MaxHealmsAds.showRewardedContinue==='function'){return !!(await window.MaxHealmsAds.showRewardedContinue())}}catch(e){console.warn('Rewarded realm bridge',e)}if(NATIVE_PRODUCTION){console.warn('ADS: ponte rewarded ausente em produção');return false}return simulateRewardedAd('realmBonus')},
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3288

```text
 async showInterstitialAfterRun(){try{if(window.MaxHealmsAds&&typeof window.MaxHealmsAds.showInterstitialAfterRun==='function'){return !!(await window.MaxHealmsAds.showInterstitialAfterRun())}}catch(e){console.warn('Interstitial bridge',e)}if(NATIVE_PRODUCTION){console.warn('ADS: ponte nativa ausente em produção');return false}return simulateForcedInterstitial()}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3289

```text
};
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3290

```text
function shouldShowForcedAdAfterDeath(){return !SAVE.premiumOwned&&!forcedAdRunning&&(Date.now()-Number(SAVE.lastForcedAdAt||0)>=FORCED_AD_MIN_INTERVAL_MS)}
```

**Explicação:** Declara função reutilizável.

### Linha 3291

```text
async function showForcedAdAfterDeathIfNeeded(){if(!shouldShowForcedAdAfterDeath())return false;const shown=await AdService.showInterstitialAfterRun();if(shown){runInterstitialAds++;if(currentRunResult&&currentRunResult.economy){currentRunResult.economy.interstitialAds=Number(currentRunResult.economy.interstitialAds||0)+1;const idx=(SAVE.runs||[]).findIndex(r=>r.id===currentRunResult.id);if(idx>=0)SAVE.runs[idx]=currentRunResult}if(SAVE.qaSession){SAVE.qaSession.interstitialAds=(Number(SAVE.qaSession.interstitialAds)||0)+1;SAVE.qaSession.adEstimateBRL=(Number(SAVE.qaSession.adEstimateBRL)||0)+MONETIZATION_SIM.interstitialBRL}SAVE.lastForcedAdAt=Date.now();SAVE.forcedAdsShown=Number(SAVE.forcedAdsShown||0)+1;saveState()}return shown}
```

**Explicação:** Declara função assíncrona.

### Linha 3292

```text
async function reviveWithRewardedAd(){if(!gameOver||rewardedAdRunning)return;if(rewardedContinueCount>=MAX_REWARDED_CONTINUES_PER_RUN){setReviveStatus('Você já utilizou os 2 anúncios premiados permitidos nesta corrida.');return}setReviveStatus('Preparando anúncio premiado '+(rewardedContinueCount+1)+' de '+MAX_REWARDED_CONTINUES_PER_RUN+'...');const completed=await AdService.showRewardedContinue();if(!completed){setReviveStatus('Anúncio cancelado • nenhuma vida foi liberada.');updateReviveOffer();setReviveStatus('Anúncio cancelado • nenhuma vida foi liberada.');return}rewardedContinueCount++;runRewardedAds++;updateReviveOffer();resumeAfterContinue(1,'ANÚNCIO '+rewardedContinueCount+' DE '+MAX_REWARDED_CONTINUES_PER_RUN+' CONCLUÍDO')}
```

**Explicação:** Declara função assíncrona.

### Linha 3293

```text
let giveUpRunBusy=false;
```

**Explicação:** Declara variável mutável.

### Linha 3294

```text
async function giveUpRun(){
```

**Explicação:** Declara função assíncrona.

### Linha 3295

```text
 if(giveUpRunBusy)return;giveUpRunBusy=true;
```

**Explicação:** Executa condicionalmente.

### Linha 3296

```text
 const btn=$('giveUpRun');const oldText=btn?btn.textContent:'';if(btn){btn.disabled=true;btn.textContent=SAVE.premiumOwned?'VOLTANDO...':'ANÚNCIO E VOLTAR...'}
```

**Explicação:** Declara constante JavaScript.

### Linha 3297

```text
 try{
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3298

```text
   let finalRun=null;if(gameOver)finalRun=recordRun();
```

**Explicação:** Declara variável mutável.

### Linha 3299

```text
   if(finalRun&&UI.reviveRank){UI.reviveRank.textContent='🏆 VOCÊ FICOU NA POSIÇÃO LOCAL #'+finalRun.rank;await new Promise(resolve=>setTimeout(resolve,900))}
```

**Explicação:** Executa condicionalmente.

### Linha 3300

```text
   UI.revivePanel.classList.remove('show');if(UI.effortPulse)UI.effortPulse.classList.remove('show');effortTimer=0;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3301

```text
   try{await Promise.race([showForcedAdAfterDeathIfNeeded(),new Promise(resolve=>setTimeout(()=>resolve(false),9000))])}catch(e){console.warn('INTERSTITIAL RETURN',e)}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3302

```text
 }finally{
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3303

```text
   if(forcedAdRunning)finishForcedInterstitial(false);gameOver=false;paused=false;deathRecorded=false;reviveStep=0;if(!SAVE.journey2Unlocked)currentJourney=1;backMenu();
```

**Explicação:** Executa condicionalmente.

### Linha 3304

```text
   if(btn){btn.disabled=false;btn.textContent=oldText||'VOLTAR AO MENU'}giveUpRunBusy=false
```

**Explicação:** Executa condicionalmente.

### Linha 3305

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3306

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3307

```text
function update(dt){
```

**Explicação:** Declara função reutilizável.

### Linha 3308

```text
 updateAmbientAudio(dt);
```

**Explicação:** Controla áudio e efeitos.

### Linha 3309

```text
 if(shelterChoiceOpen){if(mixer)mixer.update(dt*.28);if(lyraRoot)lyraRoot.visible=false;updateHunters(dt*.15);updateHUD();return}
```

**Explicação:** Executa condicionalmente.

### Linha 3310

```text
 if(shelterActive){shelterTimer=Math.max(0,shelterTimer-dt);UI.shelterCounter.textContent=fmtTime(shelterTimer);refreshShelterHydrationOffers();huntersVisible=false;hunters.forEach(h=>h.root.visible=false);if(lyraRoot)lyraRoot.visible=false;if(mixer)mixer.update(dt*.35);if(shelterTimer<=0)exitShelter();updateHUD();return}
```

**Explicação:** Executa condicionalmente.

### Linha 3311

```text
 if(!started||paused){if(finalFamilyMode){updateFamilyScene(dt);return}if(mixer&&!gameOver)mixer.update(dt*.55);if(!gameOver)updateHunters(dt);return}
```

**Explicação:** Executa condicionalmente.

### Linha 3312

```text
 if(fallingDeath&&!gameOver){if(heroRoot){fallTimer+=dt;heroRoot.position.y-=dt*(3.2+fallTimer*6.8);heroRoot.rotation.x+=dt*.72;heroRoot.rotation.z+=dt*.18}if(mixer)mixer.update(dt*.10);updateHUD();return}
```

**Explicação:** Executa condicionalmente.

### Linha 3313

```text
 if(gameOver){if(tobogganActive&&!fallingDeath){if(heroRoot){heroRoot.position.y=tobogganY(0)+RIVER_HERO_Y;heroRoot.position.z=RIVER_HERO_Z;heroRoot.rotation.x=-.12}if(currentAction)currentAction.paused=true;applyTobogganCrouchPose(hero,false);if(lyraRoot&&currentJourney===2){if(lyraAction)lyraAction.paused=true;applyTobogganCrouchPose(lyraModel,true)}return}if(fallingDeath&&heroRoot){fallTimer+=dt;heroRoot.position.y-=dt*(3.4+fallTimer*7.5);heroRoot.rotation.x+=dt*1.35;heroRoot.rotation.z+=dt*.48;camera.position.y=Math.max(1.25,camera.position.y-dt*.7)}if(mixer)mixer.update(dt*.12);return}
```

**Explicação:** Executa condicionalmente.

### Linha 3314

```text
 if(tobogganActive){updateToboggan(dt);updateHUD();return}
```

**Explicação:** Executa condicionalmente.

### Linha 3315

```text
 elapsed+=dt;distance+=speed*dt*DISTANCE_SCALE;const currentRealmProgress=distance-realmStartDistance;updateKharvorBridge(dt,currentRealmProgress);updateRunGuidance(currentRealmProgress);const rhythmTarget=mobileRhythmSpeed(currentRealmProgress);speed+=(rhythmTarget-speed)*Math.min(1,dt*(MOBILE_RUNNER?1.35:.8));water-=dt*(.52+speed*.008);updateHydrationWarnings();if(water<=0){dehydrationDeath();return}updateCurve(dt);effortTimer=Math.max(0,effortTimer-dt);if(UI.effortPulse)UI.effortPulse.classList.toggle('show',effortTimer>0);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3316

```text
 lane+=(targetLane-lane)*Math.min(1,dt*11);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3317

```text
 if(jumpY>0||jumpV>0){const wasAirborne=jumpY>0;jumpV-=18.8*dt;jumpY+=jumpV*dt;if(jumpY<=0){jumpY=0;jumpV=0;if(wasAirborne)playSFX('land')}}
```

**Explicação:** Executa condicionalmente.

### Linha 3318

```text
 slideTimer=Math.max(0,slideTimer-dt);slideCooldown=Math.max(0,slideCooldown-dt);hitCooldown=Math.max(0,hitCooldown-dt);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3319

```text
 if(heroRoot){heroRoot.position.x=LANE_X[0]+lane*2.25;heroRoot.position.y=kharvorLayerY+jumpY-(slideTimer>0?.035:0);heroRoot.rotation.y=Math.PI+(flipHero?Math.PI:0);heroRoot.rotation.z=(targetLane-lane)*-.11+(effortTimer>0?Math.sin(performance.now()*.035)*.025:0);heroRoot.rotation.x=effortTimer>0?-.045-Math.abs(Math.sin(performance.now()*.025))*.035:0}
```

**Explicação:** Executa condicionalmente.

### Linha 3320

```text
 const desired=slideTimer>0?'Roll_Dodge_1':speed>22.4?'RunFast':'Running';if(desired!==currentActionName)playHero(desired,desired==='Roll_Dodge_1'?.04:.13);if(currentAction){if(desired!=='Roll_Dodge_1')currentAction.timeScale=desired==='RunFast'?1.10:(desired==='Running'||desired==='Walking'?.96:1);if(currentAction.paused&&!tobogganActive)currentAction.paused=false}if(mixer)mixer.update(dt);if(slideTimer>0)applyBarrierSlideVisual();updateLyra(dt);updateHunters(dt);trailPulse(dt);
```

**Explicação:** Declara constante JavaScript.

### Linha 3321

```text
 const dz=speed*dt;
```

**Explicação:** Declara constante JavaScript.

### Linha 3322

```text
 for(const seg of roadSegments){seg.position.z+=dz;if(seg.position.z>18)seg.position.z-=roadSegments.length*10.5;seg.position.x=trackCurveX(seg.position.z);seg.rotation.y=trackCurveYaw(seg.position.z)}
```

**Explicação:** Inicia repetição.

### Linha 3323

```text
 for(const obj of decorObjects){obj.position.z+=dz;if(obj.position.z>22)obj.position.z-=225;const u=obj.userData||{};obj.position.x=(u.baseX||0)+trackCurveX(obj.position.z)*.22;obj.position.y=(u.baseY||0);if(u.anim==='vineMonkey'){const t=elapsed*1.45+(u.phase||0),sway=Math.sin(t)*.42;obj.rotation.z=sway*.22*(u.side||1);obj.position.x+=(u.side||1)*Math.sin(t)*.42;obj.position.y=(u.baseY||0)+Math.cos(t*1.1)*.16}else if(u.anim==='lavaSpout'){const t=elapsed*2.2+(u.phase||0),p=.90+Math.sin(t)*.16;obj.scale.set(p,1.0+Math.max(0,Math.sin(t))*0.45,p);obj.position.y=(u.baseY||0)+Math.max(0,Math.sin(t))*.14}else if(u.anim==='bird'){const t=elapsed*1.7+(u.phase||0);obj.position.x+=(u.side||1)*Math.sin(t)*.55;obj.position.y=(u.baseY||0)+Math.sin(t*1.6)*.28;obj.rotation.z=Math.sin(t*1.6)*.16}else if(u.anim==='dustBanner'){const t=elapsed*1.1+(u.phase||0);obj.rotation.y=Math.sin(t)*.35;obj.position.y=(u.baseY||0)+Math.sin(t*1.4)*.08}else if(u.anim==='ribbon'){const t=elapsed*1.25+(u.phase||0);obj.rotation.z=Math.sin(t)*.30;obj.position.y=(u.baseY||0)+Math.cos(t*1.5)*.12}else if(u.anim==='fireflies'){const t=elapsed*1.15+(u.phase||0);obj.rotation.y=Math.sin(t*.7)*.18;obj.position.y=(u.baseY||0)+Math.sin(t)*.18;for(let i=0;i<obj.children.length;i++){const c=obj.children[i];c.position.y=.25+(i%4)*.43+Math.sin(t*1.4+i*.9)*.11;c.material.opacity=.46+.26*(.5+.5*Math.sin(t*2+i))}}else if(u.anim==='mistVeil'){const t=elapsed*.52+(u.phase||0);obj.position.x=(u.baseX||0)+trackCurveX(obj.position.z)*.22+Math.sin(t)*.65;obj.rotation.y=Math.sin(t*.7)*.06}else if(u.anim==='floatingShard'){const t=elapsed*.72+(u.phase||0);obj.rotation.y=t;obj.rotation.z=Math.sin(t)*.16;obj.position.y=(u.baseY||0)+Math.sin(t*1.2)*.32}}
```

**Explicação:** Inicia repetição.

### Linha 3324

```text
 for(const sc of sceneryChunks){sc.position.z+=dz*.52;const loop=sc.userData.loopLength||160;if(sc.position.z>34)sc.position.z-=loop;sc.position.x=(sc.userData.baseX||0)+trackCurveX(sc.position.z);sc.rotation.y=(sc.userData.baseRotY||0)+trackCurveYaw(sc.position.z)*.22}
```

**Explicação:** Inicia repetição.

### Linha 3325

```text
 updateShelter(dt,dz);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3326

```text
 spawnTimer-=dt;if(spawnTimer<=0){if(!isBridgeDropTransitionZone(currentRealmProgress))spawnObstacle();const rp=Math.max(0,getJourneyOrder().indexOf(realmIndex)),progression=endlessMode?Math.min(7,rp+endlessLap-1):rp,base=(currentJourney===2?1.18:1.34)-progression*(currentJourney===2?.055:.065),minGap=Math.max(currentJourney===2?.43:.49,(currentJourney===2?.49:.55)-progression*.014);spawnTimer=Math.max(minGap,base-(speed-RUN_SPEED_BASE)*.022)+Math.random()*(currentJourney===2?.30:.36)}
```

**Explicação:** Controla Jornada 1/2 e progressão.

### Linha 3327

```text
 starTimer-=dt;if(starTimer<=0){spawnStar();starTimer=.72+Math.random()*.75}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3328

```text
 gemTimer-=dt;if(gemTimer<=0){spawnGem();gemTimer=3.2+Math.random()*2.8}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3329

```text
 waterTimer-=dt;if(waterTimer<=0){spawnWater();waterTimer=10+Math.random()*7}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3330

```text
 for(let i=obstacles.length-1;i>=0;i--){const o=obstacles[i];o.position.z+=dz;o.position.x=LANE_X[o.userData.lane]+trackCurveX(o.position.z);o.rotation.y=trackCurveYaw(o.position.z);if(o.position.z>14){itemGroup.remove(o);disposeObject(o);obstacles.splice(i,1);continue}if(!o.userData.hit&&o.position.z>-.95&&o.position.z<1.05&&o.userData.lane===Math.round(lane)){let safe=false;if(o.userData.type==='branch')safe=slideTimer>.05;else if(o.userData.type==='hole')safe=jumpY>.82;else safe=jumpY>(o.userData.type==='rock'?1.15:.72);if(!safe){o.userData.hit=true;if(o.userData.type==='hole'){fallIntoAbyss();return}else hurt(o.userData.type==='branch'?'GALHO BAIXO':'COLISÃO')}else if(!o.userData.cleared){o.userData.cleared=true;effortBurst(o.userData.type==='branch'?'PASSOU RASPANDO':'SUPEROU OBSTÁCULO')}}else if(!o.userData.cleared&&o.position.z>.9&&o.position.z<2.0&&o.userData.lane===Math.round(lane)){o.userData.cleared=true;effortBurst('ESFORÇO')}}
```

**Explicação:** Inicia repetição.

### Linha 3331

```text
 for(let i=collectibles.length-1;i>=0;i--){const g=collectibles[i];g.position.z+=dz;g.position.x=LANE_X[g.userData.lane]+trackCurveX(g.position.z);if(g.rotation){g.rotation.y+=dt*3.2;g.rotation.x+=dt*.65}if(g.position.z>13){itemGroup.remove(g);disposeObject(g);collectibles.splice(i,1);continue}const heroX=LANE_X[0]+lane*2.25,dx=Math.abs(g.position.x-heroX);const magnetRange=g.userData.kind==='gem'?.55+(SAVE.upgrades.magnet||0)*.82:.62;if(!g.userData.collected&&g.position.z>-.9&&g.position.z<1.15&&dx<magnetRange){g.userData.collected=true;if(g.userData.kind==='gem'){SAVE.gems++;runGems++;playSFX('gemCollect')}else if(g.userData.kind==='star'){runStars++;SAVE.starsTotal++;playSFX('starCollect')}else if(g.userData.kind==='water'){water=Math.min(100,water+22);hydrationBand=water<15?0:(water<35?1:2);playSFX('waterCollect');toast('ÁGUA +22% • HIDRATAÇÃO '+Math.floor(water)+'%')}queueRunSave();itemGroup.remove(g);disposeObject(g);collectibles.splice(i,1)}}
```

**Explicação:** Inicia repetição.

### Linha 3332

```text
 const realmProgress=currentRealmProgress;updateOpeningImpact(dt,realmProgress);if(!tobogganAutoDone&&!realmLoading&&!REALMS[realmIndex].celestial&&!['vruins','forest','ruins'].includes(REALMS[realmIndex]?.id)){
```

**Explicação:** Declara constante JavaScript.

### Linha 3333

```text
   if(tobogganApproachStage<1&&realmProgress>350){tobogganApproachStage=1;showDescentWarning((currentJourney===1&&realmIndex===0)?'🌉 PONTE INSTÁVEL • DESCIDA À FRENTE':'⚠ DESCIDA FORTE À FRENTE • 180 m',2600)}
```

**Explicação:** Executa condicionalmente.

### Linha 3334

```text
   if(tobogganApproachStage<2&&realmProgress>430){tobogganApproachStage=2;const lava=REALMS[realmIndex]?.id==='ember';showDescentWarning(lava?'🔥 CALOR EXTREMO • DESCIDA VULCÂNICA À FRENTE':((currentJourney===1&&realmIndex===0)?'🌪 VENTO AUMENTANDO • RIO À FRENTE':'🌊 DESCIDA DO RIO PRÓXIMA • PREPARE-SE'),2500)}
```

**Explicação:** Executa condicionalmente.

### Linha 3335

```text
   if(tobogganApproachStage<3&&realmProgress>500){tobogganApproachStage=3;showDescentWarning(REALMS[realmIndex]?.id==='ember'?'🔥 DESCIDA VULCÂNICA AGORA • MANTENHA A TRAJETÓRIA':'🌊 DESCIDA DO RIO AGORA • MANTENHA A TRAJETÓRIA',1900)}
```

**Explicação:** Executa condicionalmente.

### Linha 3336

```text
   if(realmProgress>540)startToboggan(false)
```

**Explicação:** Executa condicionalmente.

### Linha 3337

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3338

```text
 if(!weatherTestMode&&autoRealm&&!realmLoading&&!journeyRunFinished&&!portalTransitioning&&!realmCheckpointPanelOpen&&realmProgress>realmTargetDistance())advanceJourneyRealm();
```

**Explicação:** Executa condicionalmente.

### Linha 3339

```text
 updateHUD();
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3340

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3341

```text
function render(){
```

**Explicação:** Declara função reutilizável.

### Linha 3342

```text
 if(!renderer)return;
```

**Explicação:** Executa condicionalmente.

### Linha 3343

```text
 if(tobogganActive){
```

**Explicação:** Executa condicionalmente.

### Linha 3344

```text
   const lava=tobogganGroup?.userData?.mode==='lava',center=tobogganCenterX(0),lookX=tobogganCenterX(-25),curve=tobogganYaw(-11),canoeBaseY=tobogganY(0)+(lava?LAVA_CART_LIFT:0);
```

**Explicação:** Declara constante JavaScript.

### Linha 3345

```text
   const cartX=tobogganCart?.position.x??center;
```

**Explicação:** Declara constante JavaScript.

### Linha 3346

```text
   const desiredCamX=lava?(cartX*.42+center*.08):(center*.16+(heroRoot?heroRoot.position.x*.18:0));
```

**Explicação:** Declara constante JavaScript.

### Linha 3347

```text
   camera.position.x+=(desiredCamX-camera.position.x)*(lava?.12:.12);
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 3348

```text
   camera.position.y+=((canoeBaseY+(lava?3.32:3.15))-camera.position.y)*(lava?.12:.12);
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 3349

```text
   camera.rotation.z+=(-curve*(lava?.08:.16)-camera.rotation.z)*(lava?.10:.10);
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 3350

```text
   camera.fov+=(((lava&&MOBILE_RUNNER)?79:73)-camera.fov)*(lava?.14:.10);
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 3351

```text
   camera.updateProjectionMatrix();
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 3352

```text
   camera.lookAt((lava?cartX*.22:lookX*.34),canoeBaseY+(lava?-.56:-.85),-13.8);
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 3353

```text
   renderer.render(scene,camera);return
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 3354

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3355

```text
 const curveLook=trackCurveX(-34)*.20,targetX=(heroRoot?heroRoot.position.x*.16:0)+curveLook,now=performance.now(),shakeX=Math.sin(now*.081)*openingCameraShake*.10,shakeY=Math.sin(now*.113+1.7)*openingCameraShake*.055,shakeR=Math.sin(now*.097+.8)*openingCameraShake*.012,coveredCam=MOBILE_RUNNER&&forestUnderpassActive;camera.position.x+=((targetX+shakeX)-camera.position.x)*.075;camera.position.y=(coveredCam?3.02:3.45)+kharvorLayerY+jumpY*.03+(effortTimer>0?Math.sin(now*.045)*.025:0)+shakeY+kharvorFallImpact*.72;camera.rotation.z+=(curveStrength*.012+shakeR-camera.rotation.z)*.065;camera.fov+=((coveredCam?58:60)+Math.max(0,speed-RUN_SPEED_BASE)*.42+(effortTimer>0?1.2:0)+kharvorFallImpact*5.5-camera.fov)*.05;camera.updateProjectionMatrix();camera.lookAt((targetX+shakeX*.35)*.28,(coveredCam?.96:1.15)+kharvorLayerY+shakeY*.28-kharvorFallImpact*1.30,-7.8);renderer.render(scene,camera)
```

**Explicação:** Declara constante JavaScript.

### Linha 3356

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3357

```text
function adjustMobileRenderScale(fps,now){
```

**Explicação:** Declara função reutilizável.

### Linha 3358

```text
 if(!MOBILE_RUNNER||!renderer||!started)return;
```

**Explicação:** Executa condicionalmente.

### Linha 3359

```text
 if(fps<36){mobilePerfLowSamples++;mobilePerfHighSamples=0}else if(fps>52){mobilePerfHighSamples++;mobilePerfLowSamples=0}else{mobilePerfLowSamples=Math.max(0,mobilePerfLowSamples-1);mobilePerfHighSamples=0}
```

**Explicação:** Executa condicionalmente.

### Linha 3360

```text
 if(mobilePerfLowSamples>=2&&!mobilePerfGuard){
```

**Explicação:** Executa condicionalmente.

### Linha 3361

```text
   mobilePerfGuard=true;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3362

```text
   if(decorGroup)decorGroup.visible=false;
```

**Explicação:** Executa condicionalmente.

### Linha 3363

```text
   weatherParticles=weatherParticles.slice(0,Math.max(4,Math.floor(weatherParticles.length*.65)));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3364

```text
   atmosphereParticles=atmosphereParticles.slice(0,Math.max(4,Math.floor(atmosphereParticles.length*.65)));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3365

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3366

```text
 if(mobilePerfHighSamples>=8&&mobilePerfGuard&&!tobogganActive&&!forestUnderpassActive&&!vhalorFloodVisualActive){
```

**Explicação:** Executa condicionalmente.

### Linha 3367

```text
   mobilePerfGuard=false;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3368

```text
   if(decorGroup)decorGroup.visible=true;
```

**Explicação:** Executa condicionalmente.

### Linha 3369

```text
   weatherParticles=[];atmosphereParticles=[];
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3370

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3371

```text
 if(now-mobilePerfLastAdjust<3000)return;
```

**Explicação:** Executa condicionalmente.

### Linha 3372

```text
 let next=mobilePixelRatioCurrent;
```

**Explicação:** Declara variável mutável.

### Linha 3373

```text
 if(mobilePerfLowSamples>=3){next=Math.max(MOBILE_PIXEL_RATIO_MIN,mobilePixelRatioCurrent-.05);mobilePerfLowSamples=0}
```

**Explicação:** Executa condicionalmente.

### Linha 3374

```text
 else if(mobilePerfHighSamples>=7){next=Math.min(MOBILE_PIXEL_RATIO_MAX,mobilePixelRatioCurrent+.02);mobilePerfHighSamples=0}
```

**Explicação:** Define caminho alternativo.

### Linha 3375

```text
 if(Math.abs(next-mobilePixelRatioCurrent)>.001){mobilePixelRatioCurrent=next;mobilePerfLastAdjust=now;renderer.setPixelRatio(Math.min(devicePixelRatio||1,mobilePixelRatioCurrent));renderer.setSize(W,H,false)}
```

**Explicação:** Executa condicionalmente.

### Linha 3376

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3377

```text
function loop(now){if(document.hidden){if(clock)clock.getDelta();requestAnimationFrame(loop);return}const dt=Math.min(.034,clock?clock.getDelta():.016);update(dt);updateVarekFootsteps(dt);updateWeatherVisual(dt);render();fpsAccum+=dt;fpsFrames++;if(fpsAccum>.70){const fps=Math.round(fpsFrames/fpsAccum);UI.fps.textContent=fps;adjustMobileRenderScale(fps,now||performance.now());fpsFrames=0;fpsAccum=0}requestAnimationFrame(loop)}
```

**Explicação:** Declara função reutilizável.

### Linha 3378

```text
function resize(){W=app.clientWidth;H=app.clientHeight;resizeWeatherCanvas();if(!renderer||!camera)return;if(MOBILE_RUNNER)renderer.setPixelRatio(Math.min(devicePixelRatio||1,mobilePixelRatioCurrent));renderer.setSize(W,H,false);camera.aspect=W/Math.max(1,H);camera.updateProjectionMatrix()}
```

**Explicação:** Declara função reutilizável.

### Linha 3379

```text
window.addEventListener('resize',resize);
```

**Explicação:** Registra evento de interação.

### Linha 3380

```text
window.addEventListener('pointerdown',()=>ensureAudio(),{once:true,passive:true});window.addEventListener('keydown',()=>ensureAudio(),{once:true});
```

**Explicação:** Registra evento de interação.

### Linha 3381

```text
window.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' '].includes(e.key))e.preventDefault();if(e.repeat)return;if(e.key==='ArrowLeft'||e.key.toLowerCase()==='a')move(-1);if(e.key==='ArrowRight'||e.key.toLowerCase()==='d')move(1);if(e.key==='ArrowUp'||e.key.toLowerCase()==='w')jump();if(e.key==='ArrowDown'||e.key.toLowerCase()==='s')slide();if(e.key===' '&&started)pauseGame(!paused);if(e.key.toLowerCase()==='r')advanceJourneyRealm();if(e.key.toLowerCase()==='e'&&shelterAvailable)enterShelter()},{passive:false});
```

**Explicação:** Registra evento de interação.

### Linha 3382

```text
// CONTROLE MOBILE 1:1 — sensibilidade acompanha a velocidade sem repetir a mesma ação.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3383

```text
let gesture=null,lastMobileActionAt=0;
```

**Explicação:** Declara variável mutável.

### Linha 3384

```text
function mobileSpeedRatio(){return Math.max(0,Math.min(1,(speed-RUN_SPEED_BASE)/Math.max(.001,RUN_SPEED_MAX-RUN_SPEED_BASE)))}
```

**Explicação:** Declara função reutilizável.

### Linha 3385

```text
function mobileSwipeThreshold(){return 15-mobileSpeedRatio()*5} // 15px no início -> 10px em alta velocidade
```

**Explicação:** Declara função reutilizável.

### Linha 3386

```text
function mobileActionGapMs(){return 170-mobileSpeedRatio()*55} // mais responsivo conforme a corrida acelera
```

**Explicação:** Declara função reutilizável.

### Linha 3387

```text
function fireGesture(dx,dy){
```

**Explicação:** Declara função reutilizável.

### Linha 3388

```text
 if(!started||paused||gameOver)return false;
```

**Explicação:** Executa condicionalmente.

### Linha 3389

```text
 const now=performance.now();if(now-lastMobileActionAt<mobileActionGapMs())return false;
```

**Explicação:** Declara constante JavaScript.

### Linha 3390

```text
 let acted=false;
```

**Explicação:** Declara variável mutável.

### Linha 3391

```text
 if(Math.abs(dx)>Math.abs(dy)){move(dx>0?1:-1);acted=true}
```

**Explicação:** Executa condicionalmente.

### Linha 3392

```text
 else if(dy<0){if(jumpY<=.05&&slideTimer<=0){jump();acted=true}}
```

**Explicação:** Define caminho alternativo.

### Linha 3393

```text
 else {if(slideTimer<=0&&slideCooldown<=0&&jumpY<=.5){slide();acted=true}}
```

**Explicação:** Define caminho alternativo.

### Linha 3394

```text
 if(acted)lastMobileActionAt=now;
```

**Explicação:** Executa condicionalmente.

### Linha 3395

```text
 return acted;
```

**Explicação:** Retorna/encerra a função.

### Linha 3396

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3397

```text
canvas.addEventListener('pointerdown',e=>{
```

**Explicação:** Registra evento de interação.

### Linha 3398

```text
 if(e.pointerType==='mouse')return;
```

**Explicação:** Executa condicionalmente.

### Linha 3399

```text
 e.preventDefault();
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3400

```text
 gesture={id:e.pointerId,x:e.clientX,y:e.clientY,fired:false};
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3401

```text
 try{canvas.setPointerCapture(e.pointerId)}catch(_){}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3402

```text
},{passive:false});
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3403

```text
canvas.addEventListener('pointermove',e=>{
```

**Explicação:** Registra evento de interação.

### Linha 3404

```text
 if(!gesture||gesture.id!==e.pointerId||gesture.fired)return;
```

**Explicação:** Executa condicionalmente.

### Linha 3405

```text
 e.preventDefault();
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3406

```text
 const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;
```

**Explicação:** Declara constante JavaScript.

### Linha 3407

```text
 if(Math.max(Math.abs(dx),Math.abs(dy))>=mobileSwipeThreshold()){
```

**Explicação:** Executa condicionalmente.

### Linha 3408

```text
   gesture.fired=fireGesture(dx,dy);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3409

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3410

```text
},{passive:false});
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3411

```text
function endGesture(e){
```

**Explicação:** Declara função reutilizável.

### Linha 3412

```text
 if(!gesture||gesture.id!==e.pointerId)return;
```

**Explicação:** Executa condicionalmente.

### Linha 3413

```text
 e.preventDefault();
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3414

```text
 if(!gesture.fired){
```

**Explicação:** Executa condicionalmente.

### Linha 3415

```text
   const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;
```

**Explicação:** Declara constante JavaScript.

### Linha 3416

```text
   if(Math.max(Math.abs(dx),Math.abs(dy))>=Math.max(8,mobileSwipeThreshold()-2))fireGesture(dx,dy);
```

**Explicação:** Executa condicionalmente.

### Linha 3417

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3418

```text
 gesture=null;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3419

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3420

```text
canvas.addEventListener('pointerup',endGesture,{passive:false});
```

**Explicação:** Registra evento de interação.

### Linha 3421

```text
canvas.addEventListener('pointercancel',()=>{gesture=null},{passive:false});
```

**Explicação:** Registra evento de interação.

### Linha 3422

```text
// Botões permanecem no HTML apenas como fallback interno, ocultos no mobile.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3423

```text
document.querySelectorAll('[data-act]').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();({left:()=>move(-1),right:()=>move(1),jump,slide}[b.dataset.act])()}));
```

**Explicação:** Registra evento de interação.

### Linha 3424

```text
if($('mobileMore'))$('mobileMore').onclick=()=>{const p=$('mobileMorePanel');if(!p)return;const open=p.classList.toggle('show');$('mobileMore').textContent=open?'✕ FECHAR':'☰ MAIS';if(open)setTimeout(()=>UI.menu.scrollTo({top:UI.menu.scrollHeight,behavior:'smooth'}),40)};
```

**Explicação:** Executa condicionalmente.

### Linha 3425

```text
$('finalReplay').onclick=()=>{hideFamilyScene();UI.finalVictory?.classList.remove('show');requestJourneyStart(2)};$('finalMenu').onclick=()=>{hideFamilyScene();backMenu()};$('start').onclick=()=>requestJourneyStart(1);$('journey2').onclick=()=>{if(SAVE.journey2Unlocked)requestJourneyStart(2)};if($('endless'))$('endless').onclick=()=>{if(SAVE.journey2Completed)startEndless()};
```

**Explicação:** Define ação de clique/toque.

### Linha 3426

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 3427

```text
const STORY_MEDIA={
```

**Explicação:** Declara constante JavaScript.

### Linha 3428

```text
  story:{src:'MAX-HEALMS-HISTORIA-V1.mp4',poster:'story-preview.jpg',label:'HISTÓRIA • A ORIGEM DA FUGA'},
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3429

```text
  trailer:{src:'MAX-HEALMS-TRAILER-PLAYSTORE-V1.mp4',poster:'trailer-preview.jpg',label:'TRAILER • RUN • SURVIVE • ESCAPE'}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3430

```text
};
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3431

```text
let activeStoryMedia='story';
```

**Explicação:** Declara variável mutável.

### Linha 3432

```text
function setStoryMedia(kind='story',autoplay=true){
```

**Explicação:** Declara função reutilizável.

### Linha 3433

```text
 const v=$('storyVideo'),cfg=STORY_MEDIA[kind]||STORY_MEDIA.story;if(!v)return;
```

**Explicação:** Declara constante JavaScript.

### Linha 3434

```text
 activeStoryMedia=kind;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3435

```text
 const label=$('storyVideoLabel');if(label)label.textContent=cfg.label;
```

**Explicação:** Declara constante JavaScript.

### Linha 3436

```text
 if(v.getAttribute('src')!==cfg.src){v.pause();v.setAttribute('poster',cfg.poster);v.setAttribute('src',cfg.src);v.load()}
```

**Explicação:** Executa condicionalmente.

### Linha 3437

```text
 if(autoplay){const p=v.play();if(p&&p.catch)p.catch(()=>{})}
```

**Explicação:** Executa condicionalmente.

### Linha 3438

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3439

```text
function openStoryMedia(){
```

**Explicação:** Declara função reutilizável.

### Linha 3440

```text
 stopTheme(420);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3441

```text
 UI.storyPanel.classList.add('show');
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3442

```text
 setStoryMedia(activeStoryMedia||'story',true);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3443

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3444

```text
function closeStoryMedia(){
```

**Explicação:** Declara função reutilizável.

### Linha 3445

```text
 const v=$('storyVideo');if(v){v.pause();v.currentTime=0;v.removeAttribute('src');v.load()}
```

**Explicação:** Declara constante JavaScript.

### Linha 3446

```text
 UI.storyPanel.classList.remove('show');
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3447

```text
 if(!started)setTimeout(()=>playMenuTheme(),180);
```

**Explicação:** Executa condicionalmente.

### Linha 3448

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3449

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 3450

```text
function renderSettings(){
```

**Explicação:** Declara função reutilizável.

### Linha 3451

```text
 const plan=$('settingsPlan'),pid=$('settingsPlayerId'),st=$('settingsStoreStatus'),ps=$('settingsPrivacyStatus'),hb=$('settingsHaptics'),mv=$('settingsMusicVolume'),sv=$('settingsSfxVolume'),av=$('settingsAmbientVolume');
```

**Explicação:** Declara constante JavaScript.

### Linha 3452

```text
 if(plan)plan.textContent=SAVE.premiumOwned?'PREMIUM • sem anúncios obrigatórios':'FREE • anúncio de intervalo após derrota';
```

**Explicação:** Executa condicionalmente.

### Linha 3453

```text
 if(hb)hb.textContent=hapticsOn?'📳 VIBRAÇÃO LIGADA':'📴 VIBRAÇÃO DESLIGADA';if(mv)mv.value=Math.round(musicVolume*100);if(sv)sv.value=Math.round(sfxVolume*100);if(av)av.value=Math.round(ambientVolume*100);if($('settingsMusicValue'))$('settingsMusicValue').textContent=Math.round(musicVolume*100)+'%';if($('settingsSfxValue'))$('settingsSfxValue').textContent=Math.round(sfxVolume*100)+'%';if($('settingsAmbientValue'))$('settingsAmbientValue').textContent=Math.round(ambientVolume*100)+'%';
```

**Explicação:** Executa condicionalmente.

### Linha 3454

```text
 if(pid)pid.textContent=SAVE.uuid||'—';if($('settingsLanguage'))$('settingsLanguage').value=gameLanguage;
```

**Explicação:** Executa condicionalmente.

### Linha 3455

```text
 const privacyReady=isHttpsUrl(PLAY_STORE_CONFIG.privacyPublicUrl)&&isHttpsUrl(PLAY_STORE_CONFIG.deleteAccountPublicUrl);
```

**Explicação:** Declara constante JavaScript.

### Linha 3456

```text
 if(st){st.hidden=!LOCAL_TEST_BUILD;st.textContent=BILLING_PREVIEW?'TESTE LOCAL • compras em reais ainda simuladas':'FATURAMENTO ANDROID CONECTADO'}
```

**Explicação:** Executa condicionalmente.

### Linha 3457

```text
 if(ps){ps.hidden=!LOCAL_TEST_BUILD;ps.textContent=privacyReady?'URLs legais públicas configuradas.':'TESTE LOCAL • URLs legais públicas ainda serão vinculadas ao Android.'}
```

**Explicação:** Executa condicionalmente.

### Linha 3458

```text
 renderAccountStatus();
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3459

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3460

```text
async function deletePlayerData(){
```

**Explicação:** Declara função assíncrona.

### Linha 3461

```text
 const linked=SAVE.accountMode==='account'&&SAVE.accountLinked===true;
```

**Explicação:** Declara constante JavaScript.

### Linha 3462

```text
 const ok=confirm(linked?'Excluir permanentemente esta conta MAX HEALMS e os dados associados? Esta ação não é apenas desativação.':'Excluir perfil e dados locais deste dispositivo?');if(!ok)return;
```

**Explicação:** Declara constante JavaScript.

### Linha 3463

```text
 try{if(linked){const r=await AuthService.deleteAccount(SAVE.accountEmail||SAVE.email);if(!r||r.ok===false)throw new Error(r?.message||'Exclusão não concluída')}localStorage.removeItem(SAVE_KEY);location.reload()}
```

**Explicação:** Manipula progresso/estado persistente do jogador.

### Linha 3464

```text
 catch(e){toast('NÃO FOI POSSÍVEL EXCLUIR A CONTA');console.error('ACCOUNT DELETE',e);alert('Não foi possível concluir a exclusão: '+String(e.message||e))}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3465

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3466

```text
$('settings').onclick=()=>{renderSettings();$('settingsPanel').classList.add('show');void syncPlayStorePrices()};
```

**Explicação:** Define ação de clique/toque.

### Linha 3467

```text
$('settingsClose').onclick=()=>$('settingsPanel').classList.remove('show');
```

**Explicação:** Define ação de clique/toque.

### Linha 3468

```text
$('settingsRestore').onclick=async()=>{await restoreCommercePurchases();renderSettings()};
```

**Explicação:** Define ação de clique/toque.

### Linha 3469

```text
$('settingsAccount').onclick=()=>{$('settingsPanel').classList.remove('show');pendingJourneyStart=null;renderProfile();UI.profilePanel.classList.add('show')};
```

**Explicação:** Define ação de clique/toque.

### Linha 3470

```text
$('settingsPrivacy').onclick=()=>openExternalResource('privacy');
```

**Explicação:** Define ação de clique/toque.

### Linha 3471

```text
$('settingsDeleteWeb').onclick=()=>openExternalResource('delete');
```

**Explicação:** Define ação de clique/toque.

### Linha 3472

```text
$('settingsDelete').onclick=()=>void deletePlayerData();
```

**Explicação:** Define ação de clique/toque.

### Linha 3473

```text
if($('settingsHaptics'))$('settingsHaptics').onclick=()=>{hapticsOn=!hapticsOn;SAVE.settings={...SAVE.settings,haptics:hapticsOn};saveState();if(hapticsOn)haptic([18,22,30]);renderSettings()};if($('settingsLanguage'))$('settingsLanguage').onchange=e=>{applyLanguage(e.target.value,false);renderSettings();renderProfile()};if($('profileLanguage'))$('profileLanguage').onchange=e=>{applyLanguage(e.target.value,false);renderProfile();renderSettings()};if($('settingsSave'))$('settingsSave').onclick=()=>{SAVE.settings={...SAVE.settings,language:gameLanguage,musicVolume,sfxVolume,ambientVolume,haptics:hapticsOn};saveState();toast(gt('settingsSaved'));renderSettings()};
```

**Explicação:** Executa condicionalmente.

### Linha 3474

```text
function saveAudioSetting(key,value){const v=Math.max(0,Math.min(1,Number(value)/100));if(key==='musicVolume')musicVolume=v;if(key==='sfxVolume')sfxVolume=v;if(key==='ambientVolume')ambientVolume=v;SAVE.settings={...SAVE.settings,[key]:v,sound:(musicVolume>0||sfxVolume>0||ambientVolume>0)};saveState();applyAudioSettings();renderSettings()}
```

**Explicação:** Declara função reutilizável.

### Linha 3475

```text
if($('settingsMusicVolume'))$('settingsMusicVolume').oninput=e=>saveAudioSetting('musicVolume',e.target.value);if($('settingsSfxVolume'))$('settingsSfxVolume').oninput=e=>saveAudioSetting('sfxVolume',e.target.value);if($('settingsAmbientVolume'))$('settingsAmbientVolume').oninput=e=>saveAudioSetting('ambientVolume',e.target.value);if($('testStarSound'))$('testStarSound').onclick=()=>{ensureAudio();playSFX('starCollect')};if($('testWaterSound'))$('testWaterSound').onclick=()=>{ensureAudio();playSFX('waterCollect')};
```

**Explicação:** Executa condicionalmente.

### Linha 3476

```text
$('story').onclick=openStoryMedia;$('storyClose').onclick=closeStoryMedia;$('storySkip').onclick=closeStoryMedia;$('storyFullBtn').onclick=()=>setStoryMedia('story',true);$('storyTrailerBtn').onclick=()=>setStoryMedia('trailer',true);
```

**Explicação:** Define ação de clique/toque.

### Linha 3477

```text
$('upgrades').onclick=()=>{renderUpgrades();UI.upgradePanel.classList.add('show')};$('upgradeClose').onclick=()=>UI.upgradePanel.classList.remove('show');
```

**Explicação:** Define ação de clique/toque.

### Linha 3478

```text
$('profile').onclick=()=>{pendingJourneyStart=null;renderProfile();UI.profilePanel.classList.add('show')};$('profileClose').onclick=()=>{pendingJourneyStart=null;UI.profilePanel.classList.remove('show')};$('profileSave').onclick=completeProfileSave;$('accountCreate').onclick=()=>void createPlayerAccount();$('accountSignIn').onclick=()=>void signInPlayerAccount();$('accountGuest').onclick=()=>void useGuestMode();$('accountSignOut').onclick=()=>void signOutPlayerAccount();$('accountPrivacyLink').onclick=()=>openExternalResource('privacy');
```

**Explicação:** Define ação de clique/toque.

### Linha 3479

```text
$('characterShop').onclick=()=>{renderShop();setCommerceStatus('');UI.shopPanel.classList.add('show');setTimeout(()=>{void ensureOutfitPreviews()},60);void syncPlayStorePrices()};$('shopClose').onclick=()=>UI.shopPanel.classList.remove('show');
```

**Explicação:** Define ação de clique/toque.

### Linha 3480

```text
$('diamondShop').onclick=()=>{renderShop();setCommerceStatus('');UI.diamondShopPanel.classList.add('show');void syncPlayStorePrices()};$('diamondShopClose').onclick=()=>UI.diamondShopPanel.classList.remove('show');
```

**Explicação:** Define ação de clique/toque.

### Linha 3481

```text
if($('buyPremium'))$('buyPremium').onclick=()=>purchaseCashProduct(PLAY_STORE_CONFIG.premiumSku);if($('revivePremium'))$('revivePremium').onclick=()=>purchaseCashProduct(PLAY_STORE_CONFIG.premiumSku);if($('restorePurchasesDiamonds'))$('restorePurchasesDiamonds').onclick=restoreCommercePurchases;
```

**Explicação:** Executa condicionalmente.

### Linha 3482

```text
function handleStoreInteraction(e){const ob=e.target.closest('[data-buy-outfit]');if(ob){e.preventDefault();e.stopPropagation();void buyOrEquipOutfit(ob.dataset.buyOutfit);return}const pb=e.target.closest('[data-premium-outfit]');if(pb){e.preventDefault();const id=pb.dataset.premiumOutfit;if(ownsOutfit(id))void buyOrEquipOutfit(id);else void purchaseCashProduct(PLAY_STORE_CONFIG.premiumSku);return}const db=e.target.closest('[data-buy-diamonds]');if(db){e.preventDefault();void purchaseCashProduct(db.dataset.buyDiamonds)}}
```

**Explicação:** Declara função reutilizável.

### Linha 3483

```text
UI.shopPanel.addEventListener('click',handleStoreInteraction);UI.diamondShopPanel.addEventListener('click',handleStoreInteraction);
```

**Explicação:** Registra evento de interação.

### Linha 3484

```text
$('ranking').onclick=()=>{renderRanking();UI.rankingPanel.classList.add('show')};$('rankingClose').onclick=()=>UI.rankingPanel.classList.remove('show');$('lastRunAnalysis').onclick=()=>{renderLastRunAnalysis();$('lastRunAnalysisPanel')?.classList.add('show')};if($('lastRunAnalysisMain'))$('lastRunAnalysisMain').onclick=()=>{renderLastRunAnalysis();$('lastRunAnalysisPanel')?.classList.add('show')};$('lastRunAnalysisClose').onclick=()=>$('lastRunAnalysisPanel')?.classList.remove('show');
```

**Explicação:** Define ação de clique/toque.

### Linha 3485

```text
$('legalClose').onclick=()=>$('legalPanel')?.classList.remove('show');$('legalPrivacy').onclick=()=>openExternalResource('privacy');$('legalDeleteWeb').onclick=()=>openExternalResource('delete');
```

**Explicação:** Define ação de clique/toque.

### Linha 3486

```text
$('realms').onclick=()=>{buildPlayerRealmGallery();UI.realmPanel.classList.add('show')};
```

**Explicação:** Define ação de clique/toque.

### Linha 3487

```text
if($('realmClose'))$('realmClose').onclick=()=>UI.realmPanel.classList.remove('show');
```

**Explicação:** Executa condicionalmente.

### Linha 3488

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 3489

```text
if($('pcScenarioHub'))$('pcScenarioHub').onclick=()=>openScenarioHub();
```

**Explicação:** Executa condicionalmente.

### Linha 3490

```text
if($('pcQaAlways'))$('pcQaAlways').onclick=()=>{if(started)returnToScenarioHub();else openScenarioHub()};
```

**Explicação:** Executa condicionalmente.

### Linha 3491

```text
if($('qaReturnBtn'))$('qaReturnBtn').onclick=()=>returnToScenarioHub();
```

**Explicação:** Executa condicionalmente.

### Linha 3492

```text
if($('pauseScenarioHub'))$('pauseScenarioHub').onclick=()=>returnToScenarioHub();
```

**Explicação:** Executa condicionalmente.

### Linha 3493

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 3494

```text
if($('scenarioTest'))$('scenarioTest').onclick=()=>UI.scenarioTestPanel?.classList.add('show');
```

**Explicação:** Executa condicionalmente.

### Linha 3495

```text
if($('scenarioTestClose'))$('scenarioTestClose').onclick=()=>{if(UI.scenarioTestPanel){UI.scenarioTestPanel.classList.remove('show');UI.scenarioTestPanel.style.display='none'}const q=$('qaReturnBtn');if(q)q.classList.remove('show');weatherTestMode=false;weatherTestOverride=null;autoRealm=true;started=false;paused=false;gameOver=false;UI.hud?.classList.remove('show');UI.pause?.classList.remove('show');UI.menu?.classList.remove('hidden');playHero('Walking',.12);playMenuTheme();};
```

**Explicação:** Executa condicionalmente.

### Linha 3496

```text
function refreshQaRealmLinks(){
```

**Explicação:** Declara função reutilizável.

### Linha 3497

```text
 document.querySelectorAll('[data-scenario-test]').forEach(btn=>{
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3498

```text
   const idx=Number(btn.dataset.scenarioTest);
```

**Explicação:** Declara constante JavaScript.

### Linha 3499

```text
   btn.disabled=false;btn.removeAttribute('disabled');btn.style.pointerEvents='auto';btn.style.opacity='1';
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3500

```text
   btn.onclick=(ev)=>{ev.preventDefault();ev.stopPropagation();void startScenarioTest(idx,scenarioTestJourney)};
```

**Explicação:** Define ação de clique/toque.

