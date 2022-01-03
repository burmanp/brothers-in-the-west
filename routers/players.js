import express from "express";

import {
  getAllPlayers,
  getTopPlayers,
  getPlayerById,
  createPlayer,
} from "../models/players.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const players = await getAllPlayers();

    res.json({
      success: true,
      payload: players,
    });
  } catch (error) {
    console.log(error.message || error);
    res.status(500).json({
      success: false,
      message: error.message || error,
    });
  }
});

router.get("/top10", async (req, res) => {
  try {
    const players = await getTopPlayers();

    res.json({
      success: true,
      payload: players,
    });
  } catch (error) {
    console.log(error.message || error);
    res.status(500).json({
      success: false,
      message: error.message || error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const player = await getPlayerById(id);

    if (!player) {
      res.json({
        success: false,
        error: `Player with id ${id} doesn't exist!`,
      });
      return;
    }

    res.json({
      success: true,
      payload: player,
    });
  } catch (error) {
    console.log(error.message || error);
    res.status(500).json({
      success: false,
      message: error.message || error,
    });
  }
});

//Insert a new player

router.post("/", async (req, res) => {
  try {
    const playerData = req.body;
    const result = await createPlayer(playerData);

    res.json({
      success: true,
      payload: result,
    });
  } catch (error) {
    console.log(error.message || error);
    res.status(500).json({
      success: false,
      message: error.message || error,
    });
  }
});

export default router;
