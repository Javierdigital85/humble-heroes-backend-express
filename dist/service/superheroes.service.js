"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroes = exports.createHeroe = exports.findHeroe = void 0;
const Superheroes_1 = __importDefault(require("../models/Superheroes"));
const findHeroe = (name) => {
    return Superheroes_1.default.findOne({ where: { name: name } });
};
exports.findHeroe = findHeroe;
const createHeroe = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Superheroes_1.default.create(data);
});
exports.createHeroe = createHeroe;
const getHeroes = () => __awaiter(void 0, void 0, void 0, function* () {
    const heroes = yield Superheroes_1.default.findAll({
        order: [["humilityScore", "DESC"]],
    });
    return heroes;
});
exports.getHeroes = getHeroes;
