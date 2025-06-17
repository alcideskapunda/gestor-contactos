import { Knex } from "../database"

const tableName = "contacts"

export async function create(data: Record<string, any>) {
    return await Knex(tableName).insert(data)
    .returning("*")
    // .returning(['id', 'prefix', 'country', 'number']);
}

export async function getbyid(id: number) {
    return await Knex(tableName).select("*").where("id", "=", id).first();
}

export async function getall() {
    return await Knex(tableName).select(`${tableName}.id`, `${tableName}.prefix`, `${tableName}.country`, `${tableName}.number`, 'users.name')
        .leftJoin("users", `${tableName}.user_id`, "users.id")
}

export async function updated(id: number, data:  Record<string, any>) {
    return Knex(tableName).update(data).where("id", "=", id);
}

export async function deleted(id: number) {
    return await Knex(tableName).where("id", "=", id).del();
}

export async function iduser(id: number) {
    return await Knex("users").select("*").where("id", "=", id).first();
}