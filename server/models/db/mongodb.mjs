import { MongoClient } from 'mongodb';
import secret from '../../secrets.mjs';

let client = null;

const { USER_NAME, DB_PASS, MONGO_URI, DB_NAME } = secret;

const uri = "mongodb+srv://" + USER_NAME + ":" + DB_PASS + "@" + MONGO_URI + "/";

export default async function connectToDatabase() {
  try {
    if (!client) {
      client = new MongoClient(uri);
      await client.connect();
      console.log('Connected to MongoDB');
    }

    const database = client.db(DB_NAME);

    async function closeDatabase() {
      if (client) {
        await client.close();
        console.log('Disconnected from MongoDB');
        client = null; 
      }
    }




    return {
      closeDatabase,
    };
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}
