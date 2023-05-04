import supertest from "supertest";

import app from "../../src/app";

describe("API tests", () => {
  it("should have CORS active", async () => {
    const response = await supertest(app).get("/");

    expect(Object.keys(response.headers)).toContain(
      "access-control-allow-origin"
    );
  });
});
