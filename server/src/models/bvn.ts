import mongoose from "mongoose";

interface bvnSchema extends mongoose.Document {
  id: string;
  userId: string;
  BVN: number;
createdAt: Date;
deletedAt: Date;
}

const BVNSchema = new mongoose.Schema(
  {
    id: { type: String },
    userId: { type: String, trim: true },
    BVN: { type: Number, trim: true },
    createdAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
  },
  {
    timestamps: true
  }
);



export default mongoose.model<bvnSchema>("BVN", BVNSchema);
