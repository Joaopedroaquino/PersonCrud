import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/local-strategy/local-strategy.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'abcd123456',
      signOptions: {
        expiresIn: '60s'
      }
    }), UserModule,PassportModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService, LocalStrategy]
})
export class AuthModule { }
