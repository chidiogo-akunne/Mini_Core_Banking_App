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

const adminSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: String,
        username: String,
        password: String,
        createdAt: Date,
        deletedAt: {type: Date, default: null}
    },
    {
        timestamps: true,
    }
)

export default mongoose.model<adminSchema>('admin', adminSchema);

