import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExtractedDataServiceBase } from "./base/extractedData.service.base";

@Injectable()
export class ExtractedDataService extends ExtractedDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
