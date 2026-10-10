# index.html — Parte 4

Linhas **751 a 1000** da MOBILE86.

### Linha 751

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 752

```text
// ===== MAX HEALMS • ECONOMIA COMERCIAL / GOOGLE PLAY READY =====
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 753

```text
const PLAY_STORE_CONFIG={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 754

```text
 androidPackageCandidate:'com.maxhealms.game',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 755

```text
 premiumSku:'max_healms_premium',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 756

```text
 privacyPublicUrl:'https://rodrigomaximiano4-coder.github.io/MAX-HEALMS-RELEASE/PRIVACY-POLICY.html',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 757

```text
 deleteAccountPublicUrl:'https://rodrigomaximiano4-coder.github.io/MAX-HEALMS-RELEASE/DELETE-ACCOUNT.html',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 758

```text
 privacyVersion:'2026-10-05'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 759

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 760

```text
const COMMERCE_CONFIG={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 761

```text
 signupFreeGems:500,
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 762

```text
 premiumWelcomeTotal:1000,
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 763

```text
 premiumPriceBRL:14.99,
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 764

```text
 premiumStandardFuturePriceBRL:29.90,
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 765

```text
 premiumCampaign:'launch',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 766

```text
 premiumIncluded:[]
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 767

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 768

```text
const DIAMOND_PACKS={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 769

```text
 max_healms_diamonds_100:{gems:100,price:1.99},max_healms_diamonds_300:{gems:300,price:4.99},max_healms_diamonds_750:{gems:750,price:10.99},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 770

```text
 max_healms_diamonds_1600:{gems:1600,price:19.99},max_healms_diamonds_3600:{gems:3600,price:39.99},max_healms_diamonds_5000:{gems:5000,price:49.99}
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 771

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 772

```text
const LEGACY_PRODUCT_MAP={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 773

```text
 premium_upgrade:PLAY_STORE_CONFIG.premiumSku,max_healms_darik_adventurer:'max_healms_varek_adventurer',max_healms_darik_voren:'max_healms_varek_voren',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 774

```text
 diamonds_100:'max_healms_diamonds_100',diamonds_300:'max_healms_diamonds_300',diamonds_750:'max_healms_diamonds_750',
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 775

```text
 diamonds_1600:'max_healms_diamonds_1600',diamonds_3600:'max_healms_diamonds_3600',diamonds_5000:'max_healms_diamonds_5000'
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 776

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 777

```text
function canonicalProductId(id){return LEGACY_PRODUCT_MAP[id]||id}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 778

```text
const BILLING_PREVIEW=!(window.MaxHealmsBilling&&typeof window.MaxHealmsBilling.purchase==='function');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 779

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 780

```text
const NATIVE_PRODUCTION=!!(window.MaxHealmsRuntime&&window.MaxHealmsRuntime.isProduction===true);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 781

```text
const LOCAL_TEST_BUILD=!NATIVE_PRODUCTION;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 782

```text
const AUTH_PREVIEW_KEY='max_healms_preview_accounts_v1';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 783

```text
function productionReadinessIssues(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 784

```text
 if(!NATIVE_PRODUCTION)return [];
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 785

```text
 const issues=[];
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 786

```text
 if(!isHttpsUrl(PLAY_STORE_CONFIG.privacyPublicUrl))issues.push('URL HTTPS da Política de Privacidade');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 787

```text
 if(!isHttpsUrl(PLAY_STORE_CONFIG.deleteAccountPublicUrl))issues.push('URL HTTPS de exclusão de conta');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 788

```text
 if(!(window.MaxHealmsAuth&&typeof window.MaxHealmsAuth.signIn==='function'))issues.push('autenticação segura');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 789

```text
 if(!(window.MaxHealmsBilling&&typeof window.MaxHealmsBilling.purchase==='function'))issues.push('Google Play Billing');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 790

```text
 if(!(window.MaxHealmsAds&&typeof window.MaxHealmsAds.showInterstitialAfterRun==='function'))issues.push('SDK/ponte de anúncios');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 791

```text
 return issues;
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 792

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 793

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 794

```text
function isHttpsUrl(v){try{return new URL(v).protocol==='https:'}catch(_){return false}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 795

```text
function legalResource(kind){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 796

```text
 const publicUrl=kind==='privacy'?PLAY_STORE_CONFIG.privacyPublicUrl:PLAY_STORE_CONFIG.deleteAccountPublicUrl;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 797

```text
 if(isHttpsUrl(publicUrl))return publicUrl;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 798

```text
 return kind==='privacy'?'PRIVACY-POLICY.html':'DELETE-ACCOUNT.html';
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 799

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 800

```text
function openExternalResource(kind){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 801

```text
 const url=legalResource(kind);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 802

```text
 try{if(window.MaxHealmsRuntime&&typeof window.MaxHealmsRuntime.openExternalUrl==='function'){window.MaxHealmsRuntime.openExternalUrl(url);return true}}catch(e){console.warn('OPEN URL BRIDGE',e)}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 803

```text
 window.open(url,'_blank','noopener');return true
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 804

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 805

```text
async function previewPasswordHash(email,password){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 806

```text
 const raw='MAX_HEALMS_PREVIEW_V1|'+String(email).toLowerCase()+'|'+String(password);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 807

```text
 try{if(window.crypto&&crypto.subtle){const b=new TextEncoder().encode(raw),h=await crypto.subtle.digest('SHA-256',b);return Array.from(new Uint8Array(h)).map(x=>x.toString(16).padStart(2,'0')).join('')}}catch(_){ }
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 808

```text
 let h=2166136261;for(let i=0;i<raw.length;i++){h^=raw.charCodeAt(i);h=Math.imul(h,16777619)}return 'fallback-'+(h>>>0).toString(16)
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 809

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 810

```text
function readPreviewAccounts(){try{const v=JSON.parse(localStorage.getItem(AUTH_PREVIEW_KEY)||'{}');return v&&typeof v==='object'?v:{}}catch(_){return {}}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 811

```text
function writePreviewAccounts(v){localStorage.setItem(AUTH_PREVIEW_KEY,JSON.stringify(v||{}))}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 812

```text
const AuthService={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 813

```text
 get native(){return !!(window.MaxHealmsAuth&&typeof window.MaxHealmsAuth.signIn==='function')},
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 814

```text
 async createAccount(email,password,profile={}){
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 815

```text
  email=String(email||'').trim().toLowerCase();
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 816

```text
  if(this.native)return await window.MaxHealmsAuth.createAccount({email,password,profile,privacyVersion:PLAY_STORE_CONFIG.privacyVersion});
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 817

```text
  if(NATIVE_PRODUCTION)throw new Error('Serviço de autenticação não conectado na versão de produção.');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 818

```text
  const db=readPreviewAccounts();if(db[email])throw new Error('Já existe uma conta de teste com este e-mail neste navegador.');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 819

```text
  db[email]={email,passwordHash:await previewPasswordHash(email,password),profile,createdAt:Date.now()};writePreviewAccounts(db);
```

**Explicação:** Controla clima, partículas ou efeitos atmosféricos.

### Linha 820

```text
  return {ok:true,email,userId:'preview-'+email,provider:'preview-local',profile}
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 821

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 822

```text
 async signIn(email,password){
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 823

```text
  email=String(email||'').trim().toLowerCase();
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 824

```text
  if(this.native)return await window.MaxHealmsAuth.signIn({email,password});
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 825

```text
  if(NATIVE_PRODUCTION)throw new Error('Serviço de autenticação não conectado na versão de produção.');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 826

```text
  const db=readPreviewAccounts(),rec=db[email];if(!rec)throw new Error('Conta de teste não encontrada neste navegador.');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 827

```text
  const hash=await previewPasswordHash(email,password);if(hash!==rec.passwordHash)throw new Error('E-mail ou senha inválidos.');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 828

```text
  return {ok:true,email,userId:'preview-'+email,provider:'preview-local',profile:rec.profile||null}
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 829

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 830

```text
 async signOut(){if(this.native&&typeof window.MaxHealmsAuth.signOut==='function')return await window.MaxHealmsAuth.signOut();return {ok:true}},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 831

```text
 async deleteAccount(email){
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 832

```text
  if(this.native&&typeof window.MaxHealmsAuth.deleteAccount==='function')return await window.MaxHealmsAuth.deleteAccount();
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 833

```text
  if(NATIVE_PRODUCTION)throw new Error('Exclusão online não conectada na versão de produção.');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 834

```text
  email=String(email||'').trim().toLowerCase();if(email){const db=readPreviewAccounts();delete db[email];writePreviewAccounts(db)}return {ok:true,preview:true}
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 835

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 836

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 837

```text
const PrivacyService={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 838

```text
 consentReady:false,
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 839

```text
 async initialize(){
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 840

```text
  try{if(window.MaxHealmsPrivacy&&typeof window.MaxHealmsPrivacy.requestAdConsent==='function'){await window.MaxHealmsPrivacy.requestAdConsent();this.consentReady=true;return true}}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 841

```text
  catch(e){console.warn('PRIVACY CONSENT',e)}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 842

```text
  this.consentReady=!NATIVE_PRODUCTION;return this.consentReady
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 843

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 844

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 845

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 846

```text
const REQUIRE_PROFILE_FOR_COMMERCE=!TEST_MODE;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 847

```text
const PRODUCT_CATALOG={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 848

```text
 [PLAY_STORE_CONFIG.premiumSku]:{type:'nonconsumable',price:COMMERCE_CONFIG.premiumPriceBRL},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 849

```text
 max_healms_varek_adventurer:{type:'nonconsumable',price:14.99,outfitId:'outfit_varek_adventurer'},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 850

```text
 max_healms_varek_voren:{type:'nonconsumable',price:14.99,outfitId:'outfit_varek_voren'},
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 851

```text
 ...Object.fromEntries(Object.entries(DIAMOND_PACKS).map(([id,p])=>[id,{type:'consumable',price:p.price,gems:p.gems}]))
```

**Explicação:** Regra CSS que define aparência, posicionamento ou adaptação responsiva da interface.

### Linha 852

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 853

```text
let PLAY_STORE_PRICE_LABELS={};
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 854

```text
let commerceBusy=false,pendingCommerceProduct=null;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 855

```text
function brl(v){return 'R$ '+Number(v).toFixed(2).replace('.',',')}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 856

```text
function setCommerceStatus(msg,kind=''){for(const id of ['commercePurchaseStatus','diamondPurchaseStatus']){const el=$(id);if(el){el.className='purchaseStatus'+(kind?' '+kind:'');el.textContent=msg}}}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 857

```text
function ensureCommerceSave(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 858

```text
 SAVE.lastForcedAdAt=Number(SAVE.lastForcedAdAt||0);SAVE.forcedAdsShown=Number(SAVE.forcedAdsShown||0);
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 859

```text
 SAVE.signupRewardClaimed=SAVE.signupRewardClaimed===true;SAVE.welcomeBonusGranted=Number(SAVE.welcomeBonusGranted||0);
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 860

```text
 SAVE.premiumOwned=SAVE.premiumOwned===true;SAVE.premiumBonusClaimed=SAVE.premiumBonusClaimed===true;
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 861

```text
 SAVE.ownedProducts=Array.isArray(SAVE.ownedProducts)?Array.from(new Set(SAVE.ownedProducts.map(canonicalProductId))):[];
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 862

```text
 SAVE.purchaseHistory=Array.isArray(SAVE.purchaseHistory)?SAVE.purchaseHistory:[];
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 863

```text
 if(SAVE.premiumOwned){SAVE.ownedProducts=Array.from(new Set([...SAVE.ownedProducts,PLAY_STORE_CONFIG.premiumSku]));SAVE.inventory=Array.from(new Set([...SAVE.inventory,...COMMERCE_CONFIG.premiumIncluded]));}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 864

```text
 for(const [sku,id] of Object.entries(OUTFIT_PRODUCT_TO_ID)){if(SAVE.ownedProducts.includes(sku))SAVE.inventory=Array.from(new Set([...SAVE.inventory,id]))}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 865

```text
 SAVE.inventory=Array.from(new Set(['outfit_varek_original',...SAVE.inventory.filter(id=>id==='outfit_varek_original'||Object.values(OUTFIT_PRODUCT_TO_ID).includes(id))]));
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 866

```text
 if(!SAVE.inventory.includes(SAVE.equipped.outfit))SAVE.equipped.outfit='outfit_varek_original';
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 867

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 868

```text
function grantSignupRewardIfNeeded(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 869

```text
 if(!SAVE.profileCompleted||SAVE.signupRewardClaimed)return 0;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 870

```text
 const grant=Math.max(0,COMMERCE_CONFIG.signupFreeGems-SAVE.welcomeBonusGranted);if(grant){SAVE.gems+=grant;SAVE.welcomeBonusGranted+=grant}
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 871

```text
 SAVE.signupRewardClaimed=true;saveState();return grant;
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 872

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 873

```text
function grantPremiumBenefits(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 874

```text
 let grant=0;SAVE.premiumOwned=true;SAVE.ownedProducts=Array.from(new Set([...SAVE.ownedProducts,PLAY_STORE_CONFIG.premiumSku]));
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 875

```text
 SAVE.inventory=Array.from(new Set([...SAVE.inventory,...COMMERCE_CONFIG.premiumIncluded]));
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 876

```text
 if(SAVE.welcomeBonusGranted<COMMERCE_CONFIG.premiumWelcomeTotal){grant=COMMERCE_CONFIG.premiumWelcomeTotal-SAVE.welcomeBonusGranted;SAVE.gems+=grant;SAVE.welcomeBonusGranted=COMMERCE_CONFIG.premiumWelcomeTotal}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 877

```text
 SAVE.premiumBonusClaimed=true;return grant;
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 878

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 879

```text
const BillingService={
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 880

```text
 async products(){
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 881

```text
   const ids=Object.keys(PRODUCT_CATALOG);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 882

```text
   if(window.MaxHealmsBilling&&typeof window.MaxHealmsBilling.getProducts==='function'){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 883

```text
     const r=await window.MaxHealmsBilling.getProducts(ids);return r||{};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 884

```text
   }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 885

```text
   return Object.fromEntries(ids.map(id=>[id,{id,formattedPrice:brl(PRODUCT_CATALOG[id].price),preview:true}]));
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 886

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 887

```text
 async purchase(productId){
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 888

```text
   productId=canonicalProductId(productId);const p=PRODUCT_CATALOG[productId];if(!p)throw new Error('Produto não encontrado: '+productId);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 889

```text
   if(window.MaxHealmsBilling&&typeof window.MaxHealmsBilling.purchase==='function')return await window.MaxHealmsBilling.purchase(productId);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 890

```text
   if(NATIVE_PRODUCTION)throw new Error('Google Play Billing não está conectado nesta versão de produção.');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 891

```text
   await new Promise(r=>setTimeout(r,650));return {ok:true,preview:true,productId,transactionId:'MH-PREVIEW-'+Date.now()};
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 892

```text
 },
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 893

```text
 async restore(){
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 894

```text
   if(window.MaxHealmsBilling&&typeof window.MaxHealmsBilling.restore==='function')return await window.MaxHealmsBilling.restore();
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 895

```text
   if(NATIVE_PRODUCTION)throw new Error('Restauração do Google Play Billing não está conectada nesta versão de produção.');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 896

```text
   await new Promise(r=>setTimeout(r,450));return {ok:true,preview:true,products:[...SAVE.ownedProducts]};
```

**Explicação:** Espera a conclusão de uma operação assíncrona antes de prosseguir.

### Linha 897

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 898

```text
};
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 899

```text
async function syncPlayStorePrices(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 900

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 901

```text
  const r=await BillingService.products();PLAY_STORE_PRICE_LABELS={};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 902

```text
  if(Array.isArray(r)){r.forEach(x=>{if(x&&x.id)PLAY_STORE_PRICE_LABELS[x.id]=x.formattedPrice||x.priceText||''})}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 903

```text
  else Object.entries(r||{}).forEach(([id,x])=>{if(x)PLAY_STORE_PRICE_LABELS[id]=x.formattedPrice||x.priceText||''});
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 904

```text
  const pp=$('premiumStorePrice');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 905

```text
  if(pp)pp.textContent=PLAY_STORE_PRICE_LABELS[PLAY_STORE_CONFIG.premiumSku]||storePrice(PLAY_STORE_CONFIG.premiumSku,COMMERCE_CONFIG.premiumPriceBRL);
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 906

```text
  document.querySelectorAll('[data-store-price]').forEach(el=>{const id=el.dataset.storePrice,p=DIAMOND_PACKS[id];el.textContent=PLAY_STORE_PRICE_LABELS[id]||(p?storePrice(id,p.price):el.textContent)});
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 907

```text
  for(const id of STORE_OUTFIT_IDS){const cfg=HERO_OUTFITS[id],el=document.querySelector('[data-price-outfit="'+id+'"]');if(el&&!ownsOutfit(id)&&cfg.storeSku)el.textContent=storePrice(cfg.storeSku,cfg.priceBRL||14.99)}
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 908

```text
  updateCommerceUI();return true;
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 909

```text
 }catch(e){console.warn('PLAY STORE PRODUCTS',e);return false}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 910

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 911

```text
function storePrice(productId,fallback){return PLAY_STORE_PRICE_LABELS[productId]||brl(fallback)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 912

```text
function updateCommerceUI(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 913

```text
 const ps=$('premiumStatus'),pb=$('buyPremium'),rp=$('revivePremiumOffer'),rb=$('revivePremium'),dw=$('diamondWallet');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 914

```text
 if(ps)ps.textContent=SAVE.premiumOwned?'✅ PREMIUM ATIVO • SEM ANÚNCIOS OBRIGATÓRIOS':'PREMIUM • remove anúncios obrigatórios após derrotas • bônus inicial até 1.000 diamantes';
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 915

```text
 if(pb){pb.disabled=commerceBusy||SAVE.premiumOwned;pb.textContent=SAVE.premiumOwned?'✅ PREMIUM JÁ ADQUIRIDO':((BILLING_PREVIEW?'TESTAR COMPRA • ':'COMPRAR • ')+storePrice(PLAY_STORE_CONFIG.premiumSku,COMMERCE_CONFIG.premiumPriceBRL))}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 916

```text
 if(rp)rp.style.display=SAVE.premiumOwned?'none':'block';
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 917

```text
 if(rb){rb.disabled=commerceBusy||SAVE.premiumOwned;rb.textContent=SAVE.premiumOwned?'✅ PREMIUM ATIVO':'⭐ PREMIUM • '+storePrice(PLAY_STORE_CONFIG.premiumSku,COMMERCE_CONFIG.premiumPriceBRL)}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 918

```text
 if(dw)dw.textContent='Carteira • 💎 '+gemText();
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 919

```text
 document.querySelectorAll('[data-buy-diamonds]').forEach(b=>{const p=DIAMOND_PACKS[b.dataset.buyDiamonds];b.disabled=commerceBusy;b.textContent=(BILLING_PREVIEW?'TESTAR • ':'COMPRAR • ')+storePrice(b.dataset.buyDiamonds,p.price)});
```

**Explicação:** Linha de configuração, estilo ou objeto que define propriedades usadas pelo jogo.

### Linha 920

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 921

```text
async function purchaseCashProduct(productId){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 922

```text
 if(commerceBusy)return;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 923

```text
 if(REQUIRE_PROFILE_FOR_COMMERCE&&!SAVE.profileCompleted){pendingCommerceProduct=productId;setCommerceStatus('Salve Nome e País antes de vincular uma compra ao seu ID.','warn');UI.shopPanel?.classList.remove('show');UI.diamondShopPanel?.classList.remove('show');renderProfile();UI.profilePanel.classList.add('show');return}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 924

```text
 productId=canonicalProductId(productId);if(productId===PLAY_STORE_CONFIG.premiumSku&&SAVE.premiumOwned){setCommerceStatus('MAX HEALMS Premium já pertence a este jogador.','good');return}
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 925

```text
 commerceBusy=true;updateCommerceUI();setCommerceStatus('Processando '+(BILLING_PREVIEW?'compra simulada':'compra')+'...');
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 926

```text
 try{
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 927

```text
   const receipt=await BillingService.purchase(productId);if(!receipt||receipt.ok!==true)throw new Error('Compra não concluída');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 928

```text
   let msg='';
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 929

```text
   if(productId===PLAY_STORE_CONFIG.premiumSku){const g=grantPremiumBenefits();msg='PREMIUM LIBERADO PARA SEMPRE • SEM ANÚNCIOS OBRIGATÓRIOS'+(g?' • +💎 '+g:'')}
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 930

```text
   else if(OUTFIT_PRODUCT_TO_ID[productId]){const id=OUTFIT_PRODUCT_TO_ID[productId],cfg=HERO_OUTFITS[id];SAVE.ownedProducts=Array.from(new Set([...SAVE.ownedProducts,productId]));SAVE.inventory=Array.from(new Set([...SAVE.inventory,id]));SAVE.equipped.outfit=id;msg=cfg.label+' LIBERADO PARA SEMPRE'}
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 931

```text
   else if(DIAMOND_PACKS[productId]){const p=DIAMOND_PACKS[productId];SAVE.gems+=p.gems;msg='💎 '+p.gems+' DIAMANTES ADICIONADOS À CARTEIRA'}
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 932

```text
   SAVE.purchaseHistory.push({productId,at:Date.now(),preview:!!receipt.preview,transactionId:receipt.transactionId||null,referencePriceBRL:purchaseReferenceBRL(productId),currency:'BRL'});saveState();renderShop();refreshMenuStats();if(OUTFIT_PRODUCT_TO_ID[productId]&&scene&&loader)await reloadHeroOutfit();setCommerceStatus((receipt.preview?'PREVIEW • ':'')+msg,'good');toast(msg);
```

**Explicação:** Manipula o estado persistente do jogador, como progresso, perfil, moedas ou desbloqueios.

### Linha 933

```text
 }catch(err){console.error('COMMERCE',err);setCommerceStatus('Não foi possível concluir: '+String(err&&err.message||err),'bad')}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 934

```text
 finally{commerceBusy=false;renderShop();updateCommerceUI()}
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 935

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 936

```text
async function restoreCommercePurchases(){
```

**Explicação:** Declara uma função assíncrona, permitindo aguardar carregamentos ou operações antes de continuar.

### Linha 937

```text
 if(commerceBusy)return;commerceBusy=true;updateCommerceUI();setCommerceStatus('Verificando compras permanentes...');
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 938

```text
 try{const r=await BillingService.restore();for(const raw of (r.products||[])){const p=canonicalProductId(raw);if(p===PLAY_STORE_CONFIG.premiumSku)grantPremiumBenefits();if(OUTFIT_PRODUCT_TO_ID[p]){SAVE.ownedProducts=Array.from(new Set([...SAVE.ownedProducts,p]));SAVE.inventory=Array.from(new Set([...SAVE.inventory,OUTFIT_PRODUCT_TO_ID[p]]))}}saveState();renderShop();setCommerceStatus((r.preview?'PREVIEW • ':'')+'Compras permanentes restauradas para este ID.','good')}
```

**Explicação:** Inicia um bloco protegido para tratar possíveis erros.

### Linha 939

```text
 catch(err){setCommerceStatus('Falha ao restaurar compras.','bad')}finally{commerceBusy=false;renderShop();updateCommerceUI()}
```

**Explicação:** Captura e trata um erro ocorrido no bloco anterior.

### Linha 940

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 941

```text
function showStoreSection(which){updateCommerceUI()}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 942

```text

```

**Explicação:** Linha em branco usada para separar blocos e melhorar a leitura do arquivo.

### Linha 943

```text
ensureCommerceSave();
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 944

```text
if(SAVE.profileCompleted&&!SAVE.signupRewardClaimed)grantSignupRewardIfNeeded();
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 945

```text
function fmtTime(sec){sec=Math.max(0,Math.floor(sec));return String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0')}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 946

```text
function runScore(){return Math.floor(distance)+runStars*25}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 947

```text
function updateHUD(){if(UI.distance)UI.distance.textContent=Math.floor(distance)+' m';if(UI.stars)UI.stars.textContent='⭐ '+runStars;if(UI.score)UI.score.textContent=runScore();if(UI.lives)UI.lives.textContent='❤'.repeat(Math.max(0,lives))+(shieldCharges?' 🛡'+shieldCharges:'');if(UI.gems)UI.gems.textContent='💎 '+gemText();if(UI.water)UI.water.textContent=Math.max(0,Math.floor(water))+'%';if(UI.runTime)UI.runTime.textContent=fmtTime(elapsed+timePenalty)}
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 948

```text
let currentRunResult=null;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 949

```text
// INTERNO / QA • SIMULAÇÃO DE MONETIZAÇÃO. NÃO EXIBIR NA BUILD DO JOGADOR.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 950

```text
// Valores abaixo são premissas de teste por impressão, NÃO receita real garantida.
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 951

```text
const MONETIZATION_SIM={rewardedBRL:.015,interstitialBRL:.008};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 952

```text
const STORE_FEE_SIM_RATE=.15;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 953

```text
function purchaseReferenceBRL(productId){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 954

```text
 productId=canonicalProductId(productId);
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 955

```text
 if(productId===PLAY_STORE_CONFIG.premiumSku)return Number(COMMERCE_CONFIG.premiumPriceBRL)||0;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 956

```text
 if(DIAMOND_PACKS[productId])return Number(DIAMOND_PACKS[productId].price)||0;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 957

```text
 if(OUTFIT_PRODUCT_TO_ID[productId])return Number(HERO_OUTFITS[OUTFIT_PRODUCT_TO_ID[productId]]?.priceBRL)||0;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 958

```text
 return 0
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 959

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 960

```text
function commerceSinceReset(){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 961

```text
 const qs=SAVE.qaSession||{},since=Number(qs.startedAt||0),rows=(Array.isArray(SAVE.purchaseHistory)?SAVE.purchaseHistory:[]).filter(x=>Number(x?.at||0)>=since);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 962

```text
 let gross=0,premium=0,diamonds=0,outfits=0;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 963

```text
 for(const x of rows){
```

**Explicação:** Inicia um laço de repetição para percorrer valores ou objetos.

### Linha 964

```text
   const v=Number(x.referencePriceBRL||purchaseReferenceBRL(x.productId))||0;gross+=v;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 965

```text
   const id=canonicalProductId(x.productId);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 966

```text
   if(id===PLAY_STORE_CONFIG.premiumSku)premium+=v;
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 967

```text
   else if(DIAMOND_PACKS[id])diamonds+=v;
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 968

```text
   else if(OUTFIT_PRODUCT_TO_ID[id])outfits+=v;
```

**Explicação:** Define o caminho alternativo quando a condição anterior não é atendida.

### Linha 969

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 970

```text
 const fee=gross*STORE_FEE_SIM_RATE,net=gross-fee;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 971

```text
 return {count:rows.length,gross,fee,net,premium,diamonds,outfits,rows}
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 972

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 973

```text
function sessionMonetizationAnalysis(result=null,includeProjectedInterstitial=true){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 974

```text
 const eco=result?.economy||{};
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 975

```text
 const collected=Number(eco.collectedGems??runGems)||0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 976

```text
 const spent=Number(eco.spentGems??runSpentGems)||0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 977

```text
 const rewarded=Number(eco.rewardedAds??runRewardedAds)||0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 978

```text
 const interstitial=Number(eco.interstitialAds??runInterstitialAds)||0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 979

```text
 const endGems=Number(eco.endGems??SAVE.gems)||0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 980

```text
 const paid=Number(eco.paidContinues??runPaidContinues)||0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 981

```text
 const next=REVIVE_SEQUENCE[Math.min(reviveStep,REVIVE_SEQUENCE.length-1)]||null;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 982

```text
 const projectedInterstitial=includeProjectedInterstitial&&!SAVE.premiumOwned&&interstitial===0?1:0;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 983

```text
 const adEstimate=rewarded*MONETIZATION_SIM.rewardedBRL+(interstitial+projectedInterstitial)*MONETIZATION_SIM.interstitialBRL;
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 984

```text
 let packageSuggestion=null,deficit=0;
```

**Explicação:** Declara uma variável JavaScript cujo valor pode mudar durante a execução.

### Linha 985

```text
 if(next&&endGems<next.price){
```

**Explicação:** Executa o bloco seguinte somente quando a condição indicada for verdadeira.

### Linha 986

```text
   deficit=next.price-endGems;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 987

```text
   const packs=Object.entries(DIAMOND_PACKS).map(([id,p])=>({id,...p})).sort((a,b)=>a.gems-b.gems);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 988

```text
   packageSuggestion=packs.find(p=>p.gems>=deficit)||packs[packs.length-1]||null;
```

**Explicação:** Atribui ou atualiza um valor usado pela lógica ou pela interface.

### Linha 989

```text
 }
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 990

```text
 const pressure=!next?'SEM NOVA OFERTA':endGems>=next.price?'BAIXA':(endGems>=next.price*.5?'MÉDIA':'ALTA');
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 991

```text
 return {collected,spent,rewarded,interstitial,endGems,paid,next,projectedInterstitial,adEstimate,packageSuggestion,deficit,pressure};
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 992

```text
}
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 993

```text
function renderSessionMonetizationSummary(result=null,includeProjectedInterstitial=true){
```

**Explicação:** Declara uma função reutilizável com uma responsabilidade específica no jogo.

### Linha 994

```text
 const a=sessionMonetizationAnalysis(result,includeProjectedInterstitial);
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 995

```text
 const nextTxt=a.next?('💎 '+a.next.price+' por +'+a.next.lives+(a.next.lives===1?' vida':' vidas')):'sem nova oferta';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 996

```text
 const pkg=a.packageSuggestion?(' • menor pacote capaz de cobrir a falta: 💎'+a.packageSuggestion.gems+' / '+brl(a.packageSuggestion.price)):'';
```

**Explicação:** Declara uma constante JavaScript usada pelo jogo.

### Linha 997

```text
 return '<b>ANÁLISE AUTOMÁTICA DA SESSÃO</b><br>'+
```

**Explicação:** Encerra a função atual e devolve um resultado, quando aplicável.

### Linha 998

```text
   '💎 Coletados: '+a.collected+' • gastos: '+a.spent+' • saldo: '+a.endGems+'<br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 999

```text
   '▶ Rewarded: '+a.rewarded+' • intersticiais: '+a.interstitial+(a.projectedInterstitial?' (+1 previsto ao encerrar)':'')+'<br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

### Linha 1000

```text
   '↻ Continuações pagas: '+a.paid+' • próxima oferta: '+nextTxt+'<br>'+
```

**Explicação:** Executa uma instrução do jogo ou completa o bloco lógico/visual iniciado nas linhas próximas.

