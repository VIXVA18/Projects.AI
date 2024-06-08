import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExtractedDataService } from "./extractedData.service";
import { ExtractedDataControllerBase } from "./base/extractedData.controller.base";

@swagger.ApiTags("extractedData")
@common.Controller("extractedData")
export class ExtractedDataController extends ExtractedDataControllerBase {
  constructor(protected readonly service: ExtractedDataService) {
    super(service);
  }
}
