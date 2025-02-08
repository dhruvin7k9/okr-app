import { z } from 'zod';

const keyResultSchema = z.object({
    title: z.string(),
    initialValue: z.number(),
    currentValue: z.number(),
    targetValue: z.number(),
    metric: z.string()
});

const objectiveSchema = z.object({
    title: z.string(),
    keyResults: z.array(keyResultSchema)
});

const okrSchema = z.array(z.object({
    objective: objectiveSchema,
}));

export { okrSchema };