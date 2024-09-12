import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StoryUpdateInput = {
  authorMimic?: string | null;
  content?: string | null;
  genre?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
