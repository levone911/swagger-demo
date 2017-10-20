// @flow

import AnnouncementInterfaceEntity from "../entity/AnnouncementInterfaceEntity";
import { apiResponse } from "swagger-decorator";
export default class AnnouncementControllerDoc {
  @apiResponse(200, "get users successfully", [AnnouncementInterfaceEntity])
  static async getAnnouncements(ctx, next): [AnnouncementInterfaceEntity] {}
}
