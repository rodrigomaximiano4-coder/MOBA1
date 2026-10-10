# index.html — Parte 13

Linhas **3001 a 3250** da MOBILE86.

### Linha 3001

```text
 const arrowR=new THREE.Mesh(new THREE.BoxGeometry(.42,.08,.08),glowMat);arrowR.position.set(.34,1.46,.14);arrowR.rotation.z=-.55;g.add(arrowR);
```

**Explicação:** Declara constante JavaScript.

### Linha 3002

```text
 const warnPlane=new THREE.Mesh(new THREE.PlaneGeometry(1.9,.58),new THREE.MeshBasicMaterial({color:0xffc75a,transparent:true,opacity:.92,side:THREE.DoubleSide}));warnPlane.position.set(0,.03,-1.35);warnPlane.rotation.x=-Math.PI/2;g.add(warnPlane);
```

**Explicação:** Declara constante JavaScript.

### Linha 3003

```text
 const warnLineMat=new THREE.MeshBasicMaterial({color:0x1d1510});for(const x of [-.70,-.28,.14,.56]){const line=new THREE.Mesh(new THREE.PlaneGeometry(.16,.54),warnLineMat);line.position.set(x,.031,-1.35);line.rotation.x=-Math.PI/2;line.rotation.z=-.65;g.add(line)}
```

**Explicação:** Declara constante JavaScript.

### Linha 3004

```text
 g.userData={kind:'tobogganHazard',type:'barreira',lane:laneI,z,hit:false,baseY:.02};tobogganGroup.add(g);tobogganHazards.push(g)
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3005

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3006

```text
function createTobogganSnake(laneI,z,mat){const pts=[];for(let i=0;i<7;i++)pts.push(new THREE.Vector3((i-3)*.24,.11,Math.sin(i*.95)*.18));const curve=new THREE.CatmullRomCurve3(pts);const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,20,.09,7,false),mat);mesh.rotation.y=Math.PI/2;const g=new THREE.Group();g.add(mesh);const head=new THREE.Mesh(new THREE.SphereGeometry(.15,8,6),mat);head.position.set(.78,.14,.06);g.add(head);g.userData={kind:'tobogganHazard',type:'cobra',lane:laneI,z,hit:false,baseY:.08};tobogganGroup.add(g);tobogganHazards.push(g)}
```

**Explicação:** Declara função reutilizável.

### Linha 3007

```text
function makeTobogganTrackTexture(mode='river'){
```

**Explicação:** Declara função reutilizável.

### Linha 3008

```text
 if(tobogganTrackTexture&&tobogganTrackMode===mode)return tobogganTrackTexture;
```

**Explicação:** Executa condicionalmente.

### Linha 3009

```text
 if(tobogganTrackTexture){try{tobogganTrackTexture.dispose()}catch(_){}}tobogganTrackTexture=null;tobogganTrackMode=mode;
```

**Explicação:** Executa condicionalmente.

### Linha 3010

```text
 const c=document.createElement('canvas');c.width=512;c.height=512;const g=c.getContext('2d');
```

**Explicação:** Declara constante JavaScript.

### Linha 3011

```text
 if(mode==='lava'){
```

**Explicação:** Executa condicionalmente.

### Linha 3012

```text
  const grd=g.createLinearGradient(0,0,0,512);grd.addColorStop(0,'#ffb12d');grd.addColorStop(.28,'#ff6a19');grd.addColorStop(.62,'#a92510');grd.addColorStop(1,'#3b0e09');g.fillStyle=grd;g.fillRect(0,0,512,512);
```

**Explicação:** Declara constante JavaScript.

### Linha 3013

```text
  g.strokeStyle='rgba(255,235,130,.78)';g.lineWidth=6;for(let y=20;y<540;y+=58){g.beginPath();for(let x=-20;x<550;x+=32){const yy=y+Math.sin((x+y)*.045)*11+(x%64?5:-5);x===-20?g.moveTo(x,yy):g.lineTo(x,yy)}g.stroke()}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3014

```text
  g.strokeStyle='rgba(30,8,6,.55)';g.lineWidth=15;for(const cx of [122,258,394]){g.beginPath();g.moveTo(cx,0);g.lineTo(cx-18,512);g.stroke()}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3015

```text
 }else{
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3016

```text
  const grd=g.createLinearGradient(0,0,0,512);grd.addColorStop(0,'#49bce5');grd.addColorStop(.45,'#258fbf');grd.addColorStop(1,'#176b99');g.fillStyle=grd;g.fillRect(0,0,512,512);
```

**Explicação:** Declara constante JavaScript.

### Linha 3017

```text
  for(let y=0;y<540;y+=44){g.strokeStyle='rgba(225,250,255,.58)';g.lineWidth=4;g.beginPath();for(let x=-30;x<550;x+=34){const yy=y+Math.sin((x+y)*.035)*8;x===-30?g.moveTo(x,yy):g.lineTo(x,yy)}g.stroke()}
```

**Explicação:** Inicia repetição.

### Linha 3018

```text
  for(const cx of [128,256,384]){g.strokeStyle='rgba(225,250,255,.20)';g.lineWidth=12;g.beginPath();g.moveTo(cx,0);g.lineTo(cx,512);g.stroke()}
```

**Explicação:** Inicia repetição.

### Linha 3019

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3020

```text
 const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(1,2.1);t.encoding=THREE.sRGBEncoding;t.needsUpdate=true;tobogganTrackTexture=t;return t
```

**Explicação:** Declara constante JavaScript.

### Linha 3021

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3022

```text
function createLavaSled(accentC){
```

**Explicação:** Declara função reutilizável.

### Linha 3023

```text
 const g=new THREE.Group();g.name='MAX_HEALMS_OBSIDIAN_SLED';const obs=new THREE.MeshStandardMaterial({color:0x171315,roughness:.72,metalness:.08}),edge=new THREE.MeshStandardMaterial({color:0xff6c20,emissive:0xff4212,emissiveIntensity:.86,roughness:.30});
```

**Explicação:** Declara constante JavaScript.

### Linha 3024

```text
 const deck=new THREE.Mesh(new THREE.BoxGeometry(1.62,.22,2.70),obs);deck.position.y=.22;g.add(deck);const nose=new THREE.Mesh(new THREE.ConeGeometry(.82,1.0,4),obs);nose.rotation.x=Math.PI/2;nose.rotation.z=Math.PI/4;nose.position.set(0,.26,-1.72);g.add(nose);
```

**Explicação:** Declara constante JavaScript.

### Linha 3025

```text
 for(const sx of [-1,1]){const rail=new THREE.Mesh(new THREE.BoxGeometry(.10,.30,2.62),edge);rail.position.set(sx*.78,.34,0);rail.rotation.z=sx*-.07;g.add(rail)}const seat=new THREE.Mesh(new THREE.BoxGeometry(1.22,.12,.40),obs);seat.position.set(0,.48,-.10);g.add(seat);tobogganGroup.add(g);tobogganCart=g;return g
```

**Explicação:** Inicia repetição.

### Linha 3026

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3027

```text
function createRiverCanoe(accentC){
```

**Explicação:** Declara função reutilizável.

### Linha 3028

```text
 const g=new THREE.Group();g.name='MAX_HEALMS_RIVER_CANOE_PREMIUM';
```

**Explicação:** Declara constante JavaScript.

### Linha 3029

```text
 const wood=new THREE.MeshStandardMaterial({color:0x5f321d,roughness:.68,metalness:.03});
```

**Explicação:** Declara constante JavaScript.

### Linha 3030

```text
 const woodLight=new THREE.MeshStandardMaterial({color:0xb05a2d,roughness:.60,metalness:.03});
```

**Explicação:** Declara constante JavaScript.

### Linha 3031

```text
 const dark=new THREE.MeshStandardMaterial({color:0x171a20,roughness:.76});
```

**Explicação:** Declara constante JavaScript.

### Linha 3032

```text
 const trim=new THREE.MeshStandardMaterial({color:0x22a9d6,emissive:0x0a5e7a,emissiveIntensity:.42,roughness:.34,metalness:.10});
```

**Explicação:** Declara constante JavaScript.

### Linha 3033

```text
 const gold=new THREE.MeshStandardMaterial({color:0xe1b95f,emissive:0x6a4210,emissiveIntensity:.26,roughness:.42,metalness:.16});
```

**Explicação:** Declara constante JavaScript.

### Linha 3034

```text
 const red=new THREE.MeshStandardMaterial({color:0xa9362b,emissive:0x4a120e,emissiveIntensity:.18,roughness:.52});
```

**Explicação:** Declara constante JavaScript.

### Linha 3035

```text
 // Corpo central mais longo e estreito, com proa/traseira elevadas.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3036

```text
 const hull=new THREE.Mesh(new THREE.BoxGeometry(1.48,.28,2.78),wood);hull.position.y=.23;g.add(hull);
```

**Explicação:** Declara constante JavaScript.

### Linha 3037

```text
 const keel=new THREE.Mesh(new THREE.BoxGeometry(.72,.14,2.92),dark);keel.position.set(0,.06,.02);g.add(keel);
```

**Explicação:** Declara constante JavaScript.

### Linha 3038

```text
 const nose=new THREE.Mesh(new THREE.ConeGeometry(.76,1.30,4),woodLight);nose.rotation.x=Math.PI/2;nose.rotation.z=Math.PI/4;nose.position.set(0,.32,-1.92);g.add(nose);
```

**Explicação:** Declara constante JavaScript.

### Linha 3039

```text
 const tail=new THREE.Mesh(new THREE.ConeGeometry(.68,1.02,4),woodLight);tail.rotation.x=-Math.PI/2;tail.rotation.z=Math.PI/4;tail.position.set(0,.30,1.83);g.add(tail);
```

**Explicação:** Declara constante JavaScript.

### Linha 3040

```text
 for(const sx of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 3041

```text
   const side=new THREE.Mesh(new THREE.BoxGeometry(.13,.66,2.86),woodLight);side.position.set(sx*.76,.52,0);side.rotation.z=sx*-.13;g.add(side);
```

**Explicação:** Declara constante JavaScript.

### Linha 3042

```text
   const rail=new THREE.Mesh(new THREE.BoxGeometry(.07,.08,2.92),trim);rail.position.set(sx*.80,.84,0);g.add(rail)
```

**Explicação:** Declara constante JavaScript.

### Linha 3043

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3044

```text
 // Bancos e travessas dão leitura real de canoa.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3045

```text
 for(const z of [-.62,.10,.78]){const seat=new THREE.Mesh(new THREE.BoxGeometry(1.18,.11,.30),dark);seat.position.set(0,.57,z);g.add(seat)}
```

**Explicação:** Inicia repetição.

### Linha 3046

```text
 for(const z of [-1.18,1.28]){const brace=new THREE.Mesh(new THREE.BoxGeometry(1.24,.07,.09),gold);brace.position.set(0,.70,z);g.add(brace)}
```

**Explicação:** Inicia repetição.

### Linha 3047

```text
 // Assinatura MAX HEALMS na proa.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3048

```text
 const crest=new THREE.Mesh(new THREE.TorusGeometry(.19,.035,7,20),gold);crest.position.set(0,.58,-2.17);crest.rotation.x=Math.PI/2;g.add(crest);
```

**Explicação:** Declara constante JavaScript.

### Linha 3049

```text
 const stripe=new THREE.Mesh(new THREE.BoxGeometry(.68,.07,.08),trim);stripe.position.set(0,.50,-2.15);g.add(stripe);
```

**Explicação:** Declara constante JavaScript.

### Linha 3050

```text
 // Pequenos protetores laterais aumentam volume sem pesar.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3051

```text
 for(const sx of [-1,1])for(const z of [-1.35,1.35]){const cap=new THREE.Mesh(new THREE.BoxGeometry(.18,.20,.34),dark);cap.position.set(sx*.72,.46,z);g.add(cap)}
```

**Explicação:** Inicia repetição.

### Linha 3052

```text
 // MOBILE52: painéis coloridos e reforço estrutural dão mais presença à jangada.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3053

```text
 for(const sx of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 3054

```text
   const panel=new THREE.Mesh(new THREE.BoxGeometry(.10,.34,1.55),red);panel.position.set(sx*.81,.52,.28);panel.rotation.z=sx*-.10;g.add(panel);
```

**Explicação:** Declara constante JavaScript.

### Linha 3055

```text
   const guard=new THREE.Mesh(new THREE.BoxGeometry(.08,.18,2.25),trim);guard.position.set(sx*.84,.72,-.10);g.add(guard)
```

**Explicação:** Declara constante JavaScript.

### Linha 3056

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3057

```text
 const bowPlate=new THREE.Mesh(new THREE.BoxGeometry(.72,.18,.44),red);bowPlate.position.set(0,.48,-1.72);bowPlate.rotation.x=-.08;g.add(bowPlate);
```

**Explicação:** Declara constante JavaScript.

### Linha 3058

```text
 tobogganGroup.add(g);tobogganCart=g;return g
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3059

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3060

```text
function createRiverLog(laneI,z,mat){const g=new THREE.Group(),m=new THREE.Mesh(new THREE.CylinderGeometry(.28,.36,2.05,9),mat);m.rotation.z=Math.PI/2;m.position.y=.30;g.add(m);for(const x of [-.82,.76]){const knot=new THREE.Mesh(new THREE.CylinderGeometry(.06,.10,.34,7),mat);knot.rotation.z=Math.PI/2;knot.rotation.y=x<0?.65:-.45;knot.position.set(x,.38,.05);g.add(knot)}g.userData={kind:'tobogganHazard',type:'tronco',lane:laneI,z,hit:false,baseY:.04};tobogganGroup.add(g);tobogganHazards.push(g)}
```

**Explicação:** Declara função reutilizável.

### Linha 3061

```text
function createRiverRock(laneI,z,mat){const g=new THREE.Group();for(let i=0;i<3;i++){const r=new THREE.Mesh(new THREE.DodecahedronGeometry(.38+i*.09,1),mat);r.scale.set(1.1,.70,1);r.position.set((i-1)*.28,.28+i*.06,(i%2-.5)*.18);g.add(r)}g.userData={kind:'tobogganHazard',type:'pedra',lane:laneI,z,hit:false,baseY:.02};tobogganGroup.add(g);tobogganHazards.push(g)}
```

**Explicação:** Declara função reutilizável.

### Linha 3062

```text
function createTobogganCollectible(kind,laneI,z){
```

**Explicação:** Declara função reutilizável.

### Linha 3063

```text
 const g=new THREE.Group(),isGem=kind==='gem';
```

**Explicação:** Declara constante JavaScript.

### Linha 3064

```text
 const mat=new THREE.MeshStandardMaterial({color:isGem?0x77dfff:0xffd65a,emissive:isGem?0x248fcc:0xb57612,emissiveIntensity:isGem?1.0:.92,roughness:.25,metalness:.08});
```

**Explicação:** Declara constante JavaScript.

### Linha 3065

```text
 let core;if(isGem){core=new THREE.Mesh(new THREE.OctahedronGeometry(.31,0),mat);core.scale.set(.72,1.25,.72)}else{const sh=new THREE.Shape();for(let i=0;i<10;i++){const a=Math.PI/2+i*Math.PI/5,r=i%2===0?.40:.18,x=Math.cos(a)*r,y=Math.sin(a)*r;i===0?sh.moveTo(x,y):sh.lineTo(x,y)}sh.closePath();core=new THREE.Mesh(new THREE.ShapeGeometry(sh),new THREE.MeshBasicMaterial({color:0xffdc62,side:THREE.DoubleSide}));core.scale.set(1,1,1)}g.add(core);
```

**Explicação:** Declara variável mutável.

### Linha 3066

```text
 if(!isGem){const ring=new THREE.Mesh(new THREE.TorusGeometry(.39,.045,6,18),new THREE.MeshBasicMaterial({color:0xffef9b,transparent:true,opacity:.78}));ring.rotation.x=Math.PI/2;g.add(ring)}
```

**Explicação:** Executa condicionalmente.

### Linha 3067

```text
 g.userData={kind,lane:laneI,z,collected:false,baseY:.78,spin:Math.random()*6.28};tobogganGroup.add(g);tobogganCollectibles.push(g);return g
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3068

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3069

```text
function populateTobogganCollectibles(){
```

**Explicação:** Declara função reutilizável.

### Linha 3070

```text
 const lava=tobogganGroup?.userData?.mode==='lava'||tobogganForcedMode==='lava'||REALMS[realmIndex]?.id==='ember';
```

**Explicação:** Declara constante JavaScript.

### Linha 3071

```text
 const lanes=(MOBILE_RUNNER&&lava)?[1,0,2,1,2,0,1,2]:[1,0,2,1,2,0,1,0,2,1,2,0,1,2];
```

**Explicação:** Declara constante JavaScript.

### Linha 3072

```text
 for(let i=0;i<lanes.length;i++){const kind=(i===3||i===8||i===12)?'gem':'star';createTobogganCollectible(kind,lanes[i],-30-i*(MOBILE_RUNNER&&lava?34:23.0))}
```

**Explicação:** Inicia repetição.

### Linha 3073

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3074

```text
function buildToboggan(){
```

**Explicação:** Declara função reutilizável.

### Linha 3075

```text
 clearToboggan();const [floorC,wallC,accentC]=tobogganPalette(),floodedMode=tobogganForcedMode==='flooded',lavaMode=tobogganForcedMode==='lava'||(!floodedMode&&REALMS[realmIndex]?.id==='ember');
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3076

```text
 const waterTex=makeTobogganTrackTexture(lavaMode?'lava':'river');
```

**Explicação:** Declara constante JavaScript.

### Linha 3077

```text
 const flowMat=lavaMode?(MOBILE_RUNNER?new THREE.MeshBasicMaterial({color:0xff5d18,map:waterTex}):new THREE.MeshStandardMaterial({color:0xff5d18,map:waterTex,emissive:0xff2e08,emissiveIntensity:.82,roughness:.34,metalness:.01})):new THREE.MeshStandardMaterial({color:floodedMode?0x315e67:0x5cc7ea,map:waterTex,emissive:floodedMode?0x102d32:0x0b4563,emissiveIntensity:floodedMode?.22:.34,roughness:floodedMode?.38:.24,metalness:.02});
```

**Explicação:** Declara constante JavaScript.

### Linha 3078

```text
 const bankMat=(lavaMode&&MOBILE_RUNNER)?new THREE.MeshBasicMaterial({color:0x21191a}):new THREE.MeshStandardMaterial({color:lavaMode?0x21191a:(floodedMode?0x303631:0x665848),roughness:.98}),edgeMat=new THREE.MeshBasicMaterial({color:lavaMode?0xff8a2a:(floodedMode?0x8aa9a4:0xdaf7ff),transparent:true,opacity:lavaMode?.58:(floodedMode?.34:.55)});
```

**Explicação:** Declara constante JavaScript.

### Linha 3079

```text
 const lavaMobile=MOBILE_RUNNER&&lavaMode,segmentLen=lavaMobile?10.2:5.26,flowWidth=lavaMobile?9.30:8.65;
```

**Explicação:** Declara constante JavaScript.

### Linha 3080

```text
 const flowGeo=new THREE.BoxGeometry(flowWidth,.18,segmentLen),bankGeo=new THREE.BoxGeometry(.96,1.20,segmentLen+.12),edgeGeo=new THREE.BoxGeometry(.20,.035,segmentLen-.04);const count=MOBILE_RUNNER?(lavaMode?30:52):84,step=lavaMobile?8.5:5.0;
```

**Explicação:** Declara constante JavaScript.

### Linha 3081

```text
 const ambient=new THREE.AmbientLight(lavaMode?0xff6b2a:0x8fdfff,(lavaMode&&MOBILE_RUNNER)?0:(MOBILE_RUNNER?.48:.34));if(ambient.intensity>0)tobogganGroup.add(ambient);
```

**Explicação:** Declara constante JavaScript.

### Linha 3082

```text
 for(let i=0;i<count;i++){const seg=new THREE.Group();seg.userData.z=9-i*step;const flow=new THREE.Mesh(flowGeo,flowMat);flow.position.y=-.07;flow.receiveShadow=false;seg.add(flow);for(const side of [-1,1]){const bank=new THREE.Mesh(bankGeo,bankMat);bank.position.set(side*(lavaMobile?4.38:4.45),.42,0);bank.rotation.z=side*.15;seg.add(bank);const edge=new THREE.Mesh(edgeGeo,edgeMat);edge.position.set(side*(lavaMobile?4.08:4.02),.045,0);seg.add(edge)}seg.rotation.x=floodedMode?-.0035:(seg.userData.z< -3&&seg.userData.z> -123?-.056:0);tobogganGroup.add(seg);tobogganSegments.push(seg)}
```

**Explicação:** Inicia repetição.

### Linha 3083

```text
 if(lavaMobile){
```

**Explicação:** Executa condicionalmente.

### Linha 3084

```text
   const baseMat=new THREE.MeshBasicMaterial({color:0x7a1d0d,side:THREE.DoubleSide});
```

**Explicação:** Declara constante JavaScript.

### Linha 3085

```text
   const baseGeo=new THREE.BoxGeometry(10.6,.10,18.4);
```

**Explicação:** Declara constante JavaScript.

### Linha 3086

```text
   const baseCount=16,baseStep=16.0;
```

**Explicação:** Declara constante JavaScript.

### Linha 3087

```text
   for(let i=0;i<baseCount;i++){
```

**Explicação:** Inicia repetição.

### Linha 3088

```text
     const b=new THREE.Mesh(baseGeo,baseMat);
```

**Explicação:** Declara constante JavaScript.

### Linha 3089

```text
     b.userData.z=10-i*baseStep;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3090

```text
     b.position.y=-.24;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3091

```text
     b.renderOrder=-2;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3092

```text
     tobogganGroup.add(b);
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3093

```text
     tobogganLavaBase.push(b)
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3094

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3095

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3096

```text
 if(floodedMode){
```

**Explicação:** Executa condicionalmente.

### Linha 3097

```text
   const tunnelStone=new THREE.MeshStandardMaterial({color:0x343b37,roughness:1}),tunnelDark=new THREE.MeshStandardMaterial({color:0x181d1b,roughness:1}),moss=new THREE.MeshBasicMaterial({color:0x395b42,transparent:true,opacity:.42}),lightMat=new THREE.MeshBasicMaterial({color:0xc7fff1,transparent:true,opacity:.72});
```

**Explicação:** Declara constante JavaScript.

### Linha 3098

```text
   const tunnelCount=MOBILE_RUNNER?(LOW_END_MOBILE?18:22):48,tunnelStep=MOBILE_RUNNER?12.2:9.2;
```

**Explicação:** Declara constante JavaScript.

### Linha 3099

```text
   // Túnel realmente fechado: paredes e teto contínuos, sem pilares ou vigas atravessando a visão central.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3100

```text
   for(let i=0;i<tunnelCount;i++){
```

**Explicação:** Inicia repetição.

### Linha 3101

```text
     const r=new THREE.Group();r.userData.z=10-i*tunnelStep;
```

**Explicação:** Declara constante JavaScript.

### Linha 3102

```text
     const roof=new THREE.Mesh(new THREE.BoxGeometry(9.15,.34,9.45),tunnelStone);roof.position.y=4.42;r.add(roof);
```

**Explicação:** Declara constante JavaScript.

### Linha 3103

```text
     for(const side of [-1,1]){
```

**Explicação:** Inicia repetição.

### Linha 3104

```text
       const wall=new THREE.Mesh(new THREE.BoxGeometry(.42,7.0,9.45),tunnelStone);wall.position.set(side*4.40,1.60,0);r.add(wall);
```

**Explicação:** Declara constante JavaScript.

### Linha 3105

```text
       // Relevos finos ficam embutidos na parede, sem formar pilares na pista.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3106

```text
       if(i%3===0){const rib=new THREE.Mesh(new THREE.BoxGeometry(.10,5.4,.16),tunnelDark);rib.position.set(side*4.16,1.50,-3.8);r.add(rib)}
```

**Explicação:** Executa condicionalmente.

### Linha 3107

```text
       if(i%2===0){const patch=new THREE.Mesh(new THREE.PlaneGeometry(.62,1.05),moss);patch.position.set(side*4.17,1.05,(i%3-1)*2.25);patch.rotation.y=side<0?Math.PI/2:-Math.PI/2;r.add(patch)}
```

**Explicação:** Executa condicionalmente.

### Linha 3108

```text
       if(i%2===1){const crack=new THREE.Mesh(new THREE.BoxGeometry(.035,1.45,.055),lightMat);crack.position.set(side*4.14,1.35,(i%3-1)*2.45);crack.rotation.z=side*(.18+(i%3)*.07);r.add(crack)}
```

**Explicação:** Executa condicionalmente.

### Linha 3109

```text
       if(i%3===1){const lamp=new THREE.Mesh(new THREE.BoxGeometry(.10,.16,1.65),lightMat);lamp.position.set(side*4.10,2.82,-2.5);lamp.rotation.y=Math.PI/2;r.add(lamp)}
```

**Explicação:** Executa condicionalmente.

### Linha 3110

```text
     }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3111

```text
     // Linhas longitudinais discretas no teto reforçam perspectiva e horizonte, sem bloquear a frente.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3112

```text
     for(const x of [-2.55,2.55]){const seam=new THREE.Mesh(new THREE.BoxGeometry(.10,.045,9.1),tunnelDark);seam.position.set(x,4.23,0);r.add(seam)}
```

**Explicação:** Inicia repetição.

### Linha 3113

```text
     tobogganGroup.add(r);tobogganTunnel.push(r)
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3114

```text
   }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3115

```text
   // Luz distante fixa: dá um ponto de fuga/horizonte claro sem abrir as laterais do túnel.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3116

```text
   const horizonGlow=new THREE.Mesh(new THREE.PlaneGeometry(7.6,3.25),new THREE.MeshBasicMaterial({color:0x86afa7,transparent:true,opacity:.20,depthWrite:false}));
```

**Explicação:** Declara constante JavaScript.

### Linha 3117

```text
   horizonGlow.userData.fixedTunnelHorizon=true;horizonGlow.position.set(0,-2.15,-155);tobogganGroup.add(horizonGlow);tobogganGroup.userData.horizonGlow=horizonGlow;
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3118

```text
   setVhalorFloodVisual(true);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3119

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3120

```text
 const rockMat=new THREE.MeshStandardMaterial({color:lavaMode?0x2a2425:0x595c5c,roughness:.94}),logMat=new THREE.MeshStandardMaterial({color:0x5c3a22,roughness:.96}),barMat=new THREE.MeshStandardMaterial({color:lavaMode?0x421c14:0x584c3e,roughness:.92});
```

**Explicação:** Declara constante JavaScript.

### Linha 3121

```text
 if(lavaMode){const pattern=MOBILE_RUNNER?[['pedra',0],['barreira',2],['pedra',1],['barreira',0]]:[['pedra',0],['barreira',2],['pedra',1],['barreira',0],['pedra',2],['barreira',1]];for(let i=0;i<pattern.length;i++){const z=-56-i*48,[type,laneI]=pattern[i];type==='pedra'?createRiverRock(laneI,z,rockMat):createTobogganBarrier(laneI,z,barMat)}createLavaSled(accentC)}
```

**Explicação:** Executa condicionalmente.

### Linha 3122

```text
 else{const pattern=floodedMode?[['pedra',0],['tronco',2],['barreira',1],['pedra',2],['tronco',0],['barreira',2],['pedra',1]]:[['tronco',0],['pedra',2],['tronco',1],['pedra',0],['tronco',2],['pedra',1]];for(let i=0;i<pattern.length;i++){const z=-56-i*42,[type,laneI]=pattern[i];if(type==='tronco')createRiverLog(laneI,z,logMat);else if(type==='barreira')createTobogganBarrier(laneI,z,barMat);else createRiverRock(laneI,z,rockMat)}createRiverCanoe(accentC)}
```

**Explicação:** Define caminho alternativo.

### Linha 3123

```text
 populateTobogganCollectibles();
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3124

```text
 const exit=new THREE.Group();exit.name=lavaMode?'lavaExitGate':(floodedMode?'floodedExitGate':'riverExitGate');exit.visible=false;const arch=new THREE.Mesh(new THREE.TorusGeometry(4.18,.15,8,36,Math.PI),new THREE.MeshBasicMaterial({color:lavaMode?0xff8a39:(floodedMode?0xa8d0c9:0xd8fbff),transparent:true,opacity:.82}));exit.add(arch);tobogganGroup.add(exit);tobogganGroup.userData.exitGate=exit;tobogganGroup.userData.mode=lavaMode?'lava':(floodedMode?'flooded':'river');updateTobogganWorld(0)
```

**Explicação:** Declara constante JavaScript.

### Linha 3125

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3126

```text
function updateTobogganWorld(dz){
```

**Explicação:** Declara função reutilizável.

### Linha 3127

```text
 for(const seg of tobogganSegments){seg.userData.z+=dz;if(seg.userData.z>12)seg.userData.z-=TOBOGGAN_LOOP;const z=seg.userData.z;seg.position.set(tobogganCenterX(z),tobogganY(z),z);seg.rotation.y=tobogganYaw(z);seg.rotation.x=tobogganForcedMode==='flooded'?-.0035:(z< -3&&z> -123?-.056:0);seg.rotation.z=-seg.rotation.y*.34}
```

**Explicação:** Inicia repetição.

### Linha 3128

```text
 for(const h of tobogganHazards){h.userData.z+=dz;if(h.userData.z>11){h.userData.z-=TOBOGGAN_LOOP;h.userData.hit=false;h.userData.lane=Math.floor(Math.random()*3)}const z=h.userData.z;h.position.set(tobogganCenterX(z)+LANE_X[h.userData.lane],tobogganY(z)+h.userData.baseY,z);h.rotation.y=tobogganYaw(z);h.rotation.z=-h.rotation.y*.24}
```

**Explicação:** Inicia repetição.

### Linha 3129

```text
 for(const r of tobogganTunnel){r.userData.z+=dz;if(r.userData.z>12)r.userData.z-=TOBOGGAN_LOOP;const z=r.userData.z;r.position.set(tobogganCenterX(z),tobogganY(z),z);r.rotation.y=tobogganYaw(z);r.rotation.z=-r.rotation.y*.16}
```

**Explicação:** Inicia repetição.

### Linha 3130

```text
 for(const b of tobogganLavaBase){b.userData.z+=dz;if(b.userData.z>18)b.userData.z-=256;const z=b.userData.z;b.position.set(tobogganCenterX(z),tobogganY(z)-.24,z);b.rotation.y=tobogganYaw(z);b.rotation.x=(z< -3&&z> -123?-.056:0);b.rotation.z=-b.rotation.y*.22}
```

**Explicação:** Inicia repetição.

### Linha 3131

```text
 const hg=tobogganGroup?.userData?.horizonGlow;if(hg){const hz=-155;hg.position.set(tobogganCenterX(hz),tobogganY(hz)+1.82,hz);hg.rotation.y=tobogganYaw(hz);hg.visible=tobogganForcedMode==='flooded'}
```

**Explicação:** Declara constante JavaScript.

### Linha 3132

```text
 for(const c of tobogganCollectibles){const u=c.userData;u.z+=dz;if(u.z>11){u.z-=TOBOGGAN_LOOP;if(!u.collected)c.visible=true}const z=u.z;c.position.set(tobogganCenterX(z)+LANE_X[u.lane],tobogganY(z)+u.baseY,z);c.rotation.y+=(dz*.012);c.rotation.x=Math.sin(tobogganTravel*.045+u.spin)*.16}
```

**Explicação:** Inicia repetição.

### Linha 3133

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3134

```text
const RIVER_HERO_Y=-.48,RIVER_LYRA_Y=-.28,RIVER_HERO_Z=-.12,RIVER_LYRA_Z=.62;
```

**Explicação:** Declara constante JavaScript.

### Linha 3135

```text
const LAVA_HERO_Y=.08,LAVA_LYRA_Y=.22,LAVA_CART_LIFT=.16;
```

**Explicação:** Declara constante JavaScript.

### Linha 3136

```text
const tobogganPoseCache=new WeakMap();
```

**Explicação:** Declara constante JavaScript.

### Linha 3137

```text
function clearTobogganPoseCache(model){if(model)tobogganPoseCache.delete(model)}
```

**Explicação:** Declara função reutilizável.

### Linha 3138

```text
function captureTobogganPose(model){
```

**Explicação:** Declara função reutilizável.

### Linha 3139

```text
 if(!model)return null;let c=tobogganPoseCache.get(model);if(c)return c;
```

**Explicação:** Executa condicionalmente.

### Linha 3140

```text
 const names=['mixamorig:Hips','mixamorig:Spine','mixamorig:Spine1','mixamorig:Spine2','mixamorig:LeftUpLeg','mixamorig:RightUpLeg','mixamorig:LeftLeg','mixamorig:RightLeg','mixamorig:LeftFoot','mixamorig:RightFoot','mixamorig:LeftArm','mixamorig:RightArm','mixamorig:LeftForeArm','mixamorig:RightForeArm'];
```

**Explicação:** Declara constante JavaScript.

### Linha 3141

```text
 c={};for(const name of names){const b=model.getObjectByName(name);if(b)c[name]={bone:b,rot:b.rotation.clone(),pos:b.position.clone()}}tobogganPoseCache.set(model,c);return c
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3142

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3143

```text
function applyTobogganCrouchPose(model,small=false){
```

**Explicação:** Declara função reutilizável.

### Linha 3144

```text
 const c=captureTobogganPose(model);if(!c)return;const k=small?.78:1;
```

**Explicação:** Declara constante JavaScript.

### Linha 3145

```text
 const set=(name,x=0,y=0,z=0)=>{const e=c[name];if(!e)return;e.bone.rotation.set(e.rot.x+x*k,e.rot.y+y*k,e.rot.z+z*k)};
```

**Explicação:** Declara constante JavaScript.

### Linha 3146

```text
 const pos=(name,x=0,y=0,z=0)=>{const e=c[name];if(!e)return;e.bone.position.set(e.pos.x+x*k,e.pos.y+y*k,e.pos.z+z*k)};
```

**Explicação:** Declara constante JavaScript.

### Linha 3147

```text
 // MOBILE3: sentado de verdade — baixa o quadril no banco e dobra pernas/joelhos.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3148

```text
 pos('mixamorig:Hips',0,-.075,.025);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3149

```text
 set('mixamorig:Hips',.18,0,0);set('mixamorig:Spine',.28,0,0);set('mixamorig:Spine1',.16,0,0);set('mixamorig:Spine2',.08,0,0);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3150

```text
 set('mixamorig:LeftUpLeg',1.30,0,.055);set('mixamorig:RightUpLeg',1.30,0,-.055);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3151

```text
 set('mixamorig:LeftLeg',-1.48,0,0);set('mixamorig:RightLeg',-1.48,0,0);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3152

```text
 set('mixamorig:LeftFoot',.38,0,0);set('mixamorig:RightFoot',.38,0,0);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3153

```text
 set('mixamorig:LeftArm',-.42,0,-.20);set('mixamorig:RightArm',-.42,0,.20);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3154

```text
 set('mixamorig:LeftForeArm',-.60,0,-.04);set('mixamorig:RightForeArm',-.60,0,.04)
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3155

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3156

```text
function playTobogganPose(){if(!heroRoot||!hero)return;const a=heroRoot.userData.actions.Walking||heroRoot.userData.actions.Running;if(!a)return;if(currentAction&&currentAction!==a)currentAction.fadeOut(.05);a.reset().setLoop(THREE.LoopRepeat,Infinity).fadeIn(.05).play();a.time=.10;a.paused=true;currentAction=a;currentActionName='RIVER_SEATED';if(mixer)mixer.update(0);clearTobogganPoseCache(hero);applyTobogganCrouchPose(hero,false)}
```

**Explicação:** Declara função reutilizável.

### Linha 3157

```text
function playLyraTobogganPose(){if(!lyraRoot||!lyraModel||!lyraActions.run)return;const a=lyraActions.run;if(lyraAction!==a){if(lyraAction)lyraAction.fadeOut(.05);a.reset().fadeIn(.05).play();a.setLoop(THREE.LoopRepeat,Infinity);lyraAction=a}a.time=.08;a.paused=true;lyraActionName='river_seated';if(lyraMixer)lyraMixer.update(0);clearTobogganPoseCache(lyraModel);applyTobogganCrouchPose(lyraModel,true)}
```

**Explicação:** Declara função reutilizável.

### Linha 3158

```text
function syncTobogganRiders(){
```

**Explicação:** Declara função reutilizável.

### Linha 3159

```text
 if(!tobogganActive||!tobogganCart)return;
```

**Explicação:** Executa condicionalmente.

### Linha 3160

```text
 const cp=tobogganCart.position,cr=tobogganCart.rotation,mode=tobogganGroup?.userData?.mode,lava=mode==='lava';
```

**Explicação:** Declara constante JavaScript.

### Linha 3161

```text
 const heroY=lava?LAVA_HERO_Y:RIVER_HERO_Y,lyraY=lava?LAVA_LYRA_Y:RIVER_LYRA_Y;
```

**Explicação:** Declara constante JavaScript.

### Linha 3162

```text
 if(heroRoot){heroRoot.position.set(cp.x,cp.y+(heroY-.02),cp.z+(RIVER_HERO_Z-.12));heroRoot.rotation.set((lava?-.06:-.12)+cr.x,Math.PI+(flipHero?Math.PI:0)+cr.y,cr.z);if(currentAction)currentAction.paused=true;if(mixer)mixer.update(0);applyTobogganCrouchPose(hero,false)}
```

**Explicação:** Executa condicionalmente.

### Linha 3163

```text
 if(lyraRoot&&currentJourney===2){lyraRoot.visible=true;lyraRoot.position.set(cp.x,cp.y+(lyraY-.02),cp.z+(RIVER_LYRA_Z-.12));lyraRoot.rotation.set((lava?-.05:-.11)+cr.x,Math.PI+(flipHero?Math.PI:0)+cr.y,cr.z);if(lyraAction)lyraAction.paused=true;if(lyraMixer)lyraMixer.update(0);applyTobogganCrouchPose(lyraModel,true)}
```

**Explicação:** Executa condicionalmente.

### Linha 3164

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3165

```text
function resetTobogganState(){stopTobogganWind();stopTobogganWater();tobogganActive=false;tobogganTimer=0;tobogganElapsed=0;tobogganTravel=0;tobogganHitCooldown=0;tobogganTestLaunch=false;tobogganForcedMode=null;tobogganExitAtDistance=null;setVhalorFloodVisual(false);if(tobogganGroup)tobogganGroup.visible=false;if(roadGroup)roadGroup.visible=true;if(decorGroup)decorGroup.visible=true;if(itemGroup)itemGroup.visible=true;if(shelter3D)shelter3D.visible=true;UI.tobogganHud?.classList.remove('show');UI.tobogganFx?.classList.remove('show')}
```

**Explicação:** Declara função reutilizável.

### Linha 3166

```text
function startToboggan(testLaunch=false,forcedMode=null,exitAtDistance=null){
```

**Explicação:** Declara função reutilizável.

### Linha 3167

```text
 if(!started||paused||gameOver||tobogganActive)return;
```

**Explicação:** Executa condicionalmente.

### Linha 3168

```text
 tobogganForcedMode=forcedMode;tobogganExitAtDistance=Number.isFinite(exitAtDistance)?exitAtDistance:null;tobogganTestLaunch=!!testLaunch;tobogganActive=true;ensureAudio();startTobogganWind();tobogganAutoDone=true;const _startTobogganSpeed=(forcedMode==='lava'||(!forcedMode&&REALMS[realmIndex]?.id==='ember'))?LAVA_TOBOGGAN_SPEED:TOBOGGAN_SPEED;tobogganTimer=tobogganExitAtDistance?Math.max(1,(tobogganExitAtDistance-distance)/(_startTobogganSpeed*TOBOGGAN_DISTANCE_SCALE)):TOBOGGAN_DURATION;tobogganElapsed=0;tobogganTravel=0;tobogganPhase=Math.random()*Math.PI*2;tobogganPrevSpeed=speed;tobogganHitCooldown=0;tobogganRoadBlend=0;lane=targetLane=1;jumpY=0;jumpV=0;slideTimer=999;
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3169

```text
 setOpeningBridge(false);if(openingDragonGroup)openingDragonGroup.visible=false;roadGroup.rotation.z=0;itemGroup.rotation.z=0;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3170

```text
 clearItems();buildToboggan();tobogganGroup.visible=true;roadGroup.visible=false;decorGroup.visible=false;itemGroup.visible=false;if(shelter3D)shelter3D.visible=false;UI.shelterPrompt.classList.remove('show');UI.tobogganHud?.classList.add('show');if(tobogganGroup?.userData?.mode==='lava'&&!MOBILE_RUNNER)UI.tobogganFx?.classList.add('show');else UI.tobogganFx?.classList.remove('show');huntersVisible=false;hunters.forEach(h=>h.root.visible=false);if(tobogganGroup?.userData?.mode!=='lava')startTobogganWater();if(tobogganCart){const _lava=tobogganGroup?.userData?.mode==='lava';tobogganCart.position.set(tobogganCenterX(0),tobogganY(0)-.035+(_lava?LAVA_CART_LIFT:0),.12)}playTobogganPose();if(currentJourney===2)playLyraTobogganPose();syncTobogganRiders();const mode=tobogganGroup?.userData?.mode,lava=mode==='lava',flooded=mode==='flooded';const modeEl=UI.tobogganHud?.querySelector('.mode'),tipEl=UI.tobogganHud?.querySelector('.tip');if(modeEl)modeEl.textContent=lava?'🔥 DESCIDA VULCÂNICA':(flooded?'💧 PASSAGEM INUNDADA DE VHALOR':'🌊 DESCIDA DO RIO');if(tipEl)tipEl.textContent=lava?'OBSIDIANA • ← • CENTRO • →':'CANOA • ← • CENTRO • →';showDescentWarning(lava?'🔥 DESCIDA VULCÂNICA • DESVIE DAS PEDRAS E BARREIRAS':(flooded?'🛶 PASSAGEM FECHADA INUNDADA • DESVIE DOS OBSTÁCULOS':'🌊 DESCIDA DO RIO • ESCOLHA ESQUERDA, CENTRO OU DIREITA'),1800);toast(lava?'DESCIDA VULCÂNICA • PRANCHA DE OBSIDIANA':(flooded?'VHALOR • CANOA SOB A PONTE ATÉ A SAÍDA':'DESCIDA DO RIO • VAREK SENTADO • DESVIE DE TRONCOS E PEDRAS'));haptic(lava?[18,24,28]:[14,18,22]);
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3171

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3172

```text
function endToboggan(silent=false){
```

**Explicação:** Declara função reutilizável.

### Linha 3173

```text
 if(!tobogganActive&&!silent)return;const endingMode=tobogganGroup?.userData?.mode;stopTobogganWind();stopTobogganWater();tobogganActive=false;tobogganTimer=0;tobogganRoadBlend=0;slideTimer=0;if(tobogganGroup)tobogganGroup.visible=false;if(roadGroup)roadGroup.visible=true;if(decorGroup)decorGroup.visible=true;if(itemGroup)itemGroup.visible=true;if(shelter3D)shelter3D.visible=true;UI.tobogganHud?.classList.remove('show');UI.tobogganFx?.classList.remove('show');const dw=$('descentWarning');if(dw)dw.classList.remove('show');speed=Math.max(RUN_SPEED_BASE,tobogganPrevSpeed);lane=targetLane=1;if(heroRoot){heroRoot.position.y=kharvorLayerY;heroRoot.position.z=0;heroRoot.rotation.x=0;heroRoot.visible=true}if(hero)hero.visible=true;if(lyraRoot){lyraRoot.position.y=kharvorLayerY;lyraRoot.position.z=-2.7}spawnTimer=.9;gemTimer=1.8;starTimer=.38;waterTimer=7.5;if(!gameOver){playHero('Running',.10);forceLyraRun()}
```

**Explicação:** Executa condicionalmente.

### Linha 3174

```text
 // Jornada 1 / primeiro reino: a saída do Descida do Rio entra em tempestade forte para marcar a abertura do jogo.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3175

```text
 if(endingMode==='flooded'){
```

**Explicação:** Executa condicionalmente.

### Linha 3176

```text
   // MOBILE39: restauração atômica da saída do túnel inundado.
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3177

```text
   kharvorLayerY=0;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3178

```text
   if(roadGroup){roadGroup.position.y=0;roadGroup.visible=true}
```

**Explicação:** Executa condicionalmente.

### Linha 3179

```text
   if(itemGroup){itemGroup.position.y=0;itemGroup.visible=true}
```

**Explicação:** Executa condicionalmente.

### Linha 3180

```text
   if(shelter3D){shelter3D.position.y=0;shelter3D.visible=true}
```

**Explicação:** Executa condicionalmente.

### Linha 3181

```text
   if(heroRoot)heroRoot.position.y=0;
```

**Explicação:** Executa condicionalmente.

### Linha 3182

```text
   if(lyraRoot)lyraRoot.position.y=0;
```

**Explicação:** Executa condicionalmente.

### Linha 3183

```text
   for(const g of kharvorUpperBridgeGroups)g.visible=false;
```

**Explicação:** Inicia repetição.

### Linha 3184

```text
   for(const g of forestClosedBridgeGroups)g.visible=false;
```

**Explicação:** Inicia repetição.

### Linha 3185

```text
   setVhalorFloodVisual(false);
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3186

```text
   if(sceneryGroup)sceneryGroup.visible=true;
```

**Explicação:** Executa condicionalmente.

### Linha 3187

```text
   if(decorGroup)decorGroup.visible=true;
```

**Explicação:** Executa condicionalmente.

### Linha 3188

```text
   if(!silent&&!gameOver)toast('↗ SUBIDA DA PASSAGEM INUNDADA • NÍVEL NORMAL RESTAURADO')
```

**Explicação:** Executa condicionalmente.

### Linha 3189

```text
 }
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3190

```text
 if(!silent)postTobogganExitProgress=Math.max(0,distance-realmStartDistance);
```

**Explicação:** Executa condicionalmente.

### Linha 3191

```text
 tobogganForcedMode=null;tobogganExitAtDistance=null;
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3192

```text
 if(!silent&&!gameOver&&currentJourney===1&&realmIndex===0){weatherTestOverride=null;setWeatherMode('extremeRain');weatherLightningTimer=.9;stopWeatherAudio();if(soundOn&&ambientVolume>0)startWeatherAudio('extremeRain');toast('🌧 TEMPESTADE FORTE • A FUGA CONTINUA');}
```

**Explicação:** Executa condicionalmente.

### Linha 3193

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3194

```text
function tobogganHurt(label){if(tobogganHitCooldown>0||gameOver)return;tobogganHitCooldown=1.05;if(shieldCharges>0){shieldCharges--;playSFX('shield');toast('ESCUDO BLOQUEOU '+label);return}lives--;playSFX('tobogganHit');effortBurst(label.toUpperCase());const lava=tobogganGroup?.userData?.mode==='lava';if(lives<=0){lives=0;playSFX('lifeLost');beginDeath('toboggan',lava?'Varek não resistiu à Descida Vulcânica':'Varek não resistiu à Descida do Rio',650)}else toast(label.toUpperCase()+' • -1 VIDA')}
```

**Explicação:** Declara função reutilizável.

### Linha 3195

```text
function updateToboggan(dt){if(kharvorBreakFx)kharvorBreakFx.visible=false;
```

**Explicação:** Declara função reutilizável.

### Linha 3196

```text
 const lavaMode=tobogganGroup?.userData?.mode==='lava',activeTobogganSpeed=lavaMode?LAVA_TOBOGGAN_SPEED:TOBOGGAN_SPEED;
```

**Explicação:** Declara constante JavaScript.

### Linha 3197

```text
 tobogganElapsed+=dt;tobogganTravel+=activeTobogganSpeed*dt;elapsed+=dt;distance+=activeTobogganSpeed*dt*TOBOGGAN_DISTANCE_SCALE;tobogganTimer=tobogganExitAtDistance?Math.max(0,(tobogganExitAtDistance-distance)/(activeTobogganSpeed*TOBOGGAN_DISTANCE_SCALE)):Math.max(0,TOBOGGAN_DURATION-tobogganElapsed);water-=dt*.34;tobogganHitCooldown=Math.max(0,tobogganHitCooldown-dt);if(water<=0){dehydrationDeath();return}
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3198

```text
 tobogganRoadBlend=Math.max(0,tobogganRoadBlend-dt);if(tobogganRoadBlend<=0){roadGroup.visible=false;decorGroup.visible=false}
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3199

```text
 lane+=(targetLane-lane)*Math.min(1,dt*(lavaMode?15:13));const dz=activeTobogganSpeed*dt;updateTobogganWorld(dz);
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3200

```text
 const center=tobogganCenterX(0),curve=tobogganYaw(-8),cartX=center+LANE_X[0]+lane*2.25;if(tobogganTrackTexture){const lava=tobogganGroup?.userData?.mode==='lava';tobogganTrackTexture.offset.y=(tobogganTrackTexture.offset.y-dt*(lava?1.82:1.25))%1}if(tobogganCart){tobogganCart.position.set(cartX,tobogganY(0)+(tobogganGroup?.userData?.mode==='lava'?LAVA_CART_LIFT:0)-.035,.12);tobogganCart.rotation.y=curve*.10;tobogganCart.rotation.z=(targetLane-lane)*-.09-curve*.10;tobogganCart.rotation.x=.007+Math.sin(tobogganTravel*.11)*.005}
```

**Explicação:** Declara constante JavaScript.

### Linha 3201

```text
 syncTobogganRiders();if(currentJourney===2&&lyraActionName!=='river_seated')playLyraTobogganPose();hunters.forEach(h=>{h.root.visible=false;if(h.root&&h.fixedScale)h.root.scale.copy(h.fixedScale);if(h.mixer)h.mixer.update(dt*.10)});
```

**Explicação:** Controla o sistema do tobogã/descida.

### Linha 3202

```text
 for(const h of tobogganHazards){if(!h.userData.hit&&h.userData.z>-.90&&h.userData.z<1.10&&h.userData.lane===Math.round(lane)){h.userData.hit=true;tobogganHurt(h.userData.type)}}
```

**Explicação:** Inicia repetição.

### Linha 3203

```text
 for(const c of tobogganCollectibles){const u=c.userData;if(!u.collected&&u.z>-.90&&u.z<1.10&&u.lane===Math.round(lane)){u.collected=true;c.visible=false;if(u.kind==='gem'){SAVE.gems++;runGems++;playSFX('gemCollect')}else{runStars++;SAVE.starsTotal++;playSFX('starCollect')}saveState();updateHUD()}}
```

**Explicação:** Inicia repetição.

### Linha 3204

```text
 const exit=tobogganGroup&&tobogganGroup.userData.exitGate;if(exit){if(tobogganTimer<=6.5){exit.visible=true;const z=-Math.max(10,tobogganTimer*18);exit.position.set(tobogganCenterX(z),tobogganY(z)+.08,z);exit.rotation.y=tobogganYaw(z);if(tobogganTimer>5.7){const md=tobogganGroup?.userData?.mode;showDescentWarning(md==='lava'?'🏁 FIM DA DESCIDA VULCÂNICA À FRENTE':(md==='flooded'?'🏁 SAÍDA DA PASSAGEM INUNDADA À FRENTE':'🏁 FIM DA DESCIDA DO RIO À FRENTE'),2100)}}else exit.visible=false}
```

**Explicação:** Declara constante JavaScript.

### Linha 3205

```text
 if(UI.tobogganTime)UI.tobogganTime.textContent=tobogganTimer.toFixed(1)+' s';if(tobogganTimer<=0&&!gameOver)endToboggan(false)
```

**Explicação:** Executa condicionalmente.

### Linha 3206

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3207

```text

```

**Explicação:** Separa visualmente blocos do arquivo.

### Linha 3208

```text
function reset(){hideFamilyScene();stopAmbientBed();resetFootsteps();ambientAnimalTimer=3.5+Math.random()*4.5;resetTobogganState();resetOpeningImpactVisuals();resetKharvorBridge();restoreVarekAfterTransition();mobilePerfGuard=false;if(decorGroup)decorGroup.visible=true;tobogganAutoDone=false;tobogganApproachStage=0;tobogganRoadBlend=0;postTobogganExitProgress=null;lastGuidanceRealm=-1;lastRankNoticeAt=0;realmDistanceNotices=new Set();reviveStep=0;rewardedContinueCount=0;currentRunResult=null;runStartGems=SAVE.gems;runSpentGems=0;runRewardedAds=0;runInterstitialAds=0;runPaidContinues=0;runRealmRewards=0;portalTransitioning=false;distance=0;lives=3;water=100;speed=RUN_SPEED_BASE;targetLane=1;lane=1;jumpY=0;jumpV=0;slideTimer=0;slideCooldown=0;hitCooldown=0;runStars=0;runGems=0;elapsed=0;timePenalty=0;shieldCharges=(SAVE.upgrades.shield||0)>=3?2:(SAVE.upgrades.shield||0)>=1?1:0;spawnTimer=.8;gemTimer=2.1;starTimer=.35;waterTimer=8.5;clearItems();updateHUD();gameOver=false;fallingDeath=false;holeRecoveryActive=false;fallTimer=0;deathRecorded=false;lastDeathReason='';lastDeathMessage='';effortTimer=0;hydrationBand=2;curveStrength=0;curveTarget=.45;curveTimer=2.5;realmStartDistance=0;huntersVisible=false;huntersTimer=0;hunterStage=0;journeyRunFinished=false;shelterActive=false;shelterAvailable=false;shelterDecisionDone=false;shelterChoiceOpen=false;UI.shelterPanel.classList.remove('show');UI.shelterChoicePanel.classList.remove('show');UI.shelterPrompt.classList.remove('show');UI.revivePanel?.classList.remove('show');UI.journeyEndPanel?.classList.remove('show');if(UI.fallFlash)UI.fallFlash.classList.remove('show');if(UI.effortPulse)UI.effortPulse.classList.remove('show');const dw=$('descentWarning');if(dw)dw.classList.remove('show');const pf=$('portalFx');if(pf)pf.classList.remove('show');if(shelter3D){shelter3D.position.z=SHELTER_START_Z;shelter3D.position.x=7.45;shelter3D.rotation.y=0}hunters.forEach(h=>{if(h.root&&h.fixedScale)h.root.scale.copy(h.fixedScale);h.root.visible=false;h.z=h.restZ;h.targetZ=h.restZ;h.lanePos=1+h.baseLaneOffset;h.root.position.z=h.restZ;if(h.action)h.action.paused=false});if(lyraRoot){lyraRoot.visible=false;lyraRoot.position.set(1.05,0,-2.7)}const lb=$('lyraBadge');if(lb)lb.classList.remove('show');updateReviveOffer()}
```

**Explicação:** Declara função reutilizável.

### Linha 3209

```text
function openProfileForJourney(journey){pendingJourneyStart=journey;renderProfile();const st=$('profileStatus');if(st){st.className='profileStatus';st.textContent='Escolha como continuar. Convidado inicia sem conta; Criar/Entrar usa sua conta.'}UI.profilePanel.classList.add('show');setTimeout(()=>{if($('profileName'))$('profileName').focus()},80)}
```

**Explicação:** Declara função reutilizável.

### Linha 3210

```text
function requestJourneyStart(journey=1){if(!SAVE.profileCompleted){openProfileForJourney(journey);return false}pendingJourneyStart=null;startJourney(journey);return true}
```

**Explicação:** Declara função reutilizável.

### Linha 3211

```text
function completeProfileSave(){
```

**Explicação:** Declara função reutilizável.

### Linha 3212

```text
 const chosen=$('profileLanguage')?.value||gameLanguage;applyLanguage(chosen,false);SAVE.settings={...SAVE.settings,language:gameLanguage};
```

**Explicação:** Declara constante JavaScript.

### Linha 3213

```text
 const st=$('profileStatus'),result=applyProfileData(profileFormValues(),false);
```

**Explicação:** Declara constante JavaScript.

### Linha 3214

```text
 if(!result.ok){if(st){st.className='profileStatus error';st.textContent=result.message}$(result.field)?.focus();return false}
```

**Explicação:** Executa condicionalmente.

### Linha 3215

```text
 if(SAVE.accountLinked){const email=String($('profileEmail')?.value||SAVE.accountEmail||'').trim().toLowerCase();if(email){SAVE.email=email;SAVE.accountEmail=email;saveState()}}
```

**Explicação:** Executa condicionalmente.

### Linha 3216

```text
 renderProfile();const card=$('profileCard');if(card){card.classList.remove('profileSaveFlash');void card.offsetWidth;card.classList.add('profileSaveFlash')}
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3217

```text
 toast(gt('profileSaved')+' • '+SAVE.name.toUpperCase()+(result.signupGrant?' • +💎 '+result.signupGrant:''));
```

**Explicação:** Manipula progresso/estado persistente do jogador.

### Linha 3218

```text
 const commerce=pendingCommerceProduct;pendingCommerceProduct=null;
```

**Explicação:** Declara constante JavaScript.

### Linha 3219

```text
 if(commerce){setTimeout(()=>{UI.profilePanel.classList.remove('show');const isDiamond=!!DIAMOND_PACKS[canonicalProductId(commerce)];(isDiamond?UI.diamondShopPanel:UI.shopPanel)?.classList.add('show');void purchaseCashProduct(commerce)},250);return true}
```

**Explicação:** Executa condicionalmente.

### Linha 3220

```text
 finishAccountFlow();return true
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3221

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3222

```text
async function startJourney(journey=1){
```

**Explicação:** Declara função assíncrona.

### Linha 3223

```text
 $('mobileMorePanel')?.classList.remove('show');if($('mobileMore'))$('mobileMore').textContent='☰ MAIS';stopTheme(650);weatherTestMode=false;weatherTestOverride=null;autoRealm=true;endlessMode=false;endlessLap=1;realmCheckpointPanelOpen=false;$('realmCheckpointPanel')?.classList.remove('show');
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3224

```text
 currentJourney=(journey===2&&SAVE.journey2Unlocked)?2:1;const order=getJourneyOrder(),cp=getJourneyCheckpoint(currentJourney);realmIndex=order[cp]??order[0];reset();distance=cp*realmTargetDistance();realmStartDistance=distance;
```

**Explicação:** Manipula progresso/estado persistente do jogador.

### Linha 3225

```text
 if(currentJourney===2&&!lyraRoot){UI.loading.classList.remove('hidden');UI.loadingText.textContent='Preparando Lyra...';try{await loadLyra()}catch(err){console.warn('LYRA NÃO CARREGOU',err)}finally{UI.loading.classList.add('hidden')}}
```

**Explicação:** Executa condicionalmente.

### Linha 3226

```text
 try{await loadRealm(realmIndex,true)}catch(err){console.warn('Falha ao preparar jornada',err)}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3227

```text
 restoreVarekAfterTransition();
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3228

```text
 started=true;paused=false;startRealmMusic(REALMS[realmIndex].id);UI.menu.classList.add('hidden');UI.hud.classList.add('show');UI.pause.classList.add('show');UI.hint.classList.remove('show');playHero('Running',.08);setLyraJourneyState();
```

**Explicação:** Controla Jornada 1/2 e progressão.

### Linha 3229

```text
 const resume=cp>0?' • CHECKPOINT '+REALMS[realmIndex].short:'';
```

**Explicação:** Declara constante JavaScript.

### Linha 3230

```text
 if(currentJourney===2){forceLyraRun();toast(gt('j2')+resume)}else toast(gt('j1')+resume);clock.getDelta()
```

**Explicação:** Executa condicionalmente.

### Linha 3231

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3232

```text
async function startEndless(){
```

**Explicação:** Declara função assíncrona.

### Linha 3233

```text
 if(!SAVE.journey2Completed){toast('CONCLUA A JORNADA 2 PARA LIBERAR O ENDLESS');return}
```

**Explicação:** Executa condicionalmente.

### Linha 3234

```text
 $('mobileMorePanel')?.classList.remove('show');stopTheme(650);weatherTestMode=false;weatherTestOverride=null;autoRealm=true;endlessMode=true;endlessLap=1;currentJourney=1;realmIndex=JOURNEY1_ORDER[0];reset();
```

**Explicação:** Controla Jornada 1/2 e progressão.

### Linha 3235

```text
 try{await loadRealm(realmIndex,true)}catch(err){console.warn('Falha ao preparar Endless',err)}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3236

```text
 started=true;paused=false;startRealmMusic(REALMS[realmIndex].id);UI.menu.classList.add('hidden');UI.hud.classList.add('show');UI.pause.classList.add('show');UI.hint.classList.remove('show');playHero('Running',.08);setLyraJourneyState();toast('∞ ENDLESS • SEM CHECKPOINT • BATA SEU RECORDE');clock.getDelta()
```

**Explicação:** Controla Jornada 1/2 e progressão.

### Linha 3237

```text
}
```

**Explicação:** Completa uma instrução lógica, visual ou estrutural do jogo.

### Linha 3238

```text
function startGame(){return startJourney(1)}
```

**Explicação:** Declara função reutilizável.

### Linha 3239

```text
function backMenu(){flushRunSave();stopRealmMusic();realmCheckpointPanelOpen=false;realmCheckpointNextIndex=null;$('realmCheckpointPanel')?.classList.remove('show');$('mobileMorePanel')?.classList.remove('show');if($('mobileMore'))$('mobileMore').textContent='☰ MAIS';if(UI.menu)UI.menu.scrollTop=0;hideFamilyScene();endToboggan(true);resetOpeningImpactVisuals();stopAmbientBed();stopWeatherAudio();resetFootsteps();weatherTestMode=false;weatherTestOverride=null;setWeatherMode('none');setAtmosphereMode('none');autoRealm=true;endlessMode=false;started=false;paused=false;gameOver=false;shelterActive=false;shelterChoiceOpen=false;shelterDecisionDone=false;portalTransitioning=false;huntersVisible=false;effortTimer=0;hunters.forEach(h=>{h.root.visible=false;if(h.action)h.action.paused=false});if(lyraRoot)lyraRoot.visible=false;const lb=$('lyraBadge');if(lb)lb.classList.remove('show');UI.pausePanel.classList.remove('show');UI.revivePanel?.classList.remove('show');UI.journeyEndPanel?.classList.remove('show');UI.shelterPanel.classList.remove('show');UI.shelterChoicePanel.classList.remove('show');UI.shelterPrompt.classList.remove('show');$('rewardedAdPanel')?.classList.remove('show');$('interstitialAdPanel')?.classList.remove('show');if(UI.effortPulse)UI.effortPulse.classList.remove('show');if(UI.toast)UI.toast.classList.remove('show');const dw=$('descentWarning');if(dw)dw.classList.remove('show');UI.menu.classList.remove('hidden');UI.hud.classList.remove('show');UI.pause.classList.remove('show');UI.hint.classList.remove('show');if(!SAVE.journey2Unlocked){currentJourney=1;realmIndex=JOURNEY1_ORDER[getJourneyCheckpoint(1)]||JOURNEY1_ORDER[0];loadRealm(realmIndex,true)}playHero('Walking',.15);refreshMenuStats();setTimeout(()=>playMenuTheme(),180)}
```

**Explicação:** Declara função reutilizável.

### Linha 3240

```text
function pauseGame(v=true){if(!started||gameOver||shelterActive||shelterChoiceOpen)return;paused=v;if(paused)flushRunSave();UI.pausePanel.classList.toggle('show',paused);if(paused){UI.pauseTitle.textContent='Jornada pausada';UI.pauseText.textContent='Continue da mesma posição ou volte ao menu.'}clock.getDelta()}
```

**Explicação:** Declara função reutilizável.

### Linha 3241

```text
function move(d){if(!started||paused||gameOver||fallingDeath||holeRecoveryActive||shelterActive||shelterChoiceOpen)return;ensureAudio();targetLane=Math.max(0,Math.min(2,targetLane+d))}
```

**Explicação:** Declara função reutilizável.

### Linha 3242

```text
function jump(){if(tobogganActive){toast(tobogganGroup?.userData?.mode==='lava'?'DESCIDA VULCÂNICA • USE ← → PARA DESVIAR':'DESCIDA DO RIO • USE ← → PARA DESVIAR');return}if(!started||paused||gameOver||fallingDeath||holeRecoveryActive||shelterActive||shelterChoiceOpen||jumpY>.05||slideTimer>0)return;ensureAudio();jumpV=7.8;playSFX('jump')}
```

**Explicação:** Declara função reutilizável.

### Linha 3243

```text
function slide(){
```

**Explicação:** Declara função reutilizável.

### Linha 3244

```text
 if(tobogganActive)return;
```

**Explicação:** Executa condicionalmente.

### Linha 3245

```text
 if(!started||paused||gameOver||fallingDeath||holeRecoveryActive||shelterActive||shelterChoiceOpen||jumpY>.5||slideTimer>0||slideCooldown>0)return;
```

**Explicação:** Executa condicionalmente.

### Linha 3246

```text
 ensureAudio();
```

**Explicação:** Controla áudio e efeitos.

### Linha 3247

```text
 // CORRIDA NORMAL: um gesto = um slide completo. Novos swipes não prolongam a animação ativa.
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3248

```text
 const speedRatio=Math.max(0,Math.min(1,(speed-RUN_SPEED_BASE)/Math.max(.001,RUN_SPEED_MAX-RUN_SPEED_BASE)));
```

**Explicação:** Declara constante JavaScript.

### Linha 3249

```text
 slideTimer=.86-.08*speedRatio;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

### Linha 3250

```text
 slideCooldown=.16-.04*speedRatio;
```

**Explicação:** Atribui ou atualiza um valor da lógica/interface.

