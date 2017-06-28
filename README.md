# metalsmith-webpack2

## Installation

```
npm install metalsmith-webpack
```

## Usage

```js
var webpack = require('metalsmith-webpack2')

Metalsmith(__dirname)
  .use(webpack('./webpack.config.js'))
  .build()
```