import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UserModel } from "./schemas/user.schema";
import { UsersRepository } from "./usersRepository";
import {InjectModel} from '@nestjs/mongoose';


export class MongoUsersRepository implements UsersRepository{
    constructor(@InjectModel(User.name) private userModel: UserModel){}

    async createUser(user: CreateUserDto): Promise<User> {
        return this.userModel.create(user);
    }
    async getUsers(): Promise<User[]> {
        return this.userModel.find();
    }
    async getUsersById(id: string): Promise<User> {
        return this.userModel.findOne({_id: id});
    }
    async updateUser(id: string): Promise<User>{
        return this.userModel.updateOne({_id:id});
    }
    async remove(id: string): Promise<User>{
        return this.userModel.findByIdAndRemove({_id: id})
    }
}