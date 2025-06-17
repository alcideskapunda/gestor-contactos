import * as userRepository from "../repository/user-repository"
import msg from "../../constants";

export async function create(data: string) {
    return await userRepository.create(data)
}

export async function getbyid(id: number) {
    const user =  await userRepository.getbyid(id)
    if (!user) throw new Error(msg.userNotFound);
    return user
}

export async function getall() {
    const allUsers =  await userRepository.getall()

    if (allUsers.length === 0) throw new Error(msg.userNotFound);
    
    return allUsers
}

export async function updated(id: number, data: string) {
    const user =  await userRepository.getbyid(id)
    if (!user) throw new Error(msg.userNotFound);

    return await userRepository.updated(id, data)
}

export async function deleted(id: number) {
    const user =  await userRepository.getbyid(id)
    if (!user) throw new Error(msg.userNotFound);
    
    return await userRepository.deleted(id)
}
