import { ExtractedData as TExtractedData } from "../api/extractedData/ExtractedData";

export const EXTRACTEDDATA_TITLE_FIELD = "id";

export const ExtractedDataTitle = (record: TExtractedData): string => {
  return record.id?.toString() || String(record.id);
};
