import { RequestHandler } from "express";
import * as heroesService from "../service/superheroes.service";

export const newHeroe: RequestHandler = async (req, res) => {
  try {
    const { name, superpower, humilityScore } = req.body;
    const findHero = await heroesService.findHeroe(name);
    if (findHero) {
      res.status(409).json({ message: "Heroe already exists!" });
      return;
    }
    if (!name) {
      res.status(400).json({ message: "Heroe needs a name" });
      return;
    }
    if (!superpower) {
      res.status(400).json({ message: "Heroe needs superpower" });
      return;
    }
    if (!humilityScore) {
      res.status(400).json({
        message: "The value of humility score must be between 1 and 10.",
      });
      return;
    }

    const createHeroe = await heroesService.createHeroe(req.body);
    res.status(201).json(createHeroe);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export const getHeroes: RequestHandler = async (req, res) => {
  try {
    const heroes = await heroesService.getHeroes();
    if (heroes.length === 0) {
      res.status(404).json({ message: "There is no hero available" });
      return;
    }
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
