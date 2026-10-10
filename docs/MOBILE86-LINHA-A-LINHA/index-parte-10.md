# index.html — Parte 10

Linhas **2251 a 2500** da MOBILE86.

### Linha 2251

```text
     if(MOBILE_RUNNER){
```

**Explicação:** Executa condicionalmente.

### Linha 2252

```text
       const rail=new THREE.Mesh(guardRailGeo,railWoodMat);rail.position.set(side*4.49,.92,0);rail.castShadow=false;rail.receiveShadow=false;seg.add(rail);
```

**Explicação:** Declara constante JavaScript.

### Linha 2253

```text
     }else{
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2254

```text
       for(const zOff of [-4.5,-3,-1.5,0,1.5,3,4.5]){
```

**Explicação:** Inicia repetição.

### Linha 2255

```text
         const post=new THREE.Mesh(guardPostGeo,railStoneMat);post.position.set(side*4.54,.98,zOff);post.castShadow=shadowsOn;post.receiveShadow=true;seg.add(post);
```

**Explicação:** Declara constante JavaScript.

### Linha 2256

```text
         const brace=new THREE.Mesh(braceGeo,railWoodMat);brace.position.set(side*4.44,.71,zOff);brace.rotation.z=side*(Math.PI/12);brace.castShadow=shadowsOn;brace.receiveShadow=true;seg.add(brace);
```

**Explicação:** Declara constante JavaScript.

### Linha 2257

```text
       }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2258

```text
       for(const y of [.72,1.10]){const rail=new THREE.Mesh(guardRailGeo,railWoodMat);rail.position.set(side*4.49,y,0);rail.castShadow=shadowsOn;rail.receiveShadow=true;seg.add(rail)}
```

**Explicação:** Inicia repetição.

### Linha 2259

```text
       if(s%3===0)for(const zOff of [-4.65,4.65]){const buttress=new THREE.Mesh(buttressGeo,railStoneMat);buttress.position.set(side*4.30,.92,zOff);buttress.castShadow=shadowsOn;buttress.receiveShadow=true;seg.add(buttress)}
```

**Explicação:** Executa condicionalmente.

### Linha 2260

```text
     }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2261

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2262

```text
   // PLAYER 0.38: Ponte Viva. Camada visual reforçada, tremor em pulsos e dano cenográfico fora das faixas jogáveis.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2263

```text
   const bridgeDetail=new THREE.Group();bridgeDetail.name='MR_OPENING_SWING_BRIDGE';bridgeDetail.visible=false;
```

**Explicação:** Declara constante JavaScript.

### Linha 2264

```text
   if(MOBILE_RUNNER){
```

**Explicação:** Executa condicionalmente.

### Linha 2265

```text
     const deckBase=new THREE.Mesh(bridgeDeckBaseGeo,bridgeDeckBaseMat);deckBase.position.set(0,.092,0);deckBase.receiveShadow=false;bridgeDetail.add(deckBase);
```

**Explicação:** Declara constante JavaScript.

### Linha 2266

```text
     if(cfg.id!=='vpath'){
```

**Explicação:** Executa condicionalmente.

### Linha 2267

```text
       const seamMat=new THREE.MeshBasicMaterial({color:0x211811});
```

**Explicação:** Declara constante JavaScript.

### Linha 2268

```text
       for(const zLine of [-3.2,-1.1,1.1,3.2]){const seam=new THREE.Mesh(new THREE.BoxGeometry(8.02,.012,.045),seamMat);seam.position.set(0,.134,zLine);bridgeDetail.add(seam)}
```

**Explicação:** Inicia repetição.

### Linha 2269

```text
     }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2270

```text
   }else{
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2271

```text
     for(let pz=-4.75,i=0,step=.68;pz<=4.75;pz+=step,i++){const plank=new THREE.Mesh(new THREE.BoxGeometry(8.15,.10,.54),i%2?bridgeDeckMat:bridgeDeckAltMat);plank.position.set(0,.108,pz);plank.rotation.y=(i%3-1)*.004;plank.userData.bridgePlank=true;plank.userData.bridgePhase=i*.43+s*.17;plank.castShadow=shadowsOn;plank.receiveShadow=true;bridgeDetail.add(plank)}
```

**Explicação:** Inicia repetição.

### Linha 2272

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2273

```text
   for(const side of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 2274

```text
     const loose=new THREE.Mesh(new THREE.BoxGeometry(.72,.12,1.20),side<0?bridgeDeckAltMat:bridgeDeckMat);loose.position.set(side*3.72,.18,(s%2?1.9:-2.15));loose.userData.bridgeLoose=true;loose.userData.bridgeSide=side;loose.userData.baseY=.18;loose.castShadow=shadowsOn;loose.receiveShadow=true;bridgeDetail.add(loose);
```

**Explicação:** Declara constante JavaScript.

### Linha 2275

```text
     for(const zOff of (MOBILE_RUNNER?[-4.4,0,4.4]:[-4.7,-3.15,-1.6,0,1.6,3.15,4.7])){const post=new THREE.Mesh(new THREE.CylinderGeometry(.065,.085,1.38,6),bridgePostMat);post.position.set(side*4.28,.79,zOff);post.castShadow=shadowsOn;bridgeDetail.add(post)}
```

**Explicação:** Inicia repetição.

### Linha 2276

```text
     for(const y of [.72,1.10]){const rope=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,10.0,6),bridgeRopeMat);rope.position.set(side*4.28,y,0);rope.rotation.x=Math.PI/2;rope.castShadow=shadowsOn;bridgeDetail.add(rope)}
```

**Explicação:** Inicia repetição.

### Linha 2277

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2278

```text
   seg.add(bridgeDetail);bridgeDetailGroups.push(bridgeDetail);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2279

```text
   // MOBILE38: piso contínuo no celular. Em Terras dos Dragões as faixas usam quase o mesmo tom e os segmentos se sobrepõem levemente para esconder emendas.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2280

```text
   if(!MOBILE_RUNNER){const seamMat=new THREE.MeshStandardMaterial({color:0x5f5b4f,roughness:1});for(const x of [-1.125,1.125])for(let rz=0;rz<4;rz++){const seam=new THREE.Mesh(seamGeo,seamMat);seam.position.set(x,.015,(rz-1.5)*2.62);seg.add(seam)}}
```

**Explicação:** Executa condicionalmente.

### Linha 2281

```text
   // MOBILE38: identidade visual no mobile vem de tons foscos da pista, background, clima e laterais.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2282

```text
   // Sem rachaduras/listras repetidas no chão para reduzir fadiga visual e draw calls.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2283

```text
   if(!MOBILE_RUNNER){
```

**Explicação:** Executa condicionalmente.

### Linha 2284

```text
     if(cfg.id==='forest'){
```

**Explicação:** Executa condicionalmente.

### Linha 2285

```text
       for(let rz=0;rz<4;rz++){
```

**Explicação:** Inicia repetição.

### Linha 2286

```text
         const trail=new THREE.Mesh(new THREE.BoxGeometry(6.3,.025,2.38),new THREE.MeshStandardMaterial({color:0x74684f,roughness:1}));trail.position.set(0,-.005,(rz-1.5)*2.62);seg.add(trail);
```

**Explicação:** Declara constante JavaScript.

### Linha 2287

```text
         if((s+rz)%2===0){const root=new THREE.Mesh(new THREE.CylinderGeometry(.06,.08,1.45,6),new THREE.MeshStandardMaterial({color:0x5a4630,roughness:1}));root.rotation.z=Math.PI/2;root.rotation.y=.38;root.position.set((rz%2?1:-1)*1.7,.06,(rz-1.5)*2.62+.25);seg.add(root)}
```

**Explicação:** Executa condicionalmente.

### Linha 2288

```text
       }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2289

```text
     }else if(cfg.id==='ember'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2290

```text
       for(let rz=0;rz<4;rz++){
```

**Explicação:** Inicia repetição.

### Linha 2291

```text
         const glowMat=new THREE.MeshBasicMaterial({color:0xff7e2f,transparent:true,opacity:.56});
```

**Explicação:** Declara constante JavaScript.

### Linha 2292

```text
         for(const x of [-1.12,1.12]){const crack=new THREE.Mesh(new THREE.BoxGeometry(.18,.012,2.10),glowMat);crack.position.set(x,.026,(rz-1.5)*2.62);seg.add(crack)}
```

**Explicação:** Inicia repetição.

### Linha 2293

```text
       }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2294

```text
     }else if(cfg.id==='vruins'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2295

```text
       for(let rz=0;rz<4;rz++){const wet=new THREE.Mesh(new THREE.BoxGeometry(6.0,.015,1.18),new THREE.MeshStandardMaterial({color:0x2d2624,roughness:.62,metalness:.02}));wet.position.set(0,.01,(rz-1.5)*2.62);seg.add(wet)}
```

**Explicação:** Inicia repetição.

### Linha 2296

```text
     }else if(cfg.id==='ruins'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2297

```text
       for(let rz=0;rz<4;rz++){const strip=new THREE.Mesh(new THREE.BoxGeometry(5.9,.03,2.05),new THREE.MeshStandardMaterial({color:0x857d69,roughness:1}));strip.position.set(0,.012,(rz-1.5)*2.62);seg.add(strip)}
```

**Explicação:** Inicia repetição.

### Linha 2298

```text
     }else if(cfg.id==='celestial'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2299

```text
       for(let rz=0;rz<4;rz++){const gold=new THREE.Mesh(new THREE.BoxGeometry(.16,.02,2.14),new THREE.MeshBasicMaterial({color:0xf2cf77,transparent:true,opacity:.70}));gold.position.set(0,.03,(rz-1.5)*2.62);seg.add(gold)}
```

**Explicação:** Inicia repetição.

### Linha 2300

```text
     }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2301

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2302

```text
   // MOBILE40 • revitalização mobile: poucos marcos grandes nas laterais, nunca dentro das três faixas.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2303

```text
   // No celular aparecem um pouco mais vezes para reforçar velocidade e identidade sem voltar a poluir o piso.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2304

```text
   const signatureStep=MOBILE_RUNNER?(cfg.id==='celestial'?999:4):3;
```

**Explicação:** Declara constante JavaScript.

### Linha 2305

```text
   if(s%signatureStep===0){
```

**Explicação:** Executa condicionalmente.

### Linha 2306

```text
     const signature=new THREE.Group();signature.name='MR_PONTE_ASSINATURA_'+cfg.id;
```

**Explicação:** Declara constante JavaScript.

### Linha 2307

```text
     if(cfg.id==='vruins'){
```

**Explicação:** Executa condicionalmente.

### Linha 2308

```text
       for(const side of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 2309

```text
         const tower=new THREE.Mesh(sigPillarGeo,sigStone);tower.position.set(side*6.15,2.15,0);tower.rotation.z=side*.035;signature.add(tower);
```

**Explicação:** Declara constante JavaScript.

### Linha 2310

```text
         const broken=new THREE.Mesh(sigBrokenGeo,sigDark);broken.position.set(side*6.10,4.35,(s%2?1.1:-1.0));broken.rotation.z=side*.16;signature.add(broken);
```

**Explicação:** Declara constante JavaScript.

### Linha 2311

```text
         const moss=new THREE.Mesh(new THREE.PlaneGeometry(.75,1.75),sigMoss);moss.position.set(side*5.74,2.25,(s%2?.7:-.7));moss.rotation.y=side<0?Math.PI/2:-Math.PI/2;signature.add(moss);
```

**Explicação:** Declara constante JavaScript.

### Linha 2312

```text
         addSigOrb(signature,side*5.55,3.15,(s%2?1.6:-1.5),sigColdGlow,1.15);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2313

```text
       }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2314

```text
     }else if(cfg.id==='forest'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2315

```text
       for(const side of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 2316

```text
         const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.28,.48,5.2,7),sigWood);trunk.position.set(side*6.0,2.25,0);trunk.rotation.z=side*.22;signature.add(trunk);
```

**Explicação:** Declara constante JavaScript.

### Linha 2317

```text
         for(let r=0;r<2;r++){const root=new THREE.Mesh(new THREE.CylinderGeometry(.08,.15,3.1,6),sigWood);root.position.set(side*(5.2-r*.35),1.45,(r?2.0:-2.0));root.rotation.z=side*(.72+r*.16);root.rotation.x=(r?-.18:.18);signature.add(root)}
```

**Explicação:** Inicia repetição.

### Linha 2318

```text
         for(let f=0;f<(MOBILE_RUNNER?2:4);f++)addSigOrb(signature,side*(5.05+f*.22),1.6+f*.48,-2.0+f*1.25,sigGreenGlow,.72+(f%2)*.25);
```

**Explicação:** Inicia repetição.

### Linha 2319

```text
       }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2320

```text
     }else if(cfg.id==='ruins'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2321

```text
       for(const side of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 2322

```text
         const col=new THREE.Mesh(sigPillarGeo,sigStone);col.scale.y=.92;col.position.set(side*6.0,2.0,0);signature.add(col);
```

**Explicação:** Declara constante JavaScript.

### Linha 2323

```text
         const cap=new THREE.Mesh(new THREE.BoxGeometry(1.35,.28,1.25),sigDark);cap.position.set(side*6.0,4.28,0);cap.rotation.y=.22*side;signature.add(cap);
```

**Explicação:** Declara constante JavaScript.

### Linha 2324

```text
         addSigOrb(signature,side*5.55,2.55,(s%2?1.2:-1.2),sigColdGlow,1.25);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2325

```text
       }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2326

```text
     }else if(cfg.id==='ember'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2327

```text
       for(const side of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 2328

```text
         const p=new THREE.Mesh(new THREE.ConeGeometry(.72,4.6,6),sigDark);p.position.set(side*6.05,2.15,0);p.rotation.z=side*.10;signature.add(p);
```

**Explicação:** Declara constante JavaScript.

### Linha 2329

```text
         const fissure=new THREE.Mesh(new THREE.BoxGeometry(.08,2.7,.12),sigWarmGlow);fissure.position.set(side*5.72,2.1,.12);fissure.rotation.z=side*.08;signature.add(fissure);
```

**Explicação:** Declara constante JavaScript.

### Linha 2330

```text
       }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2331

```text
     }else if(cfg.id==='celestial'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2332

```text
       // MOBILE40: Celestial limpo no celular. Sem cristais/halos externos que não estavam ornando.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2333

```text
       // A identidade fica no céu, vento e acabamento dourado da própria ponte.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2334

```text
       if(!MOBILE_RUNNER){
```

**Explicação:** Executa condicionalmente.

### Linha 2335

```text
         for(const side of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 2336

```text
           const shard=new THREE.Mesh(sigShardGeo,sigStone);shard.scale.set(1.05,2.4,.85);shard.position.set(side*6.0,2.4,0);shard.rotation.set(.16,side*.28,.12);signature.add(shard);
```

**Explicação:** Declara constante JavaScript.

### Linha 2337

```text
           const halo=new THREE.Mesh(new THREE.TorusGeometry(.62,.045,6,20),sigGoldGlow);halo.position.set(side*6.0,3.75,0);halo.rotation.x=Math.PI/2;signature.add(halo);
```

**Explicação:** Declara constante JavaScript.

### Linha 2338

```text
         }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2339

```text
       }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2340

```text
     }else if(cfg.id==='vpath'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2341

```text
       for(const side of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 2342

```text
         const spike=new THREE.Mesh(new THREE.ConeGeometry(.55,4.4,6),sigDark);spike.position.set(side*6.1,2.0,0);signature.add(spike);
```

**Explicação:** Declara constante JavaScript.

### Linha 2343

```text
         addSigOrb(signature,side*5.78,1.0,0,sigWarmGlow,1.25);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2344

```text
       }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2345

```text
     }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2346

```text
     seg.add(signature);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2347

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2348

```text
   if(cfg.id==='vruins'){
```

**Explicação:** Executa condicionalmente.

### Linha 2349

```text
     const upper=new THREE.Group();upper.name='KHARVOR_PONTE_ORIGINAL_ACIMA';upper.visible=false;
```

**Explicação:** Declara constante JavaScript.

### Linha 2350

```text
     const deck=new THREE.Mesh(khDeckGeo,khUnderMat);deck.position.y=0;deck.receiveShadow=false;upper.add(deck);
```

**Explicação:** Declara constante JavaScript.

### Linha 2351

```text
     if(MOBILE_RUNNER){
```

**Explicação:** Executa condicionalmente.

### Linha 2352

```text
       const beam=new THREE.Mesh(khBeamGeo,khBeamMat);beam.position.set(0,-.28,0);upper.add(beam)
```

**Explicação:** Declara constante JavaScript.

### Linha 2353

```text
     }else{
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2354

```text
       for(const zOff of [-3.3,0,3.3]){const beam=new THREE.Mesh(khBeamGeo,khBeamMat);beam.position.set(0,-.28,zOff);upper.add(beam)}
```

**Explicação:** Inicia repetição.

### Linha 2355

```text
       if(s%2===0)for(const x of [-4.05,4.05]){const post=new THREE.Mesh(khPostGeo,khBeamMat);post.position.set(x,-2.45,0);upper.add(post)}
```

**Explicação:** Executa condicionalmente.

### Linha 2356

```text
       for(let mi=0;mi<2;mi++){const moss=new THREE.Mesh(khMossGeo,khMossMat);moss.position.set(mi?2.3:-2.5,-.47,mi?2.5:-2.1);moss.rotation.y=mi?.18:-.22;upper.add(moss)}
```

**Explicação:** Inicia repetição.

### Linha 2357

```text
     }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2358

```text
     upper.position.y=.42;seg.add(upper);kharvorUpperBridgeGroups.push(upper)
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2359

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2360

```text
   if(cfg.id==='forest'){
```

**Explicação:** Executa condicionalmente.

### Linha 2361

```text
     const closed=new THREE.Group();closed.name='NERIS_PONTE_FECHADA_INFERIOR';closed.visible=false;
```

**Explicação:** Declara constante JavaScript.

### Linha 2362

```text
     const roof=new THREE.Mesh(new THREE.BoxGeometry(8.65,.48,10.25),frRoofMat);roof.position.y=0;closed.add(roof);
```

**Explicação:** Declara constante JavaScript.

### Linha 2363

```text
     for(const side of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 2364

```text
       const wall=new THREE.Mesh(new THREE.BoxGeometry(.52,4.25,10.25),frWallMat);wall.position.set(side*4.10,-2.0,0);closed.add(wall);
```

**Explicação:** Declara constante JavaScript.

### Linha 2365

```text
       // MOBILE44: faixa de musgo e luz quente dão profundidade sem encher o corredor.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2366

```text
       const mossStrip=new THREE.Mesh(new THREE.PlaneGeometry(4.6,1.12),frMossMat);mossStrip.position.set(side*3.82,-1.65,(s%2?1.8:-1.8));mossStrip.rotation.y=side<0?Math.PI/2:-Math.PI/2;closed.add(mossStrip);
```

**Explicação:** Declara constante JavaScript.

### Linha 2367

```text
       const lightMat=new THREE.MeshBasicMaterial({color:0xc8e59a,transparent:true,opacity:.52,depthWrite:false});
```

**Explicação:** Declara constante JavaScript.

### Linha 2368

```text
       for(const zz of [-3.6,3.6]){const lamp=new THREE.Mesh(new THREE.BoxGeometry(.05,.16,1.2),lightMat);lamp.position.set(side*3.78,-.72,zz);lamp.rotation.y=Math.PI/2;closed.add(lamp)}
```

**Explicação:** Inicia repetição.

### Linha 2369

```text
     }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2370

```text
     // Branding integrado: poucos murais, como pintura antiga do próprio reino.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2371

```text
     if(s%3===1){
```

**Explicação:** Executa condicionalmente.

### Linha 2372

```text
       const brandTex=makeNerisBrandTexture();
```

**Explicação:** Declara constante JavaScript.

### Linha 2373

```text
       if(brandTex){
```

**Explicação:** Executa condicionalmente.

### Linha 2374

```text
         const brandMat=new THREE.MeshBasicMaterial({map:brandTex,transparent:true,opacity:.92,side:THREE.DoubleSide,depthWrite:false});
```

**Explicação:** Declara constante JavaScript.

### Linha 2375

```text
         for(const side of [-1,1]){const mural=new THREE.Mesh(new THREE.PlaneGeometry(2.65,1.32),brandMat);mural.position.set(side*3.80,-2.08,0);mural.rotation.y=side<0?Math.PI/2:-Math.PI/2;closed.add(mural)}
```

**Explicação:** Inicia repetição.

### Linha 2376

```text
       }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2377

```text
     }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2378

```text
     const beamCount=MOBILE_RUNNER?2:3;
```

**Explicação:** Declara constante JavaScript.

### Linha 2379

```text
     const beamZ=MOBILE_RUNNER?[-3.4,3.4]:[-3.6,0,3.6];
```

**Explicação:** Declara constante JavaScript.

### Linha 2380

```text
     for(const zOff of beamZ){const beam=new THREE.Mesh(new THREE.BoxGeometry(8.6,.24,.32),frRootMat);beam.position.set(0,-.36,zOff);closed.add(beam)}
```

**Explicação:** Inicia repetição.

### Linha 2381

```text
     const roots=MOBILE_RUNNER?3:5;
```

**Explicação:** Declara constante JavaScript.

### Linha 2382

```text
     for(let ri=0;ri<roots;ri++){const root=new THREE.Mesh(new THREE.CylinderGeometry(.06,.10,2.25+(ri%2)*.55,6),frRootMat);root.position.set((ri%2?1:-1)*(2.55+(ri%3)*.38),-1.18,-3.3+ri*(MOBILE_RUNNER?3.2:2.0));root.rotation.z=(ri%2?1:-1)*.30;closed.add(root)}
```

**Explicação:** Inicia repetição.

### Linha 2383

```text
     seg.add(closed);forestClosedBridgeGroups.push(closed)
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2384

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2385

```text
   roadGroup.add(seg);roadSegments.push(seg)
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2386

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2387

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2388

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2389

```text
function buildDecor(){
```

**Explicação:** Declara função reutilizável.

### Linha 2390

```text
 while(decorGroup.children.length){const c=decorGroup.children.pop();disposeObject(c)}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2391

```text
 decorObjects.length=0;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2392

```text
 const cfg=REALMS[realmIndex]; if(!cfg)return;
```

**Explicação:** Declara constante JavaScript.

### Linha 2393

```text
 const addDecor=(obj,z,baseX,baseY=0)=>{obj.position.set(baseX,baseY,z);obj.userData.baseX=baseX;obj.userData.baseY=baseY;decorGroup.add(obj);decorObjects.push(obj);return obj};
```

**Explicação:** Declara constante JavaScript.

### Linha 2394

```text
 const makeMonkey=(side,phase)=>{const g=new THREE.Group();
```

**Explicação:** Declara constante JavaScript.

### Linha 2395

```text
   const vine=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,8.2,6),new THREE.MeshBasicMaterial({color:0x2f261b}));vine.position.y=1.2;g.add(vine);
```

**Explicação:** Declara constante JavaScript.

### Linha 2396

```text
   const bodyMat=new THREE.MeshBasicMaterial({color:0x231b14});
```

**Explicação:** Declara constante JavaScript.

### Linha 2397

```text
   const body=new THREE.Mesh(new THREE.SphereGeometry(.34,8,8),bodyMat);body.position.y=-1.5;g.add(body);
```

**Explicação:** Declara constante JavaScript.

### Linha 2398

```text
   const head=new THREE.Mesh(new THREE.SphereGeometry(.19,8,8),bodyMat);head.position.set(0,-1.08,.16);g.add(head);
```

**Explicação:** Declara constante JavaScript.

### Linha 2399

```text
   for(const lx of [-.22,.22]){const arm=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,1.05,5),bodyMat);arm.position.set(lx,-1.1,0);arm.rotation.z=side*(lx<0?.48:-.48);g.add(arm);const leg=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.95,5),bodyMat);leg.position.set(lx*0.8,-1.95,0);leg.rotation.z=side*(lx<0?.3:-.3);g.add(leg)}
```

**Explicação:** Inicia repetição.

### Linha 2400

```text
   g.userData.anim='vineMonkey';g.userData.phase=phase;g.userData.side=side;return g};
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2401

```text
 const makeLavaSpout=(phase)=>{const g=new THREE.Group(); const mat=new THREE.MeshBasicMaterial({color:0xff7a26,transparent:true,opacity:.78});
```

**Explicação:** Declara constante JavaScript.

### Linha 2402

```text
   for(let i=0;i<3;i++){const p=new THREE.Mesh(new THREE.ConeGeometry(.16+i*.05,1.1+i*.22,5),mat);p.position.set((i-1)*.22,.55+i*.16,0);g.add(p)}
```

**Explicação:** Inicia repetição.

### Linha 2403

```text
   g.userData.anim='lavaSpout';g.userData.phase=phase;return g};
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2404

```text
 const makeBird=(side,phase)=>{const g=new THREE.Group(); const mat=new THREE.MeshBasicMaterial({color:0x120d0b,side:THREE.DoubleSide});
```

**Explicação:** Declara constante JavaScript.

### Linha 2405

```text
   const geo=new THREE.BufferGeometry(); geo.setAttribute('position',new THREE.BufferAttribute(new Float32Array([0,0,0, side*1.2,.38,0, side*2.35,0,0]),3)); geo.computeVertexNormals();
```

**Explicação:** Declara constante JavaScript.

### Linha 2406

```text
   const wing=new THREE.Mesh(geo,mat); g.add(wing); g.userData.anim='bird'; g.userData.phase=phase; g.userData.side=side; return g};
```

**Explicação:** Declara constante JavaScript.

### Linha 2407

```text
 const makeDustBanner=(phase)=>{const g=new THREE.Group(); const mat=new THREE.MeshBasicMaterial({color:0xc4b48f,transparent:true,opacity:.25,side:THREE.DoubleSide});
```

**Explicação:** Declara constante JavaScript.

### Linha 2408

```text
   const plane=new THREE.Mesh(new THREE.PlaneGeometry(2.4,1.1),mat); plane.position.y=1.2; g.add(plane); g.userData.anim='dustBanner'; g.userData.phase=phase; return g};
```

**Explicação:** Declara constante JavaScript.

### Linha 2409

```text
 const makeRibbon=(phase)=>{const g=new THREE.Group(); const mat=new THREE.MeshBasicMaterial({color:0xf2e2a9,transparent:true,opacity:.42,side:THREE.DoubleSide});
```

**Explicação:** Declara constante JavaScript.

### Linha 2410

```text
   const plane=new THREE.Mesh(new THREE.PlaneGeometry(2.8,.32),mat); plane.position.y=2.4; g.add(plane); g.userData.anim='ribbon'; g.userData.phase=phase; return g};
```

**Explicação:** Declara constante JavaScript.

### Linha 2411

```text
 const makeFireflies=(phase,color=0xc9f5a5)=>{const g=new THREE.Group(),mat=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.72,depthWrite:false});for(let i=0;i<(MOBILE_RUNNER?3:9);i++){const o=new THREE.Mesh(new THREE.SphereGeometry(.045+(i%3)*.012,6,5),mat);o.position.set((i%3-1)*.65,.25+(i%4)*.43,(i-4)*.22);g.add(o)}g.userData.anim='fireflies';g.userData.phase=phase;return g};
```

**Explicação:** Declara constante JavaScript.

### Linha 2412

```text
 const makeMistVeil=(phase,color=0xb9d6cb)=>{const g=new THREE.Group(),mat=new THREE.MeshBasicMaterial({color,transparent:true,opacity:MOBILE_RUNNER?.045:.10,side:THREE.DoubleSide,depthWrite:false});const p=new THREE.Mesh(new THREE.PlaneGeometry(MOBILE_RUNNER?6.4:8.4,MOBILE_RUNNER?2.0:2.8),mat);p.position.y=1.4;g.add(p);g.userData.anim='mistVeil';g.userData.phase=phase;return g};
```

**Explicação:** Declara constante JavaScript.

### Linha 2413

```text
 const makeFloatingShard=(phase,color=0xe9d59b)=>{const g=new THREE.Group(),mat=new THREE.MeshStandardMaterial({color,roughness:.72,metalness:.04});const m=new THREE.Mesh(new THREE.TetrahedronGeometry(.72,0),mat);m.scale.set(.65,1.8,.65);g.add(m);g.userData.anim='floatingShard';g.userData.phase=phase;return g};
```

**Explicação:** Declara constante JavaScript.

### Linha 2414

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 2415

```text
 if(cfg.id==='forest'){
```

**Explicação:** Executa condicionalmente.

### Linha 2416

```text
   (MOBILE_RUNNER?[-22,-98]:[-16,-52,-88,-124]).forEach((z,i)=>addDecor(makeMonkey(i%2?1:-1,i*.9),z,(i%2?8.8:-8.8),7.6+(i%2)*.7));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2417

```text
   (MOBILE_RUNNER?[-72]:[-28,-74,-118]).forEach((z,i)=>addDecor(makeDustBanner(i*.7),z,i%2?7.6:-7.6,2.3));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2418

```text
   (MOBILE_RUNNER?[-46,-132]:[-38,-92,-146]).forEach((z,i)=>addDecor(makeFireflies(i*.8),z,i%2?6.4:-6.4,1.15+(i%2)*.3));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2419

```text
   if(!MOBILE_RUNNER)[-58,-132].forEach((z,i)=>addDecor(makeMistVeil(i*.9,0xbadac2),z,0,.25));
```

**Explicação:** Executa condicionalmente.

### Linha 2420

```text
 }else if(cfg.id==='ember'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2421

```text
   (MOBILE_RUNNER?[-28,-88,-142]:[-20,-58,-96,-132]).forEach((z,i)=>addDecor(makeLavaSpout(i*.8),z,i%2?7.9:-7.9,.18));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2422

```text
   if(!MOBILE_RUNNER)[-50,-118].forEach((z,i)=>addDecor(makeMistVeil(i*.9,0xd7774a),z,0,.35));
```

**Explicação:** Executa condicionalmente.

### Linha 2423

```text
 }else if(cfg.id==='vpath'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2424

```text
   (MOBILE_RUNNER?[-34,-112]:[-24,-64,-104]).forEach((z,i)=>addDecor(makeBird(i%2?1:-1,i*.6),z,i%2?9.8:-9.8,8.6));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2425

```text
   if(!MOBILE_RUNNER)[-55,-126].forEach((z,i)=>addDecor(makeMistVeil(i*.7,0xcf9b77),z,0,.6));
```

**Explicação:** Executa condicionalmente.

### Linha 2426

```text
 }else if(cfg.id==='vruins'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2427

```text
   if(!MOBILE_RUNNER)[-36,-96,-150].forEach((z,i)=>addDecor(makeMistVeil(i*.8,0xa6b7b8),z,0,.45));
```

**Explicação:** Executa condicionalmente.

### Linha 2428

```text
   (MOBILE_RUNNER?[-96]:[-62,-136]).forEach((z,i)=>addDecor(makeFireflies(i*.9,0xa8d8d1),z,i%2?6.8:-6.8,1.7));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2429

```text
 }else if(cfg.id==='ruins'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2430

```text
   (MOBILE_RUNNER?[-42,-120]:[-24,-68,-112]).forEach((z,i)=>addDecor(makeDustBanner(i*.8),z,i%2?8.6:-8.6,1.8));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2431

```text
   if(!MOBILE_RUNNER)[-46,-118].forEach((z,i)=>addDecor(makeMistVeil(i*.75,0xbddbd3),z,0,.35));
```

**Explicação:** Executa condicionalmente.

### Linha 2432

```text
   (MOBILE_RUNNER?[-94]:[-78,-148]).forEach((z,i)=>addDecor(makeFireflies(i*.8,0xaadbd1),z,i%2?6.2:-6.2,1.3));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2433

```text
 }else if(cfg.id==='celestial'){
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2434

```text
   (MOBILE_RUNNER?[-58,-138]:[-30,-72,-114]).forEach((z,i)=>addDecor(makeRibbon(i*.6),z,i%2?6.8:-6.8,3.15));
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2435

```text
   if(!MOBILE_RUNNER)[-44,-96,-148].forEach((z,i)=>addDecor(makeFloatingShard(i*.7),z,i%2?6.8:-6.8,4.0+(i%2)*.7));
```

**Explicação:** Executa condicionalmente.

### Linha 2436

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2437

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2438

```text
function buildOpeningDragon(){
```

**Explicação:** Declara função reutilizável.

### Linha 2439

```text
 if(openingDragonGroup){try{worldRoot.remove(openingDragonGroup);disposeObject(openingDragonGroup)}catch(_){}}
```

**Explicação:** Executa condicionalmente.

### Linha 2440

```text
 const mat=new THREE.MeshBasicMaterial({color:0x120d0b,side:THREE.DoubleSide,fog:true});
```

**Explicação:** Declara constante JavaScript.

### Linha 2441

```text
 const g=new THREE.Group();g.name='MR_OPENING_DRAGON';g.visible=false;
```

**Explicação:** Declara constante JavaScript.

### Linha 2442

```text
 const body=new THREE.Mesh(new THREE.SphereGeometry(.62,12,8),mat);body.scale.set(2.4,.55,.70);g.add(body);
```

**Explicação:** Declara constante JavaScript.

### Linha 2443

```text
 const neck=new THREE.Mesh(new THREE.CylinderGeometry(.22,.34,1.25,7),mat);neck.rotation.z=-1.12;neck.position.set(1.35,.23,0);g.add(neck);
```

**Explicação:** Declara constante JavaScript.

### Linha 2444

```text
 const head=new THREE.Mesh(new THREE.SphereGeometry(.34,10,7),mat);head.scale.set(1.35,.75,.82);head.position.set(1.95,.62,0);g.add(head);
```

**Explicação:** Declara constante JavaScript.

### Linha 2445

```text
 const tail=new THREE.Mesh(new THREE.ConeGeometry(.25,2.7,7),mat);tail.rotation.z=Math.PI/2;tail.position.set(-2.25,-.02,0);g.add(tail);
```

**Explicação:** Declara constante JavaScript.

### Linha 2446

```text
 const makeWing=(side)=>{const wg=new THREE.Group();const geo=new THREE.BufferGeometry();const verts=new Float32Array([0,0,0, side*3.6,1.15,-.20, side*2.2,-1.05,.20]);geo.setAttribute('position',new THREE.BufferAttribute(verts,3));geo.computeVertexNormals();const mesh=new THREE.Mesh(geo,mat);wg.add(mesh);wg.position.set(.05,.12,0);g.add(wg);return wg};
```

**Explicação:** Declara constante JavaScript.

### Linha 2447

```text
 openingDragonWingL=makeWing(1);openingDragonWingR=makeWing(-1);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2448

```text
 g.scale.set(.82,.82,.82);worldRoot.add(g);openingDragonGroup=g;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2449

```text
 const shadowMat=new THREE.MeshBasicMaterial({color:0x050505,transparent:true,opacity:.0,depthWrite:false,fog:false});
```

**Explicação:** Declara constante JavaScript.

### Linha 2450

```text
 const shadow=new THREE.Mesh(new THREE.CircleGeometry(2.15,24),shadowMat);shadow.name='MR_OPENING_DRAGON_SHADOW';shadow.rotation.x=-Math.PI/2;shadow.scale.set(2.7,.72,1);shadow.position.set(-7,.035,-16);shadow.visible=false;worldRoot.add(shadow);openingDragonShadow=shadow;
```

**Explicação:** Declara constante JavaScript.

### Linha 2451

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2452

```text
function setOpeningBridge(active){
```

**Explicação:** Declara função reutilizável.

### Linha 2453

```text
 openingBridgeActive=!!active;for(const g of bridgeDetailGroups)g.visible=openingBridgeActive;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2454

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2455

```text
function resetOpeningImpactVisuals(){
```

**Explicação:** Declara função reutilizável.

### Linha 2456

```text
 openingImpactStage=0;openingBridgePulse=0;openingBridgeDamage=0;openingCameraShake=0;openingCreakTimer=0;setOpeningBridge(false);if(openingDragonGroup)openingDragonGroup.visible=false;if(openingDragonShadow){openingDragonShadow.visible=false;if(openingDragonShadow.material)openingDragonShadow.material.opacity=0}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2457

```text
 for(const g of bridgeDetailGroups){g.position.y=0;g.rotation.z=0;for(const c of g.children){if(c.userData&&c.userData.bridgeLoose){c.position.y=c.userData.baseY||.18;c.rotation.x=0;c.rotation.z=0}}}
```

**Explicação:** Inicia repetição.

### Linha 2458

```text
 if(roadGroup)roadGroup.rotation.z=0;if(itemGroup)itemGroup.rotation.z=0;
```

**Explicação:** Executa condicionalmente.

### Linha 2459

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2460

```text
function playOpeningThunder(){
```

**Explicação:** Declara função reutilizável.

### Linha 2461

```text
 if(!soundOn)return;ensureAudio();sfxNoise(.72,.052,820,95,'lowpass');sfxTone(82,42,.62,.042,'sine',.05);haptic([10,26,12]);weatherLightningAlpha=Math.max(weatherLightningAlpha,.52);openingCameraShake=Math.max(openingCameraShake,.46);
```

**Explicação:** Executa condicionalmente.

### Linha 2462

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2463

```text
function playBridgeCreak(strength=.55,heavy=false){
```

**Explicação:** Declara função reutilizável.

### Linha 2464

```text
 if(soundOn){ensureAudio();sfxNoise(heavy?.48:.30,heavy?.050:.028,heavy?520:780,heavy?85:150,'lowpass');sfxTone(heavy?92:125,heavy?38:66,heavy?.42:.25,heavy?.032:.018,'triangle',.02)}
```

**Explicação:** Executa condicionalmente.

### Linha 2465

```text
 haptic(heavy?[28,24,44,22,62]:[12,22,18]);openingBridgePulse=Math.max(openingBridgePulse,heavy?1:.48);openingCameraShake=Math.max(openingCameraShake,heavy?.95:.42);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2466

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2467

```text
function updateOpeningImpact(dt,realmProgress){
```

**Explicação:** Declara função reutilizável.

### Linha 2468

```text
 const eligible=started&&!gameOver&&currentJourney===1&&realmIndex===0&&!tobogganAutoDone&&!tobogganActive;
```

**Explicação:** Declara constante JavaScript.

### Linha 2469

```text
 openingBridgePulse=Math.max(0,openingBridgePulse-dt*1.28);openingCameraShake=Math.max(0,openingCameraShake-dt*1.48);openingCreakTimer=Math.max(0,openingCreakTimer-dt);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2470

```text
 if(!eligible){
```

**Explicação:** Executa condicionalmente.

### Linha 2471

```text
   if(openingDragonGroup)openingDragonGroup.visible=false;if(openingDragonShadow)openingDragonShadow.visible=false;
```

**Explicação:** Executa condicionalmente.

### Linha 2472

```text
   if(openingBridgeActive)setOpeningBridge(false);
```

**Explicação:** Executa condicionalmente.

### Linha 2473

```text
   if(roadGroup)roadGroup.rotation.z+=(0-roadGroup.rotation.z)*Math.min(1,dt*4.8);if(itemGroup)itemGroup.rotation.z+=(0-itemGroup.rotation.z)*Math.min(1,dt*4.8);
```

**Explicação:** Executa condicionalmente.

### Linha 2474

```text
   return;
```

**Explicação:** Retorna/encerra a função.

### Linha 2475

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2476

```text
 if(realmProgress>145&&openingImpactStage<1){openingImpactStage=1;if(weatherMode==='drizzle')setWeatherMode('none')}
```

**Explicação:** Executa condicionalmente.

### Linha 2477

```text
 if(realmProgress>220&&openingImpactStage<2){openingImpactStage=2;toast('SOMBRA NO CÉU • ALGO ENORME PASSOU AO LONGE');openingCameraShake=Math.max(openingCameraShake,.18)}
```

**Explicação:** Executa condicionalmente.

### Linha 2478

```text
 if(openingDragonGroup){
```

**Explicação:** Executa condicionalmente.

### Linha 2479

```text
   const dragonActive=realmProgress>=210&&realmProgress<330;openingDragonGroup.visible=dragonActive;
```

**Explicação:** Declara constante JavaScript.

### Linha 2480

```text
   if(dragonActive){const q=Math.max(0,Math.min(1,(realmProgress-210)/120));openingDragonGroup.position.set(-24+48*q,13.5+Math.sin(q*Math.PI)*3.2,-56+Math.sin(q*Math.PI)*4);openingDragonGroup.rotation.y=-.10;const flap=Math.sin(performance.now()*.010)*.32;openingDragonWingL.rotation.z=.10+flap;openingDragonWingR.rotation.z=-.10-flap}
```

**Explicação:** Executa condicionalmente.

### Linha 2481

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2482

```text
 if(openingDragonShadow){const shadowActive=realmProgress>=225&&realmProgress<305;openingDragonShadow.visible=shadowActive;if(shadowActive){const q=Math.max(0,Math.min(1,(realmProgress-225)/80)),pulse=Math.sin(q*Math.PI);openingDragonShadow.position.set(-6.8+13.6*q,.035,-20+25*q);openingDragonShadow.scale.set(2.2+1.9*pulse,.62+.22*pulse,1);openingDragonShadow.material.opacity=.08+.27*pulse}else openingDragonShadow.material.opacity=0}
```

**Explicação:** Executa condicionalmente.

### Linha 2483

```text
 if(realmProgress>300&&openingImpactStage<3){openingImpactStage=3;setOpeningBridge(true);playBridgeCreak(.42,false);showDescentWarning('🌉 PONTE VIVA • MADEIRA RANGENDO • MANTENHA A TRAJETÓRIA',2600)}
```

**Explicação:** Executa condicionalmente.

### Linha 2484

```text
 if(openingBridgeActive){
```

**Explicação:** Executa condicionalmente.

### Linha 2485

```text
   const now=performance.now(),sway=Math.sin(now*.0035)*(MOBILE_RUNNER?.008:.017)+Math.sin(now*.00155)*(MOBILE_RUNNER?.0035:.008),shock=Math.sin(now*.032)*(MOBILE_RUNNER?.0055:.012)*openingBridgePulse;
```

**Explicação:** Declara constante JavaScript.

### Linha 2486

```text
   roadGroup.rotation.z+=(sway+shock-roadGroup.rotation.z)*Math.min(1,dt*6.2);itemGroup.rotation.z+=(sway*.70+shock*.42-itemGroup.rotation.z)*Math.min(1,dt*5.6);
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 2487

```text
   const heave=Math.sin(now*.010)*(MOBILE_RUNNER?.007:.018)+Math.sin(now*.026)*(MOBILE_RUNNER?.0035:.010)*openingBridgePulse;
```

**Explicação:** Declara constante JavaScript.

### Linha 2488

```text
   for(let i=0;i<bridgeDetailGroups.length;i++){const g=bridgeDetailGroups[i];g.position.y=heave+Math.sin(now*.006+i*.72)*(MOBILE_RUNNER?.003:.008);g.rotation.z=Math.sin(now*.004+i*.31)*(MOBILE_RUNNER?.0025:.006)+shock*.35;for(const c of g.children){if(c.userData&&c.userData.bridgePlank)c.rotation.x=Math.sin(now*.0065+(c.userData.bridgePhase||0))*(MOBILE_RUNNER?.0018:.005)*(1+openingBridgePulse*.7);if(c.userData&&c.userData.bridgeLoose){const d=openingBridgeDamage,side=c.userData.bridgeSide||1;c.position.y=(c.userData.baseY||.18)-d*.52;c.rotation.x=d*.34;c.rotation.z=side*d*.52}}}
```

**Explicação:** Inicia repetição.

### Linha 2489

```text
   if(openingImpactStage>=3&&openingImpactStage<7&&openingCreakTimer<=0){openingCreakTimer=2.4+Math.random()*2.1;if(Math.random()<.65)playBridgeCreak(.22,false)}
```

**Explicação:** Executa condicionalmente.

### Linha 2490

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2491

```text
 if(realmProgress>342&&openingImpactStage<4){openingImpactStage=4;playBridgeCreak(.60,false);showDescentWarning('⚠ A PONTE ESTÁ TREMENDO • NÃO PARE',2100)}
```

**Explicação:** Executa condicionalmente.

### Linha 2492

```text
 if(realmProgress>378&&openingImpactStage<5){openingImpactStage=5;openingBridgeDamage=1;playBridgeCreak(1,true);weatherLightningAlpha=Math.max(weatherLightningAlpha,.24);showDescentWarning('💥 A LATERAL CEDEU • A PONTE QUASE CAIU!',2300)}
```

**Explicação:** Executa condicionalmente.

### Linha 2493

```text
 if(realmProgress>410&&openingImpactStage<6){openingImpactStage=6;playOpeningThunder();showDescentWarning('⚡ TROVÃO SOBRE A PONTE • CONTINUE!',2100)}
```

**Explicação:** Executa condicionalmente.

### Linha 2494

```text
 if(realmProgress>465&&openingImpactStage<7){openingImpactStage=7;setWeatherMode('strongWind');openingCameraShake=Math.max(openingCameraShake,.34);showDescentWarning('🌪 VENTO FORTE • DESCIDA SE APROXIMANDO',2400)}
```

**Explicação:** Executa condicionalmente.

### Linha 2495

```text
 if(realmProgress>525&&openingImpactStage<8){openingImpactStage=8;playBridgeCreak(.72,true);showDescentWarning('🔥 DESCIDA DO RIO À FRENTE • PREPARE-SE',1900)}
```

**Explicação:** Executa condicionalmente.

### Linha 2496

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2497

```text
function addSideRuins(z,color){
```

**Explicação:** Declara função reutilizável.

### Linha 2498

```text
 // Desativado: ruínas visuais agora vêm dos GLBs reais.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2499

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 2500

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

