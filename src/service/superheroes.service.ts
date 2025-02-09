import Superheroes from "../models/Superheroes";

export const findHeroe = (name: string): Promise<Superheroes | null> => {
  return Superheroes.findOne({ where: { name: name } });
};

export const createHeroe = async (data: any): Promise<Superheroes> => {
  return await Superheroes.create(data);
};

export const getHeroes = async () => {
  const heroes = await Superheroes.findAll({
    order: [["humilityScore", "DESC"]],
  });
  return heroes;
};
