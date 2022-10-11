import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressPerson } from '../entities/address.entity';
import { Person } from '../entities/person.entity';

@Injectable()
export class PersonService {

    constructor(
        @InjectRepository(Person) 
        private personRepo: Repository<Person>,

        ) {}

        findAll(){
           return this.personRepo.find(
            {
                relations: {
                    personAddress: true
                },

                order: {
                    name: 'ASC'

                }
            }
           );

           
        }

       

        findOne(id:any) {
            return this.personRepo.findOne(id);
        }

        create(body: any){
            const newPerson = this.personRepo.create(body);

            return this.personRepo.save(newPerson);

            //newPerson.name = body.name
            // newPerson.age = body.age
            // newPerson.id = body.id


        }

        async update(id: any, body: any){
            const person = await this.personRepo.findOne(id);
            this.personRepo.merge(person, body);
            return this.personRepo.save(person);

        }

        delete(id:any){
            this.personRepo.delete(id);
            return true;
        }
}

