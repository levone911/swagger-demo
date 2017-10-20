// @flow

import { entityProperty } from "swagger-decorator";
import UserProperty from "./UserProperty";
/**
 * Description 用户实体类
 */
export default class User {
  // 编号
  @entityProperty({
    type: "integer",
    description: "user id, 自动生成",
    required: true
  })
  id: string = 0;

  // 姓名
  @entityProperty({
    type: "string",
    description: "user name, 3~12 字符",
    required: false
  })
  name: string = "name";

  // 邮箱
  @entityProperty({
    type: "string",
    description: "user email",
    pattern: "email",
    required: false
  })
  email: string = "email";

  // 属性
  @entityProperty({
    type: UserProperty,
    description: "user 原型",
    required: false
  })
  property: UserProperty = new UserProperty();
}
