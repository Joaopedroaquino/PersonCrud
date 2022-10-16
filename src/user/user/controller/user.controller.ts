import { Body, Controller, Get, Post } from '@nestjs/common';
import { Person } from 'src/person/entities/person.entity';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}


    @Get()
   async getAll(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Post()
    async create(@Body() body: any ) {
        return this.userService.create(body)
    }
}
