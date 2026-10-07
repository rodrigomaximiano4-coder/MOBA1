# MAX HEALMS — PLAY STORE — READINESS PLAYER 0.37

## 🟢 Preparado na build web/player

- [x] Varek é o nome canônico do protagonista em toda a interface.
- [x] Loja ativa reduzida a Varek Original, Varek Aventureiro e Varek Voren.
- [x] Catálogo comercial remove produtos/personagens antigos.
- [x] Premium visível e coerente com anúncios obrigatórios após derrota.
- [x] Política de Privacidade, Termos e exclusão de conta acessíveis pelo jogo.
- [x] Exclusão de dados disponível nas Configurações.
- [x] Login opcional / convidado preparado na interface.
- [x] Senhas não são gravadas em texto puro no modo de teste.
- [x] Controle mobile 1:1 com sensibilidade progressiva conforme a velocidade.
- [x] Slide não pode mais ser prolongado indefinidamente por swipes repetidos.
- [x] Aviso residual “FIM DO TOBOGÃ” removido da parte inferior.
- [x] Build de produção possui preflight para bloquear lançamento se Auth/Billing/Ads/URLs legais estiverem ausentes.
- [x] Motor Three.js e loaders acompanham o pacote localmente.

## 🔴 Obrigatório antes de gerar/enviar o AAB final

- [ ] Definir e testar as URLs HTTPS públicas definitivas da Política de Privacidade e exclusão de conta.
- [ ] Integrar autenticação real e criar a conta permanente de revisão do Google Play (sem OTP/2FA).
- [ ] Cadastrar no Play Console os SKUs ativos de `PLAY-STORE-PRODUCT-CATALOG.json`.
- [ ] Integrar Google Play Billing real, validação/restauração de compras e testar em aparelho real.
- [ ] Integrar SDK de anúncios/AdMob e fluxo de consentimento aplicável.
- [ ] Confirmar a declaração Segurança dos dados depois dos SDKs Android finais.
- [ ] Gerar projeto Android/AAB com package `com.maxhealms.game`.
- [ ] Testar instalação limpa, login, exclusão, compras, restauração, anúncio FREE, Premium e anúncios premiados.
- [ ] Criar a faixa de teste fechado e cumprir os requisitos mostrados no Play Console.

## ⚠️ Otimização antes da produção

Os modelos GLB ainda são grandes. Para a versão Android final, revisar compressão/asset delivery para reduzir download e tempo de carregamento em celulares.


## Fluxo de conta 0.37
- Convidado: entrada imediata e retorno automático ao menu/jornada.
- Criar conta: perfil + conta em uma única conclusão.
- Entrar: destinado somente a conta existente.
- Sair: encerra vínculo da conta e mantém progresso local como convidado.
- Exclusão web: necessária para solicitação sem acesso ao app; URL HTTPS pública ainda deve ser confirmada antes do AAB.
