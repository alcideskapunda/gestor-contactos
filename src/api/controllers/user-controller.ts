import { Request, Response } from "express";
import * as userService from "../services/user-service"
import { StatusCodes } from "http-status-codes";
import msg from "../../constants";
import { z } from "zod";

const User = z.object({
    name: z.string().min(3).max(50).trim()
})

export async function create(req: Request, res: Response) {
    const data = req.body

    try {
        const [newUser] = await userService.create(data)
        res.status(StatusCodes.CREATED).json({ 
            message: msg.userSuccess,
            user: newUser
         })
    } catch (error) {
        if (error instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message || msg.userError })
        }
    }
}