import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/config.enum';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get()
  getFindAll() {
    const env = this.configService.get(ConfigEnum.DB_PORT);
    console.log(
      '🚀 ~ file: user.controller.ts:16 ~ UserController ~ getFindAll ~ env:',
      env,
    );
    return this.userService.findAll();
  }
}
