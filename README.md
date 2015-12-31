# eslint-config-cp

The Chauffeur-Privé ESLint


## Installation
```
npm install eslint transcovo/eslint-config-cp#1.0.2 --save-dev
```

## Set up a .eslintrc in your project
```
{
  "extends": "cp",
  "rules" : {
  }
}

```

## Add it to your project's package.json
```
{
  "scripts": {
    "lint": "eslint .",
  }
}
```

## Run the linter
```
npm run lint
```
