# index.html — Parte 15

Linhas **3501 a 3536** da MOBILE87.

### Linha 3501

```text
   btn.onclick=(ev)=>{ev.preventDefault();ev.stopPropagation();void startScenarioTest(idx,scenarioTestJourney)};
```

**Explicação:** Define ação executada ao clicar/tocar.

### Linha 3502

```text
 });
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3503

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3504

```text
function bindDirectQaScenarioButtons(){refreshQaRealmLinks()}
```

**Explicação:** Declara função reutilizável.

### Linha 3505

```text
function refreshScenarioJourneyButtons(){const a=$('scenarioJourney1'),b=$('scenarioJourney2');if(a)a.classList.toggle('active',scenarioTestJourney===1);if(b)b.classList.toggle('active',scenarioTestJourney===2)}
```

**Explicação:** Declara função reutilizável.

### Linha 3506

```text
if($('scenarioJourney1'))$('scenarioJourney1').onclick=()=>{scenarioTestJourney=1;refreshScenarioJourneyButtons();refreshQaRealmLinks()};
```

**Explicação:** Executa condicionalmente.

### Linha 3507

```text
if($('scenarioJourney2'))$('scenarioJourney2').onclick=()=>{scenarioTestJourney=2;refreshScenarioJourneyButtons();refreshQaRealmLinks()};
```

**Explicação:** Executa condicionalmente.

### Linha 3508

```text
if($('kharvorDropQuick'))$('kharvorDropQuick').onclick=()=>void startKharvorQuick('drop');if($('kharvorLowerQuick'))$('kharvorLowerQuick').onclick=()=>void startKharvorQuick('lower');if($('nerisDropQuick'))$('nerisDropQuick').onclick=()=>void startNerisQuick('drop');if($('nerisLowerQuick'))$('nerisLowerQuick').onclick=()=>void startNerisQuick('lower');if($('vhalorDropQuick'))$('vhalorDropQuick').onclick=()=>void startVhalorQuick('drop');if($('vhalorFloodQuick'))$('vhalorFloodQuick').onclick=()=>void startVhalorQuick('flooded');if($('vhalorFloodExitQuick'))$('vhalorFloodExitQuick').onclick=()=>void startVhalorFloodExitQuick();if($('vhalorFloodExitTop'))$('vhalorFloodExitTop').onclick=()=>void startVhalorFloodExitQuick();if($('riverQuick'))$('riverQuick').onclick=()=>void startTobogganQuick(0,null);if($('lavaQuick'))$('lavaQuick').onclick=()=>void startTobogganQuick(2,'lava');if($('floodedQuick'))$('floodedQuick').onclick=()=>void startTobogganQuick(3,'flooded');
```

**Explicação:** Executa condicionalmente.

### Linha 3509

```text
if(UI.scenarioTestPanel)UI.scenarioTestPanel.addEventListener('click',e=>{const f=e.target.closest('[data-final-test]');if(f){void startFinalSceneTest(f.dataset.finalTest)}});refreshQaRealmLinks();unlockAllPcQaScenarios();
```

**Explicação:** Executa condicionalmente.

### Linha 3510

```text
UI.shelterPrompt.onclick=()=>{if(shelter3D&&shelter3D.position.z>-8&&Math.round(lane)===2&&targetLane===2)openShelterChoice();else toast('POSTO DE APOIO À DIREITA • ENTRE NA FAIXA DIREITA')};$('shelterAccept').onclick=enterShelter;$('shelterDecline').onclick=declineShelter;$('hydr20').onclick=()=>buyShelterHydration(20,40);$('hydr50').onclick=()=>buyShelterHydration(50,90);$('hydr75').onclick=()=>buyShelterHydration(75,130);$('hydrFull').onclick=()=>buyShelterHydration(100,0,true);$('shelterExit').onclick=exitShelter;
```

**Explicação:** Define ação executada ao clicar/tocar.

### Linha 3511

```text
UI.pause.onclick=()=>pauseGame(true);$('resume').onclick=()=>{UI.pausePanel.classList.remove('show');paused=false;clock.getDelta()};$('restart').onclick=()=>{UI.pausePanel.classList.remove('show');endlessMode?startEndless():requestJourneyStart(currentJourney)};$('backMenu').onclick=backMenu;$('revive1').onclick=()=>reviveWithLives(1);$('revive2').onclick=()=>reviveWithLives(2);$('revive3').onclick=()=>reviveWithLives(3);$('reviveAd').onclick=reviveWithRewardedAd;$('rewardedAdCancel').onclick=()=>{if(rewardedAdRunning)closeRewardedAd()};$('giveUpRun').onclick=()=>{void giveUpRun()};$('journeyNext').onclick=()=>{UI.journeyEndPanel.classList.remove('show');requestJourneyStart(2)};$('journeyMenu').onclick=()=>{UI.journeyEndPanel.classList.remove('show');backMenu()};$('realmCheckpointContinue').onclick=()=>{void continueRealmCheckpoint()};$('realmCheckpointExit').onclick=exitRealmCheckpoint;$('realmCheckpointDouble').onclick=()=>{void doubleRealmCheckpointReward()};
```

**Explicação:** Define ação executada ao clicar/tocar.

### Linha 3512

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 3513

```text
window.addEventListener('load',async()=>{
```

**Explicação:** Registra evento de interação.

### Linha 3514

```text
 window.__MR_BUILD='MAX-HEALMS-MOBILE87-ALPHA2-FINALS';
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 3515

```text
 settingsFromSave();applyAudioSettings();refreshMenuStats();applyLanguage(gameLanguage,false);renderAccountStatus();const bb=$('buildBrand');if(bb)bb.innerHTML=LOCAL_TEST_BUILD?'MAX HEALMS':'MAX HEALMS';if(NATIVE_PRODUCTION){const issues=productionReadinessIssues();if(issues.length){throw new Error('BUILD ANDROID INCOMPLETA: '+issues.join(' • '))}}
```

**Explicação:** Controla áudio e efeitos.

### Linha 3516

```text
 try{await PrivacyService.initialize()}catch(e){console.warn('PRIVACY INIT',e)}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3517

```text
 try{
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3518

```text
   if(UI.loadingText)UI.loadingText.textContent='CARREGANDO MOTOR 3D';
```

**Explicação:** Executa condicionalmente.

### Linha 3519

```text
   const engine=await window.__MR_ENGINE_READY;
```

**Explicação:** Declara constante JavaScript.

### Linha 3520

```text
   if(!engine||!engine.ok){
```

**Explicação:** Executa condicionalmente.

### Linha 3521

```text
     UI.loading.classList.add('hidden');UI.error.classList.add('show');
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3522

```text
     const p=document.getElementById('engineErrorText')||UI.error.querySelector('p');
```

**Explicação:** Declara constante JavaScript.

### Linha 3523

```text
     const dg=document.getElementById('engineDiag');
```

**Explicação:** Declara constante JavaScript.

### Linha 3524

```text
     if(p){if(engine&&String(engine.stage).includes('LICENÇA'))p.innerHTML='<b>Cópia/origem não autorizada.</b> Abra esta build pelo arquivo <b>ABRIR-MAX-HEALMS-PLAYER.bat</b>.';else p.innerHTML='Falha no carregamento de <b>'+((engine&&engine.stage)||'motor 3D')+'</b>. Abra pelo <b>ABRIR-MAX-HEALMS-PLAYER.bat</b>. A 0.27 também tenta reaproveitar automaticamente o motor 3D de uma build anterior que já funcionou.';}
```

**Explicação:** Executa condicionalmente.

### Linha 3525

```text
     if(dg)dg.textContent=(engine&&engine.attempts||window.__MR_ENGINE_LOG||[]).join('\n');
```

**Explicação:** Executa condicionalmente.

### Linha 3526

```text
     console.error('MAX HEALMS ENGINE',engine,window.__MR_ENGINE_LOG);return;
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3527

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3528

```text
   if(UI.loadingText)UI.loadingText.textContent='CONSTRUINDO REINO 3D';
```

**Explicação:** Executa condicionalmente.

### Linha 3529

```text
   setTimeout(init3D,40);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3530

```text
 }catch(e){
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3531

```text
   console.error('MAX HEALMS BOOT',e);UI.loading.classList.add('hidden');UI.error.classList.add('show');
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3532

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3533

```text
});
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3534

```text
})();
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3535

```text
</script>
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3536

```text
</body></html>
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

