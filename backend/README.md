# MAX HEALMS — Backend Render (preparação)
Esta é uma **base segura para hospedagem e teste de saúde**. Não é um sistema de pagamentos pronto.
O endpoint /api/purchases/verify responde 503 e **não libera diamantes, Premium ou Vareks**.

## Deploy separado no Render
- New > Web Service
- Repositório: `rodrigomaximiano4-coder/MOBA1`
- Branch: `backend-render-staging`
- Root Directory: `backend`
- Runtime: Node
- Build Command: `npm install`
- Start Command: `npm start`
- Health Check Path: `/health`
- Nome sugerido: `max-healms-backend`

**Não coloque contas de serviço, JSON de credenciais, tokens ou senhas no GitHub nem na interface pública do aplicativo.** Futuras credenciais devem ser definidas somente nos Secret Environment Variables do Render.

## Bloqueios para monetização real
1. Banco Postgres persistente (desativar qualquer implementação que dependa somente de memória).
2. Autenticação e identificação estável de jogador no backend.
3. Serviço Google Play Developer API com permissão para gerenciar pedidos e produtos no app.
4. Validar cada purchaseToken no Google Play, conferir app `com.maxhealms.game`, productId, estado de compra e identidade.
5. Registrar tokens/transações com restrição UNIQUE e processamento atômico para evitar crédito duplicado.
6. Entregar entitlement persistente; somente depois realizar acknowledge ou consume apropriado.
7. Tratar reembolsos/revogações, restauração e reconciliação via notificações em tempo real, quando disponíveis.
8. Limites de requisições, monitoramento, auditoria e testes integrados.
9. Só então atualizar ponte Android e habilitar produtos na Play.

O HTML atual usa `window.MaxHealmsBilling` e compras seguem bloqueadas até existir validação confiável.
**Não implantar o backend do Truco Online neste serviço.** O AAB 22 permanece intocado.
