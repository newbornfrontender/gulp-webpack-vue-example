# Titile

> Description

## Engines

> Description

| Name    | Version |
| ------- | ------- |
| Node.js | 9.11.1  |
| NPM     | 6.0.1   |
| Yarn    | 1.6.0   |

## Installation

Install dependencies

``` bash
$ yarn
```

## Build complete setup

Build for development with serve, debug, etc

``` bash
$ gulp / yarn start
```

Build for production with minification

``` bash
$ gulp --env production / yarn build
```

## Build tasks setup

### EJS

> Description

Build "ejs" task for development

``` bash
$ gulp ejs / yarn ejs:dev
```

Build "ejs" task for production

``` bash
$ gulp ejs --env production / yarn ejs:prod
```

### Posthtml

> Description

Build "posthtml" task for development

``` bash
$ gulp posthtml / yarn posthtml:dev
```

Build "posthtml" task for production

``` bash
$ gulp posthtml --env production / yarn posthtml:prod
```
