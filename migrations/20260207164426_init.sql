-- migrate:up
PRAGMA foreign_keys = ON;

-- items
CREATE TABLE
    items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        type TEXT NOT NULL CHECK (type IN ('RAW', 'RECIPE', 'PACKAGE')),
        base_unit TEXT NOT NULL, -- e.g., 'g', 'ml', 'pcs'
        current_price_amount INTEGER DEFAULT 0,
        -- CACHING
        cached_cost_amount INTEGER DEFAULT NULL,
        is_cost_dirty INTEGER NOT NULL DEFAULT 1 CHECK(is_cost_dirty IN (0, 1))
    ) STRICT;

-- compositions
CREATE TABLE
    compositions (
        parent_item_id INTEGER NOT NULL,
        child_item_id INTEGER NOT NULL,
        display_quantity REAL NOT NULL,
        display_unit TEXT NOT NULL,
        normalized_quantity REAL NOT NULL,
        PRIMARY KEY (parent_item_id, child_item_id),
        FOREIGN KEY (parent_item_id) REFERENCES items (id) ON DELETE CASCADE,
        FOREIGN KEY (child_item_id) REFERENCES items (id) ON DELETE RESTRICT
    ) STRICT;

-- price_history
CREATE TABLE
    price_history (
        item_id INTEGER NOT NULL,
        changed_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
        price_amount INTEGER NOT NULL,
        PRIMARY KEY (item_id, changed_at),
        FOREIGN KEY (item_id) REFERENCES items (id) ON DELETE CASCADE
    ) STRICT,
    WITHOUT ROWID;

-- migrate:down
-- items
DROP TABLE IF EXISTS items;

-- compositions
DROP TABLE IF EXISTS compositions;

-- price_history
DROP TABLE IF EXISTS price_history;
