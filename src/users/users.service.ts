import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USERS_REPO } from './usersRepository';

@Injectable()
export class UsersService {

  constructor(@Inject(USERS_REPO) private userRepository){}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.createUser(createUserDto);
  }

  async findAll() {
    return await this.userRepository.getUsers();
  }

  async findOne(id: number) {
    return await this.userRepository.getUsersById({_id: id});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.updateOne(updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.remove({_id: id});
  }
}
