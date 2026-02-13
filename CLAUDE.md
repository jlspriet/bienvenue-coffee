# CLAUDE.md

## Important Rules

### 1. Build Commands Must Use Separate Directory
If you need to run `npm run build` for any reason (only when it is appropriate for complex changes), you **must** use the separate build directory to avoid conflicts with a running dev server:

```bash
CHECK_BUILD=1 npm run build
```

This uses `.next-check` as the output directory instead of `.next`. See `next.config.js` for implementation.

### 2. Never Commit or Push Without Explicit Permission
You are **never allowed** to commit or push any code unless the user explicitly tells you to do so in a **separate user message**. Do not proactively commit or push changes, even if they appear complete.

### 3. Keep CLAUDE.md Stable
Do **not** add frequently-changing content to this file such as:
- Lists of demos or features
- Specific environment variable names
- Configuration details that evolve with code

This file is for stable rules and conventions. Use code comments or README for implementation details.

### 4. Content Configuration
All site text (menu, prices, hours, statement copy) lives in `content.json` at the project root. The site supports two languages (`en` and `fr`) toggled client-side. Shared data (links, address) is at the top level; language-specific text is nested under `en`/`fr` keys. To update menu items or prices, edit `content.json` — no JSX changes needed.
