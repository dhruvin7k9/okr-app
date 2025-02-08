import { Module } from '@nestjs/common';
import { ObjectivesModule } from './objectives/objectives.module';
import { DatabaseModule } from './database/database.module';
import { KeyResultsModule } from './key-results/key-results.module';
import { PrismaService } from './prisma/prisma.service';
import { PromptModule } from './prompt/prompt.module';

@Module({
  imports: [ObjectivesModule, DatabaseModule, KeyResultsModule, PromptModule],
  providers: [PrismaService],
})
export class AppModule {}
