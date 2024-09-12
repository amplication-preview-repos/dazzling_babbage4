import { JsonValue } from "type-fest";
import { Story } from "../story/Story";
import { TaleCoinTransaction } from "../taleCoinTransaction/TaleCoinTransaction";
import { Writer } from "../writer/Writer";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  stories?: Array<Story>;
  taleCoinTransactions?: Array<TaleCoinTransaction>;
  updatedAt: Date;
  username: string;
  writers?: Array<Writer>;
};
