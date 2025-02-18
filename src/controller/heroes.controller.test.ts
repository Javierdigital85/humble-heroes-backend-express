import request from "supertest";
import app from "../app";
import Superheroes from "../models/Superheroes";

beforeEach(async () => {
  await Superheroes.destroy({ where: {} });
});

describe("POST /api/superheroes", () => {
  it("should create a new superhero", async () => {
    const response = await request(app).post("/api/superheroes").send({
      name: "Superman",
      superpower: "Flying and Strength",
      humilityScore: 7,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("name", "Superman");
    expect(response.body).toHaveProperty("superpower", "Flying and Strength");
    expect(response.body).toHaveProperty("humilityScore", 7);
  });

  it("should return error if hero already exists", async () => {
    await Superheroes.create({
      name: "Flash",
      superpower: "Light-speed movement",
      humilityScore: 8,
    });

    const response = await request(app).post("/api/superheroes").send({
      name: "Flash",
      superpower: "Light-speed running",
      humilityScore: 8,
    });

    expect(response.status).toBe(409);
    expect(response.body).toHaveProperty("message", "Heroe already exists!");
  });

  it("should return error if name is missing", async () => {
    const response = await request(app).post("/api/superheroes").send({
      name: "",
      superpower: "Super strength",
      humilityScore: 8,
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      "message",
      "Heroe's name is required."
    );
  });

  it("should return error if superpower is missing", async () => {
    const response = await request(app).post("/api/superheroes").send({
      name: "Iron Man",
      superpower: "",
      humilityScore: 8,
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      "message",
      "Heroe's superpower is required."
    );
  });

  it("should return validation error if humilityScore is not between 1 and 10", async () => {
    const response = await request(app).post("/api/superheroes").send({
      name: "Wonder Woman",
      superpower: "Strength",
      humilityScore: 15,
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", "Validation error");
    expect(response.body).toHaveProperty(
      "message",
      "The value of humility score must be between 1 and 10."
    );
  });
});

describe("GET /api/superheroes", () => {
  it("should return a list of superheroes", async () => {
    await Superheroes.bulkCreate([
      { name: "Flash", superpower: "Speed", humilityScore: 9 },
      { name: "Aquaman", superpower: "Swimming", humilityScore: 6 },
    ]);

    const response = await request(app).get("/api/superheroes");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toHaveProperty("name", "Flash");
    expect(response.body[1]).toHaveProperty("name", "Aquaman");
  });

  it("should return 404 if no superheroes are found", async () => {
    const response = await request(app).get("/api/superheroes");

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty(
      "message",
      "There is no hero available"
    );
  });

  it("should return 500 if there is a server error", async () => {
    jest
      .spyOn(Superheroes, "findAll")
      .mockRejectedValueOnce(new Error("Server error"));

    const response = await request(app).get("/api/superheroes");

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("message");
  });
});

afterAll(async () => {
  if (Superheroes.sequelize) {
    await Superheroes.sequelize.close();
  }
});
