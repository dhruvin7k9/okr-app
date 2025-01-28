import {Body, Controller, Get, Post} from '@nestjs/common';
import { ObjectivesService } from './objectives.service';
import {CreateObjectivesDto} from "./create-objectives.dto";

@Controller('objectives')
export class ObjectivesController {
    constructor(private objectivesService: ObjectivesService){}
    @Get("/")
    getAll() {
        return this.objectivesService.getAll();
    }

    @Post()
    async create(@Body() dto:CreateObjectivesDto){
        const {title} = dto;
        const objective = await this.objectivesService.create(title);
        return {message:"Successfully added", objective};
    }
}
