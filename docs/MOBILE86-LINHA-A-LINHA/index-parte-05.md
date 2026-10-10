# index.html — Parte 5

Linhas **1001 a 1250** da MOBILE86.

### Linha 1001

```text
   '🛒 Pressão de compra: <b>'+a.pressure+'</b>'+pkg+'<br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1002

```text
   '💰 Receita de anúncios simulada desta sessão: <b>'+brl(a.adEstimate)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1003

```text
   '<small>Compras em dinheiro aparecem no painel CUSTO / GANHO acumulado desde o reset. Simulação interna para QA.</small>';
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1004

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1005

```text
function runSnapshot(){return {id:'run-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),name:(SAVE.nickname||SAVE.name||'JOGADOR'),distance:Math.floor(distance),stars:runStars,score:runScore(),finalTime:Math.max(0,elapsed+timePenalty),journey:endlessMode?'ENDLESS':currentJourney,mode:endlessMode?'endless':'campaign',completed:endlessMode?false:!!journeyRunFinished,at:Date.now(),economy:{startGems:runStartGems,collectedGems:runGems,realmRewards:runRealmRewards,spentGems:runSpentGems,endGems:SAVE.gems,rewardedAds:runRewardedAds,interstitialAds:runInterstitialAds,paidContinues:runPaidContinues,nextRevivePrice:(REVIVE_SEQUENCE[reviveStep]?.price||0)}}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1006

```text
function rankingSorted(extra=null){const rows=[...(SAVE.runs||[])];if(extra)rows.push(extra);return rows.sort((a,b)=>(Number(b.score)||0)-(Number(a.score)||0)||(Number(b.distance)||0)-(Number(a.distance)||0)||(Number(a.finalTime)||999999)-(Number(b.finalTime)||999999))}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1007

```text
function previewRunRank(){const x=runSnapshot(),rows=rankingSorted(x),idx=rows.findIndex(r=>r===x);return Math.max(1,idx+1)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1008

```text
function updateRunGuidance(progress){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1009

```text
 if(!started||paused||gameOver||tobogganActive||journeyRunFinished||realmLoading)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1010

```text
 if(lastGuidanceRealm!==realmIndex){lastGuidanceRealm=realmIndex;realmDistanceNotices=new Set();lastRankNoticeAt=distance+260}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1011

```text
 const order=getJourneyOrder(),pos=order.indexOf(realmIndex),target=realmTargetDistance(),remaining=Math.max(0,Math.ceil(target-progress));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1012

```text
 // Ranking aparece periodicamente sem ocupar o HUD.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1013

```text
 if(distance>=lastRankNoticeAt){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1014

```text
   toast('🏆 COLOCAÇÃO ATUAL • #'+previewRunRank());
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1015

```text
   lastRankNoticeAt=distance+520;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1016

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1017

```text
 // Avisos de aproximação do próximo reino.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1018

```text
 if(pos>=0&&pos<order.length-1){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1019

```text
   const next=REALMS[order[pos+1]];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1020

```text
   for(const mark of [1000,500,250,100]){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1021

```text
     if(remaining<=mark&&!realmDistanceNotices.has(mark)){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1022

```text
       realmDistanceNotices.add(mark);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1023

```text
       toast('🌍 FALTAM '+remaining+' m PARA '+next.short);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1024

```text
       break;
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1025

```text
     }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1026

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1027

```text
   if(remaining<=55&&!realmDistanceNotices.has(55)){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1028

```text
     realmDistanceNotices.add(55);toast('🌀 PORTAL DE '+next.short+' À FRENTE')
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1029

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1030

```text
 }else if(pos===order.length-1){
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1031

```text
   if(remaining<=250&&!realmDistanceNotices.has(250)){realmDistanceNotices.add(250);toast('🏁 FALTAM '+remaining+' m PARA O FINAL DA JORNADA')}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1032

```text
   else if(remaining<=80&&!realmDistanceNotices.has(80)){realmDistanceNotices.add(80);toast('🏁 CHEGADA À FRENTE')}
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 1033

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1034

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1035

```text
function recordRun(){if(currentRunResult)return currentRunResult;const row=runSnapshot();const e=row.economy||{},inferred=Math.max(0,(Number(e.startGems)||0)+(Number(e.collectedGems)||0)+(Number(e.realmRewards)||0)-(Number(e.endGems)||0));if(inferred>(Number(e.spentGems)||0))e.spentGems=inferred;SAVE.qaSession=(SAVE.qaSession&&typeof SAVE.qaSession==='object')?SAVE.qaSession:{startedAt:Date.now(),runs:0,distance:0,stars:0,collectedGems:0,realmRewards:0,spentGems:0,rewardedAds:0,interstitialAds:0,paidContinues:0,adEstimateBRL:0};const qs=SAVE.qaSession;qs.startedAt=qs.startedAt||Date.now();qs.runs=(Number(qs.runs)||0)+1;qs.distance=(Number(qs.distance)||0)+(Number(row.distance)||0);qs.stars=(Number(qs.stars)||0)+(Number(row.stars)||0);qs.collectedGems=(Number(qs.collectedGems)||0)+(Number(e.collectedGems)||0);qs.realmRewards=(Number(qs.realmRewards)||0)+(Number(e.realmRewards)||0);qs.spentGems=(Number(qs.spentGems)||0)+(Number(e.spentGems)||0);qs.rewardedAds=(Number(qs.rewardedAds)||0)+(Number(e.rewardedAds)||0);qs.paidContinues=(Number(qs.paidContinues)||0)+(Number(e.paidContinues)||0);qs.adEstimateBRL=(Number(qs.adEstimateBRL)||0)+(Number(e.rewardedAds)||0)*MONETIZATION_SIM.rewardedBRL+(Number(e.interstitialAds)||0)*MONETIZATION_SIM.interstitialBRL;if(endlessMode)SAVE.endlessBestDistance=Math.max(Number(SAVE.endlessBestDistance)||0,row.distance);SAVE.runs=Array.isArray(SAVE.runs)?SAVE.runs:[];SAVE.runs.push(row);if(SAVE.runs.length>100)SAVE.runs=rankingSorted().slice(0,100);SAVE.bestScore=Math.max(Number(SAVE.bestScore)||0,row.score);SAVE.bestDistance=Math.max(Number(SAVE.bestDistance)||0,row.distance);SAVE.bestStars=Math.max(Number(SAVE.bestStars)||0,row.stars);if(row.completed&&(Number(SAVE.bestTime)||0)<=0)SAVE.bestTime=row.finalTime;else if(row.completed)SAVE.bestTime=Math.min(Number(SAVE.bestTime)||row.finalTime,row.finalTime);const rows=rankingSorted(),rank=Math.max(1,rows.findIndex(r=>r.id===row.id)+1);currentRunResult={...row,rank};saveState();renderRanking();return currentRunResult}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1036

```text
function updateDeathRankPreview(prefix='SE ENCERRAR AGORA'){if(!UI.reviveRank)return;UI.reviveRank.textContent='🏆 '+prefix+' • POSIÇÃO LOCAL #'+previewRunRank()}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1037

```text
function refreshMenuStats(){const a=$('menuGems'),b=$('menuStars'),c=$('menuBest'),d=$('menuPlayer');if(a)a.textContent='💎 '+gemText();if(b)b.textContent='⭐ '+SAVE.starsTotal;if(c)c.textContent=SAVE.bestScore+' pts';if(d)d.textContent=(SAVE.profileCompleted?(SAVE.nickname||SAVE.name):'CADASTRAR').toUpperCase();const uw=$('upgradeWallet');if(uw)uw.textContent='💎 '+gemText()+(TEST_MODE?' • TESTE':'');refreshJourneyMenu();const mp=$('menuPlan');if(mp)mp.textContent=SAVE.premiumOwned?'PREMIUM • SEM ADS':'FREE • ADS'}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1038

```text
function renderUpgrades(){const grid=$('upgradeGrid');if(!grid)return;refreshMenuStats();const defs=[['shield','Escudo Inicial','Bloqueia colisões antes de perder vida.'],['magnet','Ímã de Diamantes','Aumenta o alcance lateral de coleta.'],['xp','Bônus de XP','Aumenta o XP recebido ao final da corrida.']];grid.innerHTML='';defs.forEach(([k,n,d])=>{const lv=SAVE.upgrades[k]||0,cost=[300,650,1100][lv]||0;const c=document.createElement('div');c.className='systemCard';c.innerHTML='<h3>'+n+'</h3><p>'+d+'</p><b>NÍVEL '+lv+'/3</b>';const b=document.createElement('button');b.className='btn '+(lv>=3?'secondary':'primary');b.style.marginTop='10px';b.textContent=lv>=3?'MAX':'MELHORAR • 💎'+cost;b.disabled=lv>=3;b.onclick=()=>{if(!canAffordGems(cost)){toast(gt('insufficient'));return}spendGems(cost);SAVE.upgrades[k]=lv+1;saveState();renderUpgrades();toast(n+' NÍVEL '+(lv+1)+(TEST_MODE?' • 💎∞ TESTE':''))};c.appendChild(b);grid.appendChild(c)})}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1039

```text
function renderRanking(){const r=$('rankingRows');if(!r)return;r.innerHTML='';const rows=[...SAVE.runs].sort((a,b)=>b.score-a.score).slice(0,10);if(!rows.length){r.innerHTML='<p>Nenhuma corrida finalizada ainda.</p>';return}rows.forEach((x,i)=>{const d=document.createElement('div');d.className='rankRow';d.innerHTML='<span>'+(i+1)+'</span><b>'+String(x.name||'JOGADOR').replace(/[<>]/g,'')+'</b><span>'+x.distance+'</span><span>'+x.stars+'</span><span>'+x.score+'</span>';r.appendChild(d)})}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1040

```text
function renderLastRunAnalysis(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1041

```text
 const box=$('lastRunAnalysisBody');if(!box)return;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1042

```text
 const runs=Array.isArray(SAVE.runs)?SAVE.runs:[],r=runs.length?runs[runs.length-1]:null;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1043

```text
 if(!r){box.innerHTML='Nenhuma corrida encerrada ainda.';return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1044

```text
 const eco=r.economy||{},inferredSpent=Math.max(0,(Number(eco.startGems)||0)+(Number(eco.collectedGems)||0)+(Number(eco.realmRewards)||0)-(Number(eco.endGems)||0)),virtualCost=Math.max(Number(eco.spentGems||0),inferredSpent),a=sessionMonetizationAnalysis({...r,economy:{...eco,spentGems:virtualCost}},false);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1045

```text
 const rankPos=Math.max(1,rankingSorted().findIndex(x=>x.id===r.id)+1);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1046

```text
 const pkg=a.packageSuggestion||null;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1047

```text
 const potentialPurchase=pkg?Number(pkg.price||0):0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1048

```text
 const grossPotential=a.adEstimate+potentialPurchase;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1049

```text
 const qs=SAVE.qaSession||{},commerce=commerceSinceReset(),adsTotal=Number(qs.adEstimateBRL||0),commercialNet=commerce.net+adsTotal;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1050

```text
 box.innerHTML=
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1051

```text
  '<b>RESULTADO</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1052

```text
  '🏃 Distância: <b>'+Number(r.distance||0).toLocaleString('pt-BR')+' m</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1053

```text
  '⏱ Tempo: <b>'+fmtTime(r.finalTime||0)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1054

```text
  '⭐ Estrelas: <b>'+Number(r.stars||0).toLocaleString('pt-BR')+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1055

```text
  '🏆 Pontos: <b>'+Number(r.score||0).toLocaleString('pt-BR')+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1056

```text
  '📍 Posição local: <b>#'+rankPos+'</b><br><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1057

```text
  '<b>ECONOMIA DO JOGADOR</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1058

```text
  '💎 Saldo inicial: <b>'+Number(eco.startGems||0)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1059

```text
  '💎 Coletados: <b>'+Number(eco.collectedGems||0)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1060

```text
  '💎 Recompensas de reino: <b>'+Number(eco.realmRewards||0)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1061

```text
  '💎 Gastos: <b>'+virtualCost+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1062

```text
  '💎 Saldo final registrado: <b>'+Number(eco.endGems??SAVE.gems)+'</b><br>'+
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 1063

```text
  '↻ Continuações pagas: <b>'+Number(eco.paidContinues||0)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1064

```text
  '▶ Rewarded: <b>'+Number(eco.rewardedAds||0)+'</b> • Intersticiais: <b>'+Number(eco.interstitialAds||0)+'</b><br><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1065

```text
  '<b>CUSTO X GANHO • SIMULAÇÃO</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1066

```text
  '🎮 Custo virtual do jogador: <b>💎 '+virtualCost+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1067

```text
  '💰 Ganho estimado já gerado por anúncios: <b>'+brl(a.adEstimate)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1068

```text
  '🛒 Pressão para compra: <b>'+a.pressure+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1069

```text
  '📦 Pacote mínimo sugerido: <b>'+(pkg?('💎 '+pkg.gems+' • '+brl(pkg.price)):'nenhum')+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1070

```text
  '💵 Ganho potencial bruto se houver essa compra: <b>'+brl(grossPotential)+'</b><br><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1071

```text
  '<b>TOTAL DA SESSÃO DESDE O RESET</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1072

```text
  '🏁 Corridas encerradas: <b>'+Number(qs.runs||0)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1073

```text
  '🏃 Distância acumulada: <b>'+Number(qs.distance||0).toLocaleString('pt-BR')+' m</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1074

```text
  '⭐ Estrelas acumuladas: <b>'+Number(qs.stars||0).toLocaleString('pt-BR')+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1075

```text
  '💎 Coletados acumulados: <b>'+Number(qs.collectedGems||0)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1076

```text
  '💎 Gastos acumulados: <b>'+Number(qs.spentGems||0)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1077

```text
  '▶ Rewarded acumulados: <b>'+Number(qs.rewardedAds||0)+'</b> • Intersticiais: <b>'+Number(qs.interstitialAds||0)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1078

```text
  '↻ Continuações pagas acumuladas: <b>'+Number(qs.paidContinues||0)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1079

```text
  '💰 Receita de anúncios simulada acumulada: <b>'+brl(adsTotal)+'</b><br><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1080

```text
  '<b>RECEITA COMERCIAL DESDE O RESET</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1081

```text
  '🧾 Compras registradas: <b>'+commerce.count+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1082

```text
  '⭐ Premium: <b>'+brl(commerce.premium)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1083

```text
  '💎 Pacotes de diamantes: <b>'+brl(commerce.diamonds)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1084

```text
  '👤 Personagens/visuais pagos: <b>'+brl(commerce.outfits)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1085

```text
  '💵 Receita bruta de compras: <b>'+brl(commerce.gross)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1086

```text
  '🏪 Taxa Google simulada (15%): <b>-'+brl(commerce.fee)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1087

```text
  '✅ Líquido estimado das compras: <b>'+brl(commerce.net)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1088

```text
  '▶ Receita simulada de anúncios: <b>'+brl(adsTotal)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1089

```text
  '💰 <b>TOTAL LÍQUIDO ESTIMADO: '+brl(commercialNet)+'</b><br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1090

```text
  '<small>Compras nesta versão Web são simulações de QA. A taxa de 15% é usada apenas como estimativa. No Android publicado, valores/moeda e taxas reais virão da Google Play.</small>';
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1091

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1092

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 1093

```text
function renderProfile(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1094

```text
 if(!$('profileName'))return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1095

```text
 $('profileName').value=SAVE.name||'';if($('profileNickname'))$('profileNickname').value=SAVE.nickname||'';if($('profileLanguage'))$('profileLanguage').value=gameLanguage;populateCountries();if($('profileCountry'))$('profileCountry').value=SAVE.countryCode||'';
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 1096

```text
 if($('profileEmail'))$('profileEmail').value=SAVE.accountEmail||SAVE.email||'';$('profileUuid').value=SAVE.uuid;$('profileXp').textContent='XP '+SAVE.xp;$('profileBest').textContent='Recorde '+SAVE.bestScore+' pts';
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1097

```text
 const st=$('profileStatus');if(st){st.className='profileStatus'+(SAVE.profileCompleted?' saved':'');st.textContent=SAVE.profileCompleted?'✓ PERFIL SALVO • você pode iniciar as Jornadas.':'Escolha o idioma, informe seu nome e use SALVAR ALTERAÇÕES.'}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1098

```text
 renderAccountStatus();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1099

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1100

```text
function renderAccountStatus(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1101

```text
 const logged=SAVE.accountMode==='account'&&SAVE.accountLinked===true,txt=logged?('CONTA ATIVA • '+(SAVE.accountEmail||SAVE.email||'usuário')):'MODO CONVIDADO • nenhum login ativo';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1102

```text
 for(const id of ['accountStatus','settingsAccountStatus']){const el=$(id);if(el){el.textContent=txt;el.className=id==='accountStatus'?('accountStatus '+(logged?'good':'warn')):''}}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1103

```text
 const bs=$('accountBridgeStatus');if(bs)bs.textContent=AuthService.native?'Conta conectada.':'Nesta versão de teste, a conta fica salva neste dispositivo.';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1104

```text
 const so=$('accountSignOut');if(so){so.disabled=!logged;so.hidden=!logged}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1105

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1106

```text
function accountFormValues(){return {email:String($('profileEmail')?.value||'').trim().toLowerCase(),password:String($('accountPassword')?.value||'')}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1107

```text
function profileFormValues(){const countryCode=String($('profileCountry')?.value||'').trim().slice(0,2).toUpperCase();let country='';if(countryCode){try{country=new Intl.DisplayNames([gameLanguage],{type:'region'}).of(countryCode)||countryCode}catch(_){country=countryCode}}return {name:String($('profileName')?.value||'').trim().slice(0,40),nickname:String($('profileNickname')?.value||'').trim().slice(0,24),language:String($('profileLanguage')?.value||gameLanguage),country,countryCode}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1108

```text
function setAccountMessage(msg,kind=''){const st=$('accountStatus');if(st){st.textContent=msg;st.className='accountStatus '+(kind||'warn')}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1109

```text
function validEmail(email){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1110

```text
function applyProfileData(profile={},guestDefaults=false){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1111

```text
 let name=String(profile.name||'').trim().slice(0,40),nickname=String(profile.nickname||'').trim().slice(0,24);
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1112

```text
 if(guestDefaults&&name.length<2)name='Convidado';
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1113

```text
 if(name.length<2)return {ok:false,field:'profileName',message:'Informe seu nome para continuar.'};
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1114

```text
 const lang=SUPPORTED_LANGS.includes(profile.language)?profile.language:gameLanguage;applyLanguage(lang,false);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1115

```text
 SAVE.settings={...SAVE.settings,language:lang};SAVE.name=name;SAVE.nickname=nickname||name;SAVE.countryCode=String(profile.countryCode||SAVE.countryCode||'').toUpperCase();SAVE.country=String(profile.country||SAVE.country||'');SAVE.profileCompleted=true;SAVE.profileSavedAt=Date.now();
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 1116

```text
 const signupGrant=grantSignupRewardIfNeeded();saveState();refreshMenuStats();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1117

```text
 return {ok:true,signupGrant};
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1118

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1119

```text
function finishAccountFlow(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1120

```text
 const journey=pendingJourneyStart;pendingJourneyStart=null;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1121

```text
 UI.profilePanel?.classList.remove('show');refreshMenuStats();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1122

```text
 if(journey){setTimeout(()=>startJourney(journey),220)}else{UI.menu?.classList.remove('hidden');if(!started)setTimeout(()=>playMenuTheme(),100)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1123

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1124

```text
async function createPlayerAccount(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1125

```text
 const {email,password}=accountFormValues(),profile=profileFormValues();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1126

```text
 if(!validEmail(email)){setAccountMessage('Informe um e-mail válido.','bad');return false}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1127

```text
 if(password.length<8){setAccountMessage('A senha precisa ter pelo menos 8 caracteres.','bad');return false}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1128

```text
 if(!$('accountPrivacyConsent')?.checked){setAccountMessage('Para criar a conta, confirme a Política de Privacidade.','bad');return false}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1129

```text
 if(profile.name.length<2){setAccountMessage('Informe seu nome para criar a conta.','bad');$('profileName')?.focus();return false}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1130

```text
 setAccountMessage('Criando conta...','warn');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1131

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1132

```text
  const r=await AuthService.createAccount(email,password,profile);if(!r||r.ok===false)throw new Error(r?.message||'Não foi possível criar a conta.');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1133

```text
  const ptest=applyProfileData(profile,false);if(!ptest.ok)throw new Error(ptest.message);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1134

```text
  SAVE.accountMode='account';SAVE.accountLinked=true;SAVE.accountEmail=email;SAVE.accountProvider=r.provider||(AuthService.native?'native':'preview-local');SAVE.email=email;SAVE.privacyConsentAt=Date.now();saveState();
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 1135

```text
  if($('accountPassword'))$('accountPassword').value='';renderProfile();toast('CONTA CRIADA • BEM-VINDO, '+(SAVE.nickname||SAVE.name).toUpperCase());finishAccountFlow();return true
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1136

```text
 }catch(e){setAccountMessage(String(e.message||e),'bad');return false}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 1137

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1138

```text
async function signInPlayerAccount(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1139

```text
 const {email,password}=accountFormValues();if(!validEmail(email)||!password){setAccountMessage('Informe e-mail e senha da sua conta.','bad');return false}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1140

```text
 setAccountMessage('Entrando...','warn');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1141

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1142

```text
  const r=await AuthService.signIn(email,password);if(!r||r.ok===false)throw new Error(r?.message||'Login não concluído.');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1143

```text
  const returned=(r.profile&&typeof r.profile==='object')?r.profile:null,typed=profileFormValues();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1144

```text
  let profile=returned||typed;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1145

```text
  if((!profile.name||String(profile.name).trim().length<2)&&SAVE.profileCompleted)profile={name:SAVE.name,nickname:SAVE.nickname,language:gameLanguage};
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1146

```text
  if(!profile.name||String(profile.name).trim().length<2)profile={name:(email.split('@')[0]||'Jogador').slice(0,40),nickname:'',language:gameLanguage};
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1147

```text
  const ptest=applyProfileData(profile,false);if(!ptest.ok)throw new Error(ptest.message);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1148

```text
  SAVE.accountMode='account';SAVE.accountLinked=true;SAVE.accountEmail=email;SAVE.accountProvider=r.provider||(AuthService.native?'native':'preview-local');SAVE.email=email;saveState();
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 1149

```text
  if($('accountPassword'))$('accountPassword').value='';renderProfile();toast('LOGIN CONCLUÍDO • '+(SAVE.nickname||SAVE.name).toUpperCase());finishAccountFlow();return true
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1150

```text
 }catch(e){setAccountMessage(String(e.message||e),'bad');return false}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 1151

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1152

```text
async function useGuestMode(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1153

```text
 try{await AuthService.signOut()}catch(_){ }
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1154

```text
 const ptest=applyProfileData(profileFormValues(),true);if(!ptest.ok){setAccountMessage(ptest.message,'bad');return false}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1155

```text
 SAVE.accountMode='guest';SAVE.accountLinked=false;SAVE.accountEmail='';SAVE.accountProvider='guest';SAVE.email='';saveState();
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 1156

```text
 if($('profileEmail'))$('profileEmail').value='';if($('accountPassword'))$('accountPassword').value='';if($('accountPrivacyConsent'))$('accountPrivacyConsent').checked=false;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1157

```text
 renderProfile();toast('MODO CONVIDADO • BOA CORRIDA');finishAccountFlow();return true
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1158

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1159

```text
async function signOutPlayerAccount(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1160

```text
 try{await AuthService.signOut()}catch(e){console.warn('SIGN OUT',e)}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1161

```text
 SAVE.accountMode='guest';SAVE.accountLinked=false;SAVE.accountEmail='';SAVE.accountProvider='guest';SAVE.email='';saveState();
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 1162

```text
 if($('profileEmail'))$('profileEmail').value='';if($('accountPassword'))$('accountPassword').value='';if($('accountPrivacyConsent'))$('accountPrivacyConsent').checked=false;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1163

```text
 renderProfile();refreshMenuStats();toast('VOCÊ SAIU DA CONTA • MODO CONVIDADO');finishAccountFlow();return true
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1164

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1165

```text
function buildMRCapFallback(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1166

```text
 const g=new THREE.Group();g.name='MR_TEST19_CAP_FALLBACK';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1167

```text
 const crown=new THREE.MeshStandardMaterial({color:0x2779e9,roughness:.74,metalness:.03,side:THREE.DoubleSide});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1168

```text
 const dark=new THREE.MeshStandardMaterial({color:0x08121b,roughness:.82});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1169

```text
 const piping=new THREE.MeshStandardMaterial({color:0xf4d76c,roughness:.55,metalness:.12});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1170

```text
 const add=(geo,mat,x=0,y=0,z=0)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);m.castShadow=true;g.add(m);return m};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1171

```text
 const dome=add(new THREE.SphereGeometry(.145,24,18,0,Math.PI*2,0,Math.PI*.68),crown,0,.145,0);dome.scale.set(1.10,1.04,1.10);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1172

```text
 add(new THREE.CylinderGeometry(.158,.151,.085,28),crown,0,.085,0);
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1173

```text
 const edge=add(new THREE.TorusGeometry(.154,.009,7,32),piping,0,.043,0);edge.rotation.x=Math.PI/2;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1174

```text
 // Aba lateral: leitura clara pela câmera de perseguição.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1175

```text
 const brim=add(new THREE.BoxGeometry(.22,.025,.15),crown,.145,.067,.055);brim.rotation.y=-.24;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1176

```text
 const brimLine=add(new THREE.BoxGeometry(.225,.010,.152),piping,.146,.050,.055);brimLine.rotation.y=-.24;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1177

```text
 const logo=makeMRLogoTexture();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1178

```text
 const mkLogo=(x,y,z,ry=0,w=.13,h=.075)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:logo,transparent:true,side:THREE.DoubleSide,depthWrite:false}));m.position.set(x,y,z);m.rotation.y=ry;g.add(m)};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1179

```text
 // Logo atrás, na frente e na lateral para continuar visível enquanto Varek corre.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1180

```text
 add(new THREE.BoxGeometry(.142,.086,.012),dark,0,.112,-.151);mkLogo(0,.112,-.158,Math.PI,.128,.073);
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1181

```text
 add(new THREE.BoxGeometry(.142,.086,.012),dark,0,.112,.151);mkLogo(0,.112,.158,0,.128,.073);
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1182

```text
 add(new THREE.BoxGeometry(.012,.078,.095),dark,.158,.108,.025);mkLogo(.165,.108,.025,Math.PI/2,.080,.058);
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1183

```text
 add(new THREE.SphereGeometry(.018,10,7),piping,0,.292,0);
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1184

```text
 return g
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1185

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1186

```text
function findHeroHead(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1187

```text
 if(!hero)return null;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1188

```text
 return hero.getObjectByName('mixamorig:Head')||hero.getObjectByName('Head')||(()=>{let h=null;hero.traverse(o=>{if(!h&&/head$/i.test(o.name||''))h=o});return h})()
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1189

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1190

```text
async function getMRCapTemplate(capId){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1191

```text
 const assetKey=capId==='cap_blue'?'capBlue':capId==='cap_yellow'?'capYellow':'capMR';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1192

```text
 if(capTemplates[capId])return capTemplates[capId];
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1193

```text
 if(capLoadPromises[capId])return capLoadPromises[capId];
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1194

```text
 capLoadPromises[capId]=parseGLB64(ASSETS[assetKey]).then(gltf=>{capTemplates[capId]=gltf.scene;setSRGB(capTemplates[capId]);return capTemplates[capId]}).catch(err=>{capLoadPromises[capId]=null;throw err});
```

**Explicação:** Ajusta elementos centrais da renderização 3D, como cena, câmera ou renderizador.

### Linha 1195

```text
 return capLoadPromises[capId]
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1196

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1197

```text
function normalizeMRCap(model,capId){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1198

```text
 const wrap=new THREE.Group();wrap.name='MR_TEST19_CAP_BACKWARD_'+capId;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1199

```text
 const clone=model.clone(true);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1200

```text
 clone.traverse(n=>{if(n.isMesh){n.castShadow=true;n.receiveShadow=true;if(n.material)n.material=Array.isArray(n.material)?n.material.map(m=>m.clone()):n.material.clone()}});
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1201

```text
 wrap.add(clone);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1202

```text
 let box=new THREE.Box3().setFromObject(clone),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1203

```text
 const horizontal=Math.max(size.x,size.z,.001),sc=.36/horizontal;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1204

```text
 clone.scale.setScalar(sc);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1205

```text
 box=new THREE.Box3().setFromObject(clone);center=box.getCenter(new THREE.Vector3());
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1206

```text
 clone.position.set(-center.x,-box.min.y,-center.z);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1207

```text
 // TESTE 21.7: giro de 180 graus. A aba fica para trás e a frente/marca do boné passa a olhar para a câmera de perseguição.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1208

```text
 wrap.position.set(0,.095,.005);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1209

```text
 wrap.rotation.y=Math.PI-.28;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1210

```text
 return wrap
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1211

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1212

```text
async function buildMRCap(capId){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1213

```text
 try{return normalizeMRCap(await getMRCapTemplate(capId),capId)}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1214

```text
 catch(err){console.warn('TESTE 21.7: falha ao carregar boné GLB real; usando fallback procedural',capId,err);const f=buildMRCapFallback();f.rotation.y=Math.PI;return f}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 1215

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1216

```text
async function applyEquipment(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1217

```text
 if(accessoryGroup){const p=accessoryGroup.parent;if(p)p.remove(accessoryGroup);accessoryGroup=null}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1218

```text
 const requested=SAVE.equipped.cap;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1219

```text
 if(!hero||!['cap_mr','cap_blue','cap_yellow'].includes(requested))return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1220

```text
 const head=findHeroHead();if(!head){console.warn('TESTE 21.7: head bone não encontrado');return}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1221

```text
 const built=await buildMRCap(requested);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1222

```text
 if(!hero||SAVE.equipped.cap!==requested)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1223

```text
 accessoryGroup=built;head.add(accessoryGroup)
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1224

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1225

```text
function capLabel(id){return id==='cap_blue'?'AZUL':id==='cap_yellow'?'AMARELO':id==='cap_mr'?'PRETO':null}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1226

```text
function outfitLabel(id){return (HERO_OUTFITS[id]||HERO_OUTFITS.outfit_varek_original).label}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1227

```text
function ownsOutfit(id){const cfg=HERO_OUTFITS[id];return !!(cfg&&cfg.free)||SAVE.inventory.includes(id)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1228

```text
function verifyOwnedPersisted(id){const cfg=HERO_OUTFITS[id];if(cfg&&cfg.free)return true;try{const raw=JSON.parse(localStorage.getItem(SAVE_KEY)||'{}');return Array.isArray(raw.inventory)&&raw.inventory.includes(id)}catch(_){return false}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1229

```text
function renderShop(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1230

```text
 document.querySelectorAll('[data-card-outfit]').forEach(card=>{card.hidden=false;card.style.display=''});
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1231

```text
 const selectedOutfit=SAVE.equipped.outfit||'outfit_varek_original',os=$('shopOutfitStatus');if(os)os.textContent=outfitLabel(selectedOutfit);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1232

```text
 const gs=$('shopGemStatus');if(gs)gs.textContent='💎 '+gemText()+(TEST_MODE?' • TESTE':'');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1233

```text
 const premiumIds=new Set(COMMERCE_CONFIG.premiumIncluded);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1234

```text
 STORE_OUTFIT_IDS.forEach(id=>{const cfg=HERO_OUTFITS[id],active=selectedOutfit===id,owned=ownsOutfit(id),card=document.querySelector('[data-card-outfit="'+id+'"]'),btn=document.querySelector('[data-buy-outfit="'+id+'"]')||document.querySelector('[data-premium-outfit="'+id+'"]'),price=document.querySelector('[data-price-outfit="'+id+'"]');card?.classList.toggle('active',active);const cashLabel=cfg.storeSku?storePrice(cfg.storeSku,cfg.priceBRL||14.99):'';if(price){price.textContent=owned?(cfg.free?'GRÁTIS • ADQUIRIDO':'ADQUIRIDO'):(cfg.storeSku?cashLabel:premiumIds.has(id)?'⭐ PREMIUM':('💎 '+Number(cfg.price||0).toLocaleString('pt-BR')));price.classList.toggle('ownedTag',owned);price.classList.toggle('purchaseOk',owned)}if(btn){btn.disabled=shopBusy||commerceBusy;btn.classList.toggle('secondaryAction',owned);btn.textContent=active?'EM USO':owned?'USAR / EQUIPAR':cfg.storeSku?'COMPRAR • '+cashLabel:premiumIds.has(id)?'DESBLOQUEAR COM PREMIUM':'COMPRAR • 💎 '+Number(cfg.price||0).toLocaleString('pt-BR')}});
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 1235

```text
 updateCommerceUI();void ensureOutfitPreviews();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1236

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1237

```text
let shopBusy=false;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1238

```text
async function buyOrEquipOutfit(id){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1239

```text
 const cfg=HERO_OUTFITS[id];if(!cfg||shopBusy)return;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1240

```text
 shopBusy=true;let purchasedNow=false;const status=$('commercePurchaseStatus');
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1241

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1242

```text
   if(!ownsOutfit(id)){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1243

```text
     if(cfg.storeSku){shopBusy=false;renderShop();void purchaseCashProduct(cfg.storeSku);return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1244

```text
     if(COMMERCE_CONFIG.premiumIncluded.includes(id)){shopBusy=false;renderShop();void purchaseCashProduct(PLAY_STORE_CONFIG.premiumSku);return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1245

```text
     if(!canAffordGems(cfg.price)){toast('DIAMANTES INSUFICIENTES');return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1246

```text
     if(!spendGems(cfg.price)){toast('COMPRA NÃO AUTORIZADA');return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1247

```text
     SAVE.inventory=Array.from(new Set([...(SAVE.inventory||[]),id]));purchasedNow=true;saveState();
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 1248

```text
     if(!verifyOwnedPersisted(id)){throw new Error('inventário não persistiu no localStorage')}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1249

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1250

```text
   SAVE.equipped.outfit=id;saveState();
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

