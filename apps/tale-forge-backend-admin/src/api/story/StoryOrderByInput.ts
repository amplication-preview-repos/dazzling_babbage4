import { SortOrder } from "../../util/SortOrder";

export type StoryOrderByInput = {
  authorMimic?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
