import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WriterServiceBase } from "./base/writer.service.base";

@Injectable()
export class WriterService extends WriterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
