import { Module } from '@nestjs/common';
import { ObjectivesModule } from './objectives/objectives.module';
import { DatabaseModule } from './database/database.module';
import { KeyResultsModule } from './key-results/key-results.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ObjectivesModule, DatabaseModule, KeyResultsModule],
  providers: [PrismaService],
})
export class AppModule {}
