import { Controller, Get } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}


    @Get()
   async getAll(): Promise<User[]> {
        return this.userService.findAll()
    }
}
