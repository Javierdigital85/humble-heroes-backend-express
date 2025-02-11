import dotenv from "dotenv";
dotenv.config();

interface Config {
  DIALECT: "postgres" | "mysql" | "sqlite" | "mariadb" | "mssql";
  HOST?: string;
  DB_PORT: number;
  DB_USERNAME?: string;
  DB_PASSWORD?: string;
  DB_DATABASE?: string;
  DB_NAME?: string;
  FRONTEND_URL: string;
}

const config: Config = {
  DIALECT: process.env.DIALECT as
    | "postgres"
    | "mysql"
    | "sqlite"
    | "mariadb"
    | "mssql",
  HOST: process.env.DB_HOST,
  DB_PORT: Number(process.env.DB_PORT),
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_NAME: process.env.DB_NAME,
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173"
};

export default config;
