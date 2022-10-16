import { Body, Controller, Get, Post } from '@nestjs/common';
import { IresultDTO } from 'src/person/dto/IResultDTO';
import { Person } from 'src/person/entities/person.entity';
import { ICreateUserDTO } from '../dto/ICreateUserDTO';
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
    async create(@Body() body: ICreateUserDTO ): Promise<IresultDTO> {
        return <IresultDTO> {
            status: false,
            message: "Created"
            
        }
    }
}
