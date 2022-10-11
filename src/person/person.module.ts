import { Module } from '@nestjs/common';
import { PersonService } from './services/person.service';
import { PersonController } from './controller/person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { DatabaseModule } from 'src/shared/database.module';
import { AddressPerson } from './entities/address.entity';
import { AddressService } from './services/address.service';
import { AddressController } from './controller/address.controller';

@Module({
  imports:[ TypeOrmModule.forFeature([Person, AddressPerson])],
  providers: [PersonService,AddressService],
  controllers: [PersonController, AddressController]
})
export class PersonModule {}
