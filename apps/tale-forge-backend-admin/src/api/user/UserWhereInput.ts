import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StoryListRelationFilter } from "../story/StoryListRelationFilter";
import { TaleCoinTransactionListRelationFilter } from "../taleCoinTransaction/TaleCoinTransactionListRelationFilter";
import { WriterListRelationFilter } from "../writer/WriterListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  stories?: StoryListRelationFilter;
  taleCoinTransactions?: TaleCoinTransactionListRelationFilter;
  username?: StringFilter;
  writers?: WriterListRelationFilter;
};
