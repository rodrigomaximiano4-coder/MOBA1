# index.html — Parte 1

Linhas **1 a 250** da MOBILE86.

### Linha 1

```text
<!doctype html>
```

**Explicação:** Define o documento como HTML5.

### Linha 2

```text
<html lang="pt-BR">
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 3

```text
<head>
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 4

```text
<meta charset="utf-8">
```

**Explicação:** Configura metadados da página, como codificação, viewport ou comportamento no navegador.

### Linha 5

```text
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">
```

**Explicação:** Configura metadados da página, como codificação, viewport ou comportamento no navegador.

### Linha 6

```text
<meta name="theme-color" content="#07110d">
```

**Explicação:** Configura metadados da página, como codificação, viewport ou comportamento no navegador.

### Linha 7

```text
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
```

**Explicação:** Configura metadados da página, como codificação, viewport ou comportamento no navegador.

### Linha 8

```text
<meta http-equiv="Pragma" content="no-cache">
```

**Explicação:** Configura metadados da página, como codificação, viewport ou comportamento no navegador.

### Linha 9

```text
<meta http-equiv="Expires" content="0">
```

**Explicação:** Configura metadados da página, como codificação, viewport ou comportamento no navegador.

### Linha 10

```text
<title>MAX HEALMS</title>
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 11

```text
<style>
```

**Explicação:** Inicia as regras CSS responsáveis pela aparência do jogo.

### Linha 12

```text
*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#05090a;color:#fff;font-family:Inter,Segoe UI,Arial,sans-serif;user-select:none;-webkit-user-select:none}
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 13

```text
button{font:inherit}.top{position:fixed;z-index:50;top:0;left:0;right:0;height:52px;display:flex;align-items:center;padding:0 16px;background:linear-gradient(180deg,rgba(3,9,11,.94),rgba(3,9,11,.70));border-bottom:1px solid rgba(255,255,255,.08);backdrop-filter:blur(10px)}
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 14

```text
.brand{font-size:12px;font-weight:950;letter-spacing:.14em}.brand b{color:#f4c56a}.topRight{margin-left:auto;display:flex;gap:7px;align-items:center}.badge{padding:6px 9px;border-radius:9px;background:rgba(12,27,29,.70);border:1px solid rgba(255,255,255,.08);font-size:9px;font-weight:850;color:#c8d3cf}.badge strong{display:block;color:#fff;font-size:11px;margin-top:2px;text-align:center}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 15

```text
#app{position:fixed;inset:52px 0 0;background:#07110d;background-size:cover;background-position:center center;background-repeat:no-repeat}#threeCanvas{position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none}#weatherCanvas{position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;z-index:3}.weatherFlash{position:absolute;inset:0;z-index:5;pointer-events:none;background:#eaf5ff;opacity:0;mix-blend-mode:screen}.weatherTestGrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin:16px 0}.weatherTestGrid .btn{min-height:82px;white-space:normal;line-height:1.35}.weatherTestNote{padding:11px 13px;border-radius:11px;background:rgba(102,180,255,.07);border:1px solid rgba(102,180,255,.18);font-size:11px;color:#bad4df;line-height:1.5}@media(max-width:740px){.weatherTestGrid{grid-template-columns:1fr}}.vignette{position:absolute;inset:0;pointer-events:none;z-index:4;background:radial-gradient(circle at 50% 44%,transparent 38%,rgba(0,0,0,.16) 68%,rgba(0,0,0,.56) 100%),linear-gradient(to top,rgba(2,4,6,.50),transparent 35%)}
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 16

```text
.menu{position:absolute;z-index:20;left:5.5vw;top:8vh;width:min(720px,88vw);transition:.35s ease}.menu.hidden{opacity:0;pointer-events:none;transform:translateY(14px)}.eyebrow{font-size:10px;letter-spacing:.31em;color:#f4c56a;font-weight:950;text-transform:uppercase}.menu h1{font-size:clamp(48px,7vw,96px);line-height:.86;margin:15px 0 20px;letter-spacing:-.045em;text-shadow:0 18px 45px rgba(0,0,0,.75)}.menu h1 em{font-style:normal;color:#f4c56a}.menu p{max-width:590px;font-size:14px;line-height:1.55;color:#c4cfca;text-shadow:0 3px 9px #000;margin:0 0 24px}.actions{display:flex;gap:10px;flex-wrap:wrap}.btn{border:0;border-radius:7px;padding:14px 22px;font-size:11px;letter-spacing:.10em;font-weight:900;text-transform:uppercase;cursor:pointer;transition:.18s}.btn:hover{transform:translateY(-2px)}.primary{background:linear-gradient(135deg,#f4c56a,#d49c34);color:#09100f;box-shadow:0 10px 26px rgba(244,197,106,.18)}.secondary{background:rgba(8,18,20,.72);border:1px solid rgba(255,255,255,.12);color:#fff;backdrop-filter:blur(8px)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 17

```text
.hud{position:absolute;z-index:15;top:10px;left:50%;transform:translateX(-50%) translateY(-8px);display:flex;gap:7px;opacity:0;pointer-events:none;transition:.3s;max-width:calc(100vw - 110px)}.hud.show{opacity:1;transform:translateX(-50%) translateY(0)}.hudBox{min-width:74px;padding:7px 9px;border-radius:10px;background:rgba(4,13,15,.68);border:1px solid rgba(255,255,255,.09);backdrop-filter:blur(9px);font-size:8px;font-weight:850;color:#aebcb8;text-align:center;white-space:nowrap}.hudBox b{display:block;font-size:14px;color:#fff;margin-top:2px}.realmBox{min-width:135px}.realmBox b{color:#f4c56a;font-size:11px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 18

```text
.pauseBtn{position:absolute;z-index:18;right:13px;top:12px;width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.10);background:rgba(4,13,15,.72);color:#fff;font-weight:950;display:none}.pauseBtn.show{display:block}.toast{position:absolute;z-index:22;left:50%;top:18%;transform:translate(-50%,-6px);padding:11px 17px;border-radius:10px;background:rgba(3,10,12,.86);border:1px solid rgba(244,197,106,.24);color:#ffe3a3;font-size:11px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;opacity:0;transition:.22s;pointer-events:none}.toast.show{opacity:1;transform:translate(-50%,0)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 19

```text
.panel{position:absolute;z-index:25;inset:0;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(1,5,7,.72);backdrop-filter:blur(11px)}.panel.show{display:flex}.card{width:min(94vw,690px);max-height:88vh;overflow:auto;background:rgba(7,17,20,.95);border:1px solid rgba(255,255,255,.09);border-radius:18px;padding:22px;box-shadow:0 28px 90px rgba(0,0,0,.55)}.card h2{margin:0 0 7px;font-size:25px}.card p{color:#aebbb7;line-height:1.5;font-size:13px}.realmGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;margin:17px 0}.realmBtn{padding:13px;border-radius:11px;border:1px solid rgba(255,255,255,.09);background:#0b191a;color:#fff;text-align:left;cursor:pointer}.realmBtn b{display:block;font-size:12px}.realmBtn span{display:block;color:#90a39d;font-size:9px;margin-top:4px}.realmBtn.active{border-color:#f4c56a;box-shadow:inset 0 0 0 1px rgba(244,197,106,.22)}.toggleRow{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);font-size:13px}.statusLine{font-size:10px;color:#9eb0aa;margin-top:10px}.statusLine b{color:#f4c56a}.cardActions{display:flex;gap:9px;flex-wrap:wrap;margin-top:18px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 20

```text
.mobile{display:none!important}.mobileGroup{display:flex;gap:8px}.mBtn{width:53px;height:53px;border-radius:16px;border:1px solid rgba(255,255,255,.10);background:rgba(3,11,13,.55);backdrop-filter:blur(8px);color:#fff;font-size:18px;font-weight:950;pointer-events:auto}.hint{display:none!important;position:absolute;z-index:12;left:50%;bottom:12px;transform:translateX(-50%);padding:7px 10px;border-radius:9px;background:rgba(3,10,12,.46);border:1px solid rgba(255,255,255,.06);font-size:9px;color:#a9b6b2;opacity:0;transition:.2s;pointer-events:none}.hint.show{opacity:1}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 21

```text
.loading{position:absolute;z-index:60;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#05100d}.loading.hidden{display:none}.loaderRing{width:54px;height:54px;border-radius:50%;border:4px solid rgba(255,255,255,.10);border-top-color:#f4c56a;animation:spin .8s linear infinite}.loading b{margin-top:15px;letter-spacing:.11em;font-size:12px}.loading small{margin-top:6px;color:#8fa29b}@keyframes spin{to{transform:rotate(360deg)}}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 22

```text
.error{display:none;position:absolute;z-index:70;inset:0;padding:28px;background:#081012;color:#fff}.error.show{display:block}.error h2{color:#f4c56a}.error p{max-width:760px;line-height:1.55;color:#c8d0cd}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 23

```text
.outfitPreview{width:100%;height:170px;border-radius:10px;display:block;background:radial-gradient(circle at 50% 35%,#284147 0,#0a1518 58%,#04090a 100%);border:1px solid rgba(255,255,255,.08);margin:0 0 9px}.outfitIconPreview{height:170px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:62px;background:radial-gradient(circle at 50% 35%,#3b3a31 0,#101717 62%,#050909 100%);border:1px solid rgba(255,255,255,.08);margin:0 0 9px}.outfitDualPreview{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:0 0 9px}.outfitAngle{position:relative}.outfitAngle .outfitPreview{height:150px;margin:0}.outfitAngle span{position:absolute;left:6px;bottom:6px;padding:3px 6px;border-radius:999px;background:rgba(0,0,0,.66);border:1px solid rgba(255,255,255,.12);font-size:8px;font-weight:950;letter-spacing:.08em;color:#fff}.priceTag{display:inline-flex;padding:5px 8px;border-radius:999px;background:rgba(244,197,106,.10);border:1px solid rgba(244,197,106,.22);color:#f4c56a;font-size:10px;font-weight:950;margin-bottom:8px}.ownedTag{color:#8ee2b0;border-color:rgba(142,226,176,.25);background:rgba(142,226,176,.08)}.itemCard.featured{grid-column:1/-1}.itemCard.featured .outfitDualPreview{grid-template-columns:repeat(2,minmax(0,1fr))}.previewStatus{display:block;margin:7px 0 9px;color:#91a6a0;font-size:9px;font-weight:800;letter-spacing:.05em}.purchaseOk{color:#8ee2b0!important;border-color:rgba(142,226,176,.30)!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 24

```text
@media(max-width:740px){.top{padding:0 10px}.brand{font-size:10px}.badge{display:none}.menu{left:20px;right:20px;top:7vh;width:auto}.menu h1{font-size:clamp(46px,16vw,72px)}.menu p{font-size:12px}.hud{left:8px;right:56px;transform:translateY(-8px);justify-content:flex-start;overflow:hidden;max-width:none}.hud.show{transform:translateY(0)}.hudBox{min-width:59px;padding:6px 7px}.hudBox b{font-size:12px}.realmBox{min-width:106px}.realmGrid{grid-template-columns:1fr}.hint{display:none}.pauseBtn{top:10px}.btn{padding:13px 17px}}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 25

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 26

```text
.menu{max-height:calc(100vh - 96px);overflow:auto;padding-bottom:18px}.actions.mainNav{max-width:760px}.mainNav .btn{min-width:132px}.miniStats{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 16px}.miniStat{padding:8px 10px;border-radius:10px;background:rgba(5,16,18,.68);border:1px solid rgba(255,255,255,.08);font-size:9px;color:#9fb0aa}.miniStat b{display:block;color:#fff;font-size:13px;margin-top:2px}.gold{color:#f4c56a!important}.grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.systemCard{padding:13px;border-radius:12px;background:#0a1719;border:1px solid rgba(255,255,255,.08)}.systemCard h3{margin:0 0 6px;font-size:14px}.systemCard p{margin:0 0 10px;font-size:11px}.systemCard .price{font-weight:900;color:#f4c56a}.field{display:flex;flex-direction:column;gap:5px;margin:10px 0}.field label{font-size:9px;letter-spacing:.09em;color:#9eb0aa;font-weight:850}.field input,.field select{border:1px solid rgba(255,255,255,.10);background:#061113;color:#fff;border-radius:9px;padding:11px 12px;outline:none}.walletBar{display:flex;gap:10px;flex-wrap:wrap;padding:10px 12px;border-radius:11px;background:rgba(244,197,106,.08);border:1px solid rgba(244,197,106,.18);font-size:11px;margin:12px 0}.shopTabs{display:flex;gap:6px;flex-wrap:wrap;margin:12px 0}.shopTabs button{padding:8px 10px;border-radius:8px;border:1px solid rgba(255,255,255,.08);background:#0a1819;color:#cbd5d1;font-size:10px;cursor:pointer}.shopTabs button.active{border-color:#f4c56a;color:#f4c56a}.shopGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.itemCard{padding:12px;border-radius:12px;background:#091617;border:1px solid rgba(255,255,255,.08)}.itemCard b{font-size:12px}.itemCard small{display:block;color:#8fa29c;margin:5px 0 9px;line-height:1.35}.itemCard button{width:100%;padding:9px;border-radius:8px;border:0;background:#dba94f;color:#08100f;font-weight:900;cursor:pointer}.itemCard button.secondaryAction{background:#132729;color:#fff;border:1px solid rgba(255,255,255,.08)}.itemCard button:disabled{opacity:.45;cursor:default}.itemCard.active{border-color:#f4c56a;box-shadow:inset 0 0 0 1px rgba(244,197,106,.24),0 0 24px rgba(244,197,106,.08)}.itemCard.active b{color:#f4c56a}.rankRow{display:grid;grid-template-columns:42px 1fr 70px 70px 80px;gap:7px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.06);align-items:center;font-size:10px}.rankRow.head{color:#90a39d;font-weight:850}.rankRow b{font-size:11px}.storyFrame{padding:22px;border-radius:15px;background:linear-gradient(150deg,rgba(244,197,106,.08),rgba(5,16,18,.82));border:1px solid rgba(244,197,106,.16);min-height:220px;display:flex;flex-direction:column;justify-content:flex-end}.storyFrame h3{font-size:24px;margin:0 0 7px}.storyFrame p{max-width:540px}.shelterPrompt{position:absolute;z-index:19;left:50%;bottom:52px;transform:translateX(-50%);display:none;padding:14px 20px;border-radius:14px;border:2px solid rgba(244,197,106,.9);background:linear-gradient(180deg,rgba(24,31,26,.98),rgba(7,17,20,.98));box-shadow:0 0 0 2px rgba(0,0,0,.35),0 0 28px rgba(244,197,106,.32);color:#ffe9aa;font-weight:950;letter-spacing:.055em;cursor:pointer;min-width:min(92vw,470px);text-align:center;animation:shelterPulse 1.05s ease-in-out infinite}.shelterPrompt.show{display:block}@keyframes shelterPulse{0%,100%{transform:translateX(-50%) scale(1);box-shadow:0 0 0 2px rgba(0,0,0,.35),0 0 22px rgba(244,197,106,.25)}50%{transform:translateX(-50%) scale(1.025);box-shadow:0 0 0 2px rgba(0,0,0,.35),0 0 36px rgba(244,197,106,.48)}}.testModeBadge{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:999px;border:1px solid rgba(101,216,255,.48);background:rgba(12,40,48,.78);color:#8feaff;font-size:10px;font-weight:950;letter-spacing:.08em}.shelterInfo{margin-top:8px;padding:10px 12px;border-radius:10px;background:rgba(244,197,106,.08);border:1px solid rgba(244,197,106,.20);font-size:11px;line-height:1.45}.shelterCounter{font-size:44px;font-weight:950;color:#f4c56a;margin:14px 0}.shelterHydrationBox{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}.shelterHydrationBox>div{padding:10px 12px;border-radius:10px;background:rgba(101,216,255,.07);border:1px solid rgba(101,216,255,.18);font-size:10px;color:#9ebfc7}.shelterHydrationBox b{display:block;color:#8feaff;font-size:18px;margin-top:3px}.shelterStatus{font-size:11px;color:#b9cbc5;line-height:1.45}.shelterStatus strong{color:#f4c56a}.fallFlash{position:absolute;z-index:17;inset:0;pointer-events:none;opacity:0;background:radial-gradient(circle at 50% 40%,transparent 10%,rgba(0,0,0,.12) 35%,rgba(0,0,0,.92) 100%);transition:opacity .15s}.fallFlash.show{opacity:1}.effortPulse{display:none!important;position:absolute;z-index:16;left:50%;bottom:84px;transform:translateX(-50%) scale(.96);opacity:0;padding:7px 12px;border-radius:999px;background:rgba(5,12,14,.58);border:1px solid rgba(255,255,255,.08);font-size:9px;font-weight:900;letter-spacing:.08em;color:#dbe8e4;pointer-events:none;transition:.14s}.effortPulse.show{opacity:.9;transform:translateX(-50%) scale(1)}.equipPreview{display:inline-flex;align-items:center;gap:7px;padding:7px 9px;border-radius:8px;background:#0a1819;border:1px solid rgba(255,255,255,.07);font-size:10px;margin:3px}.danger{color:#ff947a}.good{color:#8ee2b0}.hudScore{min-width:82px}.hudStars b{color:#ffe47e}.hudGems b{color:#65d8ff}
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 27

```text
@media(max-width:740px){.mainNav .btn{min-width:calc(50% - 6px);padding:11px 8px}.grid2,.shopGrid{grid-template-columns:1fr}.card{padding:17px}.rankRow{grid-template-columns:30px 1fr 55px 55px 66px;font-size:8px}.hud .realmBox{display:none}.hudBox{min-width:52px;padding:5px 6px}.hudBox b{font-size:11px}.hud{gap:4px}.shelterPrompt{bottom:14px;font-size:10px}.menu{top:4vh}.menu h1{margin-bottom:12px}.menu p{margin-bottom:14px}}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 28

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 29

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 30

```text
.tobogganHud{position:absolute;z-index:19;top:72px;left:50%;transform:translateX(-50%) translateY(-8px);display:flex;align-items:center;gap:12px;padding:9px 15px;border-radius:13px;background:linear-gradient(180deg,rgba(22,10,5,.88),rgba(5,10,12,.82));border:1px solid rgba(255,151,67,.42);box-shadow:0 12px 38px rgba(0,0,0,.28),0 0 26px rgba(255,111,37,.13);opacity:0;pointer-events:none;transition:.22s}.tobogganHud.show{opacity:1;transform:translateX(-50%) translateY(0)}.tobogganHud .mode{font-size:9px;font-weight:950;letter-spacing:.12em;color:#ffab6b}.tobogganHud b{font-size:16px;color:#fff}.tobogganHud .tip{font-size:9px;color:#e8c7ad}.tobogganFx{position:absolute;z-index:8;inset:0;pointer-events:none;opacity:0;transition:.25s;background:radial-gradient(ellipse at 50% 48%,transparent 15%,rgba(0,0,0,.08) 58%,rgba(0,0,0,.44) 100%)}.tobogganFx:before,.tobogganFx:after{content:"";position:absolute;inset:-20%;background:repeating-linear-gradient(105deg,transparent 0 34px,rgba(255,226,188,.12) 35px 37px,transparent 38px 72px);transform:perspective(500px) rotateX(62deg) scale(1.35);animation:tobogganStreak .48s linear infinite}.tobogganFx:after{opacity:.45;animation-duration:.31s;transform:perspective(500px) rotateX(62deg) scale(1.6) translateX(20px)}.tobogganFx.show{opacity:1}@keyframes tobogganStreak{from{background-position:0 0}to{background-position:0 145px}}@media(max-width:740px){.tobogganHud{top:64px;gap:8px;padding:7px 10px}.tobogganHud .tip{display:none}.tobogganHud b{font-size:13px}}
```

**Explicação:** Controla alguma parte do sistema de descida/tobogã, incluindo estado, visual, física ou interface.

### Linha 31

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 32

```text
#journey2:disabled{opacity:.5;filter:saturate(.45);cursor:not-allowed}.panel .grid2 .btn{min-height:48px}.dangerNote{color:#ffcf9e;font-size:11px;font-weight:800;letter-spacing:.03em}.requiredMark{color:#ffcc72;font-weight:950}.profileStatus{margin-top:10px;padding:10px 12px;border:1px solid rgba(255,207,114,.28);border-radius:12px;background:rgba(255,255,255,.035);font-size:11px;color:#d6dfdb}.profileStatus.saved{border-color:rgba(116,255,175,.34);color:#aef4ca}.profileStatus.error{border-color:rgba(255,105,105,.40);color:#ffc1b7}.profileSaveFlash{animation:profileSaveFlash .65s ease}@keyframes profileSaveFlash{0%{transform:scale(1);box-shadow:0 0 0 rgba(255,204,114,0)}45%{transform:scale(1.012);box-shadow:0 0 34px rgba(255,204,114,.18)}100%{transform:scale(1);box-shadow:0 0 0 rgba(255,204,114,0)}}.rewardedMock{display:grid;gap:12px;text-align:center}.rewardedMock .adBox{min-height:180px;display:grid;place-items:center;border:1px dashed rgba(255,255,255,.22);border-radius:16px;background:linear-gradient(145deg,rgba(255,190,80,.08),rgba(93,143,255,.06));padding:20px}.rewardedMock .count{font-size:34px;font-weight:950;color:#ffd078}.reviveStatus{margin-top:10px;min-height:18px;font-size:11px;font-weight:850;color:#ffc0a8}.reviveStatus.good{color:#a9efc4}
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 33

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 34

```text
.portalFx{position:absolute;z-index:46;inset:0;pointer-events:none;opacity:0;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 50% 50%,rgba(255,236,177,.06) 0 8%,rgba(112,191,255,.10) 18%,rgba(111,76,192,.26) 38%,rgba(5,7,15,.86) 74%,rgba(2,3,8,.98) 100%);transition:opacity .16s ease}.portalFx.show{opacity:1}.portalRing{width:min(58vw,520px);aspect-ratio:1;border-radius:50%;border:9px solid rgba(190,225,255,.76);box-shadow:0 0 26px rgba(101,198,255,.72),inset 0 0 34px rgba(235,197,255,.65),0 0 110px rgba(133,83,255,.48);animation:portalSpin .75s linear infinite,portalPulse .55s ease-in-out infinite alternate;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle,rgba(255,255,255,.36),rgba(128,86,255,.06) 45%,transparent 66%)}.portalRing b{font-size:clamp(16px,3vw,28px);letter-spacing:.14em;text-align:center;text-shadow:0 2px 20px #000}.portalRing small{display:block;font-size:10px;color:#ffe7a3;margin-top:7px}@keyframes portalSpin{to{transform:rotate(360deg)}}@keyframes portalPulse{from{filter:brightness(.9);scale:.94}to{filter:brightness(1.35);scale:1.02}}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 35

```text
.descentWarning{position:absolute;z-index:28;left:50%;top:92px;transform:translateX(-50%) translateY(-10px);opacity:0;pointer-events:none;padding:10px 18px;border-radius:999px;background:rgba(28,10,5,.88);border:1px solid rgba(255,159,75,.58);box-shadow:0 0 30px rgba(255,98,31,.22);font-size:12px;font-weight:950;letter-spacing:.08em;color:#ffd39b;transition:.2s}.descentWarning.show{opacity:1;transform:translateX(-50%) translateY(0)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 36

```text
.lyraBadge{position:absolute;z-index:18;right:14px;bottom:16px;padding:8px 11px;border-radius:10px;background:rgba(8,19,24,.72);border:1px solid rgba(141,208,255,.22);font-size:9px;font-weight:900;letter-spacing:.08em;color:#cfeaff;display:none}.lyraBadge.show{display:block}.lyraBadge b{color:#fff}
```

**Explicação:** Controla a presença, animação ou estado de Lyra.

### Linha 37

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 38

```text
.finalVictory{position:absolute;z-index:32;left:50%;bottom:24px;transform:translateX(-50%) translateY(24px);width:min(94vw,760px);padding:16px 18px;border-radius:18px;background:linear-gradient(180deg,rgba(5,18,20,.88),rgba(4,10,12,.94));border:1px solid rgba(255,219,119,.48);box-shadow:0 16px 54px rgba(0,0,0,.45),0 0 32px rgba(255,201,82,.17);opacity:0;pointer-events:none;transition:.45s;text-align:center;backdrop-filter:blur(8px)}.finalVictory.show{opacity:1;transform:translateX(-50%) translateY(0);pointer-events:auto}.finalVictory .ey{font-size:9px;letter-spacing:.17em;font-weight:950;color:#ffe08b}.finalVictory h2{margin:4px 0 6px;font-size:clamp(22px,5vw,38px);line-height:1;color:#fff}.finalVictory .placement{display:inline-flex;align-items:center;justify-content:center;gap:7px;margin:5px 0 8px;padding:7px 14px;border-radius:999px;background:rgba(244,197,106,.12);border:1px solid rgba(244,197,106,.30);color:#ffe08b;font-weight:950;font-size:14px}.finalVictory .endingText{font-size:11px;line-height:1.45;color:#eef5f2;margin:5px auto 8px;max-width:620px}.finalVictory .unlockLine{font-size:10px;font-weight:900;color:#9ff0ba;margin:4px 0 8px}.finalVictory .resultLine{font-size:10px;color:#d7e3df}.finalVictory .finalActions{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px}.finalVictory .finalActions button{min-width:170px}.arrivalBanner{position:absolute;z-index:31;left:50%;top:92px;transform:translateX(-50%) scale(.94);padding:10px 18px;border-radius:999px;background:rgba(34,23,9,.78);border:1px solid rgba(255,219,119,.44);color:#ffe49a;font-size:11px;font-weight:950;letter-spacing:.14em;opacity:0;pointer-events:none;transition:.5s;white-space:nowrap}.arrivalBanner.show{opacity:1;transform:translateX(-50%) scale(1)}@media(max-width:740px){.finalVictory{bottom:10px;padding:13px 12px}.finalVictory h2{font-size:24px}.finalVictory .finalActions button{min-width:132px;padding:10px}.arrivalBanner{top:64px;font-size:9px;max-width:92vw;white-space:normal;text-align:center}}
```

**Explicação:** Controla a apresentação cinematográfica e o quadro compacto dos finais.

### Linha 39

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 40

```text
/* VIDEO CINEMATICO • carregamento sob demanda */
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 41

```text
.storyVideoCard{max-width:min(900px,94vw)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 42

```text
.storyVideoIntro{margin-top:-4px;color:#b9c5c0}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 43

```text
.videoStage{border:1px solid rgba(244,197,106,.26);border-radius:18px;overflow:hidden;background:#020506;box-shadow:0 18px 55px rgba(0,0,0,.35);margin:12px 0}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 44

```text
.videoStage video{display:block;width:100%;max-height:min(58vh,540px);aspect-ratio:16/9;background:#000;object-fit:contain}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 45

```text
.videoNow{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:9px 12px;background:rgba(8,15,16,.96);font-size:11px;letter-spacing:.08em;color:#f4c56a}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 46

```text
.videoNow small{color:#93a39d;font-size:9px;letter-spacing:.04em;text-align:right}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 47

```text
.videoChoices{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin:10px 0 14px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 48

```text
@media(max-width:680px){.videoNow{display:block}.videoNow small{display:block;text-align:left;margin-top:4px}.videoChoices{grid-template-columns:1fr}.videoStage video{max-height:46vh}}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 49

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 50

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 51

```text
/* MAX HEALMS COMMERCE 0.4/1.2 */
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 52

```text
.storeTabs{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0 14px}.storeTabs .btn.active{outline:2px solid rgba(244,197,106,.55);box-shadow:0 0 24px rgba(244,197,106,.10)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 53

```text
.storeSection[hidden]{display:none!important}.commerceOffer{border:1px solid rgba(244,197,106,.34);border-radius:16px;padding:14px;margin:10px 0 14px;background:linear-gradient(145deg,rgba(244,197,106,.09),rgba(255,255,255,.025))}.commerceOffer h3{margin:0 0 7px;color:#f4c56a}.commerceOffer p{margin:4px 0 9px}.commerceOffer .offerPrice{font-size:22px;font-weight:950;color:#fff}.commerceOffer .offerStatus{font-size:10px;font-weight:900;letter-spacing:.06em;color:#aee9c4;margin-top:7px}.diamondGrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.diamondCard{padding:14px;border:1px solid rgba(255,255,255,.11);border-radius:15px;background:rgba(255,255,255,.035);display:grid;gap:7px;align-content:start}.diamondCard b{font-size:15px}.diamondCard strong{font-size:23px;color:#8ee6ff}.diamondCard small{color:#a9b7b1;min-height:28px}.diamondCard.best{border-color:rgba(244,197,106,.45);box-shadow:0 0 30px rgba(244,197,106,.08)}.commerceNote{font-size:10px;color:#aebbb6;line-height:1.5;margin:10px 0}.lockedPremium{border-color:rgba(244,197,106,.30)!important}.lockedPremium .priceTag{color:#f4c56a}.cashBundle{margin-top:14px;border:1px solid rgba(139,220,255,.28);background:linear-gradient(145deg,rgba(79,151,205,.09),rgba(255,255,255,.025))}.purchaseStatus{margin-top:10px;min-height:18px;font-size:11px;font-weight:850;color:#dbe6e2}.purchaseStatus.good{color:#a9efc4}.purchaseStatus.warn{color:#ffd18f}.purchaseStatus.bad{color:#ffc1b7}
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 54

```text
@media(max-width:720px){.diamondGrid{grid-template-columns:1fr 1fr}.storeTabs{position:sticky;top:-12px;z-index:4;background:rgba(5,10,12,.96);padding:7px 0}.commerceOffer .offerPrice{font-size:19px}}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 55

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 56

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 57

```text
/* PLAYER 0.8 • MAPA DOS REINOS — somente interface/menu; gameplay e assets preservados */
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 58

```text
.realmProgressPanel{width:min(94vw,660px)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 59

```text
.realmProgressIntro{margin:0 0 12px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 60

```text
.realmProgressGrid{display:block;margin:10px 0 0}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 61

```text
.journeyProgressBlock{margin:0 0 14px}
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 62

```text
.journeyProgressHead{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 10px;margin-bottom:6px;border-radius:10px;background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.07)}
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 63

```text
.journeyProgressHead b{font-size:11px;letter-spacing:.07em}.journeyProgressHead span{font-size:10px;color:#f4c56a;font-weight:900;white-space:nowrap}
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 64

```text
.realmProgressItem{display:grid;grid-template-columns:minmax(0,1fr) auto auto;align-items:center;gap:8px;padding:9px 10px;border-bottom:1px solid rgba(255,255,255,.055);min-height:40px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 65

```text
.realmProgressItem:last-child{border-bottom:0}.realmProgressItem .realmProgressName{font-size:10px;font-weight:850;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.realmProgressItem .realmProgressKm{font-size:10px;color:#f4c56a;font-weight:900;white-space:nowrap}.realmProgressItem .realmProgressStatus{font-size:8px;letter-spacing:.045em;color:#91a49e;font-weight:850;white-space:nowrap}.realmProgressStatus.done{color:#8ed6a9}.realmProgressStatus.open{color:#f4c56a}.realmProgressStatus.locked{color:#7f8b88}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 66

```text
@media(max-width:740px){.realmProgressPanel{padding:15px}.realmProgressPanel h2{font-size:20px;margin-bottom:5px}.realmProgressIntro{font-size:10px;line-height:1.35;margin-bottom:8px}.journeyProgressBlock{margin-bottom:10px}.journeyProgressHead{padding:7px 8px}.realmProgressItem{grid-template-columns:minmax(0,1fr) auto;grid-template-areas:"name km" "status status";gap:2px 8px;padding:7px 8px;min-height:0}.realmProgressName{grid-area:name}.realmProgressKm{grid-area:km}.realmProgressStatus{grid-area:status}.realmProgressItem .realmProgressName,.realmProgressItem .realmProgressKm{font-size:9px}.realmProgressItem .realmProgressStatus{font-size:7px}.realmProgressGrid{margin-top:6px}}
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 67

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 68

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 69

```text
.accountBox{margin-top:14px;padding:14px;border-radius:13px;background:rgba(9,23,25,.85);border:1px solid rgba(244,197,106,.14)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 70

```text
.accountBox h3{margin:0 0 6px;font-size:14px}.accountBox p{font-size:10px;margin:0 0 10px}.accountStatus{padding:8px 10px;border-radius:9px;background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.07);font-size:10px;color:#b7c6c1;margin:8px 0}.accountStatus.good{color:#9ce4b7;border-color:rgba(142,226,176,.28)}.accountStatus.warn{color:#f4c56a;border-color:rgba(244,197,106,.28)}.accountStatus.bad{color:#ff9d9d;border-color:rgba(255,110,110,.28)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 71

```text
.consentRow{display:flex;gap:9px;align-items:flex-start;margin:10px 0;font-size:10px;color:#b7c3be;line-height:1.4}.consentRow input{margin-top:2px;accent-color:#f4c56a}.consentRow button{padding:0;border:0;background:none;color:#f4c56a;text-decoration:underline;cursor:pointer;font:inherit}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 72

```text
.complianceBadge{display:inline-flex;align-items:center;gap:6px;padding:6px 9px;border-radius:999px;background:rgba(142,226,176,.08);border:1px solid rgba(142,226,176,.18);color:#9ce4b7;font-size:9px;font-weight:900;letter-spacing:.05em}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 73

```text
.complianceWarn{padding:10px 12px;border-radius:10px;background:rgba(244,197,106,.07);border:1px solid rgba(244,197,106,.16);color:#d9c28f;font-size:10px;line-height:1.45;margin-top:10px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 74

```text
@media(max-width:740px){.accountBox{padding:11px}.accountBox .grid2{grid-template-columns:1fr}.consentRow{font-size:9px}}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 75

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 76

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 77

```text
.topRight{display:none!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 78

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 79

```text
/* ===== MAX HEALMS MOBILE37 • MOBILE CLEAN + DESCIDA DO RIO ===== */
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 80

```text
#mobileMore{display:none}.mobileMorePanel{display:contents}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 81

```text
@media(max-width:740px){
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 82

```text
  #app{background-size:auto 100%!important;background-position:50% 46%!important;background-repeat:no-repeat!important;background-color:#07110d!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 83

```text
  .vignette{background:linear-gradient(to top,rgba(2,5,7,.82) 0%,rgba(2,5,7,.50) 25%,rgba(2,5,7,.12) 52%,transparent 72%),radial-gradient(circle at 50% 42%,transparent 45%,rgba(0,0,0,.18) 78%,rgba(0,0,0,.42) 100%)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 84

```text
  .top{height:48px;background:linear-gradient(180deg,rgba(2,7,9,.91),rgba(2,7,9,.68));border-bottom-color:rgba(244,197,106,.13)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 85

```text
  #app{inset:48px 0 0}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 86

```text
  .brand{font-size:10px;letter-spacing:.18em}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 87

```text
  .menu{top:auto!important;bottom:calc(12px + env(safe-area-inset-bottom));left:12px!important;right:12px!important;width:auto!important;max-height:calc(100vh - 76px);overflow:auto;padding:14px 14px 13px;border-radius:18px;background:linear-gradient(180deg,rgba(4,12,14,.68),rgba(3,9,11,.91));border:1px solid rgba(255,255,255,.10);box-shadow:0 20px 70px rgba(0,0,0,.38);backdrop-filter:blur(10px)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 88

```text
  .menu .eyebrow{font-size:8px;letter-spacing:.27em;margin-bottom:5px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 89

```text
  .menu h1{font-size:34px!important;line-height:.88!important;margin:3px 0 10px!important;letter-spacing:-.04em}.menu h1 br{display:none}.menu h1 em{margin-left:7px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 90

```text
  .menu p{display:none}.menuCopyright{display:none!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 91

```text
  .miniStats{display:grid!important;grid-template-columns:1fr 1fr;gap:7px;margin:0 0 10px!important}.miniStat{padding:7px 9px!important;font-size:8px!important;background:rgba(4,12,14,.58)}.miniStat b{font-size:12px!important;margin-top:1px!important}.miniStat:nth-child(n+3){display:none!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 92

```text
  .actions.mainNav{display:grid;grid-template-columns:1fr 1fr;gap:8px;width:100%;max-width:none}.mainNav .btn{min-width:0!important;width:100%;padding:11px 8px!important;font-size:9px;letter-spacing:.075em;border-radius:11px}.mainNav #start,.mainNav #journey2{grid-column:1/-1;font-size:10px;padding:13px 10px!important}.mainNav #profile,.mainNav #mobileMore{display:block}.mainNav #mobileMore{background:rgba(8,18,20,.82);border:1px solid rgba(244,197,106,.22);color:#f7d486}
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 93

```text
  .mobileMorePanel{display:none;grid-column:1/-1;grid-template-columns:1fr 1fr;gap:8px;padding-top:2px}.mobileMorePanel.show{display:grid}.mobileMorePanel .btn{display:block}.mobileMorePanel #scenarioTest{display:none!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 94

```text
  .hud{top:7px;left:6px;right:54px;display:grid;grid-template-columns:1.05fr .78fr .90fr .90fr;gap:4px;max-width:none;overflow:visible;transform:translateY(-8px)}.hud.show{transform:translateY(0)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 95

```text
  .hudBox{min-width:0!important;width:auto;padding:6px 5px!important;border-radius:10px;font-size:7px!important;letter-spacing:.025em;background:rgba(3,10,12,.70)}.hudBox b{font-size:11px!important;margin-top:1px}.hud .hudStars,.hud .hudScore,.hud .hudTime,.hud .realmBox{display:none!important}.hud .hudWater{display:block!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 96

```text
  .pauseBtn{top:7px!important;right:9px!important;width:40px;height:40px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 97

```text
  .tobogganHud{top:56px!important;max-width:calc(100vw - 24px);padding:7px 10px!important}.tobogganHud .mode{font-size:8px}.tobogganHud b{font-size:12px!important}
```

**Explicação:** Controla alguma parte do sistema de descida/tobogã, incluindo estado, visual, física ou interface.

### Linha 98

```text
  .toast{top:13%;max-width:88vw;text-align:center;font-size:9px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 99

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 100

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 101

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 102

```text
/* MOBILE8 PC QA V3 — central sempre acessível */
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 103

```text
.qaReturnBtn{position:absolute;z-index:24;left:12px;bottom:12px;display:none;padding:10px 13px;border-radius:11px;border:1px solid rgba(244,197,106,.34);background:rgba(5,14,16,.88);color:#f4c56a;font-size:10px;font-weight:950;letter-spacing:.06em;cursor:pointer;backdrop-filter:blur(8px)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 104

```text
.qaReturnBtn.show{display:block}.qaBadge{display:inline-block;padding:5px 8px;border-radius:999px;background:rgba(244,197,106,.11);border:1px solid rgba(244,197,106,.24);color:#f4c56a;font-size:9px;font-weight:950;margin-bottom:8px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 105

```text
#scenarioTestPanel .card{width:min(96vw,980px)}#scenarioTestPanel .weatherTestGrid{grid-template-columns:repeat(3,minmax(0,1fr))}@media(max-width:820px){#scenarioTestPanel .weatherTestGrid{grid-template-columns:1fr 1fr}}@media(max-width:560px){#scenarioTestPanel .weatherTestGrid{grid-template-columns:1fr}}
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 106

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 107

```text
/* MOBILE8 PC QA V3 — acesso impossível de esconder */
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 108

```text
.pcQaBuild #pcScenarioHub{display:block!important}.pcQaBuild #scenarioTest{display:block!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 109

```text
.pcQaAlways{position:fixed;z-index:70;right:14px;top:64px;display:block;padding:11px 15px;border-radius:12px;border:1px solid rgba(244,197,106,.55);background:rgba(6,16,18,.94);color:#f4c56a;font-size:11px;font-weight:950;letter-spacing:.07em;cursor:pointer;box-shadow:0 8px 28px rgba(0,0,0,.38)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 110

```text
.pcQaAlways:hover{transform:translateY(-1px)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 111

```text
.pcQaBuild #scenarioTestPanel{z-index:60}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 112

```text
.pcQaBuild #scenarioTestPanel.show{display:flex!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 113

```text
@media(max-width:740px){.pcQaAlways{top:55px;right:8px;padding:9px 11px;font-size:9px}.pcQaBuild .mainNav #pcScenarioHub{display:block!important;grid-column:1/-1}}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 114

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 115

```text
.qaRealmLink{display:block;text-decoration:none!important;text-align:left;cursor:pointer;pointer-events:auto!important;opacity:1!important}.qaRealmLink small{display:block;margin-top:5px;font-size:9px;line-height:1.35;color:#9fb2ac;text-transform:none;letter-spacing:0}.qaLaunchStatus{margin:12px 0 0;padding:10px 12px;border-radius:10px;background:rgba(244,197,106,.08);border:1px solid rgba(244,197,106,.18);font-size:10px;color:#e7d5a1;font-weight:800}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 116

```text
/* PLAYER PUBLICO • QA / CONTROLES COMERCIAIS DE TESTE REMOVIDOS */
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 117

```text
#pcScenarioHub,#scenarioTest,#pcQaAlways,#qaReturnBtn,#scenarioTestPanel,#pauseScenarioHub,
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 118

```text
#lastRunAnalysisMain,#lastRunAnalysis,#lastRunAnalysisPanel,#runEconomySummary{display:none!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 119

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 120

```text
/* ===== MOBILE44 • FINAL J1 + NERIS ===== */
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 121

```text
.j1StoryBeat,.j1Twist,.j1HunterTurn,.j1Unlock{margin:9px 0;padding:9px 10px;border-radius:10px;line-height:1.38}
```

**Explicação:** Controla os caçadores e sua posição, animação ou participação na perseguição.

### Linha 122

```text
.j1StoryBeat{background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.08)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 123

```text
.j1Twist{background:rgba(155,45,45,.10);border:1px solid rgba(255,115,95,.20)}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 124

```text
.j1HunterTurn{background:rgba(244,197,106,.10);border:1px solid rgba(244,197,106,.30);color:#ffe3a1;text-align:center}
```

**Explicação:** Controla os caçadores e sua posição, animação ou participação na perseguição.

### Linha 125

```text
.j1Unlock{background:rgba(110,176,118,.10);border:1px solid rgba(145,220,156,.23);color:#bde8c2;text-align:center;font-weight:900}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 126

```text
.j1ResultGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:10px 0}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 127

```text
.j1ResultGrid span{display:flex;flex-direction:column;gap:3px;padding:8px 5px;border-radius:9px;background:rgba(255,255,255,.04);font-size:8px;color:#9fb0aa;text-align:center}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 128

```text
.j1ResultGrid b{font-size:12px;color:#fff}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 129

```text
#journeyEndPanel{z-index:1320!important}#journeyEndPanel.show{display:flex!important}
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 130

```text
@media(max-width:520px){.j1ResultGrid{grid-template-columns:repeat(2,1fr)}#journeyEndPanel .card{max-height:92vh;overflow:auto}}
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 131

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 132

```text
/* ===== MOBILE43 • PRÉ-STORE COMPACTA ===== */
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 133

```text
.menu .menuTagline{max-width:520px;margin:0 auto 12px;line-height:1.38}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 134

```text
.compactStats{grid-template-columns:repeat(3,1fr)!important;gap:6px!important;margin:8px 0 12px!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 135

```text
.compactStats .miniStat{min-height:42px;padding:7px 6px!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 136

```text
.preStoreNav{gap:7px!important}.preStoreNav .btn{min-height:43px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 137

```text
.storeAccent{border-color:rgba(244,197,106,.42)!important;background:rgba(244,197,106,.10)!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 138

```text
.menuCopyright{font-size:8px;letter-spacing:.08em;color:#85918d;margin:10px 0 0;text-align:center}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 139

```text
.reviveCompact{width:min(92vw,470px)!important;padding:18px!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 140

```text
.reviveCompact h2{margin-bottom:4px}.reviveCompact>p{margin:0 0 10px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 141

```text
.reviveMiniRow{display:flex;justify-content:space-between;gap:8px;padding:9px 11px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.035);border-radius:10px;font-size:11px;font-weight:900}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 142

```text
.reviveActions{margin-top:10px!important}.reviveCompact .dangerNote{margin-top:8px!important;padding:7px!important;font-size:8px!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 143

```text
.compactPremium{display:flex!important;align-items:center;justify-content:space-between;gap:8px;margin-top:8px!important;padding:8px 10px!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 144

```text
.compactPremium span{font-size:9px;line-height:1.2}.compactPremium .btn{width:auto!important;min-height:34px!important;padding:7px 9px!important;font-size:8px!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 145

```text
@media(max-width:740px){
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 146

```text
 .menu{padding:12px 14px!important}.menu h1{margin-bottom:5px!important}.menu .menuTagline{font-size:10px!important;margin-bottom:8px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 147

```text
 .compactStats{margin:6px 0 9px!important}.compactStats .miniStat{min-height:36px!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 148

```text
 .preStoreNav .btn{min-height:40px!important;padding:9px 10px!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 149

```text
 .reviveCompact{max-height:92vh;overflow:auto}.reviveActions{grid-template-columns:1fr!important}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 150

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 151

```text
</style>
```

**Explicação:** Encerra o bloco de estilos CSS.

### Linha 152

```text
<link rel="manifest" href="manifest.webmanifest">
```

**Explicação:** Carrega ou declara um recurso relacionado à página.

### Linha 153

```text
<link rel="icon" href="icon.svg" type="image/svg+xml">
```

**Explicação:** Carrega ou declara um recurso relacionado à página.

### Linha 154

```text
</head>
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 155

```text
<body>
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 156

```text
<div class="top"><div class="brand" id="buildBrand">MAX HEALMS</div><div class="topRight"><div class="badge">3D<strong id="status3d">INICIANDO</strong></div><div class="badge">FPS<strong id="fps">--</strong></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 157

```text
<div id="app">
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 158

```text
  <canvas id="threeCanvas"></canvas><canvas id="weatherCanvas"></canvas><div class="weatherFlash" id="weatherFlash"></div><div class="vignette"></div><div class="fallFlash" id="fallFlash"></div><div class="effortPulse" id="effortPulse">ESFORÇO</div>
```

**Explicação:** Cria a área de desenho usada pelo motor 3D do jogo.

### Linha 159

```text
  <div class="loading" id="loading"><div class="loaderRing"></div><b>CONSTRUINDO REINO 3D</b><small id="loadingText">Varek + cenário real</small></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 160

```text
  <div class="error" id="error"><h2>O motor 3D não carregou.</h2><p id="engineErrorText">A build não conseguiu iniciar o motor 3D. Abra pelo arquivo <b>ABRIR-MAX-HEALMS-PLAYER.bat</b>.</p><pre id="engineDiag" style="white-space:pre-wrap;color:#9fb0aa;font-size:10px;line-height:1.45;margin-top:14px"></pre></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 161

```text
  <div class="menu" id="menu"><div class="eyebrow">RUN • SURVIVE • ESCAPE</div><h1>MAX<br><em>HEALMS</em></h1><p class="menuTagline">Atravesse os reinos. Sobreviva à perseguição. Reencontre sua família.</p><div class="miniStats compactStats"><div class="miniStat">💎<b id="menuGems">0</b></div><div class="miniStat">RECORDE<b id="menuBest">0 pts</b></div><div class="miniStat">PLANO<b id="menuPlan">FREE</b></div><span id="menuStars" hidden>⭐ 0</span><span id="menuPlayer" hidden>LOCAL</span></div><div class="actions mainNav preStoreNav"><button class="btn primary" id="start">▶ JOGAR • JORNADA 1</button><button class="btn secondary" id="journey2" disabled>🔒 JORNADA 2 • O RESGATE</button><button class="btn secondary" id="characterShop">👤 PERSONAGENS</button><button class="btn secondary storeAccent" id="diamondShop">💎 DIAMANTES</button><button class="btn secondary" id="profile">👤 PERFIL</button><button class="btn secondary" id="lastRunAnalysisMain">📊 CUSTO / GANHO</button><button class="btn secondary" id="mobileMore">☰ MAIS</button><div class="mobileMorePanel" id="mobileMorePanel"><button class="btn secondary" id="ranking">🏆 RANKING</button><button class="btn secondary" id="lastRunAnalysis">📊 ÚLTIMA CORRIDA • CUSTO / GANHO</button><button class="btn secondary" id="realms">🌍 PROGRESSO</button><button class="btn secondary" id="story">🎬 HISTÓRIA</button><button class="btn secondary" id="upgrades">⬆ UPGRADES</button><button class="btn secondary" id="settings">⚙ CONFIGURAÇÕES</button><button class="btn secondary" id="endless" disabled>🔒 ENDLESS • CONCLUA A HISTÓRIA</button></div></div><div class="menuCopyright">© 2026 MAX HEALMS • MOBILE86 • ALPHA 2 FINALS</div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 162

```text
  <div class="hud" id="hud"><div class="hudBox"><span id="hudDistanceLabel">DISTÂNCIA</span><b id="distance">0 m</b></div><div class="hudBox hudStars"><span id="hudStarsLabel">ESTRELAS</span><b id="stars">⭐ 0</b></div><div class="hudBox hudScore"><span id="hudScoreLabel">PONTOS</span><b id="score">0</b></div><div class="hudBox"><span id="hudLivesLabel">VIDAS</span><b id="lives">❤❤❤</b></div><div class="hudBox hudGems"><span id="hudGemsLabel">DIAMANTES</span><b id="gems">💎 0</b></div><div class="hudBox hudWater"><span id="hudWaterLabel">ÁGUA</span><b id="water">100%</b></div><div class="hudBox hudTime"><span id="hudTimeLabel">TEMPO</span><b id="runTime">00:00</b></div><div class="hudBox realmBox"><span id="hudRealmLabel">REINO</span><b id="realmName">FLORESTA</b></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 163

```text
  <div class="tobogganHud" id="tobogganHud"><span class="mode">🌊 DESCIDA DO RIO</span><b id="tobogganTime">30.0 s</b><span class="tip">CANOA • ← • CENTRO • →</span></div><div class="tobogganFx" id="tobogganFx"></div><div class="descentWarning" id="descentWarning">⚠ DESCIDA À FRENTE</div><div class="lyraBadge" id="lyraBadge">👧 <b>LYRA</b> • À FRENTE</div><div class="portalFx" id="portalFx"><div class="portalRing"><b id="portalLabel">PORTAL<small>ATRAVESSANDO REINO</small></b></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 164

```text
  <button class="pauseBtn" id="pause">Ⅱ</button><div class="toast" id="toast"></div><div class="hint" id="hint"></div>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 165

```text
  <div class="mobile"><div class="mobileGroup"><button class="mBtn" data-act="left">←</button><button class="mBtn" data-act="right">→</button></div><div class="mobileGroup"><button class="mBtn" data-act="jump">↑</button><button class="mBtn" data-act="slide">↓</button></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 166

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 167

```text
  <div class="panel" id="realmPanel"><div class="card realmProgressPanel"><div class="eyebrow">MAPA DOS REINOS • VISUALIZAÇÃO</div><h2>🌍 Cenários & Progresso</h2><p class="realmProgressIntro">Distância e progresso de cada reino. As fases continuam sendo iniciadas somente por <b>INICIAR JORNADA</b>.</p><div class="realmGrid realmProgressGrid" id="realmGrid"></div><span id="activeRealmStatus" hidden>carregando...</span><div class="cardActions"><button class="btn primary" id="realmClose">VOLTAR</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 168

```text
  <div class="panel" id="storyPanel"><div class="card storyVideoCard"><h2>🎬 MAX HEALMS • HISTÓRIA</h2><p class="storyVideoIntro">Conheça a origem da perseguição de Varek ou assista ao trailer promocional do jogo.</p><div class="videoStage"><video id="storyVideo" controls playsinline preload="metadata" poster="story-preview.jpg" controlsList="nodownload" disablePictureInPicture><p>Seu navegador não conseguiu reproduzir o vídeo.</p></video><div class="videoNow"><span id="storyVideoLabel">HISTÓRIA • A ORIGEM DA FUGA</span><small>O vídeo é carregado somente quando esta tela é aberta.</small></div></div><div class="videoChoices"><button class="btn primary" id="storyFullBtn">▶ HISTÓRIA COMPLETA</button><button class="btn secondary" id="storyTrailerBtn">⚡ TRAILER</button></div><div class="storyFrame"><div class="eyebrow">JORNADA 1 • A FUGA</div><h3>Por que Varek está sendo caçado?</h3><p>Quando as fronteiras foram fechadas, Varek descobriu uma rota capaz de levar sua família à segurança. Ele enviou a esposa e Lyra primeiro e ficou para trás para atrair os perseguidores. Ao desobedecer às ordens e proteger a passagem, passou a ser tratado como traidor. Agora precisa sobreviver e reencontrar sua família antes que os caçadores descubram onde elas estão.</p></div><div class="storyFrame" style="margin-top:10px"><div class="eyebrow">JORNADA 2 • O RESGATE</div><h3>De presa a caçador</h3><p>Quando Lyra é capturada, Varek deixa de fugir. Ele atravessa os reinos para resgatá-la e, depois, pai e filha correm juntos até a fronteira segura e o reencontro final com a mãe.</p></div><div class="cardActions"><button class="btn secondary" id="storySkip">PULAR VÍDEO</button><button class="btn primary" id="storyClose">Voltar</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 169

```text
  <div class="panel" id="legalPanel"><div class="card"><div class="eyebrow">PRIVACIDADE • CONTA</div><h2>⚖ Privacidade, conta, anúncios e compras</h2><div class="complianceBadge">✓ INFORMAÇÕES DO JOGADOR</div><p><b>Conta:</b> o jogador pode usar o MAX HEALMS como convidado ou criar uma conta com e-mail e senha. Contas registradas devem usar autenticação segura; senhas não são exibidas nem armazenadas em texto aberto pelo jogo.</p><p><b>Dados:</b> perfil, progresso, compras e identificadores necessários ao funcionamento poderão ser tratados conforme a Política de Privacidade. Dados enviados pelos serviços online devem trafegar de forma criptografada.</p><p><b>Anúncios:</b> o plano FREE pode exibir anúncio de intervalo somente após o encerramento de uma corrida. Anúncios premiados são opcionais. Quando necessário, as escolhas de consentimento serão apresentadas antes do uso de publicidade personalizada.</p><p><b>Compras:</b> personagens e Premium são permanentes; diamantes são consumíveis. No Android, preço, compra e restauração são processados pelo sistema de faturamento da loja.</p><div class="grid2" style="margin-top:12px"><button class="btn secondary" id="legalPrivacy">POLÍTICA DE PRIVACIDADE</button><button class="btn secondary" id="legalDeleteWeb">SOLICITAR EXCLUSÃO PELA WEB</button></div><div class="grid2" style="margin-top:8px"><a class="btn secondary" href="TERMS-OF-USE.html" target="_blank" rel="noopener">TERMOS DE USO</a><button class="btn secondary" id="legalClose">VOLTAR</button></div><div class="complianceWarn" id="legalPublicUrlStatus" hidden></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 170

```text
  <div class="panel" id="settingsPanel"><div class="card"><div class="eyebrow">CONTA • PRIVACIDADE</div><h2>⚙ Configurações</h2><div class="systemCard"><b>CONTA</b><p id="settingsAccountStatus">Convidado • dados locais</p></div><div class="systemCard" style="margin-top:10px"><b>PLANO</b><p id="settingsPlan">FREE • anúncios de intervalo após derrota</p></div><div class="systemCard" style="margin-top:10px"><b id="settingsLanguageTitle">IDIOMA</b><p id="settingsLanguageText">O idioma é detectado automaticamente pelo aparelho e pode ser alterado a qualquer momento.</p><p style="font-size:10px;opacity:.75">Moeda/preço real: definido pela região de cobrança da Google Play, não pelo idioma ou país informado no perfil.</p><select id="settingsLanguage" style="width:100%;margin-top:8px;padding:10px;border-radius:10px;background:#0b1415;color:#fff;border:1px solid rgba(255,255,255,.15);font-size:16px"><option value="pt-BR">Português (Brasil)</option><option value="en">English</option><option value="es">Español</option><option value="fr">Français</option><option value="de">Deutsch</option><option value="it">Italiano</option><option value="ja">日本語</option><option value="ko">한국어</option><option value="zh-CN">简体中文</option></select></div><div class="systemCard" style="margin-top:10px"><b>ÁUDIO</b><p>Corrida sem passos contínuos. Música, efeitos e ambiente podem ser ajustados separadamente.</p><div style="display:grid;gap:10px;margin-top:10px"><label style="display:grid;grid-template-columns:92px 1fr 44px;gap:8px;align-items:center;font-size:10px"><b>MÚSICA</b><input id="settingsMusicVolume" type="range" min="0" max="100" step="5" value="70"><span id="settingsMusicValue">70%</span></label><label style="display:grid;grid-template-columns:92px 1fr 44px;gap:8px;align-items:center;font-size:10px"><b>EFEITOS</b><input id="settingsSfxVolume" type="range" min="0" max="100" step="5" value="85"><span id="settingsSfxValue">85%</span></label><label style="display:grid;grid-template-columns:92px 1fr 44px;gap:8px;align-items:center;font-size:10px"><b>AMBIENTE</b><input id="settingsAmbientVolume" type="range" min="0" max="100" step="5" value="65"><span id="settingsAmbientValue">65%</span></label></div><div class="grid2" style="margin-top:10px"><button class="btn secondary" id="testStarSound" type="button">⭐ TESTAR ESTRELA</button><button class="btn secondary" id="testWaterSound" type="button">💧 TESTAR ÁGUA</button></div></div><div class="systemCard" style="margin-top:10px"><b>VIBRAÇÃO / IMPACTO</b><p>Vibração curta apenas em impactos, quedas e eventos fortes.</p><button class="btn secondary" id="settingsHaptics" type="button">📳 VIBRAÇÃO LIGADA</button></div><div class="systemCard" style="margin-top:10px"><b>ID DO JOGADOR</b><p id="settingsPlayerId" style="overflow-wrap:anywhere">—</p></div><div class="grid2" style="margin-top:12px"><button class="btn secondary" id="settingsAccount">👤 CONTA / LOGIN</button><button class="btn secondary" id="settingsRestore">↻ RESTAURAR COMPRAS</button></div><div class="grid2" style="margin-top:8px"><button class="btn secondary" id="settingsPrivacy">⚖ POLÍTICA DE PRIVACIDADE</button><button class="btn secondary" id="settingsDeleteWeb">🌐 EXCLUIR CONTA PELO SITE</button></div><div class="statusLine" id="settingsStoreStatus" style="margin-top:12px" hidden></div><div class="statusLine" id="settingsPrivacyStatus" hidden></div><div class="cardActions"><button class="btn secondary" id="settingsDelete">EXCLUIR CONTA E DADOS</button><button class="btn primary" id="settingsSave">SALVAR CONFIGURAÇÕES</button><button class="btn secondary" id="settingsClose">VOLTAR</button></div><p style="font-size:10px;opacity:.72;margin-top:10px">A opção <b>Excluir conta e dados</b> funciona dentro do jogo. A opção <b>Excluir conta pelo site</b> existe para quem desinstalou o app ou não consegue entrar nele e precisa solicitar a exclusão pela Web.</p></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 171

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 172

```text
  <div class="panel" id="upgradePanel"><div class="card"><h2>⬆ Upgrades</h2><p>Melhorias persistentes. Cada nível altera o gameplay de verdade.</p><div class="walletBar"><b id="upgradeWallet">💎 0</b><span>Carteira local</span></div><div class="grid2" id="upgradeGrid"></div><div class="cardActions"><button class="btn primary" id="upgradeClose">Voltar</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 173

```text
  <div class="panel" id="profilePanel"><div class="card" id="profileCard"><div class="eyebrow">PERFIL • CONTA OPCIONAL</div><h2>👤 Perfil e acesso</h2><p>Escolha primeiro o idioma do jogo. País/região é separado do idioma e serve para perfil, ranking e análise. A moeda real das compras será definida pela Google Play.</p><div class="field"><label id="profileLanguageLabel">IDIOMA</label><select id="profileLanguage" style="width:100%;padding:10px;border-radius:10px;background:#0b1415;color:#fff;border:1px solid rgba(255,255,255,.15);font-size:16px"><option value="pt-BR">Português (Brasil)</option><option value="en">English</option><option value="es">Español</option><option value="fr">Français</option><option value="de">Deutsch</option><option value="it">Italiano</option><option value="ja">日本語</option><option value="ko">한국어</option><option value="zh-CN">简体中文</option></select></div><div class="field"><label>NOME <span class="requiredMark">*</span></label><input id="profileName" maxlength="40" autocomplete="name" placeholder="Seu nome" required></div><div class="field"><label>NOME NO RANKING</label><input id="profileNickname" maxlength="24" autocomplete="nickname" placeholder="Se deixar vazio, usaremos seu nome"></div><div class="field"><label id="profileCountryLabel">PAÍS / REGIÃO</label><select id="profileCountry" autocomplete="country-name"><option value="">Selecione seu país/região</option></select></div><div class="accountBox"><h3>🔐 Conta MAX HEALMS</h3><p>O login não é obrigatório para iniciar a aventura. Na versão Android, a conta permitirá recuperação/sincronização e restauração de direitos vinculados ao jogador.</p><div class="accountStatus" id="accountStatus">MODO CONVIDADO • nenhum login ativo</div><div class="field"><label>E-MAIL</label><input id="profileEmail" maxlength="100" type="email" autocomplete="email" placeholder="seuemail@exemplo.com"></div><div class="field"><label>SENHA</label><input id="accountPassword" maxlength="100" minlength="8" type="password" autocomplete="current-password" placeholder="mínimo 8 caracteres"></div><label class="consentRow"><input id="accountPrivacyConsent" type="checkbox"><span>Li e concordo com o tratamento de dados descrito na <button type="button" id="accountPrivacyLink">Política de Privacidade</button>. Esta confirmação é exigida apenas ao criar uma nova conta.</span></label><div class="grid2"><button class="btn primary" id="accountCreate">CRIAR CONTA</button><button class="btn secondary" id="accountSignIn">ENTRAR EM CONTA EXISTENTE</button></div><div class="grid2" style="margin-top:8px"><button class="btn secondary" id="accountGuest">CONTINUAR COMO CONVIDADO</button><button class="btn secondary" id="accountSignOut">SAIR DA CONTA</button></div><div class="statusLine" id="accountBridgeStatus">Conta segura disponível na versão Android.</div></div><div class="field"><label>ID ÚNICO DO JOGADOR</label><input id="profileUuid" readonly></div><div class="profileStatus" id="profileStatus">Perfil ainda não salvo.</div><div class="walletBar"><span id="profileXp">XP 0</span><span id="profileBest">Recorde 0</span></div><div class="cardActions"><button class="btn primary" id="profileSave">SALVAR ALTERAÇÕES</button><button class="btn secondary" id="profileClose">VOLTAR AO MENU</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 174

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 175

```text
  <div class="panel" id="shopPanel"><div class="card"><div class="eyebrow">PERSONAGENS</div><h2>👤 Varek</h2><p>Escolha o visual de Varek. O <b>Varek Original</b> é gratuito. <b>Varek Aventureiro</b> e <b>Varek Voren</b> são visuais premium por <b>R$ 14,99 cada</b>.</p>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 176

```text
    <div class="walletBar"><b>PERSONAGEM ATIVO</b><span id="shopOutfitStatus">VAREK ORIGINAL</span><span id="shopGemStatus">💎 0</span></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 177

```text
    <div class="shopGrid">
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 178

```text
      <div class="itemCard featured" data-card-outfit="outfit_varek_original"><div class="outfitDualPreview"><div class="outfitAngle"><canvas class="outfitPreview" id="previewOriginalFront" width="360" height="420"></canvas><span>FRENTE</span></div><div class="outfitAngle"><canvas class="outfitPreview" id="previewOriginalBack" width="360" height="420"></canvas><span>VERSO</span></div></div><b>🛡 Varek Original</b><small>Visual original do protagonista.</small><span class="priceTag ownedTag" data-price-outfit="outfit_varek_original">GRÁTIS</span><button data-buy-outfit="outfit_varek_original">USAR ORIGINAL</button></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 179

```text
      <div class="itemCard featured" data-card-outfit="outfit_varek_adventurer"><div class="outfitDualPreview"><div class="outfitAngle"><canvas class="outfitPreview" id="previewAdventurerFront" width="360" height="420"></canvas><span>FRENTE</span></div><div class="outfitAngle"><canvas class="outfitPreview" id="previewAdventurerBack" width="360" height="420"></canvas><span>VERSO</span></div></div><b>🧭 Varek Aventureiro</b><small>Visual aventureiro premium de Varek.</small><span class="priceTag" data-price-outfit="outfit_varek_adventurer">R$ 14,99</span><button data-buy-outfit="outfit_varek_adventurer">COMPRAR • R$ 14,99</button></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 180

```text
      <div class="itemCard featured" data-card-outfit="outfit_varek_voren"><div class="outfitDualPreview"><div class="outfitAngle"><canvas class="outfitPreview" id="previewVorenFront" width="360" height="420"></canvas><span>FRENTE</span></div><div class="outfitAngle"><canvas class="outfitPreview" id="previewVorenBack" width="360" height="420"></canvas><span>VERSO</span></div></div><b>🌲 Varek Voren</b><small>Visual selvagem premium de Varek.</small><span class="priceTag" data-price-outfit="outfit_varek_voren">R$ 14,99</span><button data-buy-outfit="outfit_varek_voren">COMPRAR • R$ 14,99</button></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 181

```text
    </div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 182

```text
    <div class="commerceOffer" id="premiumOffer"><div class="eyebrow">MAX HEALMS PREMIUM</div><h3>Sem anúncios obrigatórios</h3><p>Remove os anúncios de intervalo exibidos após derrotas. Anúncios premiados continuam opcionais. O Premium também completa o bônus inicial do jogador até <b>1.000 diamantes</b>.</p><div class="offerPrice" id="premiumStorePrice">R$ 14,99</div><div class="offerStatus" id="premiumStatus">PREMIUM • sem anúncios obrigatórios</div><button class="btn primary" id="buyPremium" style="margin-top:10px;width:100%">COMPRAR • R$ 14,99</button></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 183

```text
    <div class="purchaseStatus" id="commercePurchaseStatus"></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 184

```text
    <div class="cardActions"><button class="btn primary" id="shopClose">VOLTAR</button></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 185

```text
  </div></div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 186

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 187

```text
  <div class="panel" id="diamondShopPanel"><div class="card"><div class="eyebrow">LOJA 2 DE 2 • CONSUMÍVEIS</div><h2>💎 Loja de Diamantes</h2><p>Pacotes de diamantes para continuações e recursos. Diamantes são <b>consumíveis</b>.</p>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 188

```text
    <div class="walletBar"><b>LOJA DE DIAMANTES</b><span id="diamondWallet">Carteira • 💎 0</span></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 189

```text
    <div class="diamondGrid">
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 190

```text
      <div class="diamondCard"><strong>💎 100</strong><b data-store-price="max_healms_diamonds_100">R$ 1,99</b><small>Pacote de entrada.</small><button class="btn secondary" data-buy-diamonds="max_healms_diamonds_100">COMPRAR</button></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 191

```text
      <div class="diamondCard"><strong>💎 300</strong><b data-store-price="max_healms_diamonds_300">R$ 4,99</b><small>Mais flexibilidade para a jornada.</small><button class="btn secondary" data-buy-diamonds="max_healms_diamonds_300">COMPRAR</button></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 192

```text
      <div class="diamondCard"><strong>💎 750</strong><b data-store-price="max_healms_diamonds_750">R$ 10,99</b><small>Melhor custo por diamante.</small><button class="btn secondary" data-buy-diamonds="max_healms_diamonds_750">COMPRAR</button></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 193

```text
      <div class="diamondCard"><strong>💎 1.600</strong><b data-store-price="max_healms_diamonds_1600">R$ 19,99</b><small>Pacote de diamantes para a jornada.</small><button class="btn secondary" data-buy-diamonds="max_healms_diamonds_1600">COMPRAR</button></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 194

```text
      <div class="diamondCard"><strong>💎 3.600</strong><b data-store-price="max_healms_diamonds_3600">R$ 39,99</b><small>Pacote avançado para continuações e recursos.</small><button class="btn secondary" data-buy-diamonds="max_healms_diamonds_3600">COMPRAR</button></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 195

```text
      <div class="diamondCard best"><strong>💎 5.000</strong><b data-store-price="max_healms_diamonds_5000">R$ 49,99</b><small>Maior pacote de diamantes desta fase comercial.</small><button class="btn primary" data-buy-diamonds="max_healms_diamonds_5000">COMPRAR</button></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 196

```text
    </div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 197

```text
    <p class="commerceNote"><b>Diamantes são consumíveis:</b> podem ser gastos com personagens, continuações e outros recursos. No navegador, compras em reais são simuladas. No Android publicado, preço e cobrança serão fornecidos pelo Google Play Billing.</p>
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 198

```text
  <div class="purchaseStatus" id="diamondPurchaseStatus"></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 199

```text
  <div class="cardActions"><button class="btn secondary" id="restorePurchasesDiamonds">↻ RESTAURAR COMPRAS</button><button class="btn primary" id="diamondShopClose">VOLTAR</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 200

```text
  <div class="panel" id="rankingPanel"><div class="card"><h2>🏆 Ranking local</h2><p>Pontuação = distância + 25 pontos por ⭐ estrela. Cada corrida encerrada entra automaticamente no ranking local.</p><div class="rankRow head"><span>#</span><span>Jogador</span><span>m</span><span>⭐</span><span>Pontos</span></div><div id="rankingRows"></div><div class="cardActions"><button class="btn primary" id="rankingClose">Voltar</button></div></div></div><div class="panel" id="lastRunAnalysisPanel"><div class="card"><div class="eyebrow">QA • RESULTADO COMERCIAL</div><h2>📊 Última corrida • custo x ganho</h2><div id="lastRunAnalysisBody" class="statusLine" style="text-align:left;line-height:1.6;margin-top:10px">Nenhuma corrida encerrada ainda.</div><div class="cardActions"><button class="btn primary" id="lastRunAnalysisClose">VOLTAR</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 201

```text
    <div class="panel" id="shelterChoicePanel"><div class="card"><h2>🏕 Entrar no abrigo?</h2><p>Varek chegou à entrada pela <b>faixa direita</b>. O abrigo pausa a jornada e afasta as caçadoras. A hidratação é opcional e cobrada separadamente.</p><div class="shelterInfo"><b>ENTRADA LIVRE</b><br>Usar o abrigo acrescenta <b>+1 minuto</b> ao tempo do ranking. Você pode sair sem comprar hidratação.</div><div class="cardActions"><button class="btn primary" id="shelterAccept">ENTRAR NO ABRIGO</button><button class="btn secondary" id="shelterDecline">CONTINUAR CORRENDO</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 202

```text
  <div class="panel" id="shelterPanel"><div class="card"><h2>🏕 Abrigo • Hidratação</h2><p>A corrida está pausada. Confira sua hidratação e decida se deseja gastar diamantes ou continuar exatamente como está.</p><div class="shelterInfo"><b>HIDRATAÇÃO PAGA SOMENTE SE VOCÊ ESCOLHER</b><br>Chegar a <b>0%</b> durante a corrida causa desidratação. O abrigo adiciona <b>+1 minuto</b> ao ranking.</div><div class="shelterHydrationBox"><div>AO ENTRAR<b id="shelterHydrationBefore">100%</b></div><div>AGORA<b id="shelterHydrationNow">100%</b></div></div><div class="shelterStatus" id="shelterHydrationStatus">💧 Escolha uma opção ou saia sem comprar.</div><div class="grid2" style="margin-top:12px"><button class="btn primary" id="hydr20">+20% • 💎 40</button><button class="btn primary" id="hydr50">+50% • 💎 90</button><button class="btn primary" id="hydr75">+75% • 💎 130</button><button class="btn primary" id="hydrFull">COMPLETAR 100% • 💎 200</button></div><div class="shelterCounter" id="shelterCounter">05:00</div><div class="cardActions"><button class="btn secondary" id="shelterExit">SAIR SEM COMPRAR / CONTINUAR →</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 203

```text
  <div class="panel" id="pausePanel"><div class="card"><h2 id="pauseTitle">Jornada pausada</h2><p id="pauseText">Continue da mesma posição ou volte ao menu.</p><div class="cardActions"><button class="btn primary" id="resume">Continuar</button><button class="btn secondary" id="restart">Reiniciar</button><button class="btn secondary" id="backMenu">Menu</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 204

```text
  <div class="panel" id="revivePanel"><div class="card reviveCompact"><div class="eyebrow">FIM DA CORRIDA</div><h2 id="reviveTitle">Varek caiu</h2><p id="reviveText">A jornada terminou.</p><div class="reviveMiniRow"><span id="reviveWallet">💎 0</span><span id="reviveRank">🏆 —</span></div><div id="runEconomySummary" class="statusLine" style="margin:10px 0;text-align:left;line-height:1.45"></div><div class="grid2 reviveActions"><button class="btn primary" id="reviveAd">▶ ANÚNCIO • +1 VIDA</button><button class="btn secondary" id="revive1">+1 VIDA • 💎 150</button><button class="btn secondary" id="revive2" style="display:none">+2 VIDAS</button><button class="btn secondary" id="revive3" style="display:none">+3 VIDAS</button></div><div class="dangerNote" id="reviveSequence">2 anúncios premiados no máximo por corrida</div><div class="reviveStatus" id="reviveStatus"></div><div class="commerceOffer compactPremium" id="revivePremiumOffer"><span>⭐ Premium remove anúncios obrigatórios</span><button class="btn secondary" id="revivePremium">VER PREMIUM</button></div><div class="cardActions"><button class="btn secondary" id="giveUpRun">ENCERRAR CORRIDA</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 205

```text
<div class="panel" id="rewardedAdPanel"><div class="card rewardedMock"><div class="eyebrow">ANÚNCIO PREMIADO • SIMULAÇÃO PLAYER</div><h2>Assista para continuar</h2><div class="adBox"><div><div style="font-size:11px;letter-spacing:.14em;color:#b9c8c2">ESPAÇO DO ANÚNCIO</div><div class="count" id="rewardedAdCount">5</div><p id="rewardedAdText">Ao concluir, você recebe +1 vida e retorna deste ponto. Limite: 2 anúncios por corrida.</p></div></div><div class="cardActions"><button class="btn secondary" id="rewardedAdCancel">CANCELAR</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 206

```text
<div class="panel" id="interstitialAdPanel"><div class="card rewardedMock"><div class="eyebrow">ANÚNCIO DE INTERVALO • PLANO FREE</div><h2>Fim da corrida</h2><div class="adBox"><div><div style="font-size:11px;letter-spacing:.14em;color:#b9c8c2">ESPAÇO DO ANÚNCIO</div><div class="count" id="interstitialAdCount">5</div><p id="interstitialAdText">No plano FREE, este anúncio obrigatório aparece depois da derrota e antes de voltar ao menu. Premium remove este anúncio.</p></div></div><div class="statusLine">⭐ MAX HEALMS Premium remove anúncios obrigatórios. Anúncios premiados continuam opcionais.</div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 207

```text
  <div class="panel" id="realmCheckpointPanel"><div class="card"><div class="eyebrow">CHECKPOINT • PROGRESSO SALVO</div><h2 id="realmCheckpointTitle">Reino concluído</h2><p id="realmCheckpointText"></p><div class="statusLine" id="realmCheckpointRewardText">✓ PROGRESSO SALVO</div><div class="cardActions"><button class="btn primary" id="realmCheckpointContinue">CONTINUAR</button><button class="btn secondary" id="realmCheckpointDouble">▶ ANÚNCIO • x2 RECOMPENSA</button><button class="btn secondary" id="realmCheckpointExit">SAIR E CONTINUAR DEPOIS</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 208

```text
  <div class="panel" id="journeyEndPanel"><div class="card"><div class="eyebrow" id="journeyEndEyebrow">JORNADA CONCLUÍDA</div><h2 id="journeyEndTitle">Você chegou ao fim</h2><p id="journeyEndText"></p><div class="cardActions"><button class="btn primary" id="journeyNext">CONTINUAR</button><button class="btn secondary" id="journeyMenu">MENU</button></div></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 209

```text
  <div class="arrivalBanner" id="arrivalBanner">🏁 FRONTEIRA SEGURA • CHEGADA</div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 210

```text
  <div class="finalVictory" id="finalVictory"><div class="ey">MAX HEALMS • FIM DA JORNADA 2</div><h2 id="finalFamilyTitle">FAMÍLIA REUNIDA</h2><div class="endingText" id="finalEndingText">Varek e Lyra cruzaram a fronteira segura e finalmente reencontraram a família.</div><div class="placement" id="finalPlacement">🏆 COLOCAÇÃO LOCAL #1</div><div class="resultLine" id="finalResultLine">TEMPO 00:00 • 0 PONTOS</div><div class="unlockLine" id="finalUnlockLine">✓ JORNADA 2 CONCLUÍDA • DESBLOQUEADA NO MENU</div><div class="finalActions"><button class="btn primary" id="finalReplay">↻ REJOGAR JORNADA 2</button><button class="btn secondary" id="finalMenu">☰ MENU PRINCIPAL</button></div></div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 211

```text
  <button class="shelterPrompt" id="shelterPrompt">🏕 ABRIGO PRÓXIMO • FAIXA DIREITA →</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 212

```text
</div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 213

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 214

```text
<style>
```

**Explicação:** Inicia as regras CSS responsáveis pela aparência do jogo.

### Linha 215

```text
#scenarioTestPanel{z-index:1200;align-items:flex-start;overflow:auto;padding:16px 10px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 216

```text
#scenarioTestPanel .card{width:min(94vw,620px);margin:10px auto 28px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 217

```text
.qaRealmGrid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 218

```text
.qaRealmGrid .btn{min-height:50px;font-size:12px;line-height:1.15}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 219

```text
.qaJourneyRow{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0}
```

**Explicação:** Controla o fluxo de Jornada 1, Jornada 2, checkpoints ou finalização.

### Linha 220

```text
.qaQuickGrid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 221

```text
.qaStatus{margin:10px 0;padding:9px 10px;border:1px solid rgba(255,255,255,.13);border-radius:10px;font-size:12px;opacity:.9}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 222

```text
#qaReturnBtn{display:none;position:fixed;z-index:1250;right:10px;top:max(58px,calc(env(safe-area-inset-top) + 52px));padding:9px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.22);background:rgba(8,10,12,.88);color:#fff;font-weight:800;font-size:11px}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 223

```text
#qaReturnBtn.show{display:block}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 224

```text
@media(max-width:480px){.qaRealmGrid{grid-template-columns:1fr}.qaRealmGrid .btn{min-height:46px}}
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 225

```text
</style>
```

**Explicação:** Encerra o bloco de estilos CSS.

### Linha 226

```text
<button id="qaReturnBtn" type="button">🧪 CENÁRIOS</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 227

```text
<div class="panel" id="scenarioTestPanel" style="display:none">
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 228

```text
  <div class="card">
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 229

```text
    <div class="eyebrow">TESTE MOBILE • MOBILE86</div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 230

```text
    <h2>Escolha o cenário</h2>
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 231

```text
    <p>Abra cada reino individualmente no celular. O progresso normal do jogador não é usado para bloquear os testes.</p>
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 232

```text
    <div class="qaJourneyRow">
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 233

```text
      <button class="btn primary active" id="scenarioJourney1" type="button">JORNADA 1</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 234

```text
      <button class="btn secondary" id="scenarioJourney2" type="button">JORNADA 2</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 235

```text
    </div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 236

```text
    <div class="qaStatus" id="qaLaunchStatus">CARREGANDO MOTOR 3D... Você já pode escolher um cenário.</div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 237

```text
    <button class="btn primary" id="vhalorFloodExitTop" type="button" style="width:100%;margin:8px 0 12px">VHALOR • SAÍDA INUNDADA • 6s ANTES</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 238

```text
    <div class="qaRealmGrid">
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 239

```text
      <button class="btn secondary" data-scenario-test="0" type="button">1 • TERRAS DOS DRAGÕES</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 240

```text
      <button class="btn secondary" data-scenario-test="1" type="button">2 • RUÍNAS DE KHARVOR</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 241

```text
      <button class="btn secondary" data-scenario-test="2" type="button">3 • VALE DAS CINZAS</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 242

```text
      <button class="btn secondary" data-scenario-test="3" type="button">4 • RUÍNAS DE VHALOR</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 243

```text
      <button class="btn secondary" data-scenario-test="4" type="button">5 • FLORESTA DE NERIS</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 244

```text
      <button class="btn secondary" data-scenario-test="5" type="button">6 • REINO CELESTIAL</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 245

```text
    </div>
```

**Explicação:** Fecha um contêiner visual aberto anteriormente.

### Linha 246

```text
    <div class="eyebrow" style="margin-top:14px">TRECHOS CRÍTICOS</div>
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 247

```text
    <div class="qaQuickGrid">
```

**Explicação:** Cria um contêiner visual usado para organizar a interface.

### Linha 248

```text
      <button class="btn secondary" id="kharvorDropQuick" type="button">KHARVOR • ENTRADA DO TÚNEL</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 249

```text
      <button class="btn secondary" id="kharvorLowerQuick" type="button">KHARVOR • TÚNEL SECO</button>
```

**Explicação:** Cria um botão interativo da interface.

### Linha 250

```text
      <button class="btn secondary" id="nerisDropQuick" type="button">NERIS • ENTRADA DO TÚNEL</button>
```

**Explicação:** Cria um botão interativo da interface.

