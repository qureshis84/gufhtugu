import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import UserRepository from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  create(data: CreateUserDto) {
    return this.userRepository.create(data);
  }
}
