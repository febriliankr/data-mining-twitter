# Hashtag Mining App

-[ ] Try to use axios

## Setting Up a Typescript Nodejs App

npm init y

tsconfig.json

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "sourceMap": true,
    "resolveJsonModule": true,
    "lib": ["es6", "dom"],
    "esModuleInterop": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

### Start Script with Nodemon

```
{
  ...
  "scripts": {
    "start": "tsc && node dist/index.js",
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  },
 ...
}
```

### Dependencies

```
npm i -D @types/axios
npm i axios
npm i -D typescript ts-node nodemon
```

- npm i -D typescript # Typescript compiles to plain JS
- npm i -D ts-node # ts-node to run typescript code without compiling to JS
- npm i -D nodemon # Automatically restarts the application whenever file changes are detected
