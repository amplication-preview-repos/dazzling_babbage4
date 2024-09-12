import * as graphql from "@nestjs/graphql";
import { WriterResolverBase } from "./base/writer.resolver.base";
import { Writer } from "./base/Writer";
import { WriterService } from "./writer.service";

@graphql.Resolver(() => Writer)
export class WriterResolver extends WriterResolverBase {
  constructor(protected readonly service: WriterService) {
    super(service);
  }
}
