import supertest from "supertest";
import app from "../server.js";
import { PostgresSequelize } from "../config/database.js";
import User from "../models/user.model.js";
import { jest } from "@jest/globals";

jest.setTimeout(600000); //
beforeAll(async () => {
  await PostgresSequelize.sync({ force: true });
});

afterAll(async () => {
  await PostgresSequelize.close(); // Close DB connection after tests
});

describe("User API Tests", () => {
  let userId;

  test("Should create a new user", async () => {
    const response = await supertest(app)
      .post("/api/users")
      .send({ name: "Aman", email: "aman244444@example.com" });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    userId = response.body.id;
  });

  test(" Should NOT create user if name is null", async () => {
    const response = await supertest(app)
      .post("/api/users")
      .send({ email: "test@example.com" });

    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Name is required");
  });

  test(" Should NOT create user if email is invalid", async () => {
    const response = await supertest(app)
      .post("/api/users")
      .send({ name: "Test User", email: "invalid-email" });

    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid email format");
  });

  // test(" Should NOT create user with duplicate email", async () => {
  //   const response = await supertest(app)
  //     .post("/api/users")
  //     .send({ name: "Duplicate User", email: "aman@example.com" }); // Existing email

  //   expect(response.status).toBe(500);
  //   expect(response.body.error).toBe("Could not create user");
  // });

  test("Should retrieve all users", async () => {
    const response = await supertest(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Should retrieve a user by ID", async () => {
    const response = await supertest(app).get(`/api/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", userId);
  });

  test("Should update a user", async () => {
    const response = await supertest(app)
      .put(`/api/users/${userId}`)
      .send({ name: "Updated Aman", email: "newemail@example.com" });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Updated Aman");
  });

  test(" Should NOT update user if name is empty", async () => {
    const response = await supertest(app)
      .put(`/api/users/${userId}`)
      .send({ name: "", email: "updated@example.com" });

    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Name is required");
  });

  test(" Should delete a user", async () => {
    const response = await supertest(app).delete(`/api/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("User deleted successfully");
  });

  test(" Should return 404 for a non-existent user", async () => {
    const response = await supertest(app).get(`/api/users/999`);
    expect(response.status).toBe(404);
  });
});
