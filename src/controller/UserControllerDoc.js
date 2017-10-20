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

export default class UserControllerDoc {

  @apiResponse(200, "成功获取用户返回数据", [User])
  static async getUsers(ctx, next): [User] {}

  @pathParameter({
    name: "id",
    description: "用户 id",
    type: "integer",
    defaultValue: 1
  })
  @queryParameter({
    name: "tags",
    description: "用户 tags, 筛选用户",
    required: false,
    type: "array",
    items: ["string"]
  })
  @apiResponse(200, "成功获取用户返回数据", User)
  static async getUserByID(ctx, next): User {}

  @bodyParameter({
    name: "user",
    description: "新用户对象, 必须包含 user name",
    required: true,
    schema: User
  })
  @apiResponse(200, "新用户创建成功", {
    statusCode: 200
  })
  static async postUser(): number {}
}
