import { Module } from '@nestjs/common';
import { PersonService } from './services/person.service';
import { PersonController } from './controller/person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([Person])],
  providers: [PersonService],
  controllers: [PersonController]
})
export class PersonModule {}
