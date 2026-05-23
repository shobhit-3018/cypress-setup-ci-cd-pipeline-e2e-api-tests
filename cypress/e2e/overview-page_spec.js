/// <reference types="cypress" />
import selectors from '../support/selectors';

describe('Node Farm - Overview Page UI', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the page title', () => {
    cy.title().should('contain', 'NODE FARM');
  });

  it('should display product cards', () => {
    selectors.getCard().should('have.length.greaterThan', 0);
  });

  it('should show product names on cards', () => {
    selectors
      .getCard()
      .first()
      .find(selectors.getCardName())
      .should('be.visible');
  });

  it('should show product prices', () => {
    selectors
      .getCard()
      .first()
      .find(selectors.getCardPrice())
      .should('contain', '€');
  });

  it('should navigate to product detail on card click', () => {
    selectors.getCard().first().find(selectors.getCardLink()).click();
    cy.url().should('include', '/product');
  });
});
