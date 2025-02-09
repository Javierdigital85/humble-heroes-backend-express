import express from "express";
import heroesRouter from "./superheroes.route"
const router = express.Router();

function routerConfig() {
  router.use("/superheroes",heroesRouter);
  return router;
}

export default routerConfig;
