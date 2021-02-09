import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as UserEntity } from './user.entity';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  findOneById(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findUser(username, password): any {
    return this.usersRepository.find({
      where: {
        login: username,
        password: password,
      },
    });
  }

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user.username === username);
  // }
}
