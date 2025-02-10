"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    DIALECT: process.env.DIALECT,
    HOST: process.env.DB_HOST,
    DB_PORT: Number(process.env.DB_PORT),
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_NAME,
    DB_NAME_TEST: process.env.POSTGRES_DB_TEST,
    NODE_ENV: process.env.NODE_ENV,
    FRONTEND_URL: process.env.URL_FRONTEND || "http://localhost:5173"
};
exports.default = config;
