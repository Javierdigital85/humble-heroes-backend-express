import { RequestHandler } from "express";
import * as heroesService from "../service/superheroes.service";

export const newHeroe: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body;
    const findHero = await heroesService.findHeroe(name);
    if (findHero) {
      res.status(400).json({ message: "Heroe already exists!" });
      return;
    }
    const createHeroe = await heroesService.createHeroe(req.body);
    res.status(200).json(createHeroe);
  } catch (error) {
    if ((error as any).name === "SequelizeValidationError") {
      const validationErrors = (error as any).errors.map((e: any) => e.message);

      if (
        validationErrors.some((msg: string) => msg.includes("humilityScore"))
      ) {
        res.status(400).json({
          error: "Validation error",
          message: "The value of humility score must be between 1 and 10.",
        });
        return;
      }
    }
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
