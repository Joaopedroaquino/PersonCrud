import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICreateUserDTO } from '../dto/ICreateUserDTO';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private userRepo: Repository<User>,){}

    async findAll():Promise<User[]> {
        return this.userRepo.find()
    }

    async create(user: ICreateUserDTO): Promise<ICreateUserDTO>{
        const newUser = this.userRepo.create(user);
        return this.userRepo.save(newUser);
    }
}
