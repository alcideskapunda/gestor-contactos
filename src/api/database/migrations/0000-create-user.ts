import type { Knex } from "knex";

const tableName = "users"

export async function up(knex: Knex) {
    return knex
    .schema
    .createTable(tableName, (table) => {
        table.bigIncrements("id").primary().index().notNullable();
        table.string("name", 50).checkLength("<=", 50).index().notNullable();

        table.comment("Tabela de usuarios que serão armazenados no gerenciador de contactos")
    })
    .then(() => console.log(`Created table ${tableName} on system!`))
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(tableName).then(() => console.log(`# Dropped table ${tableName}`));
}