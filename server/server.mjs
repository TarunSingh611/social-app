// server.js
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import http from "http";
import cors from "cors";
import { Server as socketIO } from "socket.io";
import initializeSocketIO from "./sockets/index.mjs";
import initializeRoutes from "./routes/index.mjs";
import databaseConfig from "./config/database.mjs";
import secret from "./config/secrets.mjs";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json' assert { type: 'json' }; 



const app = express();
const server = http.createServer(app);
const io = new socketIO(server, {
	cors: {
		origin: "*",
		methods: [
			"GET",
			"POST",
			"PUT",
			"DELETE",
			"OPTIONS",
			"PATCH",
			"HEAD",
			"CONNECT",
			"TRACE",
		],
		credentials: true,
	},
});

app.use(cors("*"));
app.use(express.json());
app.use('/public', express.static('public'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect(process.env.MONGO_URL_FULL);
initializeSocketIO(io);
initializeRoutes(app);
console.log(process.env.MONGO_URL_FULL);

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something went wrong!");
});

// Start the server
const PORT = secret.PORT || 5000;
app.listen(PORT, () => {
	console.log(
		`Server is running on port ${PORT} click here: http://localhost:${PORT}` +
		`\nSwagger Documentation: http://localhost:${PORT}/api-docs`
	  );
});
