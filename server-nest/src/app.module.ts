import { Module } from '@nestjs/common';
import { ObjectivesModule } from './objectives/objectives.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ObjectivesModule, DatabaseModule],
})
export class AppModule {}
