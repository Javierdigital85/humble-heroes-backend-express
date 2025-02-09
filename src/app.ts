import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import routerConfig from "./routes";
import globalConstants from "./const/globalConstants";

const allowedOrigins = [globalConstants.FRONTEND_URL];

const apiConfiguration = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: allowedOrigins }));
  app.use(morgan("tiny"));
};
const routerConfiguration = (app: Application) => {
  app.use("/api", routerConfig());
};

const app: Application = express();
apiConfiguration(app);
routerConfiguration(app);

export default app;
