const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swagger = (apiRouter) => {
  const swaggerOptions = {
    definition: {
      info: {
        title: 'ImdbJustwatch scrapper api',
        version: '1.0.0',
      },
    },
    apis: ['./routes/*.js'],
  };
  const swaggerDocument = swaggerJsDoc(swaggerOptions);

  apiRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = swagger;
