# scripts/prepare-www.mjs — código comentado linha a linha

### Linha 1

```text
import fs from 'node:fs';
```

**Explicação:** Importa recurso ou módulo necessário.

### Linha 2

```text
import path from 'node:path';
```

**Explicação:** Importa recurso ou módulo necessário.

### Linha 3

```text

```

**Explicação:** Separa blocos para facilitar leitura.

### Linha 4

```text
const root=process.cwd();
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 5

```text
const out=path.join(root,'www');
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 6

```text
fs.rmSync(out,{recursive:true,force:true});
```

**Explicação:** Manipula arquivos/pastas durante a preparação da build.

### Linha 7

```text
fs.mkdirSync(out,{recursive:true});
```

**Explicação:** Manipula arquivos/pastas durante a preparação da build.

### Linha 8

```text

```

**Explicação:** Separa blocos para facilitar leitura.

### Linha 9

```text
const exact=[
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 10

```text
  'index.html',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 11

```text
  'three.min.js',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 12

```text
  'GLTFLoader.js',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 13

```text
  'FBXLoader.js',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 14

```text
  'SkeletonUtils.js',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 15

```text
  'max-realms-security.js'
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 16

```text
];
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 17

```text

```

**Explicação:** Separa blocos para facilitar leitura.

### Linha 18

```text
const extensions=new Set([
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 19

```text
  '.glb','.gltf','.bin',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 20

```text
  '.jpg','.jpeg','.png','.webp',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 21

```text
  '.mp3','.m4a','.wav','.ogg',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 22

```text
  '.mp4','.webm'
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 23

```text
]);
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 24

```text

```

**Explicação:** Separa blocos para facilitar leitura.

### Linha 25

```text
const denyNames=new Set([
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 26

```text
  'PLAY-STORE-PRODUCT-CATALOG.json',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 27

```text
  'PLAY-STORE-RELEASE-READINESS.md',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 28

```text
  'SHA256.txt',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 29

```text
  'LEIA-ME.txt',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 30

```text
  'README.txt',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 31

```text
  'LICENSE-PROPRIETARY.txt',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 32

```text
  'PRIVACY-POLICY.html',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 33

```text
  'DELETE-ACCOUNT.html',
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 34

```text
  'privacy.html'
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 35

```text
]);
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 36

```text

```

**Explicação:** Separa blocos para facilitar leitura.

### Linha 37

```text
const denyPrefixes=['MOBILE','TESTE','QA-','ADM-'];
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 38

```text

```

**Explicação:** Separa blocos para facilitar leitura.

### Linha 39

```text
for(const name of fs.readdirSync(root)){
```

**Explicação:** Repete o bloco para percorrer itens.

### Linha 40

```text
  const src=path.join(root,name);
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 41

```text
  if(!fs.statSync(src).isFile()) continue;
```

**Explicação:** Executa somente quando a condição é verdadeira.

### Linha 42

```text
  if(denyNames.has(name)) continue;
```

**Explicação:** Executa somente quando a condição é verdadeira.

### Linha 43

```text
  if(denyPrefixes.some(p=>name.toUpperCase().startsWith(p))) continue;
```

**Explicação:** Executa somente quando a condição é verdadeira.

### Linha 44

```text
  const ext=path.extname(name).toLowerCase();
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 45

```text
  if(exact.includes(name)||extensions.has(ext)){
```

**Explicação:** Executa somente quando a condição é verdadeira.

### Linha 46

```text
    fs.copyFileSync(src,path.join(out,name));
```

**Explicação:** Manipula arquivos/pastas durante a preparação da build.

### Linha 47

```text
  }
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 48

```text
}
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 49

```text

```

**Explicação:** Separa blocos para facilitar leitura.

### Linha 50

```text
for(const name of exact){
```

**Explicação:** Repete o bloco para percorrer itens.

### Linha 51

```text
  const target=path.join(out,name);
```

**Explicação:** Declara uma constante usada pelo projeto.

### Linha 52

```text
  if(!fs.existsSync(target)) throw new Error('Arquivo obrigatório ausente: '+name);
```

**Explicação:** Executa somente quando a condição é verdadeira.

### Linha 53

```text
}
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 54

```text

```

**Explicação:** Separa blocos para facilitar leitura.

### Linha 55

```text
console.log('MAX HEALMS Android web bundle preparado em www/');
```

**Explicação:** Completa uma instrução ou estrutura de configuração do projeto.

### Linha 56

```text

```

**Explicação:** Separa blocos para facilitar leitura.

