import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { connection: null, promise: null };
export const connectToDatabase = async () => {
  if (cached.connection) {
    return cached.connection;
  }
  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing"); //accomodatinf for if MongoURI is returned undefined
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "EventHub",
      bufferCommands: false,
    });
  cached.connection = await cached.promise;
  return cached.connection;
};
