# MAX HEALMS — MOBILE86 — Documentação técnica

## Build

**MAX HEALMS • MOBILE86 • ALPHA 2 FINALS**

Commit da correção do Final 1:
`931495c4ed265b559de7c05f569d1ab4304cc6f0`

## O que foi corrigido

- Final da Jornada 1 agora usa o mesmo painel compacto sobre a cena 3D usado no Final da Jornada 2.
- A cena da família permanece visível ao fundo quando os dados aparecem.
- O painel grande `journeyEndPanel` não é mais usado como tela principal do resultado da Jornada 1.
- O botão principal do Final 1 passa a levar para **Jornada 2 • O Resgate**.
- Em modo de teste, o botão permite rever o Final 1.
- A correção anterior de restauração do Varek no reinício/tobogã permanece na base.

## Código principal comentado linha a linha

O arquivo principal `index.html` possui 3.535 linhas nesta documentação e foi dividido em 15 partes para facilitar abertura no navegador/celular.

- [Parte 01 — linhas 1–250](./index-parte-01.md)
- [Parte 02 — linhas 251–500](./index-parte-02.md)
- [Parte 03 — linhas 501–750](./index-parte-03.md)
- [Parte 04 — linhas 751–1000](./index-parte-04.md)
- [Parte 05 — linhas 1001–1250](./index-parte-05.md)
- [Parte 06 — linhas 1251–1500](./index-parte-06.md)
- [Parte 07 — linhas 1501–1750](./index-parte-07.md)
- [Parte 08 — linhas 1751–2000](./index-parte-08.md)
- [Parte 09 — linhas 2001–2250](./index-parte-09.md)
- [Parte 10 — linhas 2251–2500](./index-parte-10.md)
- [Parte 11 — linhas 2501–2750](./index-parte-11.md)
- [Parte 12 — linhas 2751–3000](./index-parte-12.md)
- [Parte 13 — linhas 3001–3250](./index-parte-13.md)
- [Parte 14 — linhas 3251–3500](./index-parte-14.md)
- [Parte 15 — linhas 3501–3535](./index-parte-15.md)

## Arquivos próprios auxiliares comentados linha a linha

- [max-realms-security.js](./max-realms-security-js.md)
- [scripts/prepare-www.mjs](./scripts-prepare-www-mjs.md)
- [package.json](./package-json.md)
- [capacitor.config.json](./capacitor-config-json.md)
- [manifest.webmanifest](./manifest-webmanifest.md)

## Bibliotecas de terceiros usadas pelo jogo

Estes códigos também fazem parte da execução e permanecem integralmente no repositório:

- [three.min.js](../../three.min.js) — motor/base Three.js.
- [GLTFLoader.js](../../GLTFLoader.js) — carregamento de GLTF/GLB.
- [FBXLoader.js](../../FBXLoader.js) — carregamento de FBX.
- [SkeletonUtils.js](../../SkeletonUtils.js) — utilitários de esqueleto/animação.

Essas bibliotecas são de terceiros e não devem ser modificadas para corrigir gameplay do MAX HEALMS. O código próprio do jogo está concentrado principalmente no `index.html` e nos arquivos auxiliares documentados acima.

## Regra de documentação

Da MOBILE86 em diante, quando um código novo ou alterado do MAX HEALMS for entregue, a documentação correspondente deve manter a explicação imediatamente abaixo da linha/trecho documentado.
