# index.html — Parte 12

Linhas **2751 a 3000** da MOBILE86.

### Linha 2751

```text
 const activeHunters=hunters.filter(h=>h.minStage<=stage);if(huntersVisible&&huntersTimer<=0&&activeHunters.length&&activeHunters.every(h=>h.z>7.3)){huntersVisible=false;hunters.forEach(h=>{h.root.visible=false;h.z=h.restZ;h.targetZ=h.restZ;h.lanePos=1+h.baseLaneOffset})}
```

**Explicação:** Declara constante JavaScript.

### Linha 2752

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2753

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2754

```text
function buildQaSafeRoad(){
```

**Explicação:** Declara função reutilizável.

### Linha 2755

```text
 while(roadGroup.children.length){const old=roadGroup.children[0];roadGroup.remove(old);try{disposeObject(old)}catch(_){}}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2756

```text
 roadSegments.length=0;bridgeDetailGroups.length=0;kharvorUpperBridgeGroups.length=0;forestClosedBridgeGroups.length=0;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2757

```text
 const cfg=REALMS[realmIndex]||REALMS[0];
```

**Explicação:** Declara constante JavaScript.

### Linha 2758

```text
 const base=new THREE.MeshBasicMaterial({color:(cfg.road&&cfg.road[0])||0x62584c});
```

**Explicação:** Declara constante JavaScript.

### Linha 2759

```text
 const edge=new THREE.MeshBasicMaterial({color:cfg.edge||0x3f3a34});
```

**Explicação:** Declara constante JavaScript.

### Linha 2760

```text
 const laneGeo=new THREE.BoxGeometry(2.52,.18,10.64),edgeGeoSafe=new THREE.BoxGeometry(.34,.28,10.64);
```

**Explicação:** Declara constante JavaScript.

### Linha 2761

```text
 for(let i=0;i<11;i++){
```

**Explicação:** Inicia repetição.

### Linha 2762

```text
   const seg=new THREE.Group();seg.position.z=8-i*10.5;seg.userData.baseIndex=i;
```

**Explicação:** Declara constante JavaScript.

### Linha 2763

```text
   for(let laneI=0;laneI<3;laneI++){const m=new THREE.Mesh(laneGeo,base);m.position.set(LANE_X[laneI],-.10,0);seg.add(m)}
```

**Explicação:** Inicia repetição.

### Linha 2764

```text
   for(const x of [-4.15,4.15]){const e=new THREE.Mesh(edgeGeoSafe,edge);e.position.set(x,-.06,0);seg.add(e)}
```

**Explicação:** Inicia repetição.

### Linha 2765

```text
   roadGroup.add(seg);roadSegments.push(seg)
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2766

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2767

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2768

```text
async function loadRealm(index,initial=false){
```

**Explicação:** Declara função assíncrona.

### Linha 2769

```text
 if(realmLoading)return false;
```

**Explicação:** Executa condicionalmente.

### Linha 2770

```text
 realmLoading=true;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2771

```text
 let stage='INÍCIO';
```

**Explicação:** Declara variável mutável.

### Linha 2772

```text
 try{
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2773

```text
   realmIndex=(index+REALMS.length)%REALMS.length;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2774

```text
   postTobogganExitProgress=null;lastGuidanceRealm=-1;realmDistanceNotices=new Set();
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 2775

```text
   const cfg=REALMS[realmIndex];if(!cfg)throw new Error('Reino inválido');
```

**Explicação:** Declara constante JavaScript.

### Linha 2776

```text
   UI.status3d.textContent='CARREGANDO';UI.loadingText.textContent='Carregando '+cfg.name+'...';if(!initial)toast('CARREGANDO '+cfg.short);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2777

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2778

```text
   stage='LIMPEZA';
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2779

```text
   while(sceneryGroup.children.length){const old=sceneryGroup.children.pop();try{disposeObject(old)}catch(err){console.warn('QA limpeza cenário',err)}}
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 2780

```text
   sceneryChunks.length=0;resetOpeningImpactVisuals();resetKharvorBridge();
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 2781

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2782

```text
   stage='FUNDO';
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2783

```text
   setRealmBackground(cfg);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2784

```text
   scene.fog.color.set(cfg.fog);scene.fog.near=currentJourney===2?Math.max(17,cfg.fogNear-4):cfg.fogNear;scene.fog.far=currentJourney===2?Math.max(78,cfg.fogFar-10):cfg.fogFar;
```

**Explicação:** Controla Jornada 1/2 e progressão.

### Linha 2785

```text
   if(skyGroup.children[0])skyGroup.children[0].visible=false;
```

**Explicação:** Executa condicionalmente.

### Linha 2786

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2787

```text
   stage='PISTA';
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2788

```text
   try{buildRoad()}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2789

```text
   catch(err){
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2790

```text
     console.error('PISTA AVANÇADA FALHOU',cfg.id,err);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2791

```text
     if(QA_SCENARIO_MODE){buildQaSafeRoad();qaSetStatus('MODO SEGURO • '+cfg.short+' • pista simplificada para continuar o teste')}
```

**Explicação:** Executa condicionalmente.

### Linha 2792

```text
     else throw err
```

**Explicação:** Define caminho alternativo.

### Linha 2793

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2794

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2795

```text
   stage='DECORAÇÃO';
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2796

```text
   try{buildDecor()}catch(err){console.error('DECORAÇÃO FALHOU',cfg.id,err);if(!QA_SCENARIO_MODE)throw err}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2797

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2798

```text
   stage='CLIMA';
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2799

```text
   try{setWeatherForRealm(cfg)}catch(err){console.warn('CLIMA FALHOU',cfg.id,err);setWeatherMode('none');setAtmosphereMode('none')}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2800

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2801

```text
   stage='FINALIZAÇÃO';
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2802

```text
   UI.realmName.textContent=cfg.short;UI.activeRealmStatus.textContent=cfg.name;UI.status3d.textContent='ATIVO';realmStartDistance=distance;updateRealmButtons();
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2803

```text
   if(cfg.celestial){sun.color.set(0xffd28b);sun.intensity=currentJourney===2?1.88:1.75;hemi.color.set(0xfff2c7);hemi.groundColor.set(0x514934)}
```

**Explicação:** Executa condicionalmente.

### Linha 2804

```text
   else if(cfg.id==='ember'||cfg.id==='vpath'||cfg.id==='vruins'){sun.color.set(currentJourney===2?0xff8050:0xff9b58);sun.intensity=currentJourney===2?1.62:1.45;hemi.color.set(0xe8b58a);hemi.groundColor.set(0x2b1010)}
```

**Explicação:** Define caminho alternativo.

### Linha 2805

```text
   else{sun.color.set(0xffe1ad);sun.intensity=currentJourney===2?1.68:1.55;hemi.color.set(0xe9f5dc);hemi.groundColor.set(0x28352e)}
```

**Explicação:** Define caminho alternativo.

### Linha 2806

```text
   setLyraJourneyState();if(started)startRealmMusic(cfg.id);if(!initial)toast(cfg.short+' • '+(REALM_NOVELTY[cfg.id]||'NOVO DESAFIO'));
```

**Explicação:** Controla Jornada 1/2 e progressão.

### Linha 2807

```text
   return true;
```

**Explicação:** Retorna/encerra a função.

### Linha 2808

```text
 }catch(err){
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2809

```text
   console.error('LOAD REALM FALHOU • '+stage,err);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2810

```text
   if(QA_SCENARIO_MODE)qaSetStatus('ERRO • '+(REALMS[realmIndex]?.short||'REINO')+' • ETAPA '+stage+' • '+(err?.message||String(err)));
```

**Explicação:** Executa condicionalmente.

### Linha 2811

```text
   throw err;
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2812

```text
 }finally{
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2813

```text
   realmLoading=false;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2814

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2815

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2816

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2817

```text
function formatRealmKm(m){const km=m/1000;return (Number.isInteger(km)?String(km):km.toFixed(1).replace('.',','))+' km'}
```

**Explicação:** Declara função reutilizável.

### Linha 2818

```text
function playerRealmStatus(journey,pos){
```

**Explicação:** Declara função reutilizável.

### Linha 2819

```text
 if(journey===1){if(SAVE.journey2Unlocked)return {label:'CONCLUÍDO',cls:'done'};const cp=getJourneyCheckpoint(1);if(pos<cp)return {label:'CONCLUÍDO',cls:'done'};if(pos===cp)return {label:pos===0?'EM PROGRESSO':'CHECKPOINT',cls:'open'};return {label:'A DESCOBRIR',cls:'locked'}}
```

**Explicação:** Executa condicionalmente.

### Linha 2820

```text
 if(!SAVE.journey2Unlocked)return {label:'BLOQUEADO',cls:'locked'};if(SAVE.journey2Completed)return {label:'CONCLUÍDO',cls:'done'};const cp=getJourneyCheckpoint(2);if(pos<cp)return {label:'CONCLUÍDO',cls:'done'};if(pos===cp)return {label:pos===0?'DESBLOQUEADO':'CHECKPOINT',cls:'open'};return {label:'A DESCOBRIR',cls:'locked'}
```

**Explicação:** Executa condicionalmente.

### Linha 2821

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2822

```text
function buildPlayerRealmGallery(){
```

**Explicação:** Declara função reutilizável.

### Linha 2823

```text
 const g=UI.realmGrid;if(!g)return;g.innerHTML='';
```

**Explicação:** Declara constante JavaScript.

### Linha 2824

```text
 const groups=[{journey:1,title:'JORNADA 1 • A FUGA',order:JOURNEY1_ORDER,per:REALM_DISTANCE_J1},{journey:2,title:'JORNADA 2 • O RESGATE',order:JOURNEY2_ORDER,per:REALM_DISTANCE_J2}];
```

**Explicação:** Declara constante JavaScript.

### Linha 2825

```text
 groups.forEach(cfg=>{
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2826

```text
  const block=document.createElement('section');block.className='journeyProgressBlock';
```

**Explicação:** Declara constante JavaScript.

### Linha 2827

```text
  const head=document.createElement('div');head.className='journeyProgressHead';head.innerHTML='<b>'+cfg.title+'</b><span>'+formatRealmKm(cfg.order.length*cfg.per)+'</span>';block.appendChild(head);
```

**Explicação:** Declara constante JavaScript.

### Linha 2828

```text
  cfg.order.forEach((idx,pos)=>{const r=REALMS[idx],st=playerRealmStatus(cfg.journey,pos),row=document.createElement('div');row.className='realmProgressItem';row.innerHTML='<span class=\"realmProgressName\">'+(pos+1)+'. '+r.name+'</span><span class=\"realmProgressKm\">'+formatRealmKm(cfg.per)+'</span><span class=\"realmProgressStatus '+st.cls+'\">'+st.label+'</span>';block.appendChild(row)});
```

**Explicação:** Controla Jornada 1/2 e progressão.

### Linha 2829

```text
  g.appendChild(block);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2830

```text
 });
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2831

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2832

```text
function updateRealmButtons(){if(UI.realmPanel&&UI.realmPanel.classList.contains('show'))buildPlayerRealmGallery()}
```

**Explicação:** Declara função reutilizável.

### Linha 2833

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2834

```text
function createRock(laneI,z){const m=new THREE.Mesh(new THREE.DodecahedronGeometry(.72,1),new THREE.MeshStandardMaterial({color:0x5c5b52,roughness:1}));m.scale.set(1.2,.78,1);m.position.set(LANE_X[laneI],.62,z);m.castShadow=shadowsOn;m.receiveShadow=shadowsOn;m.userData={kind:'obstacle',type:'rock',lane:laneI,hit:false};itemGroup.add(m);obstacles.push(m)}
```

**Explicação:** Declara função reutilizável.

### Linha 2835

```text
function createLog(laneI,z){const g=new THREE.Group(),mat=new THREE.MeshStandardMaterial({color:0x5f3c22,roughness:1});const m=new THREE.Mesh(new THREE.CylinderGeometry(.28,.34,2.4,10),mat);m.rotation.z=Math.PI/2;m.position.y=.34;g.add(m);for(let i=0;i<3;i++){const knot=new THREE.Mesh(new THREE.CylinderGeometry(.07,.11,.42,7),mat);knot.rotation.z=Math.PI/2;knot.rotation.y=(i-1)*.5;knot.position.set((i-1)*.55,.44,.05);g.add(knot)}g.position.set(LANE_X[laneI],0,z);g.userData={kind:'obstacle',type:'log',lane:laneI,hit:false};g.traverse(n=>{if(n.isMesh){n.castShadow=shadowsOn;n.receiveShadow=shadowsOn}});itemGroup.add(g);obstacles.push(g)}
```

**Explicação:** Declara função reutilizável.

### Linha 2836

```text
function createBranch(laneI,z){
```

**Explicação:** Declara função reutilizável.

### Linha 2837

```text
 const cfg=REALMS[realmIndex]||REALMS[0],id=cfg.id,g=new THREE.Group();
```

**Explicação:** Declara constante JavaScript.

### Linha 2838

```text
 const palette={
```

**Explicação:** Declara constante JavaScript.

### Linha 2839

```text
  vpath:{frame:0x3d2a22,face:0x6a4936,accent:0xe06b32,glow:0xffa45c},
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2840

```text
  vruins:{frame:0x292827,face:0x4d4a47,accent:0x91a7c2,glow:0xc5ddf0},
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2841

```text
  ember:{frame:0x241917,face:0x493028,accent:0xff6c2d,glow:0xffa04f},
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2842

```text
  ruins:{frame:0x303631,face:0x62655a,accent:0x9b8c68,glow:0xc7d6b2},
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2843

```text
  forest:{frame:0x2b241b,face:0x59452f,accent:0x829b61,glow:0xc1e39a},
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2844

```text
  celestial:{frame:0x4c402d,face:0xa18455,accent:0xf2cf77,glow:0xffe6a4}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2845

```text
 }[id]||{frame:0x30251f,face:0x594638,accent:cfg.accent,glow:cfg.accent};
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2846

```text
 const frameMat=new THREE.MeshStandardMaterial({color:palette.frame,roughness:.88,metalness:id==='celestial'?.12:.03});
```

**Explicação:** Declara constante JavaScript.

### Linha 2847

```text
 const faceMat=new THREE.MeshStandardMaterial({color:palette.face,roughness:.82,metalness:id==='celestial'?.10:0});
```

**Explicação:** Declara constante JavaScript.

### Linha 2848

```text
 const accentMat=new THREE.MeshStandardMaterial({color:palette.accent,emissive:palette.accent,emissiveIntensity:id==='ember'?.48:.18,roughness:.48});
```

**Explicação:** Declara constante JavaScript.

### Linha 2849

```text
 const glowMat=new THREE.MeshBasicMaterial({color:palette.glow,transparent:true,opacity:.78,depthWrite:false});
```

**Explicação:** Declara constante JavaScript.

### Linha 2850

```text
 // Estrutura larga o suficiente para leitura imediata, mantendo o vão central como indicação de deslize.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2851

```text
 for(const x of [-.94,.94]){
```

**Explicação:** Inicia repetição.

### Linha 2852

```text
   const post=new THREE.Mesh(new THREE.BoxGeometry(.22,2.20,.26),frameMat);post.position.set(x,1.10,0);g.add(post);
```

**Explicação:** Declara constante JavaScript.

### Linha 2853

```text
   const foot=new THREE.Mesh(new THREE.BoxGeometry(.40,.20,.54),frameMat);foot.position.set(x,.10,.02);g.add(foot);
```

**Explicação:** Declara constante JavaScript.

### Linha 2854

```text
   const marker=new THREE.Mesh(new THREE.BoxGeometry(.10,.72,.06),glowMat);marker.position.set(x,1.15,.17);g.add(marker)
```

**Explicação:** Declara constante JavaScript.

### Linha 2855

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2856

```text
 const beam=new THREE.Mesh(new THREE.BoxGeometry(2.16,.34,.34),frameMat);beam.position.set(0,1.82,0);g.add(beam);
```

**Explicação:** Declara constante JavaScript.

### Linha 2857

```text
 const face=new THREE.Mesh(new THREE.BoxGeometry(1.82,.22,.12),faceMat);face.position.set(0,1.80,.20);g.add(face);
```

**Explicação:** Declara constante JavaScript.

### Linha 2858

```text
 // Barras diagonais lembram as barreiras detalhadas do tobogã, adaptadas ao reino.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2859

```text
 for(const x of [-.66,-.22,.22,.66]){const stripe=new THREE.Mesh(new THREE.BoxGeometry(.14,.25,.08),accentMat);stripe.position.set(x,1.80,.28);stripe.rotation.z=-.62;g.add(stripe)}
```

**Explicação:** Inicia repetição.

### Linha 2860

```text
 const top=new THREE.Mesh(new THREE.BoxGeometry(1.34,.10,.12),glowMat);top.position.set(0,2.02,.05);g.add(top);
```

**Explicação:** Declara constante JavaScript.

### Linha 2861

```text
 // Detalhes temáticos baratos para mobile.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2862

```text
 if(id==='forest'){
```

**Explicação:** Executa condicionalmente.

### Linha 2863

```text
   for(const x of [-.62,.58]){const vine=new THREE.Mesh(new THREE.CylinderGeometry(.035,.05,.74,5),accentMat);vine.position.set(x,1.38,.12);vine.rotation.z=x<0?.30:-.30;g.add(vine)}
```

**Explicação:** Inicia repetição.

### Linha 2864

```text
 }else if(id==='ember'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2865

```text
   for(const x of [-.54,.54]){const fissure=new THREE.Mesh(new THREE.BoxGeometry(.055,.42,.04),glowMat);fissure.position.set(x,1.74,.34);fissure.rotation.z=x<0?.32:-.28;g.add(fissure)}
```

**Explicação:** Inicia repetição.

### Linha 2866

```text
 }else if(id==='celestial'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2867

```text
   const crest=new THREE.Mesh(new THREE.BoxGeometry(.52,.10,.08),accentMat);crest.position.set(0,2.15,.02);g.add(crest)
```

**Explicação:** Declara constante JavaScript.

### Linha 2868

```text
 }else if(id==='vruins'||id==='ruins'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2869

```text
   for(const x of [-.58,.58]){const chip=new THREE.Mesh(new THREE.BoxGeometry(.18,.16,.16),faceMat);chip.position.set(x,2.04,.02);chip.rotation.z=x<0?.18:-.16;g.add(chip)}
```

**Explicação:** Inicia repetição.

### Linha 2870

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2871

```text
 // Sinal de aproximação no chão, pequeno e legível, sem ocupar outra faixa.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2872

```text
 const warn=new THREE.Mesh(new THREE.PlaneGeometry(1.72,.48),new THREE.MeshBasicMaterial({color:palette.accent,transparent:true,opacity:.34,side:THREE.DoubleSide}));
```

**Explicação:** Declara constante JavaScript.

### Linha 2873

```text
 warn.position.set(0,.025,-1.05);warn.rotation.x=-Math.PI/2;g.add(warn);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2874

```text
 g.position.set(LANE_X[laneI],0,z);g.userData={kind:'obstacle',type:'branch',lane:laneI,hit:false};
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2875

```text
 g.traverse(n=>{if(n.isMesh){n.castShadow=!MOBILE_RUNNER&&shadowsOn;n.receiveShadow=false}});itemGroup.add(g);obstacles.push(g)
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2876

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2877

```text
function createGem(laneI,z){const mat=new THREE.MeshStandardMaterial({color:0x54cfff,emissive:0x1678aa,emissiveIntensity:.8,metalness:.18,roughness:.15});const m=new THREE.Mesh(new THREE.OctahedronGeometry(.33,0),mat);m.position.set(LANE_X[laneI],1.05,z);m.userData={kind:'gem',lane:laneI,collected:false};itemGroup.add(m);collectibles.push(m)}
```

**Explicação:** Declara função reutilizável.

### Linha 2878

```text
function createStar(laneI,z){const shape=new THREE.Shape();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2===0?.38:.17;const x=Math.cos(a)*r,y=Math.sin(a)*r;i?shape.lineTo(x,y):shape.moveTo(x,y)}shape.closePath();const geo=new THREE.ExtrudeGeometry(shape,{depth:.10,bevelEnabled:true,bevelSize:.035,bevelThickness:.035,bevelSegments:1});geo.center();const m=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:0xffd95b,emissive:0x9b6710,emissiveIntensity:.65,metalness:.12,roughness:.24}));m.position.set(LANE_X[laneI],1.12,z);m.userData={kind:'star',lane:laneI,collected:false};itemGroup.add(m);collectibles.push(m)}
```

**Explicação:** Declara função reutilizável.

### Linha 2879

```text
function createWater(laneI,z){const g=new THREE.Group(),glass=new THREE.MeshStandardMaterial({color:0x7bdcff,transparent:true,opacity:.72,roughness:.18,metalness:.05}),cap=new THREE.MeshStandardMaterial({color:0x2e6f84,roughness:.6});const b=new THREE.Mesh(new THREE.CylinderGeometry(.18,.22,.62,12),glass);b.position.y=.36;const c=new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,.12,12),cap);c.position.y=.73;g.add(b,c);g.position.set(LANE_X[laneI],.25,z);g.userData={kind:'water',lane:laneI,collected:false};itemGroup.add(g);collectibles.push(g)}
```

**Explicação:** Declara função reutilizável.

### Linha 2880

```text
function createHole(laneI,z){
```

**Explicação:** Declara função reutilizável.

### Linha 2881

```text
 const g=new THREE.Group();g.name='MR_ABISMO_ORGANICO_MOBILE37';
```

**Explicação:** Declara constante JavaScript.

### Linha 2882

```text
 const cfg=REALMS[realmIndex]||REALMS[0],roadColor=cfg.road[1]||0x51483f,edgeColor=cfg.edge||0x3a342f;
```

**Explicação:** Declara constante JavaScript.

### Linha 2883

```text
 const voidMat=new THREE.MeshBasicMaterial({color:0x000000,side:THREE.DoubleSide,depthWrite:true});
```

**Explicação:** Declara constante JavaScript.

### Linha 2884

```text
 const wallMat=new THREE.MeshBasicMaterial({color:0x0a0908,side:THREE.DoubleSide});
```

**Explicação:** Declara constante JavaScript.

### Linha 2885

```text
 const crackCount=MOBILE_RUNNER?10:15,outer=[],inner=[],squash=.90+Math.random()*.13,stretch=1.02+Math.random()*.16;
```

**Explicação:** Declara constante JavaScript.

### Linha 2886

```text
 for(let i=0;i<crackCount;i++){
```

**Explicação:** Inicia repetição.

### Linha 2887

```text
   const a=i/crackCount*Math.PI*2;
```

**Explicação:** Declara constante JavaScript.

### Linha 2888

```text
   const bite=(i===2||i===7?-.18:0)+(i===4||i===10?.12:0);
```

**Explicação:** Declara constante JavaScript.

### Linha 2889

```text
   const noise=.93+Math.sin(i*1.71+z*.017)*.12+Math.sin(i*3.07+laneI)*.065+bite;
```

**Explicação:** Declara constante JavaScript.

### Linha 2890

```text
   const r=(1.03+Math.random()*.10)*noise;
```

**Explicação:** Declara constante JavaScript.

### Linha 2891

```text
   outer.push(new THREE.Vector2(Math.cos(a)*r*squash,Math.sin(a)*r*stretch));
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2892

```text
   const ri=.48+.06*Math.sin(i*2.1+.4)+(i%3)*.018;
```

**Explicação:** Declara constante JavaScript.

### Linha 2893

```text
   inner.push(new THREE.Vector2(Math.cos(a)*ri*squash,Math.sin(a)*ri*stretch));
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2894

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2895

```text
 const mouth=new THREE.Mesh(new THREE.ShapeGeometry(new THREE.Shape(outer)),voidMat);mouth.rotation.x=-Math.PI/2;mouth.position.y=.047;mouth.renderOrder=7;g.add(mouth);
```

**Explicação:** Declara constante JavaScript.

### Linha 2896

```text
 // Parede irregular real: conecta a borda quebrada ao fundo em vez de usar um cilindro redondo.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2897

```text
 const verts=[],idx=[];
```

**Explicação:** Declara constante JavaScript.

### Linha 2898

```text
 for(let i=0;i<crackCount;i++){
```

**Explicação:** Inicia repetição.

### Linha 2899

```text
   const o=outer[i],n=outer[(i+1)%crackCount],ii=inner[i],inn=inner[(i+1)%crackCount];
```

**Explicação:** Declara constante JavaScript.

### Linha 2900

```text
   const b=verts.length/3;verts.push(o.x,-.03,o.y,n.x,-.03,n.y,inn.x,-1.72,inn.y,ii.x,-1.72,ii.y);idx.push(b,b+1,b+2,b,b+2,b+3);
```

**Explicação:** Declara constante JavaScript.

### Linha 2901

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2902

```text
 const wallGeo=new THREE.BufferGeometry();wallGeo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));wallGeo.setIndex(idx);wallGeo.computeVertexNormals();
```

**Explicação:** Declara constante JavaScript.

### Linha 2903

```text
 const walls=new THREE.Mesh(wallGeo,wallMat);g.add(walls);
```

**Explicação:** Declara constante JavaScript.

### Linha 2904

```text
 const core=new THREE.Mesh(new THREE.ShapeGeometry(new THREE.Shape(inner)),voidMat);core.rotation.x=-Math.PI/2;core.position.y=-1.74;g.add(core);
```

**Explicação:** Declara constante JavaScript.

### Linha 2905

```text
 const rimMat=new THREE.MeshStandardMaterial({color:edgeColor,roughness:1}),slabMat=new THREE.MeshStandardMaterial({color:roadColor,roughness:1});
```

**Explicação:** Declara constante JavaScript.

### Linha 2906

```text
 // Poucos fragmentos grandes e assimétricos: evita o antigo aspecto de "anel de pedras".
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2907

```text
 const fragments=MOBILE_RUNNER?3:7;
```

**Explicação:** Declara constante JavaScript.

### Linha 2908

```text
 for(let i=0;i<fragments;i++){
```

**Explicação:** Inicia repetição.

### Linha 2909

```text
   const a=(i/fragments)*Math.PI*2+(i%2?.15:-.08),oi=outer[(i*2)%crackCount];
```

**Explicação:** Declara constante JavaScript.

### Linha 2910

```text
   const rock=new THREE.Mesh(i%2===0?new THREE.BoxGeometry(.27+(i%3)*.10,.06+(i%2)*.04,.30+(i%4)*.08):new THREE.DodecahedronGeometry(.14+(i%3)*.035,0),i%2===0?slabMat:rimMat);
```

**Explicação:** Declara constante JavaScript.

### Linha 2911

```text
   rock.position.set(oi.x*1.03,.065+(i%3)*.025,oi.y*1.03);rock.scale.set(.82+(i%3)*.18,.55+(i%2)*.16,.78+(i%4)*.11);rock.rotation.set((i%3-1)*.10,-a+(i%2?.18:-.12),(i%2?1:-1)*.12);g.add(rock)
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2912

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2913

```text
 // Trincas curtas, em direções diferentes, sem formar estrela perfeita.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2914

```text
 const crackAngles=MOBILE_RUNNER?[.35,2.25,4.75]:[.18,1.12,2.47,3.58,5.03];
```

**Explicação:** Declara constante JavaScript.

### Linha 2915

```text
 for(let i=0;i<crackAngles.length;i++){const a=crackAngles[i]+Math.sin(z*.01+i)*.09,len=.42+(i%3)*.20;const crack=new THREE.Mesh(new THREE.BoxGeometry(.028,.014,len),new THREE.MeshBasicMaterial({color:0x181411,transparent:true,opacity:.90}));crack.position.set(Math.cos(a)*(1.03*squash+len*.28),.052,Math.sin(a)*(1.12*stretch+len*.28));crack.rotation.y=-a;g.add(crack)}
```

**Explicação:** Inicia repetição.

### Linha 2916

```text
 g.position.set(LANE_X[laneI],0,z);g.userData={kind:'obstacle',type:'hole',lane:laneI,hit:false,cleared:false};g.traverse(n=>{if(n.isMesh){n.castShadow=false;n.receiveShadow=false}});itemGroup.add(g);obstacles.push(g)
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2917

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2918

```text
function spawnObstacle(){
```

**Explicação:** Declara função reutilizável.

### Linha 2919

```text
 const progress=Math.max(0,distance-realmStartDistance);
```

**Explicação:** Declara constante JavaScript.

### Linha 2920

```text
 // MOBILE46: primeira impressão limpa e zona de decisão segura no Posto de Apoio.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2921

```text
 if(progress<120)return;
```

**Explicação:** Executa condicionalmente.

### Linha 2922

```text
 const laneI=Math.floor(Math.random()*3),r=Math.random(),z=-72-Math.random()*16;
```

**Explicação:** Declara constante JavaScript.

### Linha 2923

```text
 if(shelter3D&&!shelterActive){
```

**Explicação:** Executa condicionalmente.

### Linha 2924

```text
   const futureShelterZ=shelter3D.position.z;
```

**Explicação:** Declara constante JavaScript.

### Linha 2925

```text
   if(Math.abs(z-futureShelterZ)<62)return;
```

**Explicação:** Executa condicionalmente.

### Linha 2926

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2927

```text
 const realmId=(REALMS[realmIndex]||REALMS[0]).id;if(realmId==='vpath'){if(r<.52)createRock(laneI,z);else createBranch(laneI,z);const extraChance=currentJourney===2?.26:.18;if(Math.random()<extraChance){const lane2=(laneI+1+Math.floor(Math.random()*2))%3;if(Math.random()<.52)createRock(lane2,z-1.4);else createBranch(lane2,z-1.4)}return}if(r<.18)createHole(laneI,z);else if(r<.44)createRock(laneI,z);else if(r<.70)createLog(laneI,z);else createBranch(laneI,z);const extraChance=currentJourney===2?.31:.22;if(Math.random()<extraChance){let lane2=(laneI+1+Math.floor(Math.random()*2))%3;const r2=Math.random();if(r2<.44)createRock(lane2,z-1.4);else if(r2<.78)createLog(lane2,z-1.4);else createBranch(lane2,z-1.4)}}
```

**Explicação:** Declara constante JavaScript.

### Linha 2928

```text
function spawnGem(){const laneI=Math.floor(Math.random()*3),z=-72-Math.random()*13;for(let i=0;i<1+Math.floor(Math.random()*2);i++)createGem(laneI,z-i*2.2)}
```

**Explicação:** Declara função reutilizável.

### Linha 2929

```text
function spawnStar(){let laneI=Math.floor(Math.random()*3),z=-68-Math.random()*13;for(let i=0;i<3+Math.floor(Math.random()*4);i++){if(Math.random()<.18)laneI=Math.floor(Math.random()*3);createStar(laneI,z-i*1.75)}}
```

**Explicação:** Declara função reutilizável.

### Linha 2930

```text
function spawnWater(){createWater(Math.floor(Math.random()*3),-74-Math.random()*16)}
```

**Explicação:** Declara função reutilizável.

### Linha 2931

```text
function clearItems(){for(const o of [...obstacles,...collectibles]){itemGroup.remove(o);disposeObject(o)}obstacles.length=collectibles.length=0}
```

**Explicação:** Declara função reutilizável.

### Linha 2932

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2933

```text
function tobogganPalette(){
```

**Explicação:** Declara função reutilizável.

### Linha 2934

```text
 const id=(REALMS[realmIndex]||REALMS[0]).id;
```

**Explicação:** Declara constante JavaScript.

### Linha 2935

```text
 const p={celestial:[0xb49a72,0x7d684b,0xf4cf79],forest:[0x574b37,0x344438,0x8ca65f],ruins:[0x655d4d,0x454a3e,0x9b8c68],ember:[0x4b3028,0x271c1a,0xff6c2d],vpath:[0x49342d,0x291c19,0xff7934],vruins:[0x403d43,0x252831,0x91a7c2]};
```

**Explicação:** Declara constante JavaScript.

### Linha 2936

```text
 return p[id]||p.forest;
```

**Explicação:** Retorna/encerra a função.

### Linha 2937

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2938

```text
function tobogganCenterX(z){const d=Math.max(0,-z)+tobogganTravel*.34;if(tobogganForcedMode==='flooded')return Math.sin(d*.026+tobogganPhase)*.52+Math.sin(d*.011+tobogganPhase*.63)*.22;return Math.sin(d*.047+tobogganPhase)*2.15+Math.sin(d*.018+tobogganPhase*.63)*1.05}
```

**Explicação:** Declara função reutilizável.

### Linha 2939

```text
function tobogganY(z){let base=0;if(tobogganForcedMode==='flooded'){base=-3.6;if(tobogganExitAtDistance){const rem=Math.max(0,tobogganExitAtDistance-distance);if(rem<180)base=-3.6*Math.max(0,rem/180)}return base-Math.min(.34,Math.max(0,-z-1)*.0022)}return base-Math.min(7.1,Math.max(0,-z-1)*.056)}
```

**Explicação:** Declara função reutilizável.

### Linha 2940

```text
function tobogganYaw(z){const e=.75,a=tobogganCenterX(z-e),b=tobogganCenterX(z+e);return Math.atan2(a-b,e*2)*.78}
```

**Explicação:** Declara função reutilizável.

### Linha 2941

```text
function clearToboggan(){if(!tobogganGroup)return;while(tobogganGroup.children.length){const c=tobogganGroup.children.pop();disposeObject(c)}tobogganCart=null;tobogganLyraCart=null;tobogganSegments.length=0;tobogganHazards.length=0;tobogganTunnel.length=0;tobogganLavaBase.length=0;tobogganCollectibles.length=0}
```

**Explicação:** Declara função reutilizável.

### Linha 2942

```text
function makeTobogganMuralTexture(theme,accentC){
```

**Explicação:** Declara função reutilizável.

### Linha 2943

```text
 const c=document.createElement('canvas');c.width=512;c.height=256;const g=c.getContext('2d');if(!g)return null;
```

**Explicação:** Declara constante JavaScript.

### Linha 2944

```text
 const accent='#'+accentC.toString(16).padStart(6,'0'),warm='#ffcf78',lava='#ff7a34',ink='#0d0b0b';
```

**Explicação:** Declara constante JavaScript.

### Linha 2945

```text
 const bg=g.createLinearGradient(0,0,512,256);bg.addColorStop(0,'rgba(14,10,10,.95)');bg.addColorStop(1,'rgba(48,28,17,.95)');g.fillStyle=bg;g.fillRect(0,0,512,256);
```

**Explicação:** Declara constante JavaScript.

### Linha 2946

```text
 g.fillStyle='rgba(255,255,255,.05)';for(let i=-40;i<560;i+=36){g.save();g.translate(i,0);g.rotate(-0.42);g.fillRect(0,0,12,340);g.restore()}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2947

```text
 g.strokeStyle='rgba(255,188,120,.55)';g.lineWidth=6;g.strokeRect(14,14,484,228);g.lineWidth=2;g.strokeStyle='rgba(255,255,255,.10)';g.strokeRect(28,28,456,200);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2948

```text
 g.fillStyle=warm;g.font='800 34px sans-serif';g.textAlign='center';g.fillText('MAX HEALMS',256,62);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2949

```text
 g.font='700 16px sans-serif';g.fillStyle='rgba(255,226,193,.92)';
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2950

```text
 let subtitle='RUN • SURVIVE • ESCAPE';
```

**Explicação:** Declara variável mutável.

### Linha 2951

```text
 if(theme==='varek')subtitle='VAREK • SIGA EM FRENTE';
```

**Explicação:** Executa condicionalmente.

### Linha 2952

```text
 else if(theme==='lyra')subtitle='VAREK • LYRA • FAMÍLIA';
```

**Explicação:** Define caminho alternativo.

### Linha 2953

```text
 else if(theme==='hunters')subtitle='3 CAÇADORAS • NÃO PARE';
```

**Explicação:** Define caminho alternativo.

### Linha 2954

```text
 else if(theme==='frontier')subtitle='A FRONTEIRA ESTÁ PRÓXIMA';
```

**Explicação:** Define caminho alternativo.

### Linha 2955

```text
 else if(theme==='warning')subtitle='DESCIDA DO RIO • ESCOLHA A TRAJETÓRIA';
```

**Explicação:** Define caminho alternativo.

### Linha 2956

```text
 g.fillText(subtitle,256,88);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2957

```text
 g.lineCap='round';g.lineJoin='round';
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2958

```text
 function drawRunner(x,y,s,clr){g.strokeStyle=clr;g.lineWidth=6*s;g.beginPath();g.arc(x,y-24*s,10*s,0,Math.PI*2);g.stroke();g.beginPath();g.moveTo(x,y-12*s);g.lineTo(x-4*s,y+14*s);g.lineTo(x+16*s,y+26*s);g.moveTo(x-2*s,y-2*s);g.lineTo(x+18*s,y+8*s);g.moveTo(x-4*s,y+14*s);g.lineTo(x-18*s,y+34*s);g.moveTo(x+3*s,y+10*s);g.lineTo(x+22*s,y-6*s);g.stroke()}
```

**Explicação:** Declara função reutilizável.

### Linha 2959

```text
 function drawShield(x,y,s,clr){g.strokeStyle=clr;g.lineWidth=5*s;g.beginPath();g.moveTo(x,y-30*s);g.lineTo(x+24*s,y-18*s);g.lineTo(x+20*s,y+14*s);g.lineTo(x,y+34*s);g.lineTo(x-20*s,y+14*s);g.lineTo(x-24*s,y-18*s);g.closePath();g.stroke();g.beginPath();g.moveTo(x-10*s,y);g.lineTo(x+12*s,y);g.moveTo(x+1*s,y-12*s);g.lineTo(x+1*s,y+12*s);g.stroke()}
```

**Explicação:** Declara função reutilizável.

### Linha 2960

```text
 function drawHunterMarks(x,y,s,clr){g.strokeStyle=clr;g.lineWidth=5*s;for(const o of [-30,0,30]){g.beginPath();g.moveTo(x+o,y-24*s);g.lineTo(x+o-10*s,y+26*s);g.moveTo(x+o,y-24*s);g.lineTo(x+o+10*s,y+26*s);g.stroke();g.beginPath();g.arc(x+o,y-34*s,6*s,0,Math.PI*2);g.stroke()}}
```

**Explicação:** Declara função reutilizável.

### Linha 2961

```text
 function drawMountains(x,y,s,clr){g.strokeStyle=clr;g.lineWidth=5*s;g.beginPath();g.moveTo(x-52*s,y+22*s);g.lineTo(x-20*s,y-12*s);g.lineTo(x+4*s,y+16*s);g.lineTo(x+32*s,y-20*s);g.lineTo(x+58*s,y+22*s);g.stroke();g.beginPath();g.moveTo(x-42*s,y+2*s);g.lineTo(x+48*s,y+2*s);g.stroke()}
```

**Explicação:** Declara função reutilizável.

### Linha 2962

```text
 const clr=theme==='warning'?lava:accent;
```

**Explicação:** Declara constante JavaScript.

### Linha 2963

```text
 if(theme==='brand'){drawShield(256,156,1.1,clr);drawRunner(256,180,.75,warm)}
```

**Explicação:** Executa condicionalmente.

### Linha 2964

```text
 else if(theme==='varek'){drawRunner(256,164,1.05,clr);drawShield(376,168,.55,warm)}
```

**Explicação:** Define caminho alternativo.

### Linha 2965

```text
 else if(theme==='lyra'){drawRunner(214,168,.92,clr);drawRunner(306,176,.60,warm)}
```

**Explicação:** Define caminho alternativo.

### Linha 2966

```text
 else if(theme==='hunters'){drawHunterMarks(256,168,.85,clr)}
```

**Explicação:** Define caminho alternativo.

### Linha 2967

```text
 else if(theme==='frontier'){drawMountains(256,166,.95,clr);g.fillStyle='rgba(255,210,108,.95)';g.fillRect(242,132,28,38);g.fillStyle='rgba(255,236,190,.98)';g.fillRect(236,130,40,6)}
```

**Explicação:** Define caminho alternativo.

### Linha 2968

```text
 else if(theme==='warning'){drawShield(256,160,1.0,lava);g.fillStyle='rgba(255,121,52,.95)';g.fillRect(190,176,132,10)}
```

**Explicação:** Define caminho alternativo.

### Linha 2969

```text
 g.font='700 13px sans-serif';g.fillStyle='rgba(255,240,214,.72)';g.fillText('MAX HEALMS • DESCIDA DO RIO',256,230);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2970

```text
 const tex=new THREE.CanvasTexture(c);tex.needsUpdate=true;tex.anisotropy=4;return tex
```

**Explicação:** Declara constante JavaScript.

### Linha 2971

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2972

```text
function addTobogganWallArt(seg,index,accentC){
```

**Explicação:** Declara função reutilizável.

### Linha 2973

```text
 const themes=['brand','varek','lyra','hunters','frontier','warning'];
```

**Explicação:** Declara constante JavaScript.

### Linha 2974

```text
 const theme=themes[index%themes.length],tex=makeTobogganMuralTexture(theme,accentC);if(!tex)return;
```

**Explicação:** Declara constante JavaScript.

### Linha 2975

```text
 for(const side of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 2976

```text
  const panel=new THREE.Mesh(new THREE.PlaneGeometry(2.2,1.1),new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide}));
```

**Explicação:** Declara constante JavaScript.

### Linha 2977

```text
  panel.position.set(side*4.17,1.25,side>0?-.58:.58);panel.rotation.y=side<0?Math.PI/2:-Math.PI/2;panel.rotation.z=side*-.09;seg.add(panel)
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2978

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2979

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2980

```text
function addTobogganWallLights(seg,accentC){
```

**Explicação:** Declara função reutilizável.

### Linha 2981

```text
 const poleMat=new THREE.MeshStandardMaterial({color:0x2b2118,roughness:.88});
```

**Explicação:** Declara constante JavaScript.

### Linha 2982

```text
 const glowMat=new THREE.MeshStandardMaterial({color:accentC,emissive:accentC,emissiveIntensity:.9,roughness:.30});
```

**Explicação:** Declara constante JavaScript.

### Linha 2983

```text
 for(const side of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 2984

```text
  const pole=new THREE.Mesh(new THREE.BoxGeometry(.08,.95,.08),poleMat);pole.position.set(side*4.16,1.74,side>0?-1.65:1.65);seg.add(pole);
```

**Explicação:** Declara constante JavaScript.

### Linha 2985

```text
  const glow=new THREE.Mesh(new THREE.BoxGeometry(.12,.28,.12),glowMat);glow.position.set(side*4.16,2.15,side>0?-1.65:1.65);seg.add(glow)
```

**Explicação:** Declara constante JavaScript.

### Linha 2986

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2987

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2988

```text
function createTobogganSpike(laneI,z,mat){const g=new THREE.Group();for(const x of [-.55,0,.55]){const s=new THREE.Mesh(new THREE.ConeGeometry(.20,.92,5),mat);s.position.set(x,.46,0);s.rotation.y=Math.PI/5;g.add(s)}g.userData={kind:'tobogganHazard',type:'espinhos',lane:laneI,z,hit:false,baseY:.02};tobogganGroup.add(g);tobogganHazards.push(g)}
```

**Explicação:** Declara função reutilizável.

### Linha 2989

```text
function createTobogganBarrier(laneI,z,mat){
```

**Explicação:** Declara função reutilizável.

### Linha 2990

```text
 const g=new THREE.Group();
```

**Explicação:** Declara constante JavaScript.

### Linha 2991

```text
 const frameMat=new THREE.MeshStandardMaterial({color:0x1c1512,roughness:.76,metalness:.22});
```

**Explicação:** Declara constante JavaScript.

### Linha 2992

```text
 const stripeMat=new THREE.MeshStandardMaterial({color:0xf9c84d,emissive:0x8f4d00,emissiveIntensity:.52,roughness:.38});
```

**Explicação:** Declara constante JavaScript.

### Linha 2993

```text
 const glowMat=new THREE.MeshStandardMaterial({color:0xff7a32,emissive:0xff7a32,emissiveIntensity:1.05,roughness:.20});
```

**Explicação:** Declara constante JavaScript.

### Linha 2994

```text
 const warningMat=new THREE.MeshBasicMaterial({color:0xffefb8});
```

**Explicação:** Declara constante JavaScript.

### Linha 2995

```text
 const board=new THREE.Mesh(new THREE.BoxGeometry(2.08,.44,.34),frameMat);board.position.y=.76;g.add(board);
```

**Explicação:** Declara constante JavaScript.

### Linha 2996

```text
 const face=new THREE.Mesh(new THREE.BoxGeometry(1.74,.34,.12),mat);face.position.set(0,.76,.18);g.add(face);
```

**Explicação:** Declara constante JavaScript.

### Linha 2997

```text
 for(const x of [-.78,-.26,.26,.78]){const stripe=new THREE.Mesh(new THREE.BoxGeometry(.18,.40,.14),stripeMat);stripe.position.set(x,.76,.25);stripe.rotation.z=-.64;g.add(stripe)}
```

**Explicação:** Inicia repetição.

### Linha 2998

```text
 for(const x of [-.88,.88]){const p=new THREE.Mesh(new THREE.BoxGeometry(.22,1.48,.22),frameMat);p.position.set(x,.66,0);g.add(p);const glow=new THREE.Mesh(new THREE.BoxGeometry(.10,.56,.10),glowMat);glow.position.set(x,1.15,.20);g.add(glow)}
```

**Explicação:** Inicia repetição.

### Linha 2999

```text
 const top=new THREE.Mesh(new THREE.BoxGeometry(1.36,.18,.18),warningMat);top.position.set(0,1.46,.04);g.add(top);
```

**Explicação:** Declara constante JavaScript.

### Linha 3000

```text
 const arrowL=new THREE.Mesh(new THREE.BoxGeometry(.42,.08,.08),glowMat);arrowL.position.set(-.34,1.46,.14);arrowL.rotation.z=.55;g.add(arrowL);
```

**Explicação:** Declara constante JavaScript.

