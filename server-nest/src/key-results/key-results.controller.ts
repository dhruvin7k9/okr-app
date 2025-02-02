import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import {KeyResultsService} from './key-results.service';
import {KeyResultDto} from './dto/key-result.dto';

@Controller('key-results')
export class KeyResultsController {
    constructor(private readonly service: KeyResultsService) {
    }

    @Get("?objectiveId=:objectiveId")
    fetchAll(@Param("objectiveId") objectiveId: string) {
        this.service.fetchAll(Number(objectiveId));
    }

    @Get("/:id")
    fetchUnique(@Param("id") id: string) {
        this.service.fetchUnique(Number(id));
    }

    @Post("?many")
    createMany(@Body() dtoArray: KeyResultDto[]) {
        this.service.createMany(dtoArray);
    }

    @Post("/")
    create(@Body() dto: KeyResultDto) {
        this.service.create(dto);
    }

    @Put("/:id")
    update(@Param("id") id : string, @Body() dto : KeyResultDto) {
        this.service.update(Number(id), dto);
    }

    @Delete("/:id")
    delete(@Param("id") id : string) {
        this.service.delete(Number(id));
    }
}
