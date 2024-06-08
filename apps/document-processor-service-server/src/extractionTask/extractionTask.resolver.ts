import * as graphql from "@nestjs/graphql";
import { ExtractionTaskResolverBase } from "./base/extractionTask.resolver.base";
import { ExtractionTask } from "./base/ExtractionTask";
import { ExtractionTaskService } from "./extractionTask.service";

@graphql.Resolver(() => ExtractionTask)
export class ExtractionTaskResolver extends ExtractionTaskResolverBase {
  constructor(protected readonly service: ExtractionTaskService) {
    super(service);
  }
}
