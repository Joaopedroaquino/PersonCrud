import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddressService } from '../services/address.service';
import { PersonService } from '../services/person.service';

@Controller('address')
export class AddressController {
    
    constructor(private addresService: AddressService){}


    @Get()
    getAll(){
        return this.addresService.findAll();
    }



    @Post()
    create(@Body() body: any){
        return this.addresService.create(body);

    }





}
