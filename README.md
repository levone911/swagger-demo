# sawgger 文档系统demo

> 基于nodejs,koa2,swagger-decorator创建

## Requirements

- node ^6.0.0
- npm ^3.9.0

## Dependencies

- Watcher and hot-reload: [nodemon](http://nodemon.io/)
- Build: [babel](http://babeljs.io/)
    + tools: babel-cli, babel-core
    + presets: babel-preset-es2015-node6, babel-preset-stage-3,babel-plugin-transform-decorators-legacy
- Deployment: [PM2](https://github.com/Unitech/pm2)
- Tech Stack:
    + [Koa 2](https://github.com/koajs/koa/tree/v2.x)
    + [koa-router](https://github.com/alexmingoia/koa-router/tree/master)
    + ES7 async/await support

## Build Setup

``` bash
# install dependencies
npm install

# run for development with hot reload at localhost:3000
npm run dev

# build for production
npm run build

# run for production with pm2
npm run prd
```

## License

MIT
