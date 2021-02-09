import { Get, Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UsersService) {
    console.log('qwerty');
  }

  @Get('getUser')
  getUser() {
    return this.userService.findOneById('1');
  }

  @Get('users')
  getAllUser() {
    return this.userService.findAll();
  }
}
