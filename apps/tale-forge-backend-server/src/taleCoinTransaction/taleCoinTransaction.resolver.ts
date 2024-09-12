import * as graphql from "@nestjs/graphql";
import { TaleCoinTransactionResolverBase } from "./base/taleCoinTransaction.resolver.base";
import { TaleCoinTransaction } from "./base/TaleCoinTransaction";
import { TaleCoinTransactionService } from "./taleCoinTransaction.service";

@graphql.Resolver(() => TaleCoinTransaction)
export class TaleCoinTransactionResolver extends TaleCoinTransactionResolverBase {
  constructor(protected readonly service: TaleCoinTransactionService) {
    super(service);
  }
}
