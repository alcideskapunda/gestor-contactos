import { Knex } from "./index";

async function rollback() {
  await Knex.migrate.rollback();
  console.log("Migration rollback executed.");
  process.exit(0);
}

rollback().catch((err) => {
  console.error(err);
  process.exit(1);
});
