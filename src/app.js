// @flow

const Koa = require("koa");
import router from "./router";
import config from '../config/index.js';

const port = config.port;

const app = new Koa();

// 设置路由配置信息
app.use(router.routes()).use(router.allowedMethods());

// 启动 Web 服务器
app.listen(port, () => {
    console.log(`API Server listening on port: ${port}   env: ${app.env}`);
})
