# MAX HEALMS — MOBILE87 — CÓDIGO-FONTE EXPLICADO

Este é o índice oficial do código-fonte próprio do jogo.

Formato usado em todos os arquivos:

```javascript
linha real do código
```

**O que significa:** explicação imediatamente abaixo daquela linha.

## Código principal do jogo

O arquivo principal `index.html` foi dividido em 15 partes para permitir leitura e edição sem travar o navegador.

- **Parte 01 — linhas 1–250**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-01.md)
- **Parte 02 — linhas 251–500**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-02.md)
- **Parte 03 — linhas 501–750**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-03.md)
- **Parte 04 — linhas 751–1000**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-04.md)
- **Parte 05 — linhas 1001–1250**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-05.md)
- **Parte 06 — linhas 1251–1500**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-06.md)
- **Parte 07 — linhas 1501–1750**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-07.md)
- **Parte 08 — linhas 1751–2000**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-08.md)
- **Parte 09 — linhas 2001–2250**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-09.md)
- **Parte 10 — linhas 2251–2500**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-10.md)
- **Parte 11 — linhas 2501–2750**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-11.md)
- **Parte 12 — linhas 2751–3000**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-12.md)
- **Parte 13 — linhas 3001–3250**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-13.md)
- **Parte 14 — linhas 3251–3500**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-14.md)
- **Parte 15 — linhas 3501–3535**: [abrir código + explicação](./docs/MOBILE86-LINHA-A-LINHA/index-parte-15.md)

## Arquivos próprios auxiliares

- [max-realms-security.js explicado](./docs/MOBILE86-LINHA-A-LINHA/max-realms-security-js.md)
- [prepare-www.mjs explicado](./docs/MOBILE86-LINHA-A-LINHA/scripts-prepare-www-mjs.md)
- [package.json explicado](./docs/MOBILE86-LINHA-A-LINHA/package-json.md)
- [capacitor.config.json explicado](./docs/MOBILE86-LINHA-A-LINHA/capacitor-config-json.md)
- [manifest.webmanifest explicado](./docs/MOBILE86-LINHA-A-LINHA/manifest-webmanifest.md)

## Bibliotecas externas

Também fazem parte do jogo, mas não são código autoral do MAX HEALMS:

- `three.min.js`
- `GLTFLoader.js`
- `FBXLoader.js`
- `SkeletonUtils.js`

Essas bibliotecas ficam preservadas sem reescrita. A explicação linha a linha se concentra no código próprio do MAX HEALMS.

## Exemplo do formato

```javascript
let distance=0;
```

**O que significa:** cria a variável que guarda a distância atual percorrida pelo jogador e começa em zero.

```javascript
let lives=3;
```

**O que significa:** cria a variável de vidas e inicia a corrida com três vidas.

```javascript
function reset(){
```

**O que significa:** inicia a função responsável por zerar/restaurar os estados necessários para começar ou reiniciar uma corrida.

```javascript
heroRoot.visible=true;
```

**O que significa:** força o modelo 3D de Varek a ficar visível. Essa linha é importante na correção do desaparecimento após reinício/tobogã.

```javascript
playHero('Running',.06);
```

**O que significa:** manda Varek voltar para a animação de corrida, usando uma transição curta de 0,06 segundo.
