import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';

@Module({

  imports: [
    JwtModule.register({
      secret:'abcd123456',
      signOptions:{
        expiresIn: '60s' 
    }
  })],
  controllers: [AuthController]
})
export class AuthModule {}
