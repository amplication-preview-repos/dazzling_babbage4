import { InputJsonValue } from "../../types";
import { StoryUpdateManyWithoutUsersInput } from "./StoryUpdateManyWithoutUsersInput";
import { TaleCoinTransactionUpdateManyWithoutUsersInput } from "./TaleCoinTransactionUpdateManyWithoutUsersInput";
import { WriterUpdateManyWithoutUsersInput } from "./WriterUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  stories?: StoryUpdateManyWithoutUsersInput;
  taleCoinTransactions?: TaleCoinTransactionUpdateManyWithoutUsersInput;
  username?: string;
  writers?: WriterUpdateManyWithoutUsersInput;
};
