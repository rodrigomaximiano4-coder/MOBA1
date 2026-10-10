# max-realms-security.js — código comentado linha a linha

### Linha 1

```text
/*
```

**Explicação:** Comentário de documentação; não é executado como lógica principal.

### Linha 2

```text
 MAX HEALMS — runtime origin protection
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 3

```text
 Copyright (c) 2026 Rodrigo Maximiano. All rights reserved.
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 4

```text
 This is a deterrence / anti-cloning layer, not a substitute for server-side purchase validation.
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 5

```text
*/
```

**Explicação:** Comentário de documentação; não é executado como lógica principal.

### Linha 6

```text
(function(){
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 7

```text
  'use strict';
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 8

```text
  const h=(location.hostname||'').toLowerCase();
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 9

```text
  const p=(location.protocol||'').toLowerCase();
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 10

```text
  const allowedHosts=new Set([
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 11

```text
    '127.0.0.1',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 12

```text
    'localhost',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 13

```text
    'rodrigomaximiano4-coder.github.io',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 14

```text
    'appassets.androidplatform.net'
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 15

```text
  ]);
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 16

```text
  const allowedProtocols=new Set(['http:','https:','capacitor:','ionic:']);
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 17

```text
  const allowed=allowedProtocols.has(p) && allowedHosts.has(h);
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 18

```text
  window.__MR_ORIGIN_AUTHORIZED=allowed;
```

**Explicação:** Define ou atualiza uma propriedade de configuração/lógica.

### Linha 19

```text
  window.__MR_SECURITY={
```

**Explicação:** Define ou atualiza uma propriedade de configuração/lógica.

### Linha 20

```text
    product:'MAX HEALMS',
```

**Explicação:** Define ou atualiza uma propriedade de configuração/lógica.

### Linha 21

```text
    owner:'MAX HEALMS',
```

**Explicação:** Define ou atualiza uma propriedade de configuração/lógica.

### Linha 22

```text
    copyright:'© 2026 MAX HEALMS. All rights reserved.',
```

**Explicação:** Define ou atualiza uma propriedade de configuração/lógica.

### Linha 23

```text
    build:'MAX-HEALMS-PLAYER-0.32',
```

**Explicação:** Define ou atualiza uma propriedade de configuração/lógica.

### Linha 24

```text
    origin:location.origin,
```

**Explicação:** Define ou atualiza uma propriedade de configuração/lógica.

### Linha 25

```text
    authorized:allowed
```

**Explicação:** Define ou atualiza uma propriedade de configuração/lógica.

### Linha 26

```text
  };
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 27

```text

```

**Explicação:** Separa blocos para facilitar leitura.

### Linha 28

```text
  function showBlocked(reason){
```

**Explicação:** Declara função reutilizável.

### Linha 29

```text
    const render=()=>{
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 30

```text
      document.documentElement.style.background='#061012';
```

**Explicação:** Define ou atualiza uma propriedade de configuração/lógica.

### Linha 31

```text
      document.body.innerHTML='<main style="min-height:100vh;display:grid;place-items:center;background:#061012;color:#fff;font-family:Segoe UI,Arial,sans-serif;padding:28px"><section style="max-width:760px"><div style="color:#f4c56a;font-weight:900;letter-spacing:.12em;font-size:12px">MAX HEALMS • PROTEÇÃO DE DISTRIBUIÇÃO</div><h1 style="font-size:34px;margin:12px 0">Cópia/origem não autorizada</h1><p style="line-height:1.6;color:#c9d3cf">Esta distribuição oficial do <b>MAX HEALMS</b> não autoriza hospedagem, redistribuição ou monetização por terceiros. Execução comercial, hospedagem, redistribuição ou monetização por terceiros não é autorizada.</p><p style="line-height:1.6;color:#95a7a0">Motivo: '+reason+'</p><small style="color:#748780">© 2026 MAX HEALMS • Todos os direitos reservados.</small></section></main>';
```

**Explicação:** Define ou atualiza uma propriedade de configuração/lógica.

### Linha 32

```text
    };
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 33

```text
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',render,{once:true}); else render();
```

**Explicação:** Executa somente quando a condição é verdadeira.

### Linha 34

```text
  }
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 35

```text

```

**Explicação:** Separa blocos para facilitar leitura.

### Linha 36

```text
  if(window.top!==window.self){
```

**Explicação:** Executa somente quando a condição é verdadeira.

### Linha 37

```text
    window.__MR_ORIGIN_AUTHORIZED=false;
```

**Explicação:** Define ou atualiza uma propriedade de configuração/lógica.

### Linha 38

```text
    showBlocked('incorporação em frame/iframe não autorizada');
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 39

```text
    return;
```

**Explicação:** Retorna um valor ou encerra a função.

### Linha 40

```text
  }
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 41

```text
  if(!allowed){
```

**Explicação:** Executa somente quando a condição é verdadeira.

### Linha 42

```text
    showBlocked('host '+(h||'(sem host)')+' não autorizado');
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 43

```text
  }
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 44

```text
})();
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 45

```text

```

**Explicação:** Separa blocos para facilitar leitura.

