import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

export const USERS_REPO = "UsersRepository";

export interface UsersRepository{
    createUser(user: CreateUserDto): Promise<User>
    getUsers(): Promise<User[]>
    getUsersById(id: string): Promise<User>
    updateUser(id: string): Promise<User>
    remove(id: string): Promise<User>
}