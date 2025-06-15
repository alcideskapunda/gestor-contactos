import { Knex } from "./index";

async function runMigrations() {
  await Knex.migrate.latest();
  console.log("Migrations executed");
  process.exit(0);
}

runMigrations().catch((err) => {
  console.error(err);
  process.exit(1);
});
