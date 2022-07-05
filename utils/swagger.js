const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  openapi: '3.0.0',
  definition: {
    info: {
      title: 'ImdbJustwatch scrapper api',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);
const setup = () => swaggerUi.setup(swaggerDocument);
const { serve } = swaggerUi;

module.exports = { serve, setup };
