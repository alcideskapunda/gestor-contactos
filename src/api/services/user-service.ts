import * as userRepository from "../repository/user-repository"

export async function create(data: string) {
    return await userRepository.create(data)
}

export async function getbyid(id: number) {
    return await userRepository.getbyid(id)
}

export async function updated(id: number, data: string) {
    return await userRepository.updated(id, data)
}

export async function deleted(id: number) {
    return await userRepository.deleted(id)
}
