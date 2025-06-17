import { Knex } from "../database"

interface userData {
    name: string
}

const tableName = "users"

export async function create(data: string) {
    return await Knex(tableName).insert(data)
    // .returning("*")
    .returning(['id', 'name']);
}

export async function getbyid(id: number) {
    return await Knex(tableName).select("*").where("id", "=", id).first();
}

export async function updated(id: number, data: string) {
    return Knex(tableName).update(data).where("id", "=", id);
}

export async function deleted(id: number) {
    return await Knex(tableName).where("id", "=", id).del();
}