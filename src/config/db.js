import { env } from './env.js';
import mongoose from 'mongoose';

export async function connectDB() {
    try {
        if (!env.MONGODB_URI) {
            throw new Error('Falta MONGODB_URI');
        }
        await mongoose.connect(env.MONGODB_URI), { 
            serverSelectionTimeoutMS: 5000
        }
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}