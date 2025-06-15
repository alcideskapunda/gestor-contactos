import { Knex } from "knex";
import config from "../../config";
import path from "path";

const development: Knex.Config = {
  client: "pg",
  connection: {
    host: config.database.host,
    user: config.database.user,
    password: config.database.pass,
    database: config.database.name
  },
  migrations: {
    directory: path.resolve(__dirname, "migrations"),
    extension: "ts"
  }
}

const test: Knex.Config = {
  ...development,
  connection: ":memory:"
}

const production: Knex.Config = {
    ...development 
}

// export default { development, test, production };

const knexConfig = {
  development,
  test,
  production
};

export default knexConfig;