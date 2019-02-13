const request = require("supertest");
const app = require("./app");

describe('Route: "/"', () => {
   describe("GET", () => {
      // Example test using supertest and async/await
      it("should return 200", async () => {
         const response = await request(app).get("/");
         expect(response.status).toBe(200);
      });

      // Promise based test example
      it("should return 'hello express'", () => {
         return request(app)
            .get("/")
            .then(response =>
               expect(response.body).toMatchObject({ message: "hello express" })
            );
      });
   });
});
