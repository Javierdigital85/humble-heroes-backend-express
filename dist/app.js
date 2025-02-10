"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const globalConstants_1 = __importDefault(require("./const/globalConstants"));
const allowedOrigins = [globalConstants_1.default.FRONTEND_URL];
const apiConfiguration = (app) => {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)({ origin: allowedOrigins }));
    app.use((0, morgan_1.default)("tiny"));
};
const routerConfiguration = (app) => {
    app.use("/api", (0, routes_1.default)());
};
const app = (0, express_1.default)();
apiConfiguration(app);
routerConfiguration(app);
exports.default = app;
