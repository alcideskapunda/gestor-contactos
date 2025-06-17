import { Request, Response } from "express";
import * as contactService from "../services/contact-service"
import { StatusCodes } from "http-status-codes";
import msg from "../../constants";

export async function create(req: Request, res: Response) {
    const data = req.body

    try {
        const newContact = await contactService.create(data)
        res.status(StatusCodes.CREATED).json({ 
            message: msg.contactSuccess,
            contact: newContact
         })
    } catch (error) {
        if (error instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message || msg.contactError })
        }
    }
}

export async function getall(_req: Request, res: Response) {
    try {
        const allContacts = await contactService.getall()
        res.status(StatusCodes.OK).json(allContacts)
    } catch (error) {
        if (error instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message || msg.contactNotFound })
        }
    }
}

export async function getbyid(req: Request, res: Response) {
    const { id } = req.params
    try {
        const user = await contactService.getbyid(Number(id))
        res.status(StatusCodes.OK).json(user)
    } catch (error) {
        if (error instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message || msg.contactNotFound })
        }
    }
}

export async function updated(req: Request, res: Response) {
    const { id } = req.params
    const data = req.body

    try {
        await contactService.updated(Number(id), data)
        res.status(StatusCodes.OK).json({ message: msg.contactUpdate })
    } catch (error) {
        if (error instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message || msg.contactErrorUpdate })
        }
    }
}

export async function deleted(req: Request, res: Response) {
    const { id } = req.params
    try {
        await contactService.deleted(Number(id))
        res.status(StatusCodes.OK).json({ message: msg.contactDel })
    } catch (error) {
        if (error instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message || msg.contactErrorDel })
        }
    }
}