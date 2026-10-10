# index.html — Parte 8

Linhas **1751 a 2000** da MOBILE86.

### Linha 1751

```text
 if(!allowed){if(ambientBedSource)stopAmbientBed();return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1752

```text
 if(ambientRealmId!==cfg.id||!ambientBedSource){startAmbientBed(cfg.id);ambientAnimalTimer=3.5+Math.random()*4.5}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1753

```text
 ambientAnimalTimer-=dt;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1754

```text
 if(ambientAnimalTimer<=0){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1755

```text
   // Sons de animais pertencem apenas ao ambiente. Não iniciar um animal junto de uma ação do herói.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1756

```text
   if(slideTimer>0||jumpY>.05){ambientAnimalTimer=.8;return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1757

```text
   const p=AMBIENT_PROFILES[cfg.id]||AMBIENT_PROFILES.forest,arr=p.animals||[];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1758

```text
   if(arr.length)playAmbientAnimal(arr[Math.floor(Math.random()*arr.length)]);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1759

```text
   ambientAnimalTimer=8+Math.random()*17
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1760

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1761

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1762

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 1763

```text
function stopWeatherAudio(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1764

```text
 const src=weatherAudioSource,g=weatherAudioGain,ctx=audioCtx;weatherAudioSource=null;weatherAudioFilter=null;weatherAudioGain=null;weatherAudioMode='none';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1765

```text
 if(!src)return;try{if(ctx&&g){g.gain.cancelScheduledValues(ctx.currentTime);g.gain.setTargetAtTime(.0001,ctx.currentTime,.10);setTimeout(()=>{try{src.stop()}catch(_){}},320)}else src.stop()}catch(_){}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1766

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1767

```text
function startWeatherAudio(mode){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1768

```text
 if(!soundOn||ambientVolume<=0||mode==='none')return;const ctx=ensureAudio(),buf=getNoiseBuffer();if(!ctx||!buf||!ambientMaster)return;if(weatherAudioSource&&weatherAudioMode===mode)return;stopWeatherAudio();
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1769

```text
 const src=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain();src.buffer=buf;src.loop=true;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1770

```text
 // Soft, low-frequency ambience: no bright hiss or distorted rain on phone speakers.
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 1771

```text
 if(mode==='extremeRain'){f.type='lowpass';f.frequency.value=680;f.Q.value=.25;g.gain.value=.0001;g.gain.setTargetAtTime(.010,ctx.currentTime,.70)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1772

```text
 else if(mode==='drizzle'){f.type='lowpass';f.frequency.value=390;f.Q.value=.25;g.gain.value=.0001;g.gain.setTargetAtTime(.004,ctx.currentTime,.70)}
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 1773

```text
 else{f.type='lowpass';f.frequency.value=360;f.Q.value=.22;g.gain.value=.0001;g.gain.setTargetAtTime(.006,ctx.currentTime,.70)}
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 1774

```text
 src.connect(f);f.connect(g);g.connect(ambientMaster);src.start();weatherAudioSource=src;weatherAudioFilter=f;weatherAudioGain=g;weatherAudioMode=mode;
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1775

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1776

```text
function playThunder(){if(!soundOn||ambientVolume<=0||weatherMode!=='extremeRain')return;ambientNoise(.95,.070,950,80,'lowpass');ambientTone(74,34,.88,.055,'sine',.06);haptic([12,38,18])}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1777

```text
function resizeWeatherCanvas(){if(!weatherCanvas)return;const w=Math.max(1,app.clientWidth),h=Math.max(1,app.clientHeight);if(weatherCanvas.width!==w||weatherCanvas.height!==h){weatherCanvas.width=w;weatherCanvas.height=h;weatherParticles=[];atmosphereParticles=[]}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1778

```text
function seedWeatherParticles(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1779

```text
 if(!weatherCanvas||weatherMode==='none')return;resizeWeatherCanvas();const w=weatherCanvas.width,h=weatherCanvas.height,count=weatherMode==='extremeRain'?(MOBILE_RUNNER?(LOW_END_MOBILE?18:28):165):weatherMode==='drizzle'?(MOBILE_RUNNER?(LOW_END_MOBILE?6:10):64):(MOBILE_RUNNER?(LOW_END_MOBILE?6:9):60);weatherParticles=[];
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1780

```text
 for(let i=0;i<count;i++){if(weatherMode==='strongWind')weatherParticles.push({x:Math.random()*w,y:Math.random()*h,vx:150+Math.random()*260,vy:(Math.random()-.5)*38,len:8+Math.random()*25,a:.10+Math.random()*.25,w:.6+Math.random()*1.2});else{const heavy=weatherMode==='extremeRain';weatherParticles.push({x:Math.random()*w,y:Math.random()*h,vx:(heavy?-90:-38)-Math.random()*(heavy?95:42),vy:(heavy?620:270)+Math.random()*(heavy?620:210),len:(heavy?15:7)+Math.random()*(heavy?30:15),a:(heavy?.18:.10)+Math.random()*(heavy?.40:.24),w:heavy?1.15:.72})}}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1781

```text
 weatherLightningTimer=6+Math.random()*9;
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 1782

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1783

```text
function seedAtmosphereParticles(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1784

```text
 if(!weatherCanvas||atmosphereMode==='none')return;resizeWeatherCanvas();const w=weatherCanvas.width,h=weatherCanvas.height;atmosphereParticles=[];
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1785

```text
 if(atmosphereMode==='volcanicAsh'){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1786

```text
  const count=MOBILE_RUNNER?(LOW_END_MOBILE?14:22):130;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1787

```text
  for(let i=0;i<count;i++)atmosphereParticles.push({x:Math.random()*w,y:Math.random()*h,vx:-12+Math.random()*34,vy:30+Math.random()*88,r:.8+Math.random()*2.8,a:.16+Math.random()*.46,phase:Math.random()*6.28,spin:(Math.random()-.5)*2.4});
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1788

```text
 }else if(atmosphereMode==='fallingLeaves'){
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1789

```text
  const colors=['rgba(184,112,45,.62)','rgba(217,156,61,.58)','rgba(126,146,68,.52)','rgba(154,82,42,.56)'];const count=MOBILE_RUNNER?(LOW_END_MOBILE?8:12):64;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1790

```text
  for(let i=0;i<count;i++)atmosphereParticles.push({x:Math.random()*w,y:Math.random()*h,vx:-18+Math.random()*38,vy:34+Math.random()*70,rx:2.5+Math.random()*4.0,ry:1.2+Math.random()*2.4,a:.45+Math.random()*.35,phase:Math.random()*6.28,rot:Math.random()*6.28,spin:(Math.random()-.5)*2.8,color:colors[Math.floor(Math.random()*colors.length)]});
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1791

```text
 }else if(atmosphereMode==='ruinDust'){
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1792

```text
  const count=MOBILE_RUNNER?(LOW_END_MOBILE?5:8):38;for(let i=0;i<count;i++)atmosphereParticles.push({x:Math.random()*w,y:Math.random()*h,vx:8+Math.random()*24,vy:-4+Math.random()*12,r:1+Math.random()*3.2,a:.08+Math.random()*.18,phase:Math.random()*6.28});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1793

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1794

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1795

```text
function setWeatherMode(mode='none'){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1796

```text
 const next=['extremeRain','drizzle','strongWind'].includes(mode)?mode:'none';if(weatherMode===next&&(next==='none'||weatherParticles.length))return;weatherMode=next;weatherParticles=[];weatherLightningAlpha=0;if(next!=='none')seedWeatherParticles();else{stopWeatherAudio();if(UI.weatherFlash)UI.weatherFlash.style.opacity='0'}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1797

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1798

```text
function setAtmosphereMode(mode='none'){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1799

```text
 const next=['volcanicAsh','fallingLeaves','ruinDust'].includes(mode)?mode:'none';if(atmosphereMode===next&&(next==='none'||atmosphereParticles.length))return;atmosphereMode=next;atmosphereParticles=[];if(next!=='none')seedAtmosphereParticles();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1800

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1801

```text
function setWeatherForRealm(cfg){setWeatherMode(weatherTestOverride||REALM_WEATHER[cfg?.id]||'none');setAtmosphereMode(REALM_ATMOSPHERE[cfg?.id]||'none')}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1802

```text
const REALM_NOVELTY={vpath:'PONTE VIVA • DRAGÃO AO LONGE',vruins:'TEMPESTADE ELÉTRICA',ember:'CINZAS VULCÂNICAS',ruins:'POEIRA NAS RUÍNAS',forest:'FOLHAS + GAROA',celestial:'VENTO FORTE'};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1803

```text
function updateWeatherAudio(){const active=soundOn&&started&&!paused&&!gameOver&&!tobogganActive&&weatherMode!=='none';if(active){if(!weatherAudioSource||weatherAudioMode!==weatherMode)startWeatherAudio(weatherMode)}else if(weatherAudioSource)stopWeatherAudio()}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1804

```text
function drawRealmAtmosphere(c,w,h,dt){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1805

```text
 if(atmosphereMode==='none')return;if(!atmosphereParticles.length)seedAtmosphereParticles();const t=performance.now()*.001;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1806

```text
 if(atmosphereMode==='volcanicAsh'){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1807

```text
  c.fillStyle='rgba(42,34,31,.035)';c.fillRect(0,0,w,h);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1808

```text
  for(const p of atmosphereParticles){p.x+=(p.vx+Math.sin(t*1.15+p.phase)*22)*dt;p.y+=p.vy*dt;p.phase+=p.spin*dt*.20;if(p.y>h+12){p.y=-12-Math.random()*h*.16;p.x=Math.random()*w}if(p.x<-15)p.x=w+10;if(p.x>w+15)p.x=-10;c.fillStyle='rgba(190,183,177,'+p.a.toFixed(3)+')';c.beginPath();c.arc(p.x,p.y,p.r,0,Math.PI*2);c.fill()}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1809

```text
 }else if(atmosphereMode==='fallingLeaves'){
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1810

```text
  for(const p of atmosphereParticles){p.x+=(p.vx+Math.sin(t*1.7+p.phase)*34)*dt;p.y+=p.vy*dt;p.rot+=p.spin*dt;if(p.y>h+20){p.y=-20-Math.random()*h*.18;p.x=Math.random()*w}if(p.x<-25)p.x=w+20;if(p.x>w+25)p.x=-20;c.save();c.translate(p.x,p.y);c.rotate(p.rot);c.globalAlpha=p.a;c.fillStyle=p.color;c.beginPath();c.ellipse(0,0,p.rx,p.ry,0,0,Math.PI*2);c.fill();c.restore()}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1811

```text
  c.globalAlpha=1;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1812

```text
 }else if(atmosphereMode==='ruinDust'){
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1813

```text
  for(const p of atmosphereParticles){p.x+=(p.vx+Math.sin(t*.8+p.phase)*12)*dt;p.y+=p.vy*dt;if(p.x>w+15){p.x=-15;p.y=Math.random()*h}if(p.y<0)p.y=h;if(p.y>h)p.y=0;c.fillStyle='rgba(209,190,158,'+p.a.toFixed(3)+')';c.beginPath();c.arc(p.x,p.y,p.r,0,Math.PI*2);c.fill()}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1814

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1815

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1816

```text
function updateWeatherVisual(dt){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1817

```text
 updateWeatherAudio();if(!weatherCtx||!weatherCanvas)return;if(MOBILE_RUNNER){weatherFrameAccumulator+=dt;const weatherHz=mobilePerfGuard?16:22;if(weatherFrameAccumulator<1/weatherHz)return;dt=Math.min(.075,weatherFrameAccumulator);weatherFrameAccumulator=0}resizeWeatherCanvas();const c=weatherCtx,w=weatherCanvas.width,h=weatherCanvas.height;c.clearRect(0,0,w,h);
```

**Explicação:** Controla áudio, música, efeitos sonoros ou volume.

### Linha 1818

```text
 if(!started){if(UI.weatherFlash)UI.weatherFlash.style.opacity='0';return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1819

```text
 if(weatherMode!=='none'){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1820

```text
  if(!weatherParticles.length)seedWeatherParticles();
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1821

```text
  if(weatherMode==='extremeRain'){c.fillStyle='rgba(12,22,28,.12)';c.fillRect(0,0,w,h)}else if(weatherMode==='drizzle'){c.fillStyle='rgba(28,42,45,.045)';c.fillRect(0,0,w,h)}else{c.fillStyle='rgba(210,190,145,.025)';c.fillRect(0,0,w,h)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1822

```text
  c.lineCap='round';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1823

```text
  for(const p of weatherParticles){p.x+=p.vx*dt;p.y+=p.vy*dt;if(weatherMode==='strongWind'){if(p.x>w+40){p.x=-40;p.y=Math.random()*h}if(p.y<0)p.y=h;if(p.y>h)p.y=0;c.strokeStyle='rgba(235,222,182,'+p.a.toFixed(3)+')';c.lineWidth=p.w;c.beginPath();c.moveTo(p.x,p.y);c.lineTo(p.x-p.len,p.y-p.vy*.035);c.stroke()}else{if(p.y>h+40||p.x<-60){p.y=-20-Math.random()*h*.20;p.x=Math.random()*(w+100)}c.strokeStyle='rgba(205,228,240,'+p.a.toFixed(3)+')';c.lineWidth=p.w;c.beginPath();c.moveTo(p.x,p.y);c.lineTo(p.x-p.vx*.032,p.y-p.len);c.stroke()}}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1824

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1825

```text
 drawRealmAtmosphere(c,w,h,dt);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1826

```text
 if(weatherMode==='extremeRain'){weatherLightningTimer-=dt;if(weatherLightningTimer<=0){weatherLightningAlpha=.30+Math.random()*.34;weatherLightningTimer=8+Math.random()*10;playThunder()}weatherLightningAlpha=Math.max(0,weatherLightningAlpha-dt*1.65)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1827

```text
 else weatherLightningAlpha=Math.max(0,weatherLightningAlpha-dt*2.45);
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 1828

```text
 if(UI.weatherFlash)UI.weatherFlash.style.opacity=String(weatherLightningAlpha);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1829

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1830

```text
const PC_QA_BUILD=false;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1831

```text
const MOBILE_QA_PARAMS=new URLSearchParams(location.search);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1832

```text
const MOBILE_QA_VERSION=(MOBILE_QA_PARAMS.get('v')||'').toLowerCase();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1833

```text
const MOBILE_SCENARIO_TEST=MOBILE_QA_PARAMS.get('test')==='1'||MOBILE_QA_PARAMS.get('testes')==='1'||MOBILE_QA_PARAMS.get('qa')==='1';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1834

```text
const QA_SCENARIO_MODE=PC_QA_BUILD||MOBILE_SCENARIO_TEST;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1835

```text
if(QA_SCENARIO_MODE){document.body.classList.add('pcQaBuild');const p=$('scenarioTestPanel');if(p){p.style.display='flex';p.classList.add('show')}const m=UI.menu;if(m)m.classList.add('hidden');const q=$('qaReturnBtn');if(q)q.classList.remove('show')}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1836

```text
let scenarioTestJourney=1;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1837

```text
let qaEngineReady=false,qaPendingScenario=null,qaScenarioStarting=false;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 1838

```text
function qaSetStatus(msg){const el=$('qaLaunchStatus');if(el)el.textContent=msg}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1839

```text
function qaMarkSelected(idx){document.querySelectorAll('[data-scenario-test]').forEach(b=>{const on=Number(b.dataset.scenarioTest)===Number(idx);b.classList.toggle('active',on);b.style.outline=on?'2px solid rgba(244,197,106,.85)':''})}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1840

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 1841

```text
function unlockAllPcQaScenarios(){if(!QA_SCENARIO_MODE)return;document.querySelectorAll('[data-scenario-test],[data-scenario-link]').forEach((b,i)=>{b.disabled=false;b.removeAttribute('disabled');b.classList.remove('locked');b.style.opacity='1';b.style.pointerEvents='auto';b.style.filter='none';b.title='CENÁRIO '+(Number(i)+1)+' • LIBERADO PARA TESTE';if(!b.dataset.baseLabel)b.dataset.baseLabel=b.innerHTML});const j1=$('scenarioJourney1'),j2=$('scenarioJourney2');if(j1){j1.disabled=false;j1.removeAttribute('disabled')}if(j2){j2.disabled=false;j2.removeAttribute('disabled')}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1842

```text
function openScenarioHub(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1843

```text
 unlockAllPcQaScenarios();bindDirectQaScenarioButtons();paused=true;scenarioTestJourney=scenarioTestJourney===2?2:1;refreshScenarioJourneyButtons();
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1844

```text
 UI.pausePanel?.classList.remove('show');UI.menu?.classList.add('hidden');UI.hud?.classList.remove('show');UI.pause?.classList.remove('show');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1845

```text
 const q=$('qaReturnBtn');if(q)q.classList.remove('show');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1846

```text
 if(UI.scenarioTestPanel){UI.scenarioTestPanel.style.display='flex';UI.scenarioTestPanel.classList.add('show')}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1847

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1848

```text
function returnToScenarioHub(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1849

```text
 unlockAllPcQaScenarios();try{hideFamilyScene();endToboggan(true);resetOpeningImpactVisuals();stopAmbientBed();stopWeatherAudio();resetFootsteps()}catch(_){}
```

**Explicação:** Controla alguma parte do sistema de descida/tobogã, incluindo estado, visual, física ou interface.

### Linha 1850

```text
 started=false;paused=true;gameOver=false;weatherTestMode=true;autoRealm=false;huntersVisible=false;
```

**Explicação:** Controla os caçadores e sua posição, animação ou participação na perseguição.

### Linha 1851

```text
 hunters.forEach(h=>{h.root.visible=false;if(h.action)h.action.paused=false});if(lyraRoot)lyraRoot.visible=false;
```

**Explicação:** Controla a presença, animação ou estado de Lyra.

### Linha 1852

```text
 UI.pausePanel?.classList.remove('show');UI.revivePanel?.classList.remove('show');UI.journeyEndPanel?.classList.remove('show');
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1853

```text
 UI.hud?.classList.remove('show');UI.pause?.classList.remove('show');UI.menu?.classList.add('hidden');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1854

```text
 const q=$('qaReturnBtn');if(q)q.classList.remove('show');if(UI.scenarioTestPanel){UI.scenarioTestPanel.style.display='flex';UI.scenarioTestPanel.classList.add('show')}playHero('Walking',.12);clock?.getDelta?.();
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1855

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1856

```text
async function launchScenarioTest(realmIdx,journey=scenarioTestJourney){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1857

```text
 const safeRealm=Math.max(0,Math.min(REALMS.length-1,Number(realmIdx)));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1858

```text
 const safeJourney=Number(journey)===2?2:1;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1859

```text
 if(!Number.isInteger(safeRealm))return false;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1860

```text
 if(qaScenarioStarting)return false;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1861

```text
 qaScenarioStarting=true;scenarioTestJourney=safeJourney;qaMarkSelected(safeRealm);
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1862

```text
 qaSetStatus('ABRINDO • '+REALMS[safeRealm].short+' • JORNADA '+safeJourney);
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1863

```text
 weatherTestMode=true;weatherTestOverride=null;autoRealm=false;currentJourney=safeJourney;realmIndex=safeRealm;
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1864

```text
 if(UI.scenarioTestPanel){UI.scenarioTestPanel.classList.remove('show');UI.scenarioTestPanel.style.display='none'}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1865

```text
 UI.menu?.classList.add('hidden');UI.hud?.classList.remove('show');UI.pause?.classList.remove('show');UI.hint?.classList.remove('show');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1866

```text
 const qaBtn=$('qaReturnBtn');if(qaBtn)qaBtn.classList.add('show');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1867

```text
 UI.loading?.classList.remove('hidden');if(UI.loadingText)UI.loadingText.textContent='Abrindo '+REALMS[safeRealm].name+'...';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1868

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1869

```text
   stopTheme(200);try{reset()}catch(err){console.warn('QA RESET PARCIAL',err);clearItems();distance=0;realmStartDistance=0;gameOver=false;paused=false;started=false}weatherTestMode=true;weatherTestOverride=null;autoRealm=false;currentJourney=safeJourney;realmIndex=safeRealm;
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1870

```text
   await loadRealm(safeRealm,true);
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 1871

```text
   // Proteção QA: nenhum fluxo da campanha pode devolver o teste ao reino 0.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1872

```text
   realmIndex=safeRealm;realmStartDistance=distance;autoRealm=false;weatherTestMode=true;
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 1873

```text
   started=true;paused=false;gameOver=false;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1874

```text
   UI.loading?.classList.add('hidden');UI.menu?.classList.add('hidden');UI.hud?.classList.add('show');UI.pause?.classList.add('show');UI.hint?.classList.remove('show');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1875

```text
   playHero('Running',.06);clock?.getDelta?.();updateHUD();
```

**Explicação:** Controla o modelo, posição, visibilidade ou animação de Varek.

### Linha 1876

```text
   qaSetStatus('TESTE ATIVO • '+REALMS[safeRealm].short+' • JORNADA '+safeJourney);
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1877

```text
   toast('TESTE ATIVO • '+REALMS[safeRealm].short+' • JORNADA '+safeJourney);
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1878

```text
   if(!hunters.length)loadHunters().then(()=>{if(started){huntersVisible=false;hunters.forEach(h=>h.root.visible=false)}}).catch(err=>console.warn('QA CAÇADORAS BACKGROUND',err));
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1879

```text
   if(safeJourney===2){const afterLyra=()=>{if(started&&currentJourney===2){setLyraJourneyState();forceLyraRun()}};if(lyraRoot)afterLyra();else loadLyra().then(afterLyra).catch(err=>console.warn('QA LYRA BACKGROUND',err));}else setLyraJourneyState();
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1880

```text
   return true;
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 1881

```text
 }catch(err){
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 1882

```text
   console.error('QA CENÁRIO NÃO ABRIU',safeRealm,err);started=false;paused=true;UI.loading?.classList.add('hidden');openScenarioHub();qaMarkSelected(safeRealm);qaSetStatus('ERRO AO ABRIR • '+REALMS[safeRealm].short+' • '+(err?.message||String(err)));return false;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1883

```text
 }finally{qaScenarioStarting=false}
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1884

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1885

```text
async function startScenarioTest(realmIdx,journey=scenarioTestJourney){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1886

```text
 const n=Number(realmIdx);const safeRealm=Number.isFinite(n)?Math.max(0,Math.min(REALMS.length-1,Math.trunc(n))):0;const safeJourney=Number(journey)===2?2:1;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1887

```text
 scenarioTestJourney=safeJourney;qaMarkSelected(safeRealm);
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1888

```text
 // A Central aparece antes do motor terminar. O clique fica na fila e NÃO pode ser substituído por realmIndex=0.
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1889

```text
 if(!qaEngineReady||!scene||!renderer||!heroRoot||!clock){qaPendingScenario={realm:safeRealm,journey:safeJourney};qaSetStatus('SELECIONADO • '+REALMS[safeRealm].short+' • aguardando o motor 3D terminar...');return false}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1890

```text
 qaPendingScenario=null;return launchScenarioTest(safeRealm,safeJourney);
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1891

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1892

```text
async function waitForQaScenario(realm,journey){const startedNow=await startScenarioTest(realm,journey);if(startedNow)return true;for(let i=0;i<100;i++){await new Promise(r=>setTimeout(r,80));if(started&&!paused&&realmIndex===realm)return true}qaSetStatus('ERRO • cenário não ficou pronto para o teste rápido.');return false}
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1893

```text
async function startKharvorQuick(mode='drop'){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1894

```text
 if(!await waitForQaScenario(1,scenarioTestJourney))return;distance=mode==='lower'?760:485;realmStartDistance=0;updateKharvorBridge(.016,distance);updateHUD();toast(mode==='lower'?'TESTE • KHARVOR • PASSAGEM INFERIOR':'TESTE • KHARVOR • QUEDA IMINENTE');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1895

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1896

```text
async function startNerisQuick(mode='drop'){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1897

```text
 if(!await waitForQaScenario(4,scenarioTestJourney))return;distance=mode==='lower'?760:485;realmStartDistance=0;updateKharvorBridge(.016,distance);updateHUD();toast(mode==='lower'?'TESTE • NERIS • PONTE FECHADA INFERIOR':'TESTE • NERIS • QUEDA IMINENTE');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1898

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1899

```text
async function startVhalorQuick(mode='drop'){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1900

```text
 if(!await waitForQaScenario(3,scenarioTestJourney))return;distance=mode==='flooded'?510:485;realmStartDistance=0;updateKharvorBridge(.016,distance);updateHUD();toast(mode==='flooded'?'TESTE • VHALOR • PASSAGEM INUNDADA EM CANOA':'TESTE • VHALOR • QUEDA IMINENTE');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1901

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1902

```text
async function startTobogganQuick(realmIdx,forcedMode=null){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1903

```text
 const r=Math.max(0,Math.min(REALMS.length-1,Number(realmIdx)||0));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1904

```text
 if(!await waitForQaScenario(r,scenarioTestJourney))return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1905

```text
 if(scenarioTestJourney===2&&!lyraRoot){try{await loadLyra();setLyraJourneyState();forceLyraRun()}catch(err){console.warn('QA LYRA DESCIDA',err)}}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1906

```text
 distance=560;realmStartDistance=0;tobogganAutoDone=false;updateHUD();
```

**Explicação:** Controla alguma parte do sistema de descida/tobogã, incluindo estado, visual, física ou interface.

### Linha 1907

```text
 if(forcedMode==='flooded')setVhalorFloodVisual(true);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1908

```text
 startToboggan(true,forcedMode);
```

**Explicação:** Controla alguma parte do sistema de descida/tobogã, incluindo estado, visual, física ou interface.

### Linha 1909

```text
 qaSetStatus('TESTE ATIVO • '+REALMS[r].short+' • '+(forcedMode==='lava'?'DESCIDA VULCÂNICA':forcedMode==='flooded'?'PASSAGEM INUNDADA':'DESCIDA DO RIO')+' • JORNADA '+scenarioTestJourney);
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1910

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1911

```text
async function startVhalorFloodExitQuick(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1912

```text
 if(!await waitForQaScenario(3,scenarioTestJourney))return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1913

```text
 if(scenarioTestJourney===2&&!lyraRoot){try{await loadLyra();setLyraJourneyState();forceLyraRun()}catch(err){console.warn('QA LYRA SAÍDA VHALOR',err)}}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1914

```text
 distance=720;realmStartDistance=0;tobogganAutoDone=false;updateHUD();
```

**Explicação:** Controla alguma parte do sistema de descida/tobogã, incluindo estado, visual, física ou interface.

### Linha 1915

```text
 setVhalorFloodVisual(true);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1916

```text
 // Aproximadamente 6 segundos para observar a canoa, o portal de saída e o retorno completo à pista normal.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1917

```text
 const exitAt=distance+(TOBOGGAN_SPEED*TOBOGGAN_DISTANCE_SCALE*6.0);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1918

```text
 startToboggan(true,'flooded',exitAt);
```

**Explicação:** Controla alguma parte do sistema de descida/tobogã, incluindo estado, visual, física ou interface.

### Linha 1919

```text
 qaSetStatus('TESTE ATIVO • VHALOR • SAÍDA INUNDADA EM ~6s • observe câmera, altura, piso e retorno ao normal');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1920

```text
 toast('VHALOR • TESTE DE SAÍDA INUNDADA • ~6 SEGUNDOS');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1921

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1922

```text
async function startFinalSceneTest(mode){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 1923

```text
 stopTheme(250);hideFamilyScene();endToboggan(true);resetOpeningImpactVisuals();stopAmbientBed();stopWeatherAudio();resetFootsteps();
```

**Explicação:** Controla alguma parte do sistema de descida/tobogã, incluindo estado, visual, física ou interface.

### Linha 1924

```text
 started=false;paused=true;gameOver=false;weatherTestMode=true;weatherTestOverride=null;autoRealm=false;huntersVisible=false;
```

**Explicação:** Controla os caçadores e sua posição, animação ou participação na perseguição.

### Linha 1925

```text
 UI.pausePanel?.classList.remove('show');UI.revivePanel?.classList.remove('show');UI.journeyEndPanel?.classList.remove('show');UI.hud?.classList.remove('show');UI.pause?.classList.remove('show');UI.menu?.classList.add('hidden');
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1926

```text
 if(UI.scenarioTestPanel){UI.scenarioTestPanel.classList.remove('show');UI.scenarioTestPanel.style.display=''}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1927

```text
 const q=$('qaReturnBtn');if(q)q.classList.add('show');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1928

```text
 if(mode==='j2start'){await startScenarioTest(0,2);toast('TESTE • ABERTURA DA JORNADA 2');return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1929

```text
 UI.loading.classList.remove('hidden');UI.loadingText.textContent=mode==='j1'?'Carregando final da Jornada 1...':'Carregando final da Jornada 2...';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1930

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 1931

```text
   if(!hunters.length)await loadHunters();if(!lyraRoot)await loadLyra();await loadWife();currentJourney=mode==='j1'?1:2;realmIndex=5;await loadRealm(5,true);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1932

```text
 }catch(err){console.warn('TESTE CENA FINAL',err)}finally{UI.loading.classList.add('hidden')}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 1933

```text
 if(mode==='j1'){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1934

```text
   await showFamilyScene('j1final');
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 1935

```text
   if(UI.arrivalBanner){UI.arrivalBanner.textContent='🏁 FINAL JORNADA 1 • VAREK CHEGOU À FRONTEIRA';UI.arrivalBanner.classList.add('show')}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1936

```text
   toast('TESTE • FINAL JORNADA 1');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1937

```text
   setTimeout(()=>{
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 1938

```text
     if(UI.arrivalBanner)UI.arrivalBanner.classList.remove('show');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1939

```text
     showJourney1ResultPanel({distance:13200,finalTime:elapsed+timePenalty,score:runScore(),rank:previewRunRank()},true);
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 1940

```text
   },2200);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1941

```text
 }else{
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1942

```text
   await showFinalArrival({rank:1,finalTime:0,score:0},true);if($('finalMenu')){$('finalMenu').textContent='🧪 VOLTAR AOS CENÁRIOS';$('finalMenu').onclick=()=>returnToScenarioHub()}if($('finalReplay')){$('finalReplay').textContent='↻ REVER FINAL';$('finalReplay').onclick=()=>void startFinalSceneTest('j2final')}toast('TESTE • FINAL JORNADA 2');
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 1943

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1944

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1945

```text
function toast(t){UI.toast.textContent=t;UI.toast.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>UI.toast.classList.remove('show'),1200)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1946

```text
function disposeObject(obj){obj.traverse(n=>{if(n.geometry)n.geometry.dispose?.();if(n.material){const ms=Array.isArray(n.material)?n.material:[n.material];ms.forEach(m=>{for(const k in m){const v=m[k];if(v&&v.isTexture)v.dispose?.()}m.dispose?.()})}})}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1947

```text
function setSRGB(obj){obj.traverse(n=>{if(n.isMesh){n.castShadow=shadowsOn;n.receiveShadow=shadowsOn;if(n.material){const ms=Array.isArray(n.material)?n.material:[n.material];ms.forEach(m=>{if(m.map)m.map.encoding=THREE.sRGBEncoding;m.needsUpdate=true})}}})}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1948

```text
function applyOutfitStyle(model,cfg){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1949

```text
 const st=cfg&&cfg.style;if(!model||!st)return;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1950

```text
 const tint=new THREE.Color(st.tint||0xffffff),em=new THREE.Color(st.emissive||0x000000);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1951

```text
 model.traverse(n=>{if(!n.isMesh||!n.material)return;const src=Array.isArray(n.material)?n.material:[n.material];const ms=src.map(m=>{const c=m.clone();if(st.specialVolcanic){/* Preserva pele/rosto/roupa-base: o visual premium vem da armadura 3D sobreposta. */if('roughness'in c)c.roughness=Math.max(c.roughness??.65,.76);if('metalness'in c)c.metalness=Math.min(c.metalness??.05,.10);if(c.emissive){c.emissive.set(0x000000);c.emissiveIntensity=0}}else{if(c.color)c.color.multiply(tint);if('roughness'in c)c.roughness=st.roughness??c.roughness;if('metalness'in c)c.metalness=st.metalness??c.metalness;if(c.emissive){c.emissive.copy(em);c.emissiveIntensity=st.emissiveIntensity||0}}c.needsUpdate=true;return c});n.material=Array.isArray(n.material)?ms:ms[0]});
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1952

```text
 addOutfitSignature(model,cfg)
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1953

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1954

```text
function addArmorMesh(parent,geo,mat,pos=[0,0,0],rot=[0,0,0],scale=[1,1,1],name='MR_ARMOR'){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1955

```text
 if(!parent)return null;const m=new THREE.Mesh(geo,mat);m.name=name;m.position.set(...pos);m.rotation.set(...rot);m.scale.set(...scale);m.castShadow=shadowsOn;m.receiveShadow=shadowsOn;parent.add(m);return m
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1956

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1957

```text
function addArmorSegment(parent,a,b,r,mat,name='MR_LAVA_CRACK'){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1958

```text
 if(!parent)return null;const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b),mid=av.clone().add(bv).multiplyScalar(.5),len=av.distanceTo(bv);const g=new THREE.CylinderGeometry(r,r*.82,len,6,1,false),m=new THREE.Mesh(g,mat);m.name=name;m.position.copy(mid);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),bv.clone().sub(av).normalize());m.castShadow=false;parent.add(m);return m
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1959

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1960

```text
function addVolcanicArmor(model,cfg){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 1961

```text
 if(!model||model.userData.MR_VOLCANIC_ARMOR)return;model.userData.MR_VOLCANIC_ARMOR=true;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1962

```text
 // REWORK 2: a base do Varek permanece natural. A leitura vulcânica vem de grandes placas de obsidiana + fissuras de magma.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1963

```text
 const lava=new THREE.MeshStandardMaterial({color:0xff5a14,roughness:.22,metalness:.08,emissive:0xff2a05,emissiveIntensity:2.10});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1964

```text
 const lavaHot=new THREE.MeshStandardMaterial({color:0xffc04a,roughness:.18,metalness:.03,emissive:0xff5a08,emissiveIntensity:2.75});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1965

```text
 const obsidian=new THREE.MeshStandardMaterial({color:0x121011,roughness:.44,metalness:.68,emissive:0x100100,emissiveIntensity:.05});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1966

```text
 const obsidian2=new THREE.MeshStandardMaterial({color:0x20191a,roughness:.55,metalness:.52,emissive:0x160200,emissiveIntensity:.04});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1967

```text
 const hotMetal=new THREE.MeshStandardMaterial({color:0x2d211f,roughness:.38,metalness:.82,emissive:0x210300,emissiveIntensity:.08});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1968

```text
 const burntCloth=new THREE.MeshStandardMaterial({color:0x24100d,roughness:.98,metalness:.01,emissive:0x100000,emissiveIntensity:.03,side:THREE.DoubleSide});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1969

```text
 const chest=model.getObjectByName('mixamorig:Spine2')||model.getObjectByName('mixamorig:Spine1');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1970

```text
 const spine=model.getObjectByName('mixamorig:Spine1')||chest;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1971

```text
 const hips=model.getObjectByName('mixamorig:Hips');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1972

```text
 if(chest){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1973

```text
   // Peitoral largo de obsidiana, dividido para não parecer apenas uma nova cor de camisa.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1974

```text
   const plate=addArmorMesh(chest,new THREE.DodecahedronGeometry(.215,0),obsidian,[0,.055,.122],[0,0,0],[1.86,1.38,.54],'MR_VOLCANIC_CHEST_HEAVY');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1975

```text
   addArmorMesh(chest,new THREE.BoxGeometry(.43,.105,.075),hotMetal,[0,.175,.118],[.02,0,0],[1,1,1],'MR_VOLCANIC_UPPER_CHEST');
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1976

```text
   addArmorMesh(chest,new THREE.OctahedronGeometry(.083,0),obsidian2,[0,.050,.233],[0,0,Math.PI/4],[1.0,1.45,.52],'MR_VOLCANIC_CORE');
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1977

```text
   // Canal central + ramificações de lava.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1978

```text
   addArmorSegment(chest,[0,.205,.224],[0,.075,.246],.012,lavaHot);addArmorSegment(chest,[0,.075,.246],[0,-.120,.228],.011,lavaHot);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1979

```text
   addArmorSegment(chest,[0,.105,.240],[-.115,.030,.218],.009,lava);addArmorSegment(chest,[0,.105,.240],[.115,.030,.218],.009,lava);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1980

```text
   addArmorSegment(chest,[-.115,.030,.218],[-.175,-.052,.184],.007,lava);addArmorSegment(chest,[.115,.030,.218],[.175,-.052,.184],.007,lava);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1981

```text
   addArmorSegment(chest,[-.050,-.030,.232],[-.125,-.105,.188],.006,lava);addArmorSegment(chest,[.050,-.030,.232],[.125,-.105,.188],.006,lava);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1982

```text
   // Cristais/fragmentos de rocha ao redor do núcleo.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1983

```text
   for(const [x,y,r] of [[-.145,.125,-.18],[.145,.125,.18],[-.170,-.035,-.35],[.170,-.035,.35]])addArmorMesh(chest,new THREE.ConeGeometry(.030,.115,5),obsidian2,[x,y,.188],[0,0,r],[1,1,1],'MR_VOLCANIC_CHEST_SHARD');
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1984

```text
   const coreLight=new THREE.PointLight(0xff4a10,.72,1.28);coreLight.position.set(0,.055,.30);chest.add(coreLight);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1985

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1986

```text
 if(spine){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 1987

```text
   // Faixa/cintura escura para separar o peitoral do tecido original.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1988

```text
   addArmorMesh(spine,new THREE.TorusGeometry(.185,.032,7,20),hotMetal,[0,-.115,.015],[Math.PI/2,0,0],[1.20,.75,1],'MR_VOLCANIC_RIB_BAND');
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1989

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1990

```text
 // Ombreiras grandes e assimétricas com espinhos de rocha.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1991

```text
 [['mixamorig:LeftShoulder',1],['mixamorig:RightShoulder',-1]].forEach(([boneName,side])=>{const b=model.getObjectByName(boneName);if(!b)return;
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1992

```text
   const pad=addArmorMesh(b,new THREE.IcosahedronGeometry(.165,1),obsidian,[side*.075,.010,.010],[0,0,side*.15],[1.55,.82,1.18],'MR_VOLCANIC_PAULDRON_HEAVY');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 1993

```text
   addArmorMesh(pad,new THREE.BoxGeometry(.215,.075,.165),hotMetal,[side*.020,.005,.012],[0,0,side*.08],[1,1,1],'MR_VOLCANIC_PAULDRON_PLATE');
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 1994

```text
   for(let i=0;i<4;i++){const y=.080-i*.052;addArmorMesh(pad,new THREE.ConeGeometry(.030+i*.002,.145-i*.010,5),obsidian2,[side*(.070+i*.034),y,.020],[0,0,side*(Math.PI/2-.18)],[1,1,1],'MR_VOLCANIC_SPIKE')}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 1995

```text
   addArmorSegment(pad,[-.115,.040,.135],[.105,.022,.142],.010,lavaHot);addArmorSegment(pad,[-.055,-.045,.130],[.120,-.060,.118],.007,lava);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1996

```text
 });
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1997

```text
 // Braçadeiras pesadas: preto/metal com uma única veia quente central.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1998

```text
 [['mixamorig:LeftForeArm',1],['mixamorig:RightForeArm',-1]].forEach(([boneName,side])=>{const b=model.getObjectByName(boneName);if(!b)return;
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 1999

```text
   const g=addArmorMesh(b,new THREE.CylinderGeometry(.108,.132,.270,8,1,false),obsidian2,[0,.118,.008],[0,0,0],[1,1,1],'MR_VOLCANIC_GAUNTLET_HEAVY');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2000

```text
   addArmorMesh(g,new THREE.BoxGeometry(.125,.205,.070),hotMetal,[0,0,.092],[0,0,0],[1,1,1],'MR_VOLCANIC_GAUNTLET_FACE');
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

