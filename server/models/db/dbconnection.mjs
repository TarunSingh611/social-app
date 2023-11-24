// dbConnection.js
import connectToDatabase from './mongodb.mjs';

// Initialize the connection
const db = await connectToDatabase();

export default db;
