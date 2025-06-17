import { Request, Response } from "express";
import * as userService from "../services/user-service"
import { StatusCodes } from "http-status-codes";
import msg from "../../constants";

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

export async function getbyid(req: Request, res: Response) {
    const { id } = req.params
    try {
        const user = await userService.getbyid(Number(id))
        res.status(StatusCodes.OK).json(user)
    } catch (error) {
        if (error instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message || msg.userNotFound })
        }
    }
}

export async function getall(_req: Request, res: Response) {
    try {
        const allUsers = await userService.getall()
        res.status(StatusCodes.OK).json(allUsers)
    } catch (error) {
        if (error instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message || msg.userNotFound })
        }
    }
}

export async function updated(req: Request, res: Response) {
    const { id } = req.params
    const data = req.body

    try {
        await userService.updated(Number(id), data)
        res.status(StatusCodes.OK).json({ message: msg.userUpdate })
    } catch (error) {
        if (error instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message || msg.userErrorUpdate })
        }
    }
}

export async function deleted(req: Request, res: Response) {
    const { id } = req.params
    try {
        await userService.deleted(Number(id))
        res.status(StatusCodes.OK).json({ message: msg.userDel })
    } catch (error) {
        if (error instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message || msg.userErrorDel })
        }
    }
}