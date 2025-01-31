import { Module } from '@nestjs/common';
import { ObjectivesModule } from './objectives/objectives.module';
import { DatabaseModule } from './database/database.module';
import { KeyResultsModule } from './key-results/key-results.module';

@Module({
  imports: [ObjectivesModule, DatabaseModule, KeyResultsModule],
})
export class AppModule {}
