import { Module } from '@nestjs/common';
import { PersonService } from './services/person.service';

@Module({
  providers: [PersonService]
})
export class PersonModule {}
