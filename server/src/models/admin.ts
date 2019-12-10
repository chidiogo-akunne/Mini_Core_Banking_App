import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRound = 10;

interface adminSchema extends mongoose.Document {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  createdAt: Date;
  deletedAt: Date;
}

const AdminSchema = new mongoose.Schema(
  {
    id: { type: String },
    firstname: { type: String, trim: true },
    lastname: { type: String, trim: true },
    email: { type: String, trim: true, unique: true },
    username: { type: String, trim: true },
    password: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
  },
  {
    timestamps: true
  }
);

//hash userpassword before saving into the database
AdminSchema.pre<adminSchema>("save", function(next) {
  this.password = bcrypt.hashSync(this.password, saltRound);
  next();
});

export default mongoose.model<adminSchema>("Admin", AdminSchema);
