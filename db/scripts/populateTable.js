import query from "../index.js";

const queryString = `INSERT INTO players (cowboy, score, time, zone) VALUES ('Pepe', 67, 'some time', 'GMT') RETURNING *;`;
const queryStringDel = `DELETE FROM players WHERE zone ILIKE 'GMT' RETURNING *;`;
const queryStringTruncate = `TRUNCATE TABLE players;`;
const queryReset = `alter sequence players_id_seq restart with 1;`;
const queryDelById = `DELETE FROM players WHERE id = 2`;

async function populateTable() {
  const res = await query(queryDelById);
  console.log(res);
}

populateTable();
