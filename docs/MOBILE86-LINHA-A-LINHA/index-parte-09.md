# index.html — Parte 9

Linhas **2001 a 2250** da MOBILE86.

### Linha 2001

```text
   addArmorSegment(g,[0,-.118,.132],[0,.115,.126],.009,lavaHot);addArmorSegment(g,[-.042,.000,.127],[.042,.055,.130],.006,lava);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2002

```text
   addArmorMesh(g,new THREE.ConeGeometry(.027,.105,5),obsidian,[side*.102,.030,.045],[0,0,side*Math.PI/2],[1,1,1],'MR_VOLCANIC_GAUNTLET_SPIKE');
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2003

```text
 });
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2004

```text
 // Placas nas coxas para mudar a silhueta também de costas/lado.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2005

```text
 [['mixamorig:LeftUpLeg',1],['mixamorig:RightUpLeg',-1]].forEach(([boneName,side])=>{const b=model.getObjectByName(boneName);if(!b)return;
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 2006

```text
   const p=addArmorMesh(b,new THREE.BoxGeometry(.205,.310,.095),obsidian2,[side*.010,.145,.080],[0,0,side*.03],[1,1,1],'MR_VOLCANIC_THIGH_PLATE');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2007

```text
   addArmorSegment(p,[0,-.135,.055],[0,.135,.055],.008,lava);addArmorMesh(p,new THREE.ConeGeometry(.024,.090,5),obsidian,[side*.085,.060,.030],[0,0,side*Math.PI/2],[1,1,1],'MR_VOLCANIC_THIGH_SPIKE');
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2008

```text
 });
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2009

```text
 // Caneleiras e joelheiras maiores.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2010

```text
 [['mixamorig:LeftLeg',1],['mixamorig:RightLeg',-1]].forEach(([boneName,side])=>{const b=model.getObjectByName(boneName);if(!b)return;
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 2011

```text
   const g=addArmorMesh(b,new THREE.CylinderGeometry(.115,.145,.340,8,1,false),obsidian,[0,.145,.020],[0,0,0],[1,1,1],'MR_VOLCANIC_GREAVE_HEAVY');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2012

```text
   addArmorMesh(g,new THREE.OctahedronGeometry(.080,0),hotMetal,[0,.145,.115],[0,0,0],[1.25,.85,.60],'MR_VOLCANIC_KNEE');
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2013

```text
   addArmorSegment(g,[-.050,-.145,.130],[0,.000,.145],.009,lava);addArmorSegment(g,[0,.000,.145],[.052,.145,.128],.010,lavaHot);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2014

```text
 });
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2015

```text
 // Botas com placas frontais para o personagem continuar diferente quando corre.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2016

```text
 [['mixamorig:LeftFoot',1],['mixamorig:RightFoot',-1]].forEach(([boneName,side])=>{const b=model.getObjectByName(boneName);if(!b)return;
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 2017

```text
   const f=addArmorMesh(b,new THREE.BoxGeometry(.180,.105,.265),obsidian2,[0,.035,.075],[.12,0,0],[1,1,1],'MR_VOLCANIC_BOOT');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2018

```text
   addArmorSegment(f,[0,-.035,.142],[0,.040,.142],.008,lavaHot);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2019

```text
 });
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2020

```text
 if(hips){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2021

```text
   // Cinto blindado e tabardo quase preto/queimado — sem grande massa vermelha.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2022

```text
   addArmorMesh(hips,new THREE.TorusGeometry(.225,.038,7,22),hotMetal,[0,.005,.005],[Math.PI/2,0,0],[1.18,.74,1],'MR_VOLCANIC_BELT');
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2023

```text
   const tab=addArmorMesh(hips,new THREE.PlaneGeometry(.355,.515),burntCloth,[0,-.225,.115],[0,0,0],[1,1,1],'MR_VOLCANIC_TABARD_DARK');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2024

```text
   addArmorSegment(tab,[0,.205,.010],[0,-.205,.010],.007,lava);addArmorSegment(tab,[-.075,.120,.010],[-.115,-.155,.010],.005,lava);addArmorSegment(tab,[.075,.120,.010],[.115,-.155,.010],.005,lava);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2025

```text
   // Placas laterais tipo saia de armadura.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2026

```text
   for(const side of [-1,1])addArmorMesh(hips,new THREE.BoxGeometry(.105,.360,.070),obsidian2,[side*.185,-.145,.045],[0,0,side*.10],[1,1,1],'MR_VOLCANIC_HIP_PLATE');
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2027

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2028

```text
 const neck=model.getObjectByName('mixamorig:Neck');if(neck){
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2029

```text
   addArmorMesh(neck,new THREE.TorusGeometry(.128,.040,7,20),obsidian2,[0,.012,.005],[Math.PI/2,0,0],[1.22,.90,1],'MR_VOLCANIC_COLLAR_HEAVY');
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2030

```text
   for(const side of [-1,1])addArmorMesh(neck,new THREE.ConeGeometry(.022,.105,5),obsidian,[side*.105,.015,.020],[0,0,side*Math.PI/2],[1,1,1],'MR_VOLCANIC_COLLAR_SPIKE');
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2031

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2032

```text
 model.userData.MR_VOLCANIC_MATS={lava,lavaHot};
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2033

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2034

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 2035

```text
function addOutfitSignature(model,cfg){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2036

```text
 const st=cfg&&cfg.style;if(!st||cfg.id==='outfit_varek')return;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2037

```text
 const chest=model.getObjectByName('mixamorig:Spine2')||model.getObjectByName('mixamorig:Spine1');if(!chest)return;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2038

```text
 const mat=new THREE.MeshStandardMaterial({color:st.accent||0xffffff,roughness:.52,metalness:.28,emissive:st.emissive||0x000000,emissiveIntensity:(st.emissiveIntensity||0)*1.25});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2039

```text
 const badge=new THREE.Mesh(new THREE.OctahedronGeometry(.045,0),mat);badge.name='MR_SKIN_SIGNATURE';badge.position.set(0,.075,.105);badge.scale.set(1.2,1.55,.55);chest.add(badge);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2040

```text
 if(cfg.id==='outfit_varek_celestial'){const ring=new THREE.Mesh(new THREE.TorusGeometry(.065,.010,8,18),mat.clone());ring.position.set(0,.075,.106);ring.rotation.x=Math.PI/2;chest.add(ring)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2041

```text
 if(cfg.id==='outfit_varek_volcanic'){addVolcanicArmor(model,cfg)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2042

```text
 if(cfg.id==='outfit_varek_volcanic'||cfg.id==='outfit_varek_glacial'){const l=new THREE.PointLight(st.accent||0xffffff,.22,.75);l.position.set(0,.08,.18);chest.add(l)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2043

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2044

```text
function roundedColor(hex,f=.12){const c=new THREE.Color(hex);c.offsetHSL((Math.random()-.5)*.015,(Math.random()-.5)*f,(Math.random()-.5)*f);return c}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2045

```text
function curveFactor(z){return Math.pow(Math.max(0,Math.min(1,-z/95)),1.28)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2046

```text
function trackCurveX(z){const f=curveFactor(z);return curveStrength*7.4*f*f*(.82+.18*Math.cos((-z)*.055))}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2047

```text
function trackCurveYaw(z){const f=curveFactor(z);return -curveStrength*.19*f}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2048

```text
function updateCurve(dt){curveTimer-=dt;if(curveTimer<=0){const choices=MOBILE_RUNNER?[-.88,-.64,-.42,.42,.64,.88]:[-1,-.78,-.52,.48,.75,1];curveTarget=choices[Math.floor(Math.random()*choices.length)];curveTimer=(MOBILE_RUNNER?2.35:2.7)+Math.random()*(MOBILE_RUNNER?2.65:3.4)}curveStrength+=(curveTarget-curveStrength)*Math.min(1,dt*(MOBILE_RUNNER?.50:.42))}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2049

```text
function effortBurst(label='ESFORÇO'){effortTimer=.55;if(UI.effortPulse){UI.effortPulse.textContent=label;UI.effortPulse.classList.add('show')}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2050

```text
function updateHydrationWarnings(){if(water<=0)return;if(water<15&&hydrationBand!==0){hydrationBand=0;toast('DESIDRATAÇÃO GRAVE • PROCURE ÁGUA OU POSTO DE APOIO')}else if(water<35&&hydrationBand>1){hydrationBand=1;toast('SEDE • HIDRATAÇÃO ABAIXO DE 35%')}else if(water>=35&&hydrationBand<2){hydrationBand=2}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2051

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 2052

```text
function mobileRhythmSpeed(progress){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2053

```text
 if(!MOBILE_RUNNER)return Math.min(RUN_SPEED_MAX,RUN_SPEED_BASE+distance/220);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2054

```text
 const p=Math.max(0,progress||0),id=REALMS[realmIndex]?.id;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2055

```text
 let target;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 2056

```text
 // MOBILE56: base 36, médio 35, máximo 40, largada em 40.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2057

```text
 if(postTobogganExitProgress!=null&&p>=postTobogganExitProgress){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2058

```text
   const d=p-postTobogganExitProgress;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2059

```text
   if(d<180)target=40.0;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2060

```text
   else{
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 2061

```text
     const phase=(d-180)%900;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2062

```text
     target=phase<500?35.0:39.0;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2063

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2064

```text
 }else{
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2065

```text
   if(p<420)target=40.0;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2066

```text
   else{
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 2067

```text
     const phase=(p-420)%900;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2068

```text
     target=phase<500?35.0:39.0;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2069

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2070

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2071

```text
 if(id==='forest')target=Math.max(target,35.5);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2072

```text
 if(id==='celestial')target=Math.max(35.0,Math.min(target,39.5));
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2073

```text
 return Math.min(RUN_SPEED_MAX,target);
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 2074

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2075

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 2076

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 2077

```text
function init3D(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2078

```text
 if(!window.THREE||!THREE.GLTFLoader){UI.loading.classList.add('hidden');UI.error.classList.add('show');return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2079

```text
 renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:!MOBILE_RUNNER,powerPreference:'high-performance'});renderer.setClearAlpha(0);renderer.setPixelRatio(Math.min(devicePixelRatio||1,TARGET_PIXEL_RATIO));renderer.outputEncoding=THREE.sRGBEncoding;if(MOBILE_RUNNER){shadowsOn=false}renderer.shadowMap.enabled=shadowsOn;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2080

```text
 scene=new THREE.Scene();scene.background=new THREE.Color(0x91a899);scene.fog=new THREE.Fog(0x84978b,28,125);
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2081

```text
 camera=new THREE.PerspectiveCamera(60,1,.1,280);camera.position.set(0,3.55,8.4);
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2082

```text
 clock=new THREE.Clock();loader=new THREE.GLTFLoader();fbxLoader=THREE.FBXLoader?new THREE.FBXLoader():null;
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2083

```text
 hemi=new THREE.HemisphereLight(0xe9f5dc,0x28352e,1.15);scene.add(hemi);
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2084

```text
 sun=new THREE.DirectionalLight(0xffe3ad,1.55);sun.position.set(-12,18,10);sun.castShadow=shadowsOn;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-14;sun.shadow.camera.right=14;sun.shadow.camera.top=18;sun.shadow.camera.bottom=-8;sun.shadow.camera.near=1;sun.shadow.camera.far=45;scene.add(sun);
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2085

```text
 worldRoot=new THREE.Group();scene.add(worldRoot);roadGroup=new THREE.Group();decorGroup=new THREE.Group();itemGroup=new THREE.Group();sceneryGroup=new THREE.Group();skyGroup=new THREE.Group();tobogganGroup=new THREE.Group();tobogganGroup.visible=false;worldRoot.add(roadGroup,decorGroup,itemGroup,sceneryGroup,skyGroup,tobogganGroup);
```

**Explicação:** Usa a biblioteca Three.js para criar, posicionar, animar ou renderizar elementos 3D.

### Linha 2086

```text
 buildSky();buildRoad();buildDecor();buildOpeningDragon();buildShelter3D();resize();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2087

```text
 UI.loadingText.textContent='Carregando Varek 3D...';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2088

```text
 loadHero().then(async()=>{
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2089

```text
   // No PC QA o reino 0 NÃO é carregado automaticamente depois de uma seleção antecipada.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2090

```text
   // Isto elimina a corrida que fazia qualquer botão voltar para TERRAS DOS DRAGÕES.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2091

```text
   if(!QA_SCENARIO_MODE)await loadRealm(0,true);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2092

```text
   qaEngineReady=true;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2093

```text
   void applyEquipment();UI.loading.classList.add('hidden');UI.status3d.textContent='ATIVO';playHero('Walking',0);refreshMenuStats();renderUpgrades();renderProfile();renderRanking();render();setTimeout(()=>{void ensureOutfitPreviews()},120);
```

**Explicação:** Controla o modelo, posição, visibilidade ou animação de Varek.

### Linha 2094

```text
   if(FRESH_LAUNCH_ONCE&&!QA_SCENARIO_MODE){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2095

```text
     started=false;paused=false;gameOver=false;currentJourney=1;realmIndex=JOURNEY1_ORDER[0];
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 2096

```text
     UI.menu?.classList.remove('hidden');UI.hud?.classList.remove('show');UI.pause?.classList.remove('show');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2097

```text
     pendingJourneyStart=1;
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 2098

```text
     renderProfile();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2099

```text
     const st=$('profileStatus');if(st){st.className='profileStatus';st.textContent='PRIMEIRO ACESSO • preencha Nome e País e salve para iniciar sua jornada.'}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2100

```text
     UI.profilePanel?.classList.add('show');
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2101

```text
     setTimeout(()=>{const n=$('profileName');if(n)n.focus()},120);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2102

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2103

```text
   const qaParams=new URLSearchParams(location.search);const qaRealmRaw=qaParams.get('qaRealm');const qaJourneyRaw=qaParams.get('qaJourney');const qaRealmNum=qaRealmRaw===null?NaN:Number(qaRealmRaw);const qaJourneyNum=Number(qaJourneyRaw)===2?2:1;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2104

```text
   if(PC_QA_BUILD){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2105

```text
     let target=null;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 2106

```text
     if(Number.isInteger(qaRealmNum)&&qaRealmNum>=0&&qaRealmNum<REALMS.length)target={realm:qaRealmNum,journey:qaJourneyNum};
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2107

```text
     else if(qaPendingScenario)target={...qaPendingScenario};
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 2108

```text
     if(target){qaPendingScenario=null;await launchScenarioTest(target.realm,target.journey)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2109

```text
     else{openScenarioHub();qaSetStatus('PRONTO • 6 reinos + trechos críticos + descidas + finais liberados para teste.')}
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 2110

```text
     setTimeout(()=>{if(!hunters.length)loadHunters().catch(err=>console.warn('CAÇADORAS EM SEGUNDO PLANO',err))},120);
```

**Explicação:** Controla os caçadores e sua posição, animação ou participação na perseguição.

### Linha 2111

```text
   }else if(MOBILE_SCENARIO_TEST){
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2112

```text
     if(qaPendingScenario){const target={...qaPendingScenario};qaPendingScenario=null;await launchScenarioTest(target.realm,target.journey)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2113

```text
     else{openScenarioHub();qaSetStatus('PRONTO • 6 reinos + trechos críticos + descidas + finais liberados para teste.')}
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 2114

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2115

```text
 }).catch(err=>{console.error('MAX HEALMS INIT 3D',err);qaEngineReady=false;UI.loading.classList.add('hidden');UI.error.classList.add('show');const p=document.getElementById('engineErrorText')||UI.error.querySelector('p');if(p)p.textContent='O motor 3D carregou, mas ocorreu uma falha ao iniciar personagem/cenário: '+(err&&err.message?err.message:String(err));});
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 2116

```text
 requestAnimationFrame(loop);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2117

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2118

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 2119

```text
function buildSky(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2120

```text
 while(skyGroup.children.length){const c=skyGroup.children.pop();disposeObject(c)}
```

**Explicação:** Repete o bloco enquanto a condição permanecer verdadeira.

### Linha 2121

```text
 const g=new THREE.SphereGeometry(180,MOBILE_RUNNER?18:32,MOBILE_RUNNER?12:20);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2122

```text
 const m=new THREE.MeshBasicMaterial({color:0xa8c5b4,side:THREE.BackSide,fog:false});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2123

```text
 const sky=new THREE.Mesh(g,m);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2124

```text
 sky.position.y=-15;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2125

```text
 skyGroup.add(sky);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2126

```text
 // Paisagem distante agora depende dos GLBs reais + fog.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2127

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2128

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 2129

```text
function makeStoneMaterial(color){return new THREE.MeshStandardMaterial({color,roughness:.91,metalness:.015})}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2130

```text
function makeMobileRoadTileTexture(cfg){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2131

```text
 const c=document.createElement('canvas');c.width=512;c.height=512;const g=c.getContext('2d');if(!g)return null;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2132

```text
 const cols=(cfg.road&&cfg.road.length?cfg.road:[0x666666,0x5d5d5d,0x707070]).map(v=>'#'+v.toString(16).padStart(6,'0'));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2133

```text
 const rows=4,colsN=3,w=c.width/colsN,h=c.height/rows;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2134

```text
 g.fillStyle=cols[0];g.fillRect(0,0,c.width,c.height);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2135

```text
 for(let y=0;y<rows;y++)for(let x=0;x<colsN;x++){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2136

```text
   g.fillStyle=cols[(x+y)%cols.length];
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2137

```text
   g.fillRect(x*w+2,y*h+2,w-4,h-4);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2138

```text
   g.fillStyle='rgba(255,255,255,.025)';g.fillRect(x*w+8,y*h+8,w-16,8);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2139

```text
   g.fillStyle='rgba(0,0,0,.045)';g.fillRect(x*w+8,y*h+h-17,w-16,7);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2140

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2141

```text
 g.strokeStyle='rgba(20,18,16,.20)';g.lineWidth=4;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2142

```text
 for(let x=1;x<colsN;x++){g.beginPath();g.moveTo(x*w,0);g.lineTo(x*w,c.height);g.stroke()}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2143

```text
 for(let y=1;y<rows;y++){g.beginPath();g.moveTo(0,y*h);g.lineTo(c.width,y*h);g.stroke()}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2144

```text
 const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(1,2.15);t.encoding=THREE.sRGBEncoding;t.minFilter=THREE.LinearFilter;t.magFilter=THREE.LinearFilter;t.needsUpdate=true;return t
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2145

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2146

```text
function makeRoadBrandTexture(accent=0xf4c56a){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2147

```text
 const c=document.createElement('canvas');c.width=512;c.height=256;const g=c.getContext('2d');if(!g)return null;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2148

```text
 g.clearRect(0,0,512,256);
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2149

```text
 const col='#'+accent.toString(16).padStart(6,'0');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2150

```text
 g.strokeStyle=col;g.globalAlpha=.72;g.lineWidth=9;g.strokeRect(44,38,424,180);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2151

```text
 g.globalAlpha=.88;g.fillStyle=col;g.font='900 58px sans-serif';g.textAlign='center';g.fillText('MAX HEALMS',256,115);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2152

```text
 g.globalAlpha=.62;g.font='800 20px sans-serif';g.fillText('RUN • SURVIVE • ESCAPE',256,151);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2153

```text
 g.globalAlpha=.52;g.beginPath();g.arc(256,190,24,0,Math.PI*2);g.stroke();
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2154

```text
 g.beginPath();g.moveTo(244,190);g.lineTo(268,190);g.moveTo(256,178);g.lineTo(256,202);g.stroke();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2155

```text
 const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;t.minFilter=THREE.LinearFilter;t.magFilter=THREE.LinearFilter;t.needsUpdate=true;return t
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2156

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2157

```text
function makeNerisBrandTexture(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2158

```text
 const c=document.createElement('canvas');c.width=512;c.height=256;const g=c.getContext('2d');if(!g)return null;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2159

```text
 const bg=g.createLinearGradient(0,0,512,256);bg.addColorStop(0,'#18271d');bg.addColorStop(1,'#354d32');g.fillStyle=bg;g.fillRect(0,0,512,256);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2160

```text
 g.strokeStyle='rgba(182,221,137,.42)';g.lineWidth=5;g.strokeRect(16,16,480,224);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2161

```text
 g.fillStyle='rgba(216,238,184,.95)';g.font='900 44px sans-serif';g.textAlign='center';g.fillText('MAX HEALMS',256,74);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2162

```text
 g.font='700 17px sans-serif';g.fillStyle='rgba(230,240,208,.86)';g.fillText('RUN • SURVIVE • ESCAPE',256,104);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2163

```text
 g.strokeStyle='rgba(165,205,119,.78)';g.lineWidth=7;g.lineCap='round';
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2164

```text
 // runner + portal + three hunter marks, all original simple glyphs
```

**Explicação:** Controla os caçadores e sua posição, animação ou participação na perseguição.

### Linha 2165

```text
 g.beginPath();g.arc(160,145,13,0,Math.PI*2);g.stroke();g.beginPath();g.moveTo(160,158);g.lineTo(150,190);g.lineTo(175,208);g.moveTo(156,171);g.lineTo(184,181);g.moveTo(150,190);g.lineTo(128,211);g.stroke();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2166

```text
 g.beginPath();g.arc(272,173,36,0,Math.PI*2);g.stroke();g.beginPath();g.arc(272,173,22,0,Math.PI*2);g.stroke();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2167

```text
 for(let i=0;i<3;i++){const x=365+i*28;g.beginPath();g.moveTo(x,148);g.lineTo(x+10,174);g.lineTo(x-4,203);g.stroke()}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2168

```text
 const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;t.minFilter=THREE.LinearFilter;t.magFilter=THREE.LinearFilter;t.needsUpdate=true;return t
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2169

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2170

```text
function buildRoad(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 2171

```text
 while(roadGroup.children.length){const old=roadGroup.children[0];roadGroup.remove(old);disposeObject(old)}roadSegments.length=0;bridgeDetailGroups.length=0;kharvorUpperBridgeGroups.length=0;forestClosedBridgeGroups.length=0;if(renderer&&renderer.renderLists&&renderer.renderLists.dispose)renderer.renderLists.dispose();
```

**Explicação:** Repete o bloco enquanto a condição permanecer verdadeira.

### Linha 2172

```text
 const cfg=REALMS[realmIndex];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2173

```text
 const firstRealmMobile=false; // MOBILE41: no mobile usar a mesma paleta-base do PC.
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2174

```text
 const bridgeDeckMat=new THREE.MeshStandardMaterial({color:0x433126,roughness:1,metalness:0,flatShading:true});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2175

```text
 const bridgeDeckAltMat=new THREE.MeshStandardMaterial({color:0x4d382a,roughness:1,metalness:0,flatShading:true});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2176

```text
 const bridgeDeckBaseMat=new THREE.MeshStandardMaterial({color:0x2d2119,roughness:1,metalness:0,flatShading:true});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2177

```text
 const bridgeDeckBaseGeo=new THREE.BoxGeometry(8.16,.075,9.92);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2178

```text
 const bridgeRopeMat=new THREE.MeshStandardMaterial({color:0x33261d,roughness:1,metalness:0});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2179

```text
 const bridgePostMat=new THREE.MeshStandardMaterial({color:0x493629,roughness:1,metalness:0,flatShading:true});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2180

```text
 const tileGeo=new THREE.BoxGeometry(2.45,.18,2.62),mobileLaneGeo=new THREE.BoxGeometry(2.52,.18,10.64),edgeGeo=new THREE.BoxGeometry(.34,.28,10.64),seamGeo=new THREE.BoxGeometry(.08,.035,2.46),parapetBaseGeo=new THREE.BoxGeometry(.40,.56,10.58),parapetCapGeo=new THREE.BoxGeometry(.56,.14,10.62),guardPostGeo=new THREE.BoxGeometry(.18,1.18,.18),guardRailGeo=new THREE.BoxGeometry(.12,.12,10.46),buttressGeo=new THREE.BoxGeometry(.30,1.68,.42),braceGeo=new THREE.BoxGeometry(.16,.58,.22);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2181

```text
 const railStoneMat=makeStoneMaterial(roundedColor(cfg.edge,.04));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2182

```text
 const railCapMat=makeStoneMaterial(roundedColor(cfg.road[0],.06));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2183

```text
 const edgeRoadMat=makeStoneMaterial(cfg.edge);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2184

```text
 const mobileRoadPalette={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2185

```text
  vpath:0x6b4938,      // terra quente
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2186

```text
  vruins:0x454b56,     // pedra fria azulada
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2187

```text
  ember:0x49332f,      // carvão vulcânico
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2188

```text
  ruins:0x66756d,      // pedra úmida esverdeada
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2189

```text
  forest:0x665b3f,     // terra/musgo
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2190

```text
  celestial:0xb39462   // pedra clara dourada
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2191

```text
 };
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2192

```text
 const stableMobileRoadColor=mobileRoadPalette[cfg.id]??cfg.road[0];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2193

```text
 const mobileRoadTileTex=makeMobileRoadTileTexture(cfg);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2194

```text
 const mobileRoadMats=[0,1,2].map((_,laneI)=>new THREE.MeshBasicMaterial({color:0xffffff,map:mobileRoadTileTex||null}));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2195

```text
 const roadLogoTex=makeRoadBrandTexture(cfg.accent);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2196

```text
 const roadLogoMat=roadLogoTex?new THREE.MeshBasicMaterial({map:roadLogoTex,transparent:true,opacity:cfg.id==='celestial'?.66:.48,depthWrite:false,side:THREE.DoubleSide}):null;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2197

```text
 const railWoodMat=new THREE.MeshStandardMaterial({color:0x7b6752,roughness:.9,metalness:.03});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2198

```text
 const khUnderMat=MOBILE_RUNNER?new THREE.MeshBasicMaterial({color:0x353432}):new THREE.MeshStandardMaterial({color:0x353432,roughness:1}),khBeamMat=MOBILE_RUNNER?new THREE.MeshBasicMaterial({color:0x2c2926}):new THREE.MeshStandardMaterial({color:0x2c2926,roughness:1}),khMossMat=new THREE.MeshBasicMaterial({color:0x40563b,transparent:true,opacity:.72});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2199

```text
 const khDeckGeo=new THREE.BoxGeometry(8.55,.34,10.20),khBeamGeo=new THREE.BoxGeometry(8.7,.28,.34),khPostGeo=new THREE.BoxGeometry(.34,4.55,.34),khMossGeo=new THREE.BoxGeometry(1.55,.04,2.05);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2200

```text
 const frRoofMat=MOBILE_RUNNER?new THREE.MeshBasicMaterial({color:0x273229}):new THREE.MeshStandardMaterial({color:0x273229,roughness:1}),frWallMat=MOBILE_RUNNER?new THREE.MeshBasicMaterial({color:0x46533d}):new THREE.MeshStandardMaterial({color:0x46533d,roughness:1}),frRootMat=MOBILE_RUNNER?new THREE.MeshBasicMaterial({color:0x684f35}):new THREE.MeshStandardMaterial({color:0x684f35,roughness:1}),frMossMat=new THREE.MeshBasicMaterial({color:0x4f753f,transparent:true,opacity:.84});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2201

```text
 // MOBILE40 • assinatura visual das pontes: poucos elementos, grandes silhuetas e leitura forte no celular.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2202

```text
 const sigStone=MOBILE_RUNNER?new THREE.MeshBasicMaterial({color:0x4c4a43}):new THREE.MeshStandardMaterial({color:0x4c4a43,roughness:.98,metalness:.01});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2203

```text
 const sigDark=MOBILE_RUNNER?new THREE.MeshBasicMaterial({color:0x292925}):new THREE.MeshStandardMaterial({color:0x292925,roughness:1});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2204

```text
 const sigWood=MOBILE_RUNNER?new THREE.MeshBasicMaterial({color:0x4c3828}):new THREE.MeshStandardMaterial({color:0x4c3828,roughness:1});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2205

```text
 const sigMoss=new THREE.MeshBasicMaterial({color:0x46623f,transparent:true,opacity:.62,side:THREE.DoubleSide});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2206

```text
 const sigColdGlow=new THREE.MeshBasicMaterial({color:0x9bc9c5,transparent:true,opacity:.48,depthWrite:false});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2207

```text
 const sigWarmGlow=new THREE.MeshBasicMaterial({color:0xff8a3b,transparent:true,opacity:.58,depthWrite:false});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2208

```text
 const sigGoldGlow=new THREE.MeshBasicMaterial({color:0xffe29a,transparent:true,opacity:.50,depthWrite:false});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2209

```text
 const sigGreenGlow=new THREE.MeshBasicMaterial({color:0xb8e99a,transparent:true,opacity:.44,depthWrite:false});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2210

```text
 const sigPillarGeo=new THREE.BoxGeometry(.72,4.8,.78),sigBrokenGeo=new THREE.BoxGeometry(.95,2.6,.95),sigOrbGeo=new THREE.SphereGeometry(.13,7,6),sigShardGeo=new THREE.TetrahedronGeometry(.42,0);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2211

```text
 const addSigOrb=(g,x,y,z,mat,scale=1)=>{const o=new THREE.Mesh(sigOrbGeo,mat);o.position.set(x,y,z);o.scale.setScalar(scale);g.add(o);return o};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2212

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 2213

```text
 const roadCount=MOBILE_RUNNER?11:20;for(let s=0;s<roadCount;s++){
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2214

```text
   const seg=new THREE.Group();seg.position.z=8-s*10.5;seg.userData.baseIndex=s;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2215

```text
   if(MOBILE_RUNNER){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2216

```text
     for(let laneI=0;laneI<3;laneI++){const laneDeck=new THREE.Mesh(mobileLaneGeo,mobileRoadMats[laneI]);laneDeck.position.set(LANE_X[laneI],-.10,0);laneDeck.receiveShadow=false;seg.add(laneDeck)}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2217

```text
     // MOBILE49: marca no piso em poucos segmentos; não compete com obstáculos.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2218

```text
     if(roadLogoMat&&s%5===2){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2219

```text
       const logo=new THREE.Mesh(new THREE.PlaneGeometry(4.15,2.05),roadLogoMat);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2220

```text
       logo.position.set(0,.020,-1.25);logo.rotation.x=-Math.PI/2;seg.add(logo)
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2221

```text
     }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2222

```text
     if(cfg.id==='celestial'){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2223

```text
       // MOBILE43: Celestial premium — ouro integrado à arquitetura da ponte, nunca solto no cenário.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2224

```text
       const celestialEdgeMat=new THREE.MeshBasicMaterial({color:0xf6d98a,transparent:true,opacity:.34,depthWrite:false});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2225

```text
       const celestialGoldMat=MOBILE_RUNNER?new THREE.MeshBasicMaterial({color:0xd8b760}):new THREE.MeshStandardMaterial({color:0xd8b760,emissive:0x6b4d12,emissiveIntensity:.18,roughness:.58,metalness:.28});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2226

```text
       for(const side of [-1,1]){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2227

```text
         const glow=new THREE.Mesh(new THREE.BoxGeometry(.10,.035,10.46),celestialEdgeMat);glow.position.set(side*3.94,.055,0);seg.add(glow);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2228

```text
         if(s%2===0){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2229

```text
           for(const zz of [-3.7,0,3.7]){const post=new THREE.Mesh(new THREE.BoxGeometry(.18,1.34,.18),celestialGoldMat);post.position.set(side*3.78,.67,zz);seg.add(post)}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2230

```text
           const rail=new THREE.Mesh(new THREE.BoxGeometry(.12,.12,9.10),celestialGoldMat);rail.position.set(side*3.78,1.18,0);seg.add(rail)
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2231

```text
         }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2232

```text
       }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2233

```text
       if(s%3===0){const crest=new THREE.Mesh(new THREE.BoxGeometry(1.55,.035,.16),celestialEdgeMat);crest.position.set(0,.06,-3.95);seg.add(crest)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2234

```text
     }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2235

```text
   }else{
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2236

```text
     for(let rz=0;rz<4;rz++)for(let laneI=0;laneI<3;laneI++){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2237

```text
       const col=cfg.road[(s+rz+laneI)%cfg.road.length];const tile=new THREE.Mesh(tileGeo,makeStoneMaterial(roundedColor(col,.07)));
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2238

```text
       tile.position.set(LANE_X[laneI],-.10,(rz-1.5)*2.62);tile.rotation.y=(Math.random()-.5)*.018;tile.rotation.z=(Math.random()-.5)*.009;tile.position.y+=(Math.random()-.5)*.035;tile.receiveShadow=true;seg.add(tile)
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 2239

```text
     }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2240

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2241

```text
   for(const x of [-4.15,4.15]){const e=new THREE.Mesh(edgeGeo,edgeRoadMat);e.position.set(x,-.06,0);e.receiveShadow=!MOBILE_RUNNER;seg.add(e)}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2242

```text
   if(MOBILE_RUNNER){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 2243

```text
     const mobileEdgeAccent=new THREE.MeshBasicMaterial({color:cfg.accent,transparent:true,opacity:.22,depthWrite:false});
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2244

```text
     for(const x of [-3.92,3.92]){const line=new THREE.Mesh(new THREE.BoxGeometry(.055,.018,10.42),mobileEdgeAccent);line.position.set(x,.015,0);seg.add(line)}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2245

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2246

```text
   // MOBILE37: ponte legível e bonita, mas com bem menos draw calls no celular.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 2247

```text
   for(const side of [-1,1]){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 2248

```text
     const x=side*4.36;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2249

```text
     const base=new THREE.Mesh(parapetBaseGeo,railStoneMat);base.position.set(x,.12,0);base.castShadow=shadowsOn;base.receiveShadow=!MOBILE_RUNNER;seg.add(base);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 2250

```text
     const cap=new THREE.Mesh(parapetCapGeo,railCapMat);cap.position.set(x,.49,0);cap.castShadow=shadowsOn;cap.receiveShadow=!MOBILE_RUNNER;seg.add(cap);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

