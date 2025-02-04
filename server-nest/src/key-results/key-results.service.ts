import {Injectable} from '@nestjs/common';
import {KeyResultDto} from './dto/key-result.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class KeyResultsService {
    constructor(private service: PrismaService) {
    }

    fetchAll(objectiveId: number) {
        return this.service.keyResult.findMany({
            where: {objectiveId: objectiveId}
        });
    }

    fetchUnique(id: number) {
        return this.service.keyResult.findUnique({where: {id: id}});
    }

    createMany(dtoArray: KeyResultDto[]) {
        return this.service.keyResult.createMany({data: dtoArray});
    }

    create(dto: KeyResultDto) {
        return this.service.keyResult.create({data: dto});
    }

    update(id: number, dto: KeyResultDto) {
        return this.service.keyResult.update({where: {id: id}, data: dto})
    }

    delete(id: number) {
        return this.service.keyResult.delete({where: {id: id}})
    }
}
