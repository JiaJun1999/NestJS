// api/test.controller.ts

import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UtilsService } from 'src/utils/utils.service';

@Controller('api/test')
export class TestController {
  constructor(private readonly utilsService: UtilsService) {}

  @Post()
  @UsePipes(ValidationPipe) // 使用ValidationPipe进行自动校验
  double(@Body('num') num: number): { result: number } {
    const result = this.utilsService.double(num);
    return { result };
  }
}
