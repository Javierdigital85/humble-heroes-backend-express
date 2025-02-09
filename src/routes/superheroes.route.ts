import express from "express";
import * as heroesController from "../controller/superheroes.controller";
const router = express.Router();

router.post("/", heroesController.newHeroe);
router.get("/",heroesController.getHeroes);

export default router;
