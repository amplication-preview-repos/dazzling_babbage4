import { Module } from "@nestjs/common";
import { WriterModuleBase } from "./base/writer.module.base";
import { WriterService } from "./writer.service";
import { WriterController } from "./writer.controller";
import { WriterResolver } from "./writer.resolver";

@Module({
  imports: [WriterModuleBase],
  controllers: [WriterController],
  providers: [WriterService, WriterResolver],
  exports: [WriterService],
})
export class WriterModule {}
