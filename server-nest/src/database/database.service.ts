import { Injectable } from '@nestjs/common';
import {Pool} from 'pg';

@Injectable()
export class DatabaseService {
    private pool:Pool;
    constructor() {
        this.pool = new Pool({
            user:'dhruvin',
            host:'localhost',
            database:'okrs',
            password:'dhruvin',
            port:5432
        })
    }

    async query(query:string, params?:string[]){
        return await this.pool.query(query, params);
    }
}
