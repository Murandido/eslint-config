# murandido ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies
```
npm i -D eslint @murandido/eslint-config

or

yarn add --dev @murandido/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "@murandido/eslint-config/react"
  // "extends": "@murandido/eslint-config/node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

> Repository created based on the [`Rocketseat/eslint-config`](https://github.com/Rocketseat/eslint-config-rocketseat) repository.