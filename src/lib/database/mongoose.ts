import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached: MongooseConnection = (global as any).mongoose
// eslint-disable-next-line @typescript-eslint/no-explicit-any

if(!cached) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cached = (global as any).mongoose = { 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    conn: null, promise: null 
  }
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise = cached.promise ||
    mongoose.connect(MONGODB_URL, { 
      dbName: 'Picova', bufferCommands: false 
    });

  cached.conn = await cached.promise;

  // Log the connection
  console.log("Connected to MongoDB successfully!");

  return cached.conn;
};
