import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaleCoinTransactionServiceBase } from "./base/taleCoinTransaction.service.base";

@Injectable()
export class TaleCoinTransactionService extends TaleCoinTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
