// @flow
import { entityProperty } from "swagger-decorator";

export default class UserProperty {
  // 朋友列表
  @entityProperty({
    type: ["number"],
    description: "朋友列表, 通过 user id",
    required: false
  })
  friends: [number];
}
