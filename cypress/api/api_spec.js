/// <reference types="cypress" />

describe("Node Farm - API Tests", () => {
  it("should return all products", () => {
    cy.request("/api").then((response) => {
      expect(response.status).to.eq(200);
      const products = response.body;
      expect(products).to.be.an("array");
      expect(products.length).to.eq(5);
    });
  });

  it("each product should have required fields", () => {
    cy.request("/api").then((response) => {
      response.body.forEach((product) => {
        expect(product).to.have.property("productName");
        expect(product).to.have.property("image");
        expect(product).to.have.property("price");
        expect(product).to.have.property("from");
        expect(product).to.have.property("nutrients");
        expect(product).to.have.property("quantity");
        expect(product).to.have.property("description");
        expect(product).to.have.property("id");
      });
    });
  });

  it("should have valid price format for all products", () => {
    cy.request("/api").then((response) => {
      response.body.forEach((product) => {
        expect(product.price).to.match(/^\d+\.\d{2}$/);
      });
    });
  });
});
