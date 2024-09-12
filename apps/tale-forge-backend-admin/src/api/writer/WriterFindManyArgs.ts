import { WriterWhereInput } from "./WriterWhereInput";
import { WriterOrderByInput } from "./WriterOrderByInput";

export type WriterFindManyArgs = {
  where?: WriterWhereInput;
  orderBy?: Array<WriterOrderByInput>;
  skip?: number;
  take?: number;
};
