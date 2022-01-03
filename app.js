import cors from "cors";
import express from "express";

import playersRouter from "./routers/players.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.use(cors());

app.use("/players", playersRouter);

app.listen(PORT, () => {
  console.log(`App listening at the port: ${PORT}`);
});
