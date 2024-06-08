import { Module } from "@nestjs/common";
import { ExtractionTaskModuleBase } from "./base/extractionTask.module.base";
import { ExtractionTaskService } from "./extractionTask.service";
import { ExtractionTaskController } from "./extractionTask.controller";
import { ExtractionTaskResolver } from "./extractionTask.resolver";

@Module({
  imports: [ExtractionTaskModuleBase],
  controllers: [ExtractionTaskController],
  providers: [ExtractionTaskService, ExtractionTaskResolver],
  exports: [ExtractionTaskService],
})
export class ExtractionTaskModule {}
