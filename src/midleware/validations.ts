import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import msg from "../constants";
import { z, ZodError } from "zod";

const User = z.object({
    name: z.string().min(3, msg.minChar).max(50, msg.maxChar).trim()
})

const Contact = z.object({
    prefix: z.string().max(5, msg.maxPrefix).trim(),
    country: z.string().optional(),
    number: z.string().max(20, msg.maxPhone),
    user_id: z.bigint()
})

type ruleType = typeof User | typeof Contact;

function errors(ruleValidation: ruleType, data: any) {
    const { success, error } = ruleValidation.safeParse(data)

    if (!success && error instanceof ZodError) {
        const zodErrors: Record<string, string[]> = {};

        error.errors.forEach((err) => {
            const field = err.path[0] as string;
            
            if (!zodErrors[field]) {
                zodErrors[field] = [];
            }
            zodErrors[field].push(err.message);
        });
        return zodErrors
    }
    return null
}

export const userValidation: RequestHandler = (req, res, next) => {
    const data = req.body
    const zodErrors = errors(User, data)

    if (zodErrors) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: zodErrors });
        return        
    }
    
    next();
}

export const contactValidation: RequestHandler = (req, res, next) => {
    const data = req.body
    const zodErrors = errors(Contact, data)

    if (zodErrors) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: zodErrors });
        return        
    }
    
    next();
}

