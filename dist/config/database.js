"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const globalConstants_1 = __importDefault(require("../const/globalConstants"));
let sequelize;
sequelize = new sequelize_typescript_1.Sequelize({
    dialect: globalConstants_1.default.DIALECT,
    host: globalConstants_1.default.HOST,
    port: globalConstants_1.default.DB_PORT,
    username: globalConstants_1.default.DB_USERNAME,
    password: globalConstants_1.default.DB_PASSWORD,
    database: globalConstants_1.default.DB_NAME_TEST,
    logging: false,
});
exports.default = sequelize;
