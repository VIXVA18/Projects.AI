import { ExtractedDataWhereInput } from "./ExtractedDataWhereInput";
import { ExtractedDataOrderByInput } from "./ExtractedDataOrderByInput";

export type ExtractedDataFindManyArgs = {
  where?: ExtractedDataWhereInput;
  orderBy?: Array<ExtractedDataOrderByInput>;
  skip?: number;
  take?: number;
};
