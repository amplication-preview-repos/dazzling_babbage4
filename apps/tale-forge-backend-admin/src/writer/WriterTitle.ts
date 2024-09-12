import { Writer as TWriter } from "../api/writer/Writer";

export const WRITER_TITLE_FIELD = "id";

export const WriterTitle = (record: TWriter): string => {
  return record.id?.toString() || String(record.id);
};
