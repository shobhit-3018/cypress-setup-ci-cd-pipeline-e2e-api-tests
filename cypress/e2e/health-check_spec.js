/// <reference types="cypress" />

describe("Node Farm - Health Check", () => {
  it("should load the overview page", () => {
    cy.request("/").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers["content-type"]).to.include("text/html");
    });
  });

  it("should load the /overview route", () => {
    cy.request("/overview").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers["content-type"]).to.include("text/html");
    });
  });

  it("should return JSON from /api", () => {
    cy.request("/api").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers["content-type"]).to.include("application/json");
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it("should return 404 for unknown routes", () => {
    cy.request({ url: "/unknown-page", failOnStatusCode: false }).then(
      (response) => {
        expect(response.status).to.eq(404);
      },
    );
  });
});
