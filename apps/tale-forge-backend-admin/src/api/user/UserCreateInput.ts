import { InputJsonValue } from "../../types";
import { StoryCreateNestedManyWithoutUsersInput } from "./StoryCreateNestedManyWithoutUsersInput";
import { TaleCoinTransactionCreateNestedManyWithoutUsersInput } from "./TaleCoinTransactionCreateNestedManyWithoutUsersInput";
import { WriterCreateNestedManyWithoutUsersInput } from "./WriterCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  stories?: StoryCreateNestedManyWithoutUsersInput;
  taleCoinTransactions?: TaleCoinTransactionCreateNestedManyWithoutUsersInput;
  username: string;
  writers?: WriterCreateNestedManyWithoutUsersInput;
};
