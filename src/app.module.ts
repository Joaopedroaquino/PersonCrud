import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AddressPerson } from './person/entities/address.entity';
import { Person } from './person/entities/person.entity';
import { PersonModule } from './person/person.module';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot( 
     {
        type: 'postgres',
        host: 'localhost',
        port: 5437,
        username: 'root',
        password: 'root',
        database: 'root',
        entities: [__dirname + '/**/*.entity{.js,.ts}'],
        synchronize: true,
      }
     
 
    ),  
    
    PersonModule, ProfileModule],
  controllers: [ProfileController],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log(__dirname)
  }

 }
