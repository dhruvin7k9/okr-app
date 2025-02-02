import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {ObjectiveDto} from "./dto/objective.dto";

@Injectable()
export class ObjectivesService {
    constructor(private service: PrismaService) {
    }

    fetchAll() {
        return this.service.objective.findMany({
            include: {
                keyResult: true,
            }
        })
    }

    fetchUnique(number: number) {
        return this.service.objective.findUnique({
            include: {
                keyResult: true,
            }
        })
    }

    create(dto: ObjectiveDto) {
        return this.service.objective.create({data: dto});
    }

    update(id: string, dto: ObjectiveDto) {
        return this.service.objective.update({where: id, data: dto})
    }

    delete(id: string) {
        return this.service.objective.delete({where: id});
    }
}
