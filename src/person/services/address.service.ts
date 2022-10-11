import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressPerson } from '../entities/address.entity';

@Injectable()
export class AddressService {

    constructor(
        @InjectRepository(AddressPerson) 
        private addressRepo: Repository<AddressPerson>
        ) {}

        findAll(){
           return this.addressRepo.find();
        }

        findOne(id:any) {
            return this.addressRepo.findOne(id);
        }

        create(body: any){
            const newPerson = this.addressRepo.create(body);

            return this.addressRepo.save(newPerson);

        }
}

