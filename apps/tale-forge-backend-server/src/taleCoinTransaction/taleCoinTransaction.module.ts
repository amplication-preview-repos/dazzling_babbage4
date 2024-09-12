import { Module } from "@nestjs/common";
import { TaleCoinTransactionModuleBase } from "./base/taleCoinTransaction.module.base";
import { TaleCoinTransactionService } from "./taleCoinTransaction.service";
import { TaleCoinTransactionController } from "./taleCoinTransaction.controller";
import { TaleCoinTransactionResolver } from "./taleCoinTransaction.resolver";

@Module({
  imports: [TaleCoinTransactionModuleBase],
  controllers: [TaleCoinTransactionController],
  providers: [TaleCoinTransactionService, TaleCoinTransactionResolver],
  exports: [TaleCoinTransactionService],
})
export class TaleCoinTransactionModule {}
