import type { Knex } from "knex";

const tableName = "contacts"

export async function up(knex: Knex) {
    return knex
    .schema
    .createTable(tableName, (table) => {
        table.bigIncrements("id").primary().index().notNullable();
        table.string("prefix", 5).checkLength("<=", 5).index().notNullable();
        table.string("country", 100).checkLength("<=", 100).index().notNullable();
        table.string("number", 20).checkLength("<=", 20).index().notNullable();
        table.bigInteger("user_id").unsigned().notNullable()
            .references("id").inTable("users").onDelete("CASCADE");

        table.timestamps(true, true)
        table.comment("Tabela de contactos vinculados a um usuário")
    })
    .then(() => console.log(`Created table ${tableName} on system!`))
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(tableName).then(() => console.log(`# Dropped table ${tableName}`));
}