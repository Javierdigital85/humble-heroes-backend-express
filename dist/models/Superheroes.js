"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Superheroes extends sequelize_1.Model {
}
Superheroes.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    superpower: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    humilityScore: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1, // El valor mínimo será 1
            max: 10, // El valor máximo será 10
        },
    },
}, { sequelize: database_1.default, modelName: "superheroes", timestamps: true });
exports.default = Superheroes;
