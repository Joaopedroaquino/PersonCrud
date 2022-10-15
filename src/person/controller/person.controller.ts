import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Role } from 'role.decorator';
import { JwtGuard } from 'src/auth/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { PersonService } from '../services/person.service';

@Controller('person')
export class PersonController {
    
    constructor(private personService: PersonService){}

    @Role('admin')
    @UseGuards(JwtGuard, RoleGuard)
    @Get()
    getAll(){
        return this.personService.findAll();
    }


    @Get(':id')
    getOne(@Param('id') id: number){
        return this.personService.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.personService.create(body);

    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: any){
        return this.personService.update(id, body);

    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.personService.delete(id);

    }




}
