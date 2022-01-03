import query from "../db/index.js";

export async function getAllPlayers() {
  const queryString = `SELECT * FROM players ORDER BY id;`;
  const response = await query(queryString);
  return response.rows;
}

export async function getTopPlayers() {
  const queryString = `SELECT * FROM players ORDER BY score DESC LIMIT 10;`;
  const response = await query(queryString);
  return response.rows;
}

export async function getPlayerById(id) {
  const queryString = `SELECT * FROM players WHERE id = $1;`;
  const response = await query(queryString, [id]);
  return response.rows[0];
}

export async function createPlayer(player) {
  const queryString = `INSERT INTO players (cowboy, score, time, zone) VALUES ($1, $2, $3, $4) RETURNING *;`;
  const { cowboy, score, time, zone } = player;
  const response = await query(queryString, [cowboy, score, time, zone]);
  console.table(response.rows);
  return response.rows[0];
}
