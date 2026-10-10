# index.html — Parte 11

Linhas **2501 a 2750** da MOBILE87.

### Linha 2501

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2502

```text
function makeShelterLabel(textLabel){
```

**Explicação:** Declara função reutilizável.

### Linha 2503

```text
 const c=document.createElement('canvas');c.width=512;c.height=160;const ctx=c.getContext('2d');
```

**Explicação:** Declara constante JavaScript.

### Linha 2504

```text
 ctx.fillStyle='rgba(26,18,10,.94)';ctx.fillRect(0,0,c.width,c.height);ctx.strokeStyle='#f4c56a';ctx.lineWidth=10;ctx.strokeRect(6,6,c.width-12,c.height-12);
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 2505

```text
 ctx.fillStyle='#ffe1a0';ctx.font='900 76px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(textLabel,c.width/2,c.height/2+4);
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 2506

```text
 const tex=new THREE.CanvasTexture(c);tex.encoding=THREE.sRGBEncoding;tex.needsUpdate=true;
```

**Explicação:** Declara constante JavaScript.

### Linha 2507

```text
 return new THREE.Mesh(new THREE.PlaneGeometry(2.9,.9),new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide}));
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2508

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2509

```text
function buildShelter3D(){
```

**Explicação:** Declara função reutilizável.

### Linha 2510

```text
 if(shelter3D){worldRoot.remove(shelter3D);disposeObject(shelter3D)}
```

**Explicação:** Executa condicionalmente.

### Linha 2511

```text
 shelter3D=new THREE.Group();shelter3D.name='MR_SUPPORT_POST';
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2512

```text
 const wood=new THREE.MeshStandardMaterial({color:0x65472d,roughness:.96});
```

**Explicação:** Declara constante JavaScript.

### Linha 2513

```text
 const woodDark=new THREE.MeshStandardMaterial({color:0x38271b,roughness:1});
```

**Explicação:** Declara constante JavaScript.

### Linha 2514

```text
 const plank=new THREE.MeshStandardMaterial({color:0x7a5938,roughness:.92});
```

**Explicação:** Declara constante JavaScript.

### Linha 2515

```text
 const roofMat=new THREE.MeshStandardMaterial({color:0x34453a,roughness:.94});
```

**Explicação:** Declara constante JavaScript.

### Linha 2516

```text
 const stone=new THREE.MeshStandardMaterial({color:0x67645b,roughness:1});
```

**Explicação:** Declara constante JavaScript.

### Linha 2517

```text
 const warm=new THREE.MeshStandardMaterial({color:0xf2b45f,emissive:0x8f4b18,emissiveIntensity:1.15,roughness:.55});
```

**Explicação:** Declara constante JavaScript.

### Linha 2518

```text
 const trim=new THREE.MeshStandardMaterial({color:0xa77b45,roughness:.85});
```

**Explicação:** Declara constante JavaScript.

### Linha 2519

```text
 // Stone foundation and porch.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2520

```text
 const foundation=new THREE.Mesh(new THREE.BoxGeometry(5.0,.30,4.0),stone);foundation.position.set(0,.15,-.15);shelter3D.add(foundation);
```

**Explicação:** Declara constante JavaScript.

### Linha 2521

```text
 const porch=new THREE.Mesh(new THREE.BoxGeometry(4.7,.16,1.65),plank);porch.position.set(0,.34,2.45);shelter3D.add(porch);
```

**Explicação:** Declara constante JavaScript.

### Linha 2522

```text
 // Main cabin walls, with a real open doorway in the front.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2523

```text
 const back=new THREE.Mesh(new THREE.BoxGeometry(4.7,2.9,.24),wood);back.position.set(0,1.72,-1.72);shelter3D.add(back);
```

**Explicação:** Declara constante JavaScript.

### Linha 2524

```text
 const leftWall=new THREE.Mesh(new THREE.BoxGeometry(.24,2.9,3.35),wood);leftWall.position.set(-2.24,1.72,-.05);shelter3D.add(leftWall);
```

**Explicação:** Declara constante JavaScript.

### Linha 2525

```text
 const rightWall=new THREE.Mesh(new THREE.BoxGeometry(.24,2.9,3.35),wood);rightWall.position.set(2.24,1.72,-.05);shelter3D.add(rightWall);
```

**Explicação:** Declara constante JavaScript.

### Linha 2526

```text
 for(const x of [-1.62,1.62]){const front=new THREE.Mesh(new THREE.BoxGeometry(1.46,2.9,.24),wood);front.position.set(x,1.72,1.62);shelter3D.add(front)}
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2527

```text
 const lintel=new THREE.Mesh(new THREE.BoxGeometry(1.82,.72,.24),woodDark);lintel.position.set(0,2.78,1.62);shelter3D.add(lintel);
```

**Explicação:** Declara constante JavaScript.

### Linha 2528

```text
 // Door frame highlights the passage.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2529

```text
 for(const x of [-.86,.86]){const p=new THREE.Mesh(new THREE.BoxGeometry(.16,2.45,.22),trim);p.position.set(x,1.55,1.78);shelter3D.add(p)}
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2530

```text
 const topFrame=new THREE.Mesh(new THREE.BoxGeometry(1.88,.18,.22),trim);topFrame.position.set(0,2.78,1.78);shelter3D.add(topFrame);
```

**Explicação:** Declara constante JavaScript.

### Linha 2531

```text
 // Warm interior visible from the track.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2532

```text
 const interiorGlow=new THREE.Mesh(new THREE.PlaneGeometry(1.55,2.20),new THREE.MeshBasicMaterial({color:0xffc875,transparent:true,opacity:.32,side:THREE.DoubleSide}));interiorGlow.position.set(0,1.48,1.48);shelter3D.add(interiorGlow);
```

**Explicação:** Declara constante JavaScript.

### Linha 2533

```text
 const lamp=new THREE.PointLight(0xffb45f,1.6,12,2);lamp.position.set(0,2.05,.45);shelter3D.add(lamp);
```

**Explicação:** Declara constante JavaScript.

### Linha 2534

```text
 const lantern=new THREE.Mesh(new THREE.SphereGeometry(.14,10,8),warm);lantern.position.set(.0,2.58,1.95);shelter3D.add(lantern);
```

**Explicação:** Declara constante JavaScript.

### Linha 2535

```text
 // Large pitched roof.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2536

```text
 const roof=new THREE.Mesh(new THREE.ConeGeometry(3.75,1.68,4),roofMat);roof.rotation.y=Math.PI/4;roof.scale.z=.80;roof.position.set(0,3.76,-.05);shelter3D.add(roof);
```

**Explicação:** Declara constante JavaScript.

### Linha 2537

```text
 // MOBILE46: fachada mais marcante e acolhedora.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2538

```text
 const ridge=new THREE.Mesh(new THREE.BoxGeometry(.18,.18,4.9),trim);ridge.position.set(0,4.48,-.05);ridge.rotation.y=Math.PI/2;shelter3D.add(ridge);
```

**Explicação:** Declara constante JavaScript.

### Linha 2539

```text
 const canopy=new THREE.Mesh(new THREE.BoxGeometry(3.25,.14,1.18),roofMat);canopy.position.set(0,2.93,2.05);canopy.rotation.x=-.12;shelter3D.add(canopy);
```

**Explicação:** Declara constante JavaScript.

### Linha 2540

```text
 for(const x of [-1.95,1.95]){const brace=new THREE.Mesh(new THREE.BoxGeometry(.14,2.35,.14),trim);brace.position.set(x,1.55,1.82);shelter3D.add(brace)}
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2541

```text
 const emblem=new THREE.Mesh(new THREE.TorusGeometry(.34,.055,8,24),new THREE.MeshStandardMaterial({color:0xf4c56a,emissive:0x6b420d,emissiveIntensity:.45,roughness:.55}));emblem.position.set(0,2.42,1.86);emblem.rotation.x=Math.PI/2;shelter3D.add(emblem);
```

**Explicação:** Declara constante JavaScript.

### Linha 2542

```text
 const waterBarrel=new THREE.Mesh(new THREE.CylinderGeometry(.34,.38,.86,12),new THREE.MeshStandardMaterial({color:0x36586a,roughness:.78,metalness:.05}));waterBarrel.position.set(1.72,.62,2.20);shelter3D.add(waterBarrel);
```

**Explicação:** Declara constante JavaScript.

### Linha 2543

```text
 // Windows with warm light.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2544

```text
 for(const x of [-1.35,1.35]){const win=new THREE.Mesh(new THREE.BoxGeometry(.78,.82,.05),warm);win.position.set(x,1.86,1.76);shelter3D.add(win)}
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2545

```text
 // Clear sign above the door.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2546

```text
 const label=makeShelterLabel('POSTO DE APOIO');label.position.set(0,3.15,1.91);shelter3D.add(label);
```

**Explicação:** Declara constante JavaScript.

### Linha 2547

```text
 // Large advance road sign: arrives before the house and clearly points to the right-side diversion.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2548

```text
 const advanceSign=makeShelterLabel('POSTO →');advanceSign.scale.set(1.28,1.28,1.28);advanceSign.position.set(-3.55,2.35,13.5);shelter3D.add(advanceSign);
```

**Explicação:** Declara constante JavaScript.

### Linha 2549

```text
 for(const x of [-4.55,-2.55]){const sp=new THREE.Mesh(new THREE.CylinderGeometry(.08,.11,2.0,8),woodDark);sp.position.set(x,1.0,13.5);shelter3D.add(sp)}
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2550

```text
 const arrowGlow=new THREE.Mesh(new THREE.ConeGeometry(.42,.92,3),new THREE.MeshStandardMaterial({color:0xf4c56a,emissive:0xb56d12,emissiveIntensity:1.1,roughness:.5}));arrowGlow.rotation.z=-Math.PI/2;arrowGlow.position.set(-2.35,1.45,13.5);shelter3D.add(arrowGlow);
```

**Explicação:** Declara constante JavaScript.

### Linha 2551

```text
 // Side passage from the right edge of the running track to the porch.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2552

```text
 for(let i=0;i<7;i++){
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 2553

```text
   const step=new THREE.Mesh(new THREE.BoxGeometry(.55,.12,1.28),plank);
```

**Explicação:** Declara constante JavaScript.

### Linha 2554

```text
   step.position.set(-3.28+i*.41,.18,2.40);step.rotation.y=(i%2?-.025:.025);shelter3D.add(step);
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 2555

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2556

```text
 // Entrance posts and lanterns at the track edge make the route unmistakable.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2557

```text
 for(const zOff of [1.82,3.00]){
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2558

```text
   const post=new THREE.Mesh(new THREE.CylinderGeometry(.09,.12,1.55,8),woodDark);post.position.set(-3.55,.78,zOff);shelter3D.add(post);
```

**Explicação:** Declara constante JavaScript.

### Linha 2559

```text
   const lightOrb=new THREE.Mesh(new THREE.SphereGeometry(.12,10,8),warm);lightOrb.position.set(-3.55,1.54,zOff);shelter3D.add(lightOrb);
```

**Explicação:** Declara constante JavaScript.

### Linha 2560

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2561

```text
 const arrowMat=new THREE.MeshStandardMaterial({color:0xf4c56a,emissive:0x6b420d,emissiveIntensity:.72,roughness:.62});
```

**Explicação:** Declara constante JavaScript.

### Linha 2562

```text
 const arrow=new THREE.Mesh(new THREE.ConeGeometry(.34,.72,3),arrowMat);arrow.rotation.z=-Math.PI/2;arrow.rotation.y=Math.PI/2;arrow.position.set(-3.62,1.92,2.42);shelter3D.add(arrow);
```

**Explicação:** Declara constante JavaScript.

### Linha 2563

```text
 // Small crates reinforce the cabin silhouette without blocking the entrance.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2564

```text
 for(const [x,z,s] of [[1.55,2.35,.52],[-1.55,2.55,.44]]){const crate=new THREE.Mesh(new THREE.BoxGeometry(s,s,s),woodDark);crate.position.set(x,.56,z);crate.rotation.y=.18;shelter3D.add(crate)}
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2565

```text
 // Keep the house outside the 3 lanes; only the wooden passage touches the road edge.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2566

```text
 shelter3D.position.set(7.45,0,SHELTER_START_Z);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2567

```text
 shelter3D.traverse(n=>{if(n.isMesh){n.castShadow=shadowsOn;n.receiveShadow=shadowsOn}});worldRoot.add(shelter3D)
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 2568

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2569

```text
function openShelterChoice(){if(shelterChoiceOpen||shelterActive||shelterDecisionDone||!shelterAvailable)return;if(Math.round(lane)!==2||targetLane!==2){toast('POSTO DE APOIO À DIREITA • ENTRE NA FAIXA DIREITA');return}shelterDecisionDone=true;shelterChoiceOpen=true;UI.shelterPrompt.classList.remove('show');UI.shelterChoicePanel.classList.add('show');clock.getDelta()}
```

**Explicação:** Declara função reutilizável.

### Linha 2570

```text
function declineShelter(){
```

**Explicação:** Declara função reutilizável.

### Linha 2571

```text
 if(!shelterChoiceOpen)return;shelterChoiceOpen=false;UI.shelterChoicePanel.classList.remove('show');clock.getDelta();toast('POSTO DE APOIO IGNORADO • CONTINUE A FUGA');
```

**Explicação:** Executa condicionalmente.

### Linha 2572

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2573

```text
function updateShelter(dt,dz){
```

**Explicação:** Declara função reutilizável.

### Linha 2574

```text
 if(!shelter3D)return;
```

**Explicação:** Executa condicionalmente.

### Linha 2575

```text
 if(started&&!paused&&!gameOver&&!shelterActive&&!shelterChoiceOpen)shelter3D.position.z+=dz;
```

**Explicação:** Executa condicionalmente.

### Linha 2576

```text
 // Mantém uma área limpa ao redor do Posto de Apoio, inclusive obstáculos já existentes.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2577

```text
 if(!shelterActive&&shelter3D.position.z>-105&&shelter3D.position.z<55){
```

**Explicação:** Executa condicionalmente.

### Linha 2578

```text
   for(let i=obstacles.length-1;i>=0;i--){const o=obstacles[i];if(Math.abs(o.position.z-shelter3D.position.z)<48){itemGroup.remove(o);disposeObject(o);obstacles.splice(i,1)}}
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 2579

```text
 }shelter3D.position.x=7.45+trackCurveX(shelter3D.position.z);shelter3D.position.y=kharvorLayerY;shelter3D.rotation.y=trackCurveYaw(shelter3D.position.z);const near=shelter3D.position.z>-32&&shelter3D.position.z<4&&!shelterActive&&!shelterChoiceOpen;shelterAvailable=near;UI.shelterPrompt.classList.toggle('show',near);if(near){const meters=Math.max(0,Math.round(Math.abs(shelter3D.position.z)*.55));const inRight=Math.round(lane)===2&&targetLane===2;UI.shelterPrompt.textContent='🏕 POSTO DE APOIO À DIREITA • '+(meters>2?meters+' m • ':'')+(inRight?'FAIXA CORRETA • ENTRADA LIVRE':'ENTRE NA FAIXA DIREITA →')}if(near&&!shelterDecisionDone&&shelter3D.position.z>-1.35&&shelter3D.position.z<1.65&&Math.round(lane)===2&&targetLane===2)openShelterChoice();if(shelter3D.position.z>18){shelter3D.position.z-=SHELTER_LOOP_Z;shelterAvailable=false;shelterDecisionDone=false;shelterChoiceOpen=false;UI.shelterPrompt.classList.remove('show');UI.shelterChoicePanel.classList.remove('show')}}
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 2580

```text
function enterShelter(){if(!shelterChoiceOpen||shelterActive)return;shelterChoiceOpen=false;UI.shelterChoicePanel.classList.remove('show');shelterActive=true;shelterTimer=300;shelterHydrationBefore=water;timePenalty+=60;huntersVisible=false;hunters.forEach(h=>h.root.visible=false);UI.shelterPrompt.classList.remove('show');UI.shelterPanel.classList.add('show');UI.shelterCounter.textContent='05:00';if(UI.shelterHydrationBefore)UI.shelterHydrationBefore.textContent=Math.floor(shelterHydrationBefore)+'%';refreshShelterHydrationOffers();toast('POSTO DE APOIO • CORRIDA PAUSADA • HIDRATAÇÃO OPCIONAL • +1 MINUTO NO RANKING')}
```

**Explicação:** Declara função reutilizável.

### Linha 2581

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2582

```text
function hydrationFullPrice(){const missing=Math.max(0,100-water);return missing<=0?0:Math.min(200,Math.max(40,Math.ceil(missing/20)*40))}
```

**Explicação:** Declara função reutilizável.

### Linha 2583

```text
function refreshShelterHydrationOffers(){if(UI.shelterHydrationNow)UI.shelterHydrationNow.textContent=Math.floor(water)+'%';if(UI.shelterHydrationStatus)UI.shelterHydrationStatus.innerHTML=water>=99.9?'💧 <strong>'+gt('hydrationFull')+'</strong>':'💧 '+gt('hydrationCurrent')+' <strong>'+Math.floor(water)+'%</strong>';const f=$('hydrFull');if(f)f.textContent='COMPLETAR 100% • 💎 '+hydrationFullPrice();[['hydr20',20,40],['hydr50',50,90],['hydr75',75,130]].forEach(([id,pct,price])=>{const b=$(id);if(b)b.textContent='+'+pct+'% • 💎 '+price})}
```

**Explicação:** Declara função reutilizável.

### Linha 2584

```text
function buyShelterHydration(amount,price,full=false){if(!shelterActive)return;if(water>=100){toast('HIDRATAÇÃO JÁ ESTÁ EM 100%');return}const actualPrice=full?hydrationFullPrice():price;if(actualPrice<=0){refreshShelterHydrationOffers();return}if(!canAffordGems(actualPrice)){toast('DIAMANTES INSUFICIENTES');return}if(!spendGems(actualPrice))return;water=full?100:Math.min(100,water+amount);hydrationBand=water<15?0:(water<35?1:2);saveState();refreshShelterHydrationOffers();toast('HIDRATAÇÃO '+Math.floor(water)+'% • 💎 '+actualPrice)}
```

**Explicação:** Declara função reutilizável.

### Linha 2585

```text
function exitShelter(){if(!shelterActive)return;shelterActive=false;UI.shelterPanel.classList.remove('show');if(shelter3D)shelter3D.position.z=SHELTER_START_Z;shelterAvailable=false;shelterDecisionDone=false;shelterChoiceOpen=false;if(currentJourney===2)forceLyraRun();clock.getDelta();toast('SAINDO DO POSTO DE APOIO • RETORNO AO MESMO PONTO DA JORNADA')}
```

**Explicação:** Declara função reutilizável.

### Linha 2586

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2587

```text
async function loadHero(){return loadHeroByOutfit(SAVE.equipped.outfit||'outfit_varek_original')}
```

**Explicação:** Declara função assíncrona.

### Linha 2588

```text
function cloneModelScene(src){return (THREE.SkeletonUtils&&THREE.SkeletonUtils.clone)?THREE.SkeletonUtils.clone(src):src.clone(true)}
```

**Explicação:** Declara função reutilizável.

### Linha 2589

```text
function firstClip(gltf,rx){return (gltf.animations||[]).find(a=>rx.test(a.name))||(gltf.animations||[])[0]||null}
```

**Explicação:** Declara função reutilizável.

### Linha 2590

```text
async function loadHeroByOutfit(id){const cfg=HERO_OUTFITS[id]||HERO_OUTFITS.outfit_varek_original;currentAction=null;currentActionName='';if(cfg.mode==='varek'){const gltf=await parseGLB64(ASSETS.varek);heroRoot=new THREE.Group();hero=cloneModelScene(gltf.scene);setSRGB(hero);applyOutfitStyle(hero,cfg);let box=new THREE.Box3().setFromObject(hero),size=box.getSize(new THREE.Vector3()),sc=cfg.height/Math.max(.001,size.y);hero.scale.setScalar(sc);box=new THREE.Box3().setFromObject(hero);const c=box.getCenter(new THREE.Vector3());hero.position.set(-c.x,-box.min.y,-c.z);heroRoot.add(hero);heroRoot.rotation.y=Math.PI;scene.add(heroRoot);mixer=new THREE.AnimationMixer(hero);heroRoot.userData.actions={};for(const clip of gltf.animations)heroRoot.userData.actions[clip.name]=mixer.clipAction(clip);heroRoot.userData.outfit=cfg.id;await applyEquipment();return}const [rg,wg,sg]=await Promise.all([parseGLB64(ASSETS[cfg.run]),parseGLB64(ASSETS[cfg.walk]),parseGLB64(ASSETS[cfg.slide])]);heroRoot=new THREE.Group();hero=cloneModelScene(rg.scene);setSRGB(hero);applyOutfitStyle(hero,cfg);let box=new THREE.Box3().setFromObject(hero),size=box.getSize(new THREE.Vector3()),sc=cfg.height/Math.max(.001,size.y);hero.scale.setScalar(sc);box=new THREE.Box3().setFromObject(hero);const c=box.getCenter(new THREE.Vector3());hero.position.set(-c.x,-box.min.y,-c.z);heroRoot.add(hero);heroRoot.rotation.y=Math.PI;scene.add(heroRoot);mixer=new THREE.AnimationMixer(hero);heroRoot.userData.actions={};const run=firstClip(rg,/run/i)||firstClip(rg,/.*/),walk=firstClip(wg,/walk/i)||run,slide=firstClip(sg,/slide|roll|dodge/i)||run;if(run){heroRoot.userData.actions.Running=mixer.clipAction(run);const fast=run.clone();fast.name='RunFast';heroRoot.userData.actions.RunFast=mixer.clipAction(fast)}if(walk){const wc=walk.clone();wc.name='Walking';heroRoot.userData.actions.Walking=mixer.clipAction(wc)}if(slide){const sl=slide.clone();sl.name='Roll_Dodge_1';heroRoot.userData.actions.Roll_Dodge_1=mixer.clipAction(sl)}heroRoot.userData.outfit=cfg.id;await applyEquipment()}
```

**Explicação:** Declara função assíncrona.

### Linha 2591

```text
async function reloadHeroOutfit(){if(!scene||!loader)return;const old=heroRoot?{x:heroRoot.position.x,y:heroRoot.position.y,z:heroRoot.position.z}:null;if(accessoryGroup){const p=accessoryGroup.parent;if(p)p.remove(accessoryGroup);accessoryGroup=null}if(heroRoot){scene.remove(heroRoot);disposeObject(heroRoot)}heroRoot=null;hero=null;mixer=null;currentAction=null;currentActionName='';UI.loading.classList.remove('hidden');UI.loadingText.textContent='Trocando visual...';try{await loadHero();if(old&&heroRoot)heroRoot.position.set(old.x,old.y,old.z);playHero(started?'Running':'Walking',.10)}catch(err){console.warn('TESTE 21.7 troca visual',err);SAVE.equipped.outfit='outfit_varek_original';saveState();if(!heroRoot)await loadHero();toast('VISUAL NÃO CARREGOU • AVENTUREIRO RESTAURADO')}UI.loading.classList.add('hidden')}
```

**Explicação:** Declara função assíncrona.

### Linha 2592

```text
function playHero(name,fade=.14){if(!heroRoot)return;const next=heroRoot.userData.actions[name]||heroRoot.userData.actions.Running;if(!next)return;if(currentAction===next&&name===currentActionName)return;if(currentAction)currentAction.fadeOut(fade);next.reset().fadeIn(fade).play();if(name==='Roll_Dodge_1'){next.setLoop(THREE.LoopOnce,1);next.clampWhenFinished=true}else next.setLoop(THREE.LoopRepeat,Infinity);currentAction=next;currentActionName=name}
```

**Explicação:** Declara função reutilizável.

### Linha 2593

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2594

```text
function parseGLB64(s){
```

**Explicação:** Declara função reutilizável.

### Linha 2595

```text
 const v=String(s??'').trim();if(!v)return Promise.reject(new Error('Asset 3D não informado'));
```

**Explicação:** Declara constante JavaScript.

### Linha 2596

```text
 if(/\.(?:glb|gltf|fbx)(?:$|[?#])/i.test(v)||/^(?:https?:)?\/\//i.test(v)||v.startsWith('./')||v.startsWith('../'))return loadGLTFAsset(v);
```

**Explicação:** Executa condicionalmente.

### Linha 2597

```text
 const data=v.match(/^data:[^,]*;base64,(.+)$/i)?.[1]||v;
```

**Explicação:** Declara constante JavaScript.

### Linha 2598

```text
 if(data.length>=64&&/^[A-Za-z0-9+/=\r\n]+$/.test(data))return new Promise((res,rej)=>{try{loader.parse(b64buf(data),'',res,rej)}catch(e){rej(e)}});
```

**Explicação:** Executa condicionalmente.

### Linha 2599

```text
 return Promise.reject(new Error('Referência 3D inválida: '+v.slice(0,80)))
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2600

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2601

```text
async function loadLyra(){
```

**Explicação:** Declara função assíncrona.

### Linha 2602

```text
 const [rg,sg]=await Promise.all([parseGLB64(ASSETS.lyraRun),parseGLB64(ASSETS.lyraSlide)]);lyraRoot=new THREE.Group();lyraModel=rg.scene;setSRGB(lyraModel);let box=new THREE.Box3().setFromObject(lyraModel),size=box.getSize(new THREE.Vector3()),sc=1.66/Math.max(.001,size.y);lyraModel.scale.setScalar(sc);box=new THREE.Box3().setFromObject(lyraModel);const c=box.getCenter(new THREE.Vector3());lyraModel.position.set(-c.x,-box.min.y,-c.z);lyraRoot.add(lyraModel);lyraRoot.rotation.y=Math.PI;lyraRoot.visible=false;scene.add(lyraRoot);lyraMixer=new THREE.AnimationMixer(lyraModel);lyraActions={};const run=firstClip(rg,/run/i),slide=firstClip(sg,/crouch|bow|slide|look/i);if(run){lyraActions.run=lyraMixer.clipAction(run);lyraActions.run.setLoop(THREE.LoopRepeat,Infinity)}if(slide){const sl=slide.clone();sl.name='LyraSlide';lyraActions.slide=lyraMixer.clipAction(sl);lyraActions.slide.setLoop(THREE.LoopRepeat,Infinity)}playLyra('run',0);return lyraRoot
```

**Explicação:** Declara constante JavaScript.

### Linha 2603

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2604

```text
function forceLyraRun(){if(!lyraRoot||!lyraActions.run)return;if(lyraAction){try{lyraAction.stop()}catch(_){}}lyraAction=null;lyraActionName='';lyraActions.run.paused=false;playLyra('run',0);if(lyraMixer)lyraMixer.update(0)}
```

**Explicação:** Declara função reutilizável.

### Linha 2605

```text
function ensureLyraRun(){if(!lyraRoot||!lyraActions.run)return;const r=lyraActions.run;let running=false;try{running=!!r.isRunning()}catch(_){running=false}if(lyraAction!==r||lyraActionName!=='run'||r.paused||!running)forceLyraRun()}
```

**Explicação:** Declara função reutilizável.

### Linha 2606

```text
async function loadWife(){if(wifeRoot)return wifeRoot;if(wifeLoadPromise)return wifeLoadPromise;wifeLoadPromise=parseGLB64(ASSETS.wife).then(gltf=>{wifeRoot=new THREE.Group();wifeModel=gltf.scene;setSRGB(wifeModel);let box=new THREE.Box3().setFromObject(wifeModel),size=box.getSize(new THREE.Vector3()),sc=1.78/Math.max(.001,size.y);wifeModel.scale.setScalar(sc);box=new THREE.Box3().setFromObject(wifeModel);const c=box.getCenter(new THREE.Vector3());wifeModel.position.set(-c.x,-box.min.y,-c.z);wifeRoot.add(wifeModel);wifeRoot.rotation.y=Math.PI;wifeRoot.visible=false;scene.add(wifeRoot);return wifeRoot}).catch(err=>{wifeLoadPromise=null;throw err});return wifeLoadPromise}
```

**Explicação:** Declara função assíncrona.

### Linha 2607

```text
function clearFinalFireworks(){for(const fw of finalFireworks){try{if(finalArrivalGroup)finalArrivalGroup.remove(fw.points);fw.points.geometry.dispose();fw.points.material.dispose()}catch(_){}}finalFireworks=[]}
```

**Explicação:** Declara função reutilizável.

### Linha 2608

```text
function makeArrivalSignTexture(){const c=document.createElement('canvas');c.width=1024;c.height=256;const x=c.getContext('2d');const g=x.createLinearGradient(0,0,0,256);g.addColorStop(0,'#70451f');g.addColorStop(1,'#3d2412');x.fillStyle=g;x.fillRect(0,0,1024,256);x.strokeStyle='#c7924f';x.lineWidth=18;x.strokeRect(10,10,1004,236);for(let i=0;i<18;i++){x.strokeStyle='rgba(255,220,160,'+(0.03+Math.random()*.05)+')';x.lineWidth=2;x.beginPath();x.moveTo(0,20+i*13);x.bezierCurveTo(240,8+i*13,680,35+i*11,1024,15+i*13);x.stroke()}x.textAlign='center';x.shadowColor='rgba(0,0,0,.65)';x.shadowBlur=10;x.fillStyle='#ffe8a5';x.font='900 74px Segoe UI, Arial';x.fillText('FRONTEIRA SEGURA',512,103);x.font='900 58px Segoe UI, Arial';x.fillStyle='#ffd06b';x.fillText('CHEGADA',512,190);const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;return t}
```

**Explicação:** Declara função reutilizável.

### Linha 2609

```text
function ensureFinalArrivalSet(){
```

**Explicação:** Declara função reutilizável.

### Linha 2610

```text
 if(finalArrivalGroup)return finalArrivalGroup;finalArrivalGroup=new THREE.Group();finalArrivalGroup.name='FINAL_ARRIVAL_FRONTIER';finalArrivalGroup.visible=false;
```

**Explicação:** Executa condicionalmente.

### Linha 2611

```text
 const wood=new THREE.MeshStandardMaterial({color:0x664323,roughness:.96}),wood2=new THREE.MeshStandardMaterial({color:0x3f2918,roughness:1}),gold=new THREE.MeshStandardMaterial({color:0xe9c36a,emissive:0x7b5418,emissiveIntensity:.35,roughness:.54});
```

**Explicação:** Declara constante JavaScript.

### Linha 2612

```text
 for(const x of [-4.1,4.1]){const post=new THREE.Mesh(new THREE.CylinderGeometry(.28,.34,4.8,10),wood);post.position.set(x,2.25,-2.35);post.castShadow=shadowsOn;finalArrivalGroup.add(post);const base=new THREE.Mesh(new THREE.CylinderGeometry(.48,.62,.38,10),wood2);base.position.set(x,.19,-2.35);finalArrivalGroup.add(base)}
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2613

```text
 const beam=new THREE.Mesh(new THREE.BoxGeometry(8.8,.42,.42),wood2);beam.position.set(0,4.32,-2.35);beam.castShadow=shadowsOn;finalArrivalGroup.add(beam);
```

**Explicação:** Declara constante JavaScript.

### Linha 2614

```text
 const sign=new THREE.Mesh(new THREE.BoxGeometry(5.9,1.20,.18),new THREE.MeshStandardMaterial({map:makeArrivalSignTexture(),roughness:.82}));sign.position.set(0,3.75,-2.10);sign.castShadow=shadowsOn;finalArrivalGroup.add(sign);
```

**Explicação:** Declara constante JavaScript.

### Linha 2615

```text
 const threshold=new THREE.Mesh(new THREE.BoxGeometry(8.1,.08,.26),gold);threshold.position.set(0,.06,-2.05);finalArrivalGroup.add(threshold);
```

**Explicação:** Declara constante JavaScript.

### Linha 2616

```text
 const fenceGeo=new THREE.BoxGeometry(2.6,.18,.18);for(const side of [-1,1]){for(let i=0;i<3;i++){const rail=new THREE.Mesh(fenceGeo,wood2);rail.position.set(side*(5.35+i*2.45),1.25,-2.38);finalArrivalGroup.add(rail);for(const px of [-1.1,1.1]){const stake=new THREE.Mesh(new THREE.BoxGeometry(.17,2.1,.17),wood);stake.position.set(side*(5.35+i*2.45)+px,.95,-2.38);finalArrivalGroup.add(stake)}}}
```

**Explicação:** Declara constante JavaScript.

### Linha 2617

```text
 for(const x of [-3.35,3.35]){const pole=new THREE.Mesh(new THREE.CylinderGeometry(.07,.08,2.6,8),wood2);pole.position.set(x,4.9,-2.35);finalArrivalGroup.add(pole);const flag=new THREE.Mesh(new THREE.PlaneGeometry(1.15,.60),new THREE.MeshBasicMaterial({color:x<0?0xf2c86e:0x8bd4ff,side:THREE.DoubleSide}));flag.position.set(x+(x<0?.58:-.58),5.62,-2.34);flag.rotation.y=x<0?0:Math.PI;finalArrivalGroup.add(flag)}
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2618

```text
 const lampMat=new THREE.MeshStandardMaterial({color:0xffe3a1,emissive:0xffc75d,emissiveIntensity:1.5});for(const x of [-4.1,4.1]){const lamp=new THREE.Mesh(new THREE.SphereGeometry(.16,10,8),lampMat);lamp.position.set(x,4.55,-2.35);finalArrivalGroup.add(lamp)}
```

**Explicação:** Declara constante JavaScript.

### Linha 2619

```text
 scene.add(finalArrivalGroup);return finalArrivalGroup
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 2620

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2621

```text
function spawnFinalFirework(){if(!finalArrivalGroup||!finalArrivalGroup.visible)return;const count=22,pos=new Float32Array(count*3),vel=[],base=new THREE.Vector3((Math.random()-.5)*9,5.2+Math.random()*2.8,-5.5-Math.random()*4),color=new THREE.Color().setHSL(Math.random(),.80,.64);for(let i=0;i<count;i++){pos[i*3]=base.x;pos[i*3+1]=base.y;pos[i*3+2]=base.z;const a=Math.random()*Math.PI*2,b=(Math.random()-.5)*Math.PI*.70,sp=1.6+Math.random()*2.6;vel.push(new THREE.Vector3(Math.cos(a)*Math.cos(b)*sp,Math.sin(b)*sp+1.0,Math.sin(a)*Math.cos(b)*sp))}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));const mat=new THREE.PointsMaterial({color,size:.14,transparent:true,opacity:1,depthWrite:false,blending:THREE.AdditiveBlending});const pts=new THREE.Points(geo,mat);finalArrivalGroup.add(pts);finalFireworks.push({points:pts,vel,age:0,life:1.45+Math.random()*.45});if(Math.random()<.18)playSFX('firework')}
```

**Explicação:** Declara função reutilizável.

### Linha 2622

```text
function updateFinalFireworks(dt){finalFireworkTimer-=dt;if(finalSceneClock>2.0&&finalFireworkTimer<=0){spawnFinalFirework();finalFireworkTimer=.58+Math.random()*.55}for(let j=finalFireworks.length-1;j>=0;j--){const fw=finalFireworks[j],arr=fw.points.geometry.attributes.position.array;fw.age+=dt;for(let i=0;i<fw.vel.length;i++){const v=fw.vel[i];v.y-=2.05*dt;arr[i*3]+=v.x*dt;arr[i*3+1]+=v.y*dt;arr[i*3+2]+=v.z*dt}fw.points.geometry.attributes.position.needsUpdate=true;fw.points.material.opacity=Math.max(0,1-fw.age/fw.life);if(fw.age>=fw.life){finalArrivalGroup.remove(fw.points);fw.points.geometry.dispose();fw.points.material.dispose();finalFireworks.splice(j,1)}}}
```

**Explicação:** Declara função reutilizável.

### Linha 2623

```text
function clearFinalPetals(){for(const p of finalPetals){try{if(finalArrivalGroup)finalArrivalGroup.remove(p.mesh);p.mesh.geometry.dispose();p.mesh.material.dispose()}catch(_){}}finalPetals=[]}
```

**Explicação:** Declara função reutilizável.

### Linha 2624

```text
function spawnFinalPetal(){
```

**Explicação:** Declara função reutilizável.

### Linha 2625

```text
 if(!finalArrivalGroup||!finalArrivalGroup.visible)return;
```

**Explicação:** Executa condicionalmente.

### Linha 2626

```text
 const colors=[0xe94f72,0xff8099,0xf6a6b7,0xc9365d],mat=new THREE.MeshBasicMaterial({color:colors[Math.floor(Math.random()*colors.length)],side:THREE.DoubleSide,transparent:true,opacity:.88,depthWrite:false});
```

**Explicação:** Declara constante JavaScript.

### Linha 2627

```text
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(.12+Math.random()*.08,.065+Math.random()*.045),mat);
```

**Explicação:** Declara constante JavaScript.

### Linha 2628

```text
 mesh.position.set((Math.random()-.5)*3.2,3.0+Math.random()*3.2,-3.3-Math.random()*1.9);mesh.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);finalArrivalGroup.add(mesh);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2629

```text
 finalPetals.push({mesh,vy:.28+Math.random()*.32,drift:(Math.random()-.5)*.30,spin:(Math.random()-.5)*2.2,phase:Math.random()*6.28})
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2630

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2631

```text
function updateFinalPetals(dt){
```

**Explicação:** Declara função reutilizável.

### Linha 2632

```text
 finalPetalTimer-=dt;if(finalSceneClock>1.55&&finalPetalTimer<=0&&finalPetals.length<44){spawnFinalPetal();finalPetalTimer=.10+Math.random()*.16}
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 2633

```text
 const t=performance.now()*.001;
```

**Explicação:** Declara constante JavaScript.

### Linha 2634

```text
 for(let i=finalPetals.length-1;i>=0;i--){const p=finalPetals[i],m=p.mesh;m.position.y-=p.vy*dt;m.position.x+=(p.drift+Math.sin(t*1.15+p.phase)*.11)*dt;m.rotation.x+=p.spin*dt;m.rotation.z+=p.spin*.65*dt;if(m.position.y<.10){finalArrivalGroup.remove(m);m.geometry.dispose();m.material.dispose();finalPetals.splice(i,1)}}
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 2635

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2636

```text
function hideFamilyScene(){const _pf=$('portalFx');if(_pf)_pf.classList.remove('show');finalFamilyMode=false;finalFamilyPhase='';finalSceneClock=0;clearFinalFireworks();clearFinalPetals();finalChimePlayed=false;if(finalArrivalGroup)finalArrivalGroup.visible=false;if(UI.finalVictory)UI.finalVictory.classList.remove('show');if(UI.arrivalBanner)UI.arrivalBanner.classList.remove('show');if(wifeRoot)wifeRoot.visible=false;if(lyraRoot&&!started)lyraRoot.visible=false;hunters.forEach(h=>{h.root.visible=false;if(h.action)h.action.paused=false})}
```

**Explicação:** Declara função reutilizável.

### Linha 2637

```text
async function showFamilyScene(phase='final'){
```

**Explicação:** Declara função assíncrona.

### Linha 2638

```text
 finalFamilyMode=true;finalFamilyPhase=phase;finalSceneClock=0;finalFireworkTimer=.55;finalPetalTimer=.10;finalChimePlayed=false;if(phase==='j1final')j1KidnapTriggered=false;
```

**Explicação:** Controla a cena cinematográfica, painel compacto ou o momento do sequestro no final.

### Linha 2639

```text
 if(!lyraRoot){try{await loadLyra()}catch(err){console.warn('LYRA 3D NÃO CARREGOU NA CENA FINAL',err)}}
```

**Explicação:** Executa condicionalmente.

### Linha 2640

```text
 try{await loadWife()}catch(err){console.warn('ESPOSA 3D NÃO CARREGOU',err)}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2641

```text
 const finish=ensureFinalArrivalSet();finish.visible=true;if(UI.arrivalBanner)UI.arrivalBanner.classList.add('show');huntersVisible=false;
```

**Explicação:** Declara constante JavaScript.

### Linha 2642

```text
 // A linha de chegada está em z=-2.05. A câmera olha do lado externo para a área segura.
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 2643

```text
 if(phase==='j1final'){
```

**Explicação:** Executa condicionalmente.

### Linha 2644

```text
   // Jornada 1: mesma linguagem cinematográfica do final da Jornada 2, preservando o gancho do sequestro.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2645

```text
   // Varek chega à fronteira e reencontra esposa e Lyra no lado seguro; caçadores ficam exaustos do lado de fora.
```

**Explicação:** Controla Lyra.

### Linha 2646

```text
   if(heroRoot){heroRoot.visible=true;heroRoot.position.set(-.28,0,2.88);heroRoot.rotation.set(0,Math.PI+(flipHero?Math.PI:0),0);playHero('Walking',.10);if(currentAction)currentAction.timeScale=.78}
```

**Explicação:** Executa condicionalmente.

### Linha 2647

```text
   if(lyraRoot){lyraRoot.visible=true;lyraRoot.position.set(.72,0,-4.28);lyraRoot.rotation.set(0,0,0);forceLyraRun();if(lyraAction){lyraAction.paused=true;lyraAction.time=0}}
```

**Explicação:** Executa condicionalmente.

### Linha 2648

```text
   if(wifeRoot){wifeRoot.visible=true;wifeRoot.position.set(-.42,0,-4.48);wifeRoot.rotation.set(0,0,0)}
```

**Explicação:** Executa condicionalmente.

### Linha 2649

```text
   const hx=[-3.05,.15,3.05],hz=[1.28,1.58,1.30];hunters.forEach((h,i)=>{h.root.visible=true;h.root.position.set(hx[i],-.06,hz[i]);h.root.rotation.set(-.24,Math.PI,(i-1)*.10);if(h.action){h.action.paused=true;try{h.action.time=.38+i*.09}catch(_){}}});
```

**Explicação:** Declara constante JavaScript.

### Linha 2650

```text
   camera.position.set(0,3.75,9.2);camera.lookAt(0,1.42,-2.48);return
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 2651

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2652

```text
 // Jornada 2: Varek e Lyra chegam juntos. Nenhum caçador aparece na cena final.
```

**Explicação:** Controla Lyra.

### Linha 2653

```text
 hunters.forEach(h=>{h.root.visible=false;if(h.action)h.action.paused=true});
```

**Explicação:** Controla caçadores.

### Linha 2654

```text
 if(heroRoot){heroRoot.position.set(-.44,0,2.85);heroRoot.rotation.set(0,Math.PI+(flipHero?Math.PI:0),0);playHero('Walking',.10);if(currentAction)currentAction.timeScale=.82}
```

**Explicação:** Executa condicionalmente.

### Linha 2655

```text
 if(lyraRoot){lyraRoot.visible=true;lyraRoot.position.set(.48,0,2.62);lyraRoot.rotation.set(0,Math.PI,0);forceLyraRun();if(lyraAction)lyraAction.timeScale=.42}
```

**Explicação:** Executa condicionalmente.

### Linha 2656

```text
 if(wifeRoot){wifeRoot.visible=true;wifeRoot.position.set(.02,0,-4.55);wifeRoot.rotation.set(0,0,0)}
```

**Explicação:** Executa condicionalmente.

### Linha 2657

```text
 camera.position.set(0,3.75,9.2);camera.lookAt(0,1.42,-2.48)
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 2658

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2659

```text
async function showFinalArrival(result,isTest=false){
```

**Explicação:** Declara função assíncrona.

### Linha 2660

```text
 UI.journeyEndPanel.classList.remove('show');
```

**Explicação:** Controla Jornada 1/2 e progressão.

### Linha 2661

```text
 const ey=UI.finalVictory?.querySelector('.ey');if(ey)ey.textContent='MAX HEALMS • FIM DA JORNADA 2';
```

**Explicação:** Declara constante JavaScript.

### Linha 2662

```text
 if($('finalFamilyTitle'))$('finalFamilyTitle').textContent=gt('family');
```

**Explicação:** Executa condicionalmente.

### Linha 2663

```text
 const replay=$('finalReplay'),menu=$('finalMenu');
```

**Explicação:** Declara constante JavaScript.

### Linha 2664

```text
 if(replay){replay.textContent=isTest?'↻ REVER FINAL':'↻ REJOGAR JORNADA 2';replay.onclick=isTest?(()=>void startFinalSceneTest('j2final')):(()=>{hideFamilyScene();UI.finalVictory?.classList.remove('show');requestJourneyStart(2)})}
```

**Explicação:** Executa condicionalmente.

### Linha 2665

```text
 if(menu){menu.textContent=isTest?'🧪 VOLTAR AOS CENÁRIOS':'☰ MENU PRINCIPAL';menu.onclick=isTest?(()=>returnToScenarioHub()):(()=>{hideFamilyScene();backMenu()})}if(!isTest){SAVE.journey2Unlocked=true;SAVE.journey2Completed=true;SAVE.j2Checkpoint=0;saveState();refreshJourneyMenu()}
```

**Explicação:** Executa condicionalmente.

### Linha 2666

```text
 playFinalTheme();await showFamilyScene('final');
```

**Explicação:** Controla a cena cinematográfica, painel compacto ou o momento do sequestro no final.

### Linha 2667

```text
 if(UI.finalEndingText)UI.finalEndingText.textContent='Varek e Lyra cruzaram juntos a linha de chegada e alcançaram a fronteira segura. A esposa os espera do outro lado. Nenhum caçador consegue chegar até eles.';
```

**Explicação:** Executa condicionalmente.

### Linha 2668

```text
 if(UI.finalPlacement)UI.finalPlacement.textContent='🏆 '+gt('localPlacement')+' #'+Math.max(1,result.rank||1);
```

**Explicação:** Executa condicionalmente.

### Linha 2669

```text
 if(UI.finalResultLine){const eco=result.economy||{},ma=sessionMonetizationAnalysis(result,false);UI.finalResultLine.textContent=gt('time')+' '+fmtTime(result.finalTime||0)+' • '+(result.score||runScore())+' '+gt('score')+' • 💎 '+gt('collected')+' '+(eco.collectedGems??runGems)+' • 💎 GASTOS '+(eco.spentGems??runSpentGems)+' • ▶ ADS '+(eco.rewardedAds??runRewardedAds)+'+'+(eco.interstitialAds??runInterstitialAds)+' • RECEITA SIM. '+brl(ma.adEstimate)+(isTest?' • MODO TESTE':'')}
```

**Explicação:** Executa condicionalmente.

### Linha 2670

```text
 if(UI.finalUnlockLine)UI.finalUnlockLine.textContent=isTest?'TEST':'✓ '+gt('j2')+' • '+gt('completed');
```

**Explicação:** Executa condicionalmente.

### Linha 2671

```text
 setTimeout(()=>{if(finalFamilyMode&&finalFamilyPhase==='final'){playSFX('finalChime');if(UI.finalVictory)UI.finalVictory.classList.add('show')}},2850)
```

**Explicação:** Controla a cena cinematográfica, painel compacto ou o momento do sequestro no final.

### Linha 2672

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2673

```text
function updateFamilyScene(dt){
```

**Explicação:** Declara função reutilizável.

### Linha 2674

```text
 if(!finalFamilyMode)return;finalSceneClock+=dt;if(lyraMixer)lyraMixer.update(dt*.20);if(mixer)mixer.update(dt*.18);const t=performance.now()*.001;
```

**Explicação:** Executa condicionalmente.

### Linha 2675

```text
 if(finalFamilyPhase==='j1final'){
```

**Explicação:** Executa condicionalmente.

### Linha 2676

```text
   // Reencontro permanece visível com o painel compacto. O sequestro só começa quando o jogador inicia a Jornada 2.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2677

```text
   const visualClock=j1KidnapTriggered?finalSceneClock:Math.min(finalSceneClock,2.44);
```

**Explicação:** Declara constante JavaScript.

### Linha 2678

```text
   const p=Math.min(1,visualClock/2.45),ease=1-Math.pow(1-p,3);
```

**Explicação:** Declara constante JavaScript.

### Linha 2679

```text
   if(heroRoot){heroRoot.position.z=2.75+(-1.48-2.75)*ease;heroRoot.position.x=0;heroRoot.rotation.y=Math.PI+(flipHero?Math.PI:0);heroRoot.rotation.z=Math.sin(t*.85)*.006;if(p>=.96&&currentAction){currentAction.timeScale=Math.max(.02,.72*(1-p));if(p>=.995)currentAction.paused=true}}
```

**Explicação:** Executa condicionalmente.

### Linha 2680

```text
   if(wifeRoot){wifeRoot.visible=true;wifeRoot.position.set(-.78,0,-4.15);wifeRoot.rotation.set(0,0,0)}
```

**Explicação:** Executa condicionalmente.

### Linha 2681

```text
   const serya=hunters[2];
```

**Explicação:** Declara constante JavaScript.

### Linha 2682

```text
   hunters.forEach((h,i)=>{h.root.visible=true;if(i!==2){h.root.position.y=-.04+Math.sin(t*.68+i)*.008;h.root.position.z=[1.30,1.62,1.34][i];h.root.position.x=[-3.0,0,3.0][i]}});
```

**Explicação:** Controla caçadores.

### Linha 2683

```text
   if(!j1KidnapTriggered||finalSceneClock<2.45){
```

**Explicação:** Executa condicionalmente.

### Linha 2684

```text
     if(lyraRoot){lyraRoot.visible=true;lyraRoot.position.set(.92,0,-4.05);lyraRoot.rotation.set(0,0,0)}
```

**Explicação:** Executa condicionalmente.

### Linha 2685

```text
     if(serya){serya.root.position.set(3.0,-.04,1.34)}
```

**Explicação:** Executa condicionalmente.

### Linha 2686

```text
   }else{
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2687

```text
     const kp=Math.min(1,(finalSceneClock-2.45)/2.20),ke=1-Math.pow(1-kp,2);
```

**Explicação:** Declara constante JavaScript.

### Linha 2688

```text
     if(serya){serya.root.visible=true;serya.root.position.set(3.0+(1.02-3.0)*Math.min(1,ke*1.45),-.04,1.34+(-3.55-1.34)*Math.min(1,ke*1.45));serya.root.rotation.y=Math.PI}
```

**Explicação:** Executa condicionalmente.

### Linha 2689

```text
     if(lyraRoot){lyraRoot.visible=kp<.96;lyraRoot.position.set(.92+(1.10-.92)*ke,0,-4.05+(-5.55+4.05)*Math.max(0,(kp-.48)/.52));lyraRoot.rotation.y=Math.PI}
```

**Explicação:** Executa condicionalmente.

### Linha 2690

```text
     if(kp>.48&&serya){serya.root.position.z=-3.55+(-5.70+3.55)*((kp-.48)/.52)}
```

**Explicação:** Executa condicionalmente.

### Linha 2691

```text
     const pf=$('portalFx');if(pf){pf.classList.toggle('show',kp>.52&&kp<.98);const pl=$('portalLabel');if(pl)pl.innerHTML='PORTAL<small>LYRA FOI SEQUESTRADA</small>'}
```

**Explicação:** Declara constante JavaScript.

### Linha 2692

```text
     if(kp>=.96){if(lyraRoot)lyraRoot.visible=false;if(serya)serya.root.visible=false}
```

**Explicação:** Executa condicionalmente.

### Linha 2693

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2694

```text
   camera.position.x=Math.sin(t*.18)*.06;camera.lookAt(0,1.34,-2.35);return
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 2695

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2696

```text
 if(finalFamilyPhase==='final'){
```

**Explicação:** Executa condicionalmente.

### Linha 2697

```text
   const p=Math.min(1,finalSceneClock/2.65),ease=1-Math.pow(1-p,3);
```

**Explicação:** Declara constante JavaScript.

### Linha 2698

```text
   if(heroRoot){heroRoot.position.z=2.85+(-3.55-2.85)*ease;heroRoot.position.x=-.44+ease*.10;heroRoot.rotation.z=Math.sin(t*.9)*.008;if(p>=.99&&currentAction)currentAction.paused=true}
```

**Explicação:** Executa condicionalmente.

### Linha 2699

```text
   if(lyraRoot){lyraRoot.position.z=2.62+(-3.45-2.62)*ease;lyraRoot.position.x=.48-ease*.08;lyraRoot.rotation.z=Math.sin(t*1.1)*.010;if(p>=.99&&lyraAction){lyraAction.timeScale=.06;lyraAction.paused=true}}
```

**Explicação:** Executa condicionalmente.

### Linha 2700

```text
   if(wifeRoot){wifeRoot.visible=true;wifeRoot.position.z=-4.55;wifeRoot.position.x=.02;wifeRoot.rotation.y=0}
```

**Explicação:** Executa condicionalmente.

### Linha 2701

```text
   hunters.forEach(h=>h.root.visible=false);
```

**Explicação:** Controla caçadores.

### Linha 2702

```text
   updateFinalFireworks(dt);updateFinalPetals(dt);camera.position.x=Math.sin(t*.20)*.09;camera.lookAt(0,1.40,-2.65);return
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 2703

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2704

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2705

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2706

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2707

```text
function playLyra(name,fade=.10){if(!lyraRoot||!lyraActions[name])return;const next=lyraActions[name];if(lyraAction===next&&lyraActionName===name)return;if(lyraAction)lyraAction.fadeOut(fade);next.reset().fadeIn(fade).play();next.setLoop(THREE.LoopRepeat,Infinity);lyraAction=next;lyraActionName=name}
```

**Explicação:** Declara função reutilizável.

### Linha 2708

```text
function setLyraJourneyState(){const active=!!(lyraRoot&&started&&currentJourney===2&&!journeyRunFinished);if(lyraRoot)lyraRoot.visible=active;const badge=$('lyraBadge');if(badge)badge.classList.toggle('show',active)}
```

**Explicação:** Declara função reutilizável.

### Linha 2709

```text
function updateLyra(dt){
```

**Explicação:** Declara função reutilizável.

### Linha 2710

```text
 if(!lyraRoot)return;
```

**Explicação:** Executa condicionalmente.

### Linha 2711

```text
 if(!started||currentJourney!==2||journeyRunFinished||shelterActive||shelterChoiceOpen){lyraRoot.visible=false;if(tobogganLyraCart)tobogganLyraCart.visible=false;const badge=$('lyraBadge');if(badge)badge.classList.remove('show');return}
```

**Explicação:** Executa condicionalmente.

### Linha 2712

```text
 lyraRoot.visible=true;const badge=$('lyraBadge');if(badge)badge.classList.add('show');const side=lane>1.35?-1.05:1.05;
```

**Explicação:** Controla Lyra.

### Linha 2713

```text
 if(tobogganActive){
```

**Explicação:** Executa condicionalmente.

### Linha 2714

```text
  if(tobogganLyraCart)tobogganLyraCart.visible=false;if(lyraActionName!=='river_seated')playLyraTobogganPose();syncTobogganRiders();return
```

**Explicação:** Executa condicionalmente.

### Linha 2715

```text
 }else{
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2716

```text
  const z=-2.7,baseLane=LANE_X[0]+lane*2.25;lyraRoot.position.x+=(baseLane+side-lyraRoot.position.x)*Math.min(1,dt*6.5);lyraRoot.position.y=kharvorLayerY;lyraRoot.position.z=z;lyraRoot.rotation.y=Math.PI+(flipHero?Math.PI:0);lyraRoot.rotation.z=(targetLane-lane)*-.07;lyraRoot.rotation.x=0;ensureLyraRun();if(lyraAction)lyraAction.timeScale=Math.min(1.18,.94+(speed-RUN_SPEED_BASE)*.009);if(lyraMixer)lyraMixer.update(dt)
```

**Explicação:** Declara constante JavaScript.

### Linha 2717

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2718

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2719

```text
function showDescentWarning(text,ms=2200){const el=$('descentWarning');if(!el)return;el.textContent=text;el.classList.add('show');clearTimeout(showDescentWarning._t);showDescentWarning._t=setTimeout(()=>el.classList.remove('show'),ms)}
```

**Explicação:** Declara função reutilizável.

### Linha 2720

```text
function realmTargetDistance(){return endlessMode?ENDLESS_REALM_DISTANCE:(currentJourney===2?REALM_DISTANCE_J2:REALM_DISTANCE_J1)}
```

**Explicação:** Declara função reutilizável.

### Linha 2721

```text
function setReviveStatus(text='',good=false){const el=$('reviveStatus');if(!el)return;el.textContent=text;el.className='reviveStatus'+(good?' good':'')}
```

**Explicação:** Declara função reutilizável.

### Linha 2722

```text
function updateReviveOffer(){const seq=$('reviveSequence'),btns=[$('revive1'),$('revive2'),$('revive3')],ad=$('reviveAd');btns.forEach(b=>{if(b)b.style.display='none'});setReviveStatus('');updateCommerceUI();if(ad){const left=Math.max(0,MAX_REWARDED_CONTINUES_PER_RUN-rewardedContinueCount);ad.style.display='inline-flex';ad.disabled=left<=0||rewardedAdRunning;ad.textContent=left<=0?'✓ 2 '+gt('ads'):'▶ '+gt('ad')+' '+(rewardedContinueCount+1)+'/'+MAX_REWARDED_CONTINUES_PER_RUN+' • +1 '+gt('life')}if(reviveStep>=REVIVE_SEQUENCE.length){if(seq)seq.textContent=gt('paidLimit');if(UI.reviveText)UI.reviveText.textContent=(lastDeathMessage||gt('runEnded'));return}const offer=REVIVE_SEQUENCE[reviveStep],idx=offer.lives-1,btn=btns[idx];if(btn){btn.style.display='inline-flex';btn.textContent='+'+offer.lives+' '+(offer.lives===1?gt('life'):gt('livesWord'))+' • 💎 '+offer.price}if(seq)seq.textContent=gt('continue')+' '+(reviveStep+1)+'/'+REVIVE_SEQUENCE.length+' • +'+offer.lives+' '+(offer.lives===1?gt('life'):gt('livesWord'))+' • 💎 '+offer.price+' • REWARDED '+rewardedContinueCount+'/'+MAX_REWARDED_CONTINUES_PER_RUN}
```

**Explicação:** Declara função reutilizável.

### Linha 2723

```text
async function portalToRealm(nextIndex){if(portalTransitioning||realmLoading||journeyRunFinished)return;portalTransitioning=true;paused=true;huntersVisible=false;hunters.forEach(h=>{if(h.action)h.action.paused=true});const fx=$('portalFx'),label=$('portalLabel'),cfg=REALMS[nextIndex];if(cfg&&cfg.id==='celestial')playThemeMoment(14,4800,.090);if(label)label.innerHTML=gt('portal')+'<small>'+cfg.name+'</small>';if(fx)fx.classList.add('show');beep(310,.16,.02,'sine');await new Promise(r=>setTimeout(r,720));clearItems();await loadRealm(nextIndex);await new Promise(r=>setTimeout(r,420));if(fx)fx.classList.remove('show');hunters.forEach(h=>{if(h.action)h.action.paused=false});paused=false;portalTransitioning=false;if(currentJourney===2)forceLyraRun();clock.getDelta();toast(gt('portalCrossed')+' • '+cfg.short)}
```

**Explicação:** Declara função assíncrona.

### Linha 2724

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2725

```text
async function loadHunters(){
```

**Explicação:** Declara função assíncrona.

### Linha 2726

```text
 if(hunters.length)return hunters;if(huntersLoadPromise)return huntersLoadPromise;
```

**Explicação:** Executa condicionalmente.

### Linha 2727

```text
 huntersLoadPromise=(async()=>{
```

**Explicação:** Controla caçadores.

### Linha 2728

```text
  const defs=[{name:'Raven',laneOffset:-.34,z:5.45,tint:0xa98cff},{name:'Nyx',laneOffset:.04,z:5.92,tint:0xff6d66},{name:'Serya',laneOffset:.34,z:6.38,tint:0x6fa7ff}];
```

**Explicação:** Declara constante JavaScript.

### Linha 2729

```text
  const gltf=await parseGLB64(ASSETS.hunterRaven);hunters=[];
```

**Explicação:** Declara constante JavaScript.

### Linha 2730

```text
  for(let i=0;i<defs.length;i++){
```

**Explicação:** Atribui ou atualiza valor da lógica/interface.

### Linha 2731

```text
   const def=defs[i],root=new THREE.Group(),model=(THREE.SkeletonUtils&&THREE.SkeletonUtils.clone)?THREE.SkeletonUtils.clone(gltf.scene):gltf.scene.clone(true);setSRGB(model);
```

**Explicação:** Declara constante JavaScript.

### Linha 2732

```text
   model.traverse(n=>{if(n.isMesh&&n.material){if(Array.isArray(n.material)){n.material=n.material.map(m=>{const c=m.clone();if(c.color)c.color.multiply(new THREE.Color(def.tint));return c})}else{n.material=n.material.clone();if(n.material.color)n.material.color.multiply(new THREE.Color(def.tint))}}});
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2733

```text
   let box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3());const sc=2.15/Math.max(.001,size.y);model.scale.setScalar(sc);box=new THREE.Box3().setFromObject(model);const center=box.getCenter(new THREE.Vector3());model.position.set(-center.x,-box.min.y,-center.z);root.add(model);
```

**Explicação:** Declara variável mutável.

### Linha 2734

```text
   root.scale.set(1,1,1);root.rotation.y=Math.PI;root.position.set(LANE_X[1]+def.laneOffset*2.25,0,def.z);root.visible=false;scene.add(root);
```

**Explicação:** Controla renderização/câmera/cena 3D.

### Linha 2735

```text
   const mixerLocal=new THREE.AnimationMixer(model);const clip=(gltf.animations||[]).find(a=>/running/i.test(a.name))||(gltf.animations||[])[0];let action=null;if(clip){action=mixerLocal.clipAction(clip);action.setLoop(THREE.LoopRepeat,Infinity);action.play();action.timeScale=1.0+i*.035}
```

**Explicação:** Declara constante JavaScript.

### Linha 2736

```text
   hunters.push({name:def.name,root,mixer:mixerLocal,action,baseLaneOffset:def.laneOffset,lanePos:1+def.laneOffset,z:def.z,targetZ:def.z,restZ:def.z,minStage:i+1,fixedScale:new THREE.Vector3(1,1,1)});
```

**Explicação:** Usa Three.js para renderização 3D.

### Linha 2737

```text
  }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2738

```text
  return hunters;
```

**Explicação:** Controla caçadores.

### Linha 2739

```text
 })();
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2740

```text
 try{return await huntersLoadPromise}finally{huntersLoadPromise=null}
```

**Explicação:** Controla caçadores.

### Linha 2741

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2742

```text
function pursuitStage(){return Math.max(0,Math.min(3,hunterStage))}
```

**Explicação:** Declara função reutilizável.

### Linha 2743

```text
function triggerHunters(){
```

**Explicação:** Declara função reutilizável.

### Linha 2744

```text
 if(tobogganActive||gameOver)return;if(!hunters.length){loadHunters().then(()=>{if(started&&!gameOver&&!tobogganActive)triggerHunters()}).catch(err=>console.warn('CAÇADORAS LAZY LOAD',err));return}huntersVisible=true;huntersTimer=5.0;const stage=pursuitStage(),base=stage>=3?2.75:stage===2?3.45:4.15;
```

**Explicação:** Executa condicionalmente.

### Linha 2745

```text
 hunters.forEach((h,i)=>{if(h.root&&h.fixedScale)h.root.scale.copy(h.fixedScale);const active=h.minStage<=stage;h.root.visible=active;if(h.action)h.action.paused=false;if(active){h.targetZ=base+i*.42;h.z=Math.min(h.z,h.targetZ+1.0)}else{h.z=h.restZ;h.targetZ=h.restZ;h.lanePos=1+h.baseLaneOffset}});
```

**Explicação:** Controla caçadores.

### Linha 2746

```text
 const names=hunters.filter(h=>h.minStage<=stage).map(h=>h.name.toUpperCase()).join(' + ');toast(names+' NA PERSEGUIÇÃO');
```

**Explicação:** Declara constante JavaScript.

### Linha 2747

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2748

```text
function updateHunters(dt){
```

**Explicação:** Declara função reutilizável.

### Linha 2749

```text
 if(!hunters.length)return;if(!started||gameOver||tobogganActive){if(!gameOver)hunters.forEach(h=>{h.root.visible=false;if(h.mixer)h.mixer.update(dt*.20)});return}
```

**Explicação:** Executa condicionalmente.

### Linha 2750

```text
 const stage=pursuitStage();if(huntersVisible){huntersTimer-=dt;if(huntersTimer<=0)hunters.forEach(h=>{if(h.minStage<=stage)h.targetZ=7.9+(h.minStage-1)*.48})}
```

**Explicação:** Declara constante JavaScript.

