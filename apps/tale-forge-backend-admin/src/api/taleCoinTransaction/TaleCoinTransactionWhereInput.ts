import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaleCoinTransactionWhereInput = {
  amount?: IntNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
