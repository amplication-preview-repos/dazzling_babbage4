import { TaleCoinTransaction as TTaleCoinTransaction } from "../api/taleCoinTransaction/TaleCoinTransaction";

export const TALECOINTRANSACTION_TITLE_FIELD = "id";

export const TaleCoinTransactionTitle = (
  record: TTaleCoinTransaction
): string => {
  return record.id?.toString() || String(record.id);
};
