/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  TaleCoinTransaction as PrismaTaleCoinTransaction,
  User as PrismaUser,
} from "@prisma/client";

export class TaleCoinTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TaleCoinTransactionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.taleCoinTransaction.count(args);
  }

  async taleCoinTransactions(
    args: Prisma.TaleCoinTransactionFindManyArgs
  ): Promise<PrismaTaleCoinTransaction[]> {
    return this.prisma.taleCoinTransaction.findMany(args);
  }
  async taleCoinTransaction(
    args: Prisma.TaleCoinTransactionFindUniqueArgs
  ): Promise<PrismaTaleCoinTransaction | null> {
    return this.prisma.taleCoinTransaction.findUnique(args);
  }
  async createTaleCoinTransaction(
    args: Prisma.TaleCoinTransactionCreateArgs
  ): Promise<PrismaTaleCoinTransaction> {
    return this.prisma.taleCoinTransaction.create(args);
  }
  async updateTaleCoinTransaction(
    args: Prisma.TaleCoinTransactionUpdateArgs
  ): Promise<PrismaTaleCoinTransaction> {
    return this.prisma.taleCoinTransaction.update(args);
  }
  async deleteTaleCoinTransaction(
    args: Prisma.TaleCoinTransactionDeleteArgs
  ): Promise<PrismaTaleCoinTransaction> {
    return this.prisma.taleCoinTransaction.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.taleCoinTransaction
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
