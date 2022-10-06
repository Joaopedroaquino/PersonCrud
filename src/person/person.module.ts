import { Module } from '@nestjs/common';
import { PersonService } from './services/person.service';
import { PersonController } from './controller/person.controller';

@Module({
  providers: [PersonService],
  controllers: [PersonController]
})
export class PersonModule {}
