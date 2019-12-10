import mongoose from "mongoose";

interface accountSchema extends mongoose.Document {
  id: string;
  userId: string;
  accountType: string;
  accountNumber: number;
  accountName: string;
  accountBalance: string;
  createdAt: Date;
  deletedAt: Date;
}

const AccountSchema = new mongoose.Schema(
  {
    id: { type: String },
    userId: { type: String, trim: true },
    accountType: { type: String, trim: true },
    accountNumber: { type: Number, trim: true },
    accountName: { type: String, trim: true },
    accountBalance: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
  },
  {
    timestamps: true
  }
);



export default mongoose.model<accountSchema>("Account", AccountSchema);
