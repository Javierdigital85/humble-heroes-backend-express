import { Sequelize } from "sequelize-typescript";
import globalContants from "../const/globalConstants";

let sequelize: Sequelize

sequelize = new Sequelize({
  dialect: globalContants.DIALECT,
  host: globalContants.HOST,
  port: globalContants.DB_PORT,
  username: globalContants.DB_USERNAME,
  password: globalContants.DB_PASSWORD,
  database: globalContants.DB_NAME,
  logging: false,
});

export default sequelize;


