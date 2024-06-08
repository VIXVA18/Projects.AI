import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExtractionTaskServiceBase } from "./base/extractionTask.service.base";

@Injectable()
export class ExtractionTaskService extends ExtractionTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
