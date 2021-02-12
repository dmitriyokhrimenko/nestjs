import { Get, Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {
    console.log('qwerty 111');
  }

  @Get('getUser')
  getUser() {
    return this.userService.findOneById('5');
  }
  @Get('users')
  getAllUser() {
    return this.userService.findAll();
  }
}
