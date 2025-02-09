import { Model, DataTypes, STRING } from "sequelize";
import db from "../config/database";

class Superheroes extends Model {}

Superheroes.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    superpower: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    humilityScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1, // El valor mínimo será 1
        max: 10, // El valor máximo será 10
      },
    },
  },
  { sequelize: db, modelName: "superheroes", timestamps: true }
);

export default Superheroes;
