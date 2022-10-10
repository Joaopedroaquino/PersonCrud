import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot( //{
      // type: 'postgres',
      // host: 'localhost',
      // port: 5437,
      // username: 'root',
      // password: 'root',
      // database: 'root',
      // entities: ['dist/**/*.entity{.ts,.js}'],
      // synchronize: false,
      // retryDelay: 3000,
      // retryAttempts: 10
    //}
    ),  
    
    PersonModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
