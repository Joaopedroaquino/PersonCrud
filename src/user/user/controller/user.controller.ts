import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth/auth.service';
import { IresultDTO } from 'src/person/dto/IResultDTO';
import { Person } from 'src/person/entities/person.entity';
import { ICreateUserDTO } from '../dto/ICreateUserDTO';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService, private authService: AuthService){}


    @Get()
   async getAll(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Post('register')
    async create(@Body() body: ICreateUserDTO ): Promise<IresultDTO> {

        this.userService.create(body)
        return <IresultDTO> {
            status: true,
            message: "Created"
            
        }
    }

    @UseGuards(AuthGuard('local'))
   @Post('login')
   async login(@Request()req) {
    return this.authService.login(req.user)
  }
}
