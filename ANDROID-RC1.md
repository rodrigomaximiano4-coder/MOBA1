# MAX HEALMS — ANDROID RC1

Identidade oficial do aplicativo:
- Nome público: MAX HEALMS
- Application ID / Package: com.maxhealms.game
- Version name inicial: 1.0.0
- Version code inicial: 1
- Base web: branch main do repositório MOBA1

## Objetivo desta etapa
Transformar a versão web aprovada em um aplicativo Android instalável, mantendo o gameplay e os assets locais, e preparando a geração de AAB para Google Play.

## Estrutura criada
- package.json: dependências e comandos Capacitor.
- capacitor.config.json: nome e package oficiais.
- scripts/prepare-www.mjs: cria uma pasta www limpa para o app.
- www não deve conter relatórios, arquivos QA, controles de custos ou documentação interna.

## Primeiro uso no computador
Requisitos:
1. Node.js LTS.
2. Android Studio atualizado.
3. JDK exigido pelo Android Studio/Gradle instalado.
4. SDK Android instalado pelo Android Studio.

Na raiz do projeto:

```
npm install
npm run android:add
npm run android:open
```

Depois da primeira criação do Android, nas próximas atualizações:

```
npm run android:sync
npm run android:open
```

## Regra importante
Não alterar o Application ID `com.maxhealms.game` depois da publicação. Uma troca posterior de package é tratada pela Play Store como outro aplicativo.

## Antes do primeiro AAB
Ainda precisamos:
- validar carregamento completo offline/local dentro do WebView;
- configurar ícone e splash;
- bloquear orientação conforme decisão final do jogo;
- configurar versão/versionCode;
- integrar Google Play Billing real;
- integrar anúncios reais;
- revisar política de privacidade/Data Safety;
- testar em aparelho físico;
- gerar AAB assinado;
- subir primeiro em Teste interno e depois Teste fechado.

## Observação sobre compras
A versão web atual usa simulações de QA. A versão Android de produção deverá usar os preços e moedas retornados pela Google Play Billing.
