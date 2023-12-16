import swaggerAutogen from 'swagger-autogen';
import swaggerConfig from './swagger-config.mjs';

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.mjs'];


const autogen = swaggerAutogen(); 

autogen(outputFile, endpointsFiles, swaggerConfig)
  .then(() => {
    console.log('Swagger documentation generated successfully!');
  })
  .catch((error) => {
    console.error('Error generating Swagger documentation:', error);
  });
