import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() body){
        return {token: this.authService.login( body.username, body.password)};
    }
    
    @Get('enter')
    test(@Req() req){ 
        console.log(req.user)
        return {
            name:'Joao Pedro',
        
        }
    }
}
