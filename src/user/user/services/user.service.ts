import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICreateUserDTO } from '../dto/ICreateUserDTO';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private userRepo: Repository<User>,){}

    async findAll():Promise<User[]> {
        return this.userRepo.find()
    }

    async create(user: ICreateUserDTO): Promise<ICreateUserDTO>{
        const newUser = this.userRepo.create(user);
        newUser.email = user.email
        newUser.name = user.name
        newUser.password = bcrypt.hashSync(user.password, 10)
        
        return this.userRepo.save(newUser);
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.userRepo.createQueryBuilder('user').where('email = :email, {email}').getOne()
      }
}
