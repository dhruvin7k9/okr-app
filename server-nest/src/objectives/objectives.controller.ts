import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { ObjectivesService } from './objectives.service';
import {ObjectiveDto} from "./dto/objective.dto";

@Controller('objectives')
export class ObjectivesController {
    constructor(private service: ObjectivesService){}
    @Get("/")
    fetchAll() {
        return this.service.fetchAll();
    }

    @Get("/:id")
    fetchUnique(@Param("id") id : string) {
        return this.service.fetchUnique(Number(id));
    }

    @Post("/")
    create(@Body() dto : ObjectiveDto){
        return this.service.create(dto);
    }

    @Put("/:id")
    update(@Param("id") id : string, @Body() dto : ObjectiveDto) {
        return this.service.update(id, dto);
    }

    @Delete("/:id")
    delete(@Param("id") id : string) {
        return this.service.delete(id);
    }
}
