import { Router } from 'express';
import UserModule from './user.module';
import app from '../../app';
import request from 'supertest';

describe("Sum 1 + 1", () => {

    beforeAll(async () => {
        const routes = Router();
        await UserModule.subscribeRoutes(routes);
    });

    it("Should return status 200 and 2 users", async () => {
        const res = await request(app).get("/users");

        expect(res.status).toBe(200);
        expect(JSON.parse(res.text).length).toBe(2);
    });

    it("Should create a user", async () => {
        const data = {
            firstName: "Derik",
            lastName: "soares",
            email: "derik@example.com",
            password: "example"
        };
        const res = await request(app).post("/users/signup").send(data);

        expect(res.status).toBe(200);
        expect(JSON.parse(res.text).firstName).toBe(data.firstName);
    });

    it("Should throw a validation error", async () => {
        const data = {
            email: "derik@example.com",
            password: "example"
        };
        const res = await request(app).post("/users/signup").send(data);

        expect(res.status).toBe(400);
        expect(JSON.parse(res.text).error).toBe("Validation fails");
    });
});