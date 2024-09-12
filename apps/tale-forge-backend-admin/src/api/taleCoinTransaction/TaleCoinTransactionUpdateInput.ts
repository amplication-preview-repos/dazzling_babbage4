import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaleCoinTransactionUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
