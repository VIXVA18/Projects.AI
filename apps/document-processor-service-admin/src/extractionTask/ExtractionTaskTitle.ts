import { ExtractionTask as TExtractionTask } from "../api/extractionTask/ExtractionTask";

export const EXTRACTIONTASK_TITLE_FIELD = "id";

export const ExtractionTaskTitle = (record: TExtractionTask): string => {
  return record.id?.toString() || String(record.id);
};
