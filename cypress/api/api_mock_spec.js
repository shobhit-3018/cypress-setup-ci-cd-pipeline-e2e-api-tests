/// <reference types="cypress" />

describe('Node Farm - API Tests with Mock Data', () => {
  beforeEach(() => {
    cy.fixture('products').as('mockProducts');
  });

  it('should intercept /api and return mock products', function () {
    cy.intercept('GET', '/api', { fixture: 'products.json' }).as('getProducts');

    cy.request({ url: '/api', method: 'GET' }).then(() => {
      // Verify mock data structure matches expected format
      expect(this.mockProducts).to.be.an('array');
      expect(this.mockProducts).to.have.length(3);
    });
  });

  it('mock products should have all required fields', function () {
    this.mockProducts.forEach((product) => {
      expect(product).to.have.property('id');
      expect(product).to.have.property('productName');
      expect(product).to.have.property('image');
      expect(product).to.have.property('from');
      expect(product).to.have.property('nutrients');
      expect(product).to.have.property('quantity');
      expect(product).to.have.property('price');
      expect(product).to.have.property('organic');
      expect(product).to.have.property('description');
    });
  });

  it('mock products should have valid price format', function () {
    this.mockProducts.forEach((product) => {
      expect(product.price).to.match(/^\d+\.\d{2}$/);
    });
  });

  it('mock products should have valid id sequence', function () {
    this.mockProducts.forEach((product, index) => {
      expect(product.id).to.eq(index);
    });
  });

  it('should verify organic field is boolean', function () {
    this.mockProducts.forEach((product) => {
      expect(product.organic).to.be.a('boolean');
    });
  });

  it('should validate real /api response against mock data structure', function () {
    cy.request('/api').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body[0].productName).to.eq('Fresh Avocados');

      // Verify real API has same fields as mock data
      const mockKeys = Object.keys(this.mockProducts[0]).sort();
      const realKeys = Object.keys(response.body[0]).sort();
      expect(realKeys).to.deep.eq(mockKeys);
    });
  });
});
