import pg from "pg";

import { db } from "../config.js";

const pool = new pg.Pool({
  port: db.port,
  user: db.user,
  host: db.host,
  database: db.database,
  password: db.password,
  ssl: { rejectUnauthorized: false },
});

export default async (text, params, callback) => {
  return pool.query(text, params, callback);
};
