import 'dotenv/config';
// import { beforeAll, afterAll } from '@jest/globals';
import supertest from "supertest";
import { app } from "../src/api/server";
import { Knex } from "../src/api/database/";

beforeAll(async () => {
    await Knex.migrate.latest();
})

afterAll(async () => {
    await Knex.destroy();
})

export const testServer = supertest(app)