import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../entities/person.entity';

@Injectable()
export class PersonService {

    constructor(
        @InjectRepository(Person) private personRepo: Repository<Person>
        ) {}

        findAll(){
           return this.personRepo.find();
        }

        findOne(id:any) {
            return this.personRepo.findOne(id);
        }

        create(body: any){
            const newPerson = this.personRepo.create(

            );

            return this.personRepo.save(newPerson);

            //newPerson.name = body.name
            // newPerson.age = body.age
            // newPerson.id = body.id


        }
}

