import { Get, Controller } from '@nestjs/common';
import { UsersService } from '../users/users.service';
@Controller()
export class UserController {
  constructor(private readonly userService: UsersService) {
    console.log('qwerty');
  }

  // @Get('/getUser')
  // getUser() {
  //   return this.userService.findOneById('1');
  // }
}
