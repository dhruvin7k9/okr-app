import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {AzureChatOpenAI} from "@langchain/openai";

@Injectable()
export class PromptService {
    constructor(private readonly service: PrismaService) {
    }
    
    async generateOkr(input: string) {
        const model = new AzureChatOpenAI({
            model: "gpt-4o"
        });
        
        const response = await model.invoke(input);
        return response.content as string;
    }
}
