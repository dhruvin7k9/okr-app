import { Module } from '@nestjs/common';
import { KeyResultsService } from './key-results.service';
import { KeyResultsController } from './key-results.controller';

@Module({
  controllers: [KeyResultsController],
  providers: [KeyResultsService],
})
export class KeyResultsModule {}
