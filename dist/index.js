"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./config/database"));
const port = process.env.PORT || 8000;
database_1.default.sync({ force: false }).then(() => {
    app_1.default.listen(port, () => {
        console.log(`App running on port ${port}`);
    });
});
