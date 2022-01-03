import query from "../index.js";

const queryString = `CREATE TABLE IF NOT EXISTS players (id SERIAL PRIMARY KEY, cowboy TEXT, score SMALLINT, time TEXT, zone TEXT);`;

async function createPlayersTable() {
  const res = await query(queryString);
  console.log("Players table has been created", res);
}

createPlayersTable();
