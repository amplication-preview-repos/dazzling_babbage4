import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Writer = {
  bio: string | null;
  createdAt: Date;
  id: string;
  profilePicture: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
