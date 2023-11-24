// server.js
import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server as socketIO } from 'socket.io';
import  initializeSocketIO  from './socket/socket.mjs';
import  initializeRoutes  from './routes/routes.mjs';

// import db  from './db/dbconnection.mjs';
const app = express();
const server = http.createServer(app);
const io = new socketIO(server,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.use(cors("*"));
app.use(express.json());
const port = 5000;

initializeSocketIO(io);
initializeRoutes(app);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







