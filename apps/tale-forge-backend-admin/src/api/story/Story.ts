import { User } from "../user/User";

export type Story = {
  authorMimic: string | null;
  content: string | null;
  createdAt: Date;
  genre: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
