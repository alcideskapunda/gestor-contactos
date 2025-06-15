import knex from "knex";
import knexConfig from "./knexfile";

const { development, production, test } = knexConfig

function getEnvironment() {
    switch (process.env.NODE_ENV) {
        case "production": return production;            
        case "test": return test;
        default: return development;
    }
}

export const Knex = knex(getEnvironment())