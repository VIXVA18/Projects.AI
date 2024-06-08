import * as graphql from "@nestjs/graphql";
import { ExtractedDataResolverBase } from "./base/extractedData.resolver.base";
import { ExtractedData } from "./base/ExtractedData";
import { ExtractedDataService } from "./extractedData.service";

@graphql.Resolver(() => ExtractedData)
export class ExtractedDataResolver extends ExtractedDataResolverBase {
  constructor(protected readonly service: ExtractedDataService) {
    super(service);
  }
}
