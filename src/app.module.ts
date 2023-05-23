// app.module.ts

import { Module } from '@nestjs/common';
import { UtilsService } from 'src/utils/utils.service';
import { TestController } from 'src/api/test.controller';

@Module({
  providers: [UtilsService],
  controllers: [TestController],
})
export class AppModule {}
