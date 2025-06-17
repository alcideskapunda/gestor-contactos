import * as contactRepository from "../repository/contact-repository"
import msg from "../../constants";
import getCountry from "../../helpers/nameCountry";

export async function create(data: Record<string, any>) {
    const { prefix, number, user_id } = data
    const contactExists = await contactRepository.iduser(Number(user_id))
    if (!contactExists) throw new Error(msg.userNotFound);

    const country = await getCountry(prefix)

    if (country === "Unknown") throw new Error(msg.coutryNotFoud);

    const contact = {
        prefix,
        country,
        number,
        user_id
    }
    
    return await contactRepository.create(contact)
}

export async function getall() {
    const allContacts =  await contactRepository.getall()
    
    if (allContacts.length === 0) throw new Error(msg.contactNotFound);
    
    return allContacts
}

export async function getbyid(id: number) {
    const contact =  await contactRepository.getbyid(id)
    if (!contact) throw new Error(msg.contactNotFound);
    return contact
}

export async function updated(id: number, data: Record<string, any>) {
    const { prefix, number, user_id } = data

    const userExists = await contactRepository.iduser(Number(user_id))
    const contactExists =  await contactRepository.getbyid(id)

    if (!contactExists) throw new Error(msg.contactNotFound);
    if (!userExists) throw new Error(msg.userNotFound);

    const country = await getCountry(prefix)

    if (country === "Unknown") throw new Error(msg.coutryNotFoud);

    const updateContact = {
        prefix,
        country,
        number,
        user_id
    }

    return await contactRepository.updated(id, updateContact)
}

export async function deleted(id: number) {
    const contact =  await contactRepository.getbyid(id)
    if (!contact) throw new Error(msg.contactNotFound);
    
    return await contactRepository.deleted(id)
}