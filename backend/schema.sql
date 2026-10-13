-- MAX HEALMS staging schema v1. No real purchases are authorized by this migration.
CREATE TABLE IF NOT EXISTS players (
 id UUID PRIMARY KEY,
 display_name VARCHAR(80) NOT NULL,
 country_code VARCHAR(2) NOT NULL CHECK (country_code ~ '^[A-Z]{2}$'),
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS wallets (
 player_id UUID PRIMARY KEY REFERENCES players(id) ON DELETE RESTRICT,
 diamonds BIGINT NOT NULL DEFAULT 0 CHECK (diamonds >= 0),
 updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS wallet_ledger (
 id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 player_id UUID NOT NULL REFERENCES players(id) ON DELETE RESTRICT,
 delta BIGINT NOT NULL CHECK (delta <> 0),
 reason VARCHAR(64) NOT NULL,
 idempotency_key VARCHAR(200) NOT NULL UNIQUE,
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS wallet_ledger_player_idx ON wallet_ledger(player_id,created_at DESC);
CREATE TABLE IF NOT EXISTS entitlements (
 id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 player_id UUID NOT NULL REFERENCES players(id) ON DELETE RESTRICT,
 product_id VARCHAR(128) NOT NULL,
 source VARCHAR(32) NOT NULL,
 source_transaction VARCHAR(255),
 granted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 revoked_at TIMESTAMPTZ,
 UNIQUE(player_id, product_id)
);
CREATE TABLE IF NOT EXISTS purchase_records (
 id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 player_id UUID NOT NULL REFERENCES players(id) ON DELETE RESTRICT,
 platform VARCHAR(16) NOT NULL DEFAULT 'google_play',
 package_name VARCHAR(128) NOT NULL,
 product_id VARCHAR(128) NOT NULL,
 purchase_token_hash CHAR(64) NOT NULL UNIQUE,
 google_order_id VARCHAR(200),
 purchase_state VARCHAR(32) NOT NULL DEFAULT 'pending',
 fulfillment_state VARCHAR(32) NOT NULL DEFAULT 'not_fulfilled',
 first_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 CHECK (purchase_state IN ('pending','purchased','canceled','refunded','revoked')),
 CHECK (fulfillment_state IN ('not_fulfilled','fulfilled','reversed'))
);
CREATE INDEX IF NOT EXISTS purchase_records_player_idx ON purchase_records(player_id,first_seen_at DESC);
CREATE UNIQUE INDEX IF NOT EXISTS purchase_records_google_order_idx ON purchase_records(google_order_id) WHERE google_order_id IS NOT NULL;
