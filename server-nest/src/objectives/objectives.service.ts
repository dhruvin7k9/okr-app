import {Injectable} from '@nestjs/common';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class ObjectivesService {
    constructor(private databaseService: DatabaseService) {
    }

    async getAll() {
        const objectives = await this.databaseService.query("SELECT * FROM objectives");
        return objectives.rows;
    }

    async create(title: string) {
        const objectives = await this.databaseService.query("INSERT INTO objectives (title) VALUES ($1) RETURNING *", [title]);
        return objectives.rows[0];
    }
}
