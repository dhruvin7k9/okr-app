import {Controller, Get, Query} from '@nestjs/common';
import { PromptService } from './prompt.service';

@Controller('prompt')
export class PromptController {
  constructor(private readonly service: PromptService) {}
  
  @Get("")
  generateOkr(@Query("input") input : string) {
    return this.service.generateOkr(input);
  }
}
