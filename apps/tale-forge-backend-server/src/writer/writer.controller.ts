import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WriterService } from "./writer.service";
import { WriterControllerBase } from "./base/writer.controller.base";

@swagger.ApiTags("writers")
@common.Controller("writers")
export class WriterController extends WriterControllerBase {
  constructor(protected readonly service: WriterService) {
    super(service);
  }
}
