// @flow

import {
  apiDescription,
  apiRequestMapping,
  apiResponse,
  bodyParameter,
  pathParameter,
  queryParameter
} from "swagger-decorator";
import User from "../entity/User";
import UserControllerDoc from "./UserControllerDoc";

/**
 * Description 用户相关控制器
 */
export default class UserController extends UserControllerDoc {
  @apiRequestMapping("get", "/users")
  @apiDescription("获取用户列表")
  @pathParameter({
      name: "id",
      description: "用户 id",
      type: "integer",
      defaultValue: 1
  })
  static async getUsers(ctx, next): [User] {
    ctx.body = [new User()];
  }

  @apiRequestMapping("get", "/user/:id")
  @apiDescription("通过id获取用户")
  static async getUserByID(ctx, next): User {
    ctx.body = new User();
  }

  @apiRequestMapping("post", "/user")
  @apiDescription("创建新用户")
  static async postUser(): number {
    ctx.body = {
      statusCode: 200
    };
  }
}
