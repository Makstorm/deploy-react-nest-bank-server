import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('/')
export class AppController {
  @Get('ping')
  public async confirmEmail(@Res() res: Response) {
    res.sendStatus(200);
  }
}
