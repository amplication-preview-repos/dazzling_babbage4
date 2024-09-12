import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaleCoinTransactionService } from "./taleCoinTransaction.service";
import { TaleCoinTransactionControllerBase } from "./base/taleCoinTransaction.controller.base";

@swagger.ApiTags("taleCoinTransactions")
@common.Controller("taleCoinTransactions")
export class TaleCoinTransactionController extends TaleCoinTransactionControllerBase {
  constructor(protected readonly service: TaleCoinTransactionService) {
    super(service);
  }
}
