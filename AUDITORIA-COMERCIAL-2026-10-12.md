# MAX HEALMS — Auditoria comercial e preparação Play Store
Data: 12/10/2026. Escopo: inspeção estática do `index.html` da branch `main` de MOBA1. Não foi possível verificar o APK/AAB instalado nem a pasta Android local.

## Achados confirmados no código-fonte

1. **Compras / Play Billing (bloqueio de lançamento comercial):** `BillingService` só faz compras verdadeiras se existir a ponte `window.MaxHealmsBilling.purchase`. Na ausência da ponte, o modo de produção gera erro, mas o modo de teste simula compras. Confirmar implementação e assinatura da ponte no Android; não considerar o código JavaScript prova de integração. `purchaseCashProduct` concede diamantes, premium e skins a partir da resposta da ponte; pagamentos devem ser validados por recibo/token, impedindo duplicação.
2. **Anúncios (bloqueio se monetização por anúncios for prometida):** `AdService` depende de `window.MaxHealmsAds` para rewarded e intersticiais. No navegador, usa simulação; sem ponte em produção, retorna falha. Confirmar SDK AdMob, IDs oficiais/teste, eventos de recompensa e políticas de anúncios.
3. **Perfil/autenticação:** `AuthService` recorre a contas locais de prévia armazenadas no navegador se não houver `window.MaxHealmsAuth`. Na produção, exige ponte. Confirmar autenticação real, fluxo de exclusão e persistência da conta.
4. **Progresso e inventário:** `loadSave` e `saveState` utilizam `localStorage` para `SAVE` (diamantes, inventário, premium, corridas). Isto **não é persistência na nuvem nem garante recuperação após desinstalação**. Integrar backend ou mecanismo de restauração apropriado; não atrelar direitos pagos exclusivamente ao `localStorage`.
5. **Ranking:** `renderRanking` usa `SAVE.runs` local, ordenando pontuação. Não há prova de ranking global nem da regra comercial por tempo nos trechos analisados. Conferir política desejada e, se global, backend e antifraude.
6. **Modo produção:** `NATIVE_PRODUCTION` depende de `window.MaxHealmsRuntime.isProduction === true`. Sem a ponte, o código considera ambiente de prévia. A build Android precisa injetar corretamente essa indicação e as bridges.
7. **Reset de progresso:** existem parâmetros de URL `freshLaunch=1`, `productionClean=1` e `resetProgress=1`. Devem ser restritos ao QA e nunca acionados acidentalmente em links públicos ou builds de produção; testes não devem apagar compras reais.
8. **URLs legais:** referências de política de privacidade e exclusão de conta são definidas em `PLAY_STORE_CONFIG`. Confirmar que os links públicos realmente abrem e refletem a coleta/uso efetivo de dados.
9. **Preços e IDs de produtos:** SKUs e valores de referência estão no JavaScript. Conferir correspondência com produtos ativos da Google Play Console; os preços reais precisam vir da loja, não só de valores fixos no código.

## Não confirmado nesta auditoria
- Conteúdo de `android/app/build.gradle`, `AndroidManifest.xml` e bibliotecas nativas efetivamente instaladas.
- Existência das pontes JavaScript `MaxHealmsBilling`, `MaxHealmsAds`, `MaxHealmsAuth`, `MaxHealmsRuntime` dentro do APK.
- Produtos criados/ativados no Google Play Console, conexão ao AdMob, teste de pagamento, login e compras restauradas.
- Rede, backend e banco persistente de contas.
- Funcionamento real de URLs legais e políticas na listagem publicada.
- Ausência de bugs gráficos e desempenho em celulares.

## Plano proposto — sem mudanças no gameplay aprovado
**Prioridade 0 (obrigatório antes de dinheiro real):** obter o projeto Android atual (sem .jks, senhas, segredos ou tokens) e conferir bridges/SDKs, build variants, permissões, indicadores de produção e SKUs. Validar compras em ambiente de teste Play Billing e restauração; não entregar itens pagos por resposta não verificada.
**Prioridade 1:** salvar/recuperar corretamente entitlements, perfil e inventário; preparar migração do save atual e prevenir perdas.
**Prioridade 2:** configurar AdMob real e recompensas apenas com confirmação SDK, cumprir consentimento/políticas; testar contas Premium.
**Prioridade 3:** definir se ranking é local ou global e implantar infraestrutura apenas se global.
**Prioridade 4:** executar QA e gerar AAB assinado com chave original, sem mexer em cenários, física, sons e animações aprovados.

## Segurança de publicação
Não alterar a branch `main` até concluir inspeção do projeto Android e testes no APK. Manter Google Play fechado inalterado até a atualização validada.
