import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExtractionTaskService } from "./extractionTask.service";
import { ExtractionTaskControllerBase } from "./base/extractionTask.controller.base";

@swagger.ApiTags("extractionTasks")
@common.Controller("extractionTasks")
export class ExtractionTaskController extends ExtractionTaskControllerBase {
  constructor(protected readonly service: ExtractionTaskService) {
    super(service);
  }
}
