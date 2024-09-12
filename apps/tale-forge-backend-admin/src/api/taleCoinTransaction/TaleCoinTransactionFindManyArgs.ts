import { TaleCoinTransactionWhereInput } from "./TaleCoinTransactionWhereInput";
import { TaleCoinTransactionOrderByInput } from "./TaleCoinTransactionOrderByInput";

export type TaleCoinTransactionFindManyArgs = {
  where?: TaleCoinTransactionWhereInput;
  orderBy?: Array<TaleCoinTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
