import mongoose from 'mongoose';

interface adminSchema extends mongoose.Document{
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    password: string;
    createdAt: Date;
    deletedAt: Date;
}

