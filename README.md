# murandido ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

### React (with Next.js)

Install dependencies:
```
npm i -D eslint @murandido/eslint-config
```
Inside `eslintrc.config.js`
```
import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

import murandidoConfigNext from "@murandido/eslint-config/next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
export default [...compat.extends("next/core-web-vitals"), murandidoConfigNext];

```

### React (without Next.js)

Install dependencies:
```
npm i -D eslint @murandido/eslint-config
```
Inside `eslintrc.config.js`
```
import murandidoConfigReact from "@murandido/eslint-config/react";

export default [murandidoConfigReact];

```

### Node.js

Install dependencies:
```
npm i -D eslint @murandido/eslint-config
```
Inside `eslintrc.config.js`
```
import murandidoConfigNode from "@murandido/eslint-config/node";

export default [murandidoConfigNode];

```

> Repository created based on the [`Rocketseat/eslint-config`](https://github.com/Rocketseat/eslint-config-rocketseat) repository.