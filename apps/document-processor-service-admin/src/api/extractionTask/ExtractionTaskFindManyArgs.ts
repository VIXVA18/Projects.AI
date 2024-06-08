import { ExtractionTaskWhereInput } from "./ExtractionTaskWhereInput";
import { ExtractionTaskOrderByInput } from "./ExtractionTaskOrderByInput";

export type ExtractionTaskFindManyArgs = {
  where?: ExtractionTaskWhereInput;
  orderBy?: Array<ExtractionTaskOrderByInput>;
  skip?: number;
  take?: number;
};
