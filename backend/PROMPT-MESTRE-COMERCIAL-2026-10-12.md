# PROMPT MESTRE — MAX HEALMS — Infraestrutura, monetização e AAB 23 — 12/10/2026

## Objetivo
Continuar desenvolvimento do MAX HEALMS, jogo de corrida 3D Android, mantendo a experiência aprovada e liberando monetização somente quando for segura. Não confundir com Truco Online. AAB 22 já distribuído no teste alpha fechado da Play Store. AAB 23 é FUTURA; NÃO foi gerada.

## Identificadores
- App Android: `com.maxhealms.game`.
- Repositório GitHub: `rodrigomaximiano4-coder/MOBA1`.
- Branch backend staging: `backend-render-staging`. `main` não deve ser modificado sem decisão explícita.
- Serviço Render: `max-healms-backend` https://max-healms-backend.onrender.com
- Root Directory Render: `backend`; build `npm install`; start `npm start`; Node.
- Postgres Render: `max-healms-db`, database `max_healms`, região Virginia, ligado via `DATABASE_URL` em variável secreta do serviço.
- Plano PostgreSQL Free: **expira após 30 dias**; só staging/teste, jamais pagamentos persistentes de usuários finais.
- Credenciais de banco já foram expostas em conversa; rotação obrigatória antes de produção. Não reproduzir valores sensíveis.

## Verificado pelo usuário
- GET /health retornou `ok:true`, `service:max-healms-backend`, `stage:preparacao`, `paymentsEnabled:false`, `database:connected`.
- Após novos commits de schema, verificar `schema:ready` em /health; AINDA NÃO CONFIRMADO pelo usuário.
- Render já fez auto deploy anterior com sucesso para commit 593576d.
- AAB 22 permanece no teste Play; 9 produtos cadastrados na Play Console, ainda em rascunho.

## Código criado em backend-render-staging
- `backend/server.js`: servidor HTTP, GET /health com status de DB/schema; POST /api/purchases/verify devolve **503**, nunca concede saldo.
- `backend/package.json`: Node e `pg`.
- `backend/schema.sql`: tabelas `players`, `wallets`, `wallet_ledger`, `entitlements`, `purchase_records`, com UNIQUE e CHECK de integridade.
- `backend/schema.js`: inicialização automática transacional do schema no boot, advisory lock, idempotente.
- `backend/README.md`: status e pendências.
ATENÇÃO: tabelas são estrutura de dados, NÃO funções de compras prontas. Nenhum endpoint público de cadastro/saldo/crédito foi implementado.

## Produtos Google Play cadastrados (rascunho)
- `max_healms_premium` — R$ 14,99, permanente.
- `max_healms_diamonds_100` — R$ 1,99.
- `max_healms_diamonds_300` — R$ 4,99.
- `max_healms_diamonds_750` — R$ 10,99.
- `max_healms_diamonds_1600` — R$ 19,99.
- `max_healms_diamonds_3600` — R$ 39,99.
- `max_healms_diamonds_5000` — R$ 49,99.
- `max_healms_varek_adventurer` — R$ 14,99.
- `max_healms_varek_voren` — R$ 14,99.
Verificar valores, regras de consumo e concordância entre IDs antes da comercialização.

## Aplicativo local
- Projeto Windows: `C:\Users\rodri\MAX-HEALMS-ANDROID`.
- Web app em `www`. Backup `C:\Users\rodri\MAX-HEALMS-BACKUP-WWW`, robocopy 63 arquivos sem falhas.
- Capacitor config `appId:com.maxhealms.game`, `webDir:www`.
- Plugin `@capgo/native-purchases` instalado e sincronizado.
- `www/max-healms-billing.js`: ponte provisória; compra bloqueada e restore sem entrega.
- `www/index.html` carrega script; `BillingService` espera integração.
- `www/scripts/prepare-www.mjs` refeito para staging isolado sem apagar `www`.
- Estado do jogo (perfil/inventário/diamantes) ainda depende de `localStorage`; não é prova de posse durável.

## Escopo restante antes da AAB 23, nesta ordem
1. Verificar novo deploy Render e `/health` com `database:connected, schema:ready`.
2. Definir autenticação forte de jogador, recuperação de conta, migração segura do perfil e integração Android.
3. Criar operações backend autenticadas para perfil, inventário e saldo, com autorização por identidade, transações e logs.
4. Configurar service account **sem colocar JSON privado no chat/GitHub** e Google Play Developer API/permissões na Play Console.
5. Validar purchaseToken no servidor com pacote/produto/estado corretos; evitar fraude e recompensas duplicadas via transação atômica e UNIQUE; implementar acknowledge/consume, revogação e reembolso.
6. Reconciliar compras antigas e restore, lidar com compra cancelada/pendente e falhas de rede.
7. Criar ambiente de testes licenciado pelo Google Play (contas de teste); QA dos nove produtos e acesso por dispositivo.
8. Banco permanente (não pode expirar), backup, observabilidade, migração e rotação da senha exposta.
9. Ligar cliente Android ao backend e liberar somente após a validação completa.
10. Gerar AAB 23 após `versionCode` aumentar, assinar com chave de upload correta e testar antes de publicar. Nunca substituir AAB 22 sem QA.
11. Preservar gameplay/visuais congelados e não modificar Truco Online.

## Comunicação com usuário
Responder em português claro, executando tarefas possíveis diretamente no GitHub quando autorizado, com instruções curtas e um passo por vez para ações manuais no Render/Play Console/Windows. Não prometer conclusão de compras sem teste real e nunca solicitar que cole segredos.
