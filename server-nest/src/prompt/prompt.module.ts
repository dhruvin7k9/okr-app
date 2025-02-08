import { Module } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { PromptController } from './prompt.controller';
import { ConfigModule } from '@nestjs/config';
import {PrismaService} from "../prisma/prisma.service";

@Module({
  controllers: [PromptController],
  providers: [PromptService, PrismaService],
  imports: [ConfigModule]
})
export class PromptModule {}
