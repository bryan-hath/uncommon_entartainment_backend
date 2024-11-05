import request from "supertest";
import app from "../src/app";

describe("Item API", () => {
    it("should retrieve a list of items", async () => {
        const response = await request(app).get("/items");
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("success");
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it("should add a new item", async () => {
        const response = await request(app).post("/items").send({ name: "Test Item" });
        expect(response.status).toBe(201);
        expect(response.body.status).toBe("success");
        expect(response.body.data).toHaveProperty("name", "Test Item");
    });

    it("should return error if item name is missing", async () => {
        const response = await request(app).post("/items").send({});
        expect(response.status).toBe(400);
        expect(response.body.status).toBe("error");
        expect(response.body.message).toBe("Item name is required");
    });
});
