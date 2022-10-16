import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth/auth.service';
import { UserController } from './user/controller/user.controller';
import { User } from './user/entities/user.entity';
import { UserService } from './user/services/user.service';

@Module({
  imports:[ TypeOrmModule.forFeature([User, ]),],
  exports:[UserService],

  controllers: [UserController],
  providers: [UserService,AuthService, JwtService]
})
export class UserModule {}
