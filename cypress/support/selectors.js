// Reusable selector functions for Node Farm app

// Overview Page
const getCard = () => cy.get('.card');
const getCardName = () => '.card__title';
const getCardPrice = () => '.card__detail--price';
const getCardLink = () => '.card__link';

// Product Page
const getProductDetail = () => cy.get('.product');
const getProductName = () => '.product__name';
const getProductPrice = () => '.product__price';
const getProductDescription = () => '.product__description';

export default {
  getCard,
  getCardName,
  getCardPrice,
  getCardLink,
  getProductDetail,
  getProductName,
  getProductPrice,
  getProductDescription,
};
