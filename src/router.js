import UserController from "./controller/UserController";
import { wrappingKoaRouter } from "swagger-decorator";
import AnnouncementController from "./controller/AnnouncementController";
const Router = require("koa-router");

const router = new Router();

// 封装原有的 koa-router 对象
wrappingKoaRouter(router, "localhost:8080", "/api", {
  title: "swagger-decorator 测试",
  version: "0.0.1",
  description: "Koa2, koa-router,Webpack；\n 问题：" +
  "1、使用ES7语法，所以要用babel转移先转意（生涩）；" +
  "2、违背注释即生成文档的方案，需要自己定义方法使用（开发效率低、代码量大影响阅读）；" +
  "3、node版本不能低于6.10（项目兼容）;"
});

// 定义默认的根路由
router.get("/", async function(ctx, next) {
  ctx.body = { msg: "Node Server Boilerplate" };
});

//定义用户处理路由
router.scan(UserController);
router.scan(AnnouncementController);

//默认导出路由配置
export default router;
