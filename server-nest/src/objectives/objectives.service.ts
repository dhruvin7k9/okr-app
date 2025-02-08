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
                keyResults: true,
            }
        })
    }
    
    fetchUnique(id: number) {
        return this.service.objective.findUnique({
            where: {id: id},
            include: {
                keyResults: true,
            }
        })
    }
    
    create(dto: ObjectiveDto) {
        return this.service.objective.create({data: dto});
    }
    
    update(id: number, dto: ObjectiveDto) {
        return this.service.objective.update({where: {id: id}, data: dto})
    }
    
    async delete(id: number) {
        await this.service.keyResult.deleteMany({where: {objectiveId: id}});
        return this.service.objective.delete({where: {id: id}});
    }
}
