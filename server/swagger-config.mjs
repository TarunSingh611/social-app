// apiConfig.js

const apiConfig = {
  info: {
    title: 'GUPPSHUPP API',
    version: '1.0.0',
    description: 'USE THEM AT YOUR OWN RISK',
  },
  host: 'localhost:8080',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    BearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  security: [
    {
      BearerAuth: [],
    },
  ],
};

export default apiConfig;
