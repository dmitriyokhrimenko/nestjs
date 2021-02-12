import { Get, Controller } from '@nestjs/common';
import { UserService } from '../users/user.service';
@Controller()
export class AuthController {
  constructor(private readonly userService: UserService) {
    console.log('qwerty');
  }

  // @Get('/getUser')
  // getUser() {
  //   return this.userService.findOneById('1');
  // }
}
