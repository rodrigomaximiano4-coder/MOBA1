# MAX HEALMS — Backend Render (staging, sem pagamentos reais)

## Estado implementado (2026-10-12)
- Render Web Service: max-healms-backend.onrender.com, branch backend-render-staging, root backend, Node.
- PostgreSQL Render: max-healms-db, plano Free de teste com expiração de 30 dias. Banco ligado por segredo DATABASE_URL no Render (NUNCA colocar senha no repositório).
- GET /health: informa estado do servidor, database e schema. A resposta `schema: "ready"` comprova que as tabelas staging foram criadas durante o boot; verificar depois do deploy. Não significa monetização pronta.
- Inicialização de esquema via backend/schema.js e backend/schema.sql, transação + advisory lock e CREATE TABLE IF NOT EXISTS.
- Tabelas staging: players, wallets, wallet_ledger, entitlements, purchase_records. Restrições de não-negatividade e unicidade de chave de idempotência/token em hash.
- POST /api/purchases/verify CONTINUA 503 sem entregar recompensas; nenhuma rota pública altera dados no banco.
- AAB 22 na Play Store não foi modificado.

## Deploy
Repo: rodrigomaximiano4-coder/MOBA1
Branch: backend-render-staging
Root: backend
Build: npm install
Start: npm start
Health: /health
Env secreta: DATABASE_URL (Internal Database URL do PostgreSQL na mesma região).
Nota: credenciais que foram compartilhadas devem ser substituídas antes de uso real.

## Ainda NÃO implementado
1. Autenticação real de jogadores e migração dos perfis locais, vínculo de contas entre dispositivos.
2. Endpoints autenticados de jogadores/inventário e operações de carteira somente pelo servidor.
3. Catálogo oficial, Google Play Developer API, permissões da conta de serviço, verificação real dos purchaseTokens.
4. Transação atômica e idempotente para entregar diamantes, Premium e personagens, consumos/acknowledge, restauração, reembolso, RTDN.
5. Ponte Android Billing end-to-end. No código web atual, compras continuam bloqueadas intencionalmente.
6. Banco durável para produção: o PostgreSQL Free Render expira em 30 dias; configurar migração, backup e recuperação antes de vender.
7. Testes automatizados de segurança, casos duplicados/concorrentes e QA dos nove produtos cadastrados na Play Console.
8. Só após testes, gerar e submeter AAB 23. Não mexer no Truco Online.

Não pôr chaves de serviço, JSON de credenciais, senhas ou tokens no GitHub, logs ou no código cliente.
