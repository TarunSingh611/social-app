// apiConfig.js

const apiConfig = {
	info: {
		title: "SocialSaga",
		version: "1.0.0",
		description: "USE THEM AT YOUR OWN RISK",
	},
	host: "localhost:8080",
	basePath: "/",
	schemes: ["http"],
	consumes: ["application/json"],
	produces: ["application/json"],
	tags: [                 
    {
      name: '',             
      description: ''      
    },
  ],
	securityDefinitions: {
		BearerAuth: {
			type: "apiKey",
			name: "Authorization",
			in: "header",
		},
		jwtAuth : {
			type: 'apiKey',
			name: 'JWT Token',
			in: 'header',
			description: 'Bearer JWT token'
		}
	},
	security: [
		{
			BearerAuth: [],
			jwtAuth: []
		},
	],
};

export default apiConfig;
