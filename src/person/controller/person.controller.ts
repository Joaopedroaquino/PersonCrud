import { Controller, Get } from '@nestjs/common';

@Controller('person')
export class PersonController {
    @Get()
    getAll(){
        return [1,2,3];
    }
}
