import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Extend globalThis in TypeScript to properly type `mongoose`
declare global {
  // This ensures TypeScript recognizes globalThis.mongoose as a valid property
  // Use only type augmentation, no var/let/const assignment here
  var mongoose: MongooseConnection | undefined;
}

// Initialize cached value using let or const (not var)
const cached: MongooseConnection = globalThis.mongoose || { conn: null, promise: null };

// Use const or let for assignment to globalThis.mongoose
if (!globalThis.mongoose) {
  globalThis.mongoose = cached;  // No var, using let or const here
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: 'Picova',
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
