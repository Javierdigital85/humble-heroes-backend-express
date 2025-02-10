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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const Superheroes_1 = __importDefault(require("../models/Superheroes"));
// Limpiar la base de datos antes de cada test
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield Superheroes_1.default.destroy({ where: {} }); // Limpia todos los registros de la tabla
}));
describe('POST /api/superheroes', () => {
    it('should create a new superhero', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post('/api/superheroes')
            .send({
            name: 'Superman',
            superpower: 'Flying',
            humilityScore: 7,
        });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name', 'Superman');
        expect(response.body).toHaveProperty('superpower', 'Flying');
        expect(response.body).toHaveProperty('humilityScore', 7);
    }));
    it('should return error if hero already exists', () => __awaiter(void 0, void 0, void 0, function* () {
        yield Superheroes_1.default.create({
            name: 'Batman',
            superpower: 'Rich',
            humilityScore: 8,
        });
        const response = yield (0, supertest_1.default)(app_1.default)
            .post('/api/superheroes')
            .send({
            name: 'Batman',
            superpower: 'Rich',
            humilityScore: 8,
        });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Heroe already exists!');
    }));
    it('should return validation error if humilityScore is not between 1 and 10', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post('/api/superheroes')
            .send({
            name: 'Wonder Woman',
            superpower: 'Strength',
            humilityScore: 15,
        });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Validation error');
        expect(response.body).toHaveProperty('message', "The value of 'humilityScore' must be between 1 y 10.");
    }));
});
describe('GET /api/superheroes', () => {
    it('should return a list of superheroes', () => __awaiter(void 0, void 0, void 0, function* () {
        yield Superheroes_1.default.bulkCreate([
            { name: 'Flash', superpower: 'Speed', humilityScore: 9 },
            { name: 'Aquaman', superpower: 'Swimming', humilityScore: 6 },
        ]);
        const response = yield (0, supertest_1.default)(app_1.default).get('/api/superheroes');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);
        expect(response.body[0]).toHaveProperty('name', 'Flash');
        expect(response.body[1]).toHaveProperty('name', 'Aquaman');
    }));
    it('should return 404 if no superheroes are found', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/api/superheroes');
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'There is no hero available');
    }));
    it('should return 500 if there is a server error', () => __awaiter(void 0, void 0, void 0, function* () {
        jest.spyOn(Superheroes_1.default, 'findAll').mockRejectedValueOnce(new Error('Server error'));
        const response = yield (0, supertest_1.default)(app_1.default).get('/api/superheroes');
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('message');
    }));
});
