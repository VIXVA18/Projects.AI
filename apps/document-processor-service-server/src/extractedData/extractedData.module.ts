import { Module } from "@nestjs/common";
import { ExtractedDataModuleBase } from "./base/extractedData.module.base";
import { ExtractedDataService } from "./extractedData.service";
import { ExtractedDataController } from "./extractedData.controller";
import { ExtractedDataResolver } from "./extractedData.resolver";

@Module({
  imports: [ExtractedDataModuleBase],
  controllers: [ExtractedDataController],
  providers: [ExtractedDataService, ExtractedDataResolver],
  exports: [ExtractedDataService],
})
export class ExtractedDataModule {}
