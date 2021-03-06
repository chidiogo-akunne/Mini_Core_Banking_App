import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRound = 10;

interface userSchema extends mongoose.Document {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  gender: string;
  nationality: string;
  maritalStatus: string;
  religion: string;
  dateOfBirth: string;
  employmentStatus: string;
  createdAt: Date;
  deletedAt: Date;
}

const UserSchema = new mongoose.Schema(
  {
    id: { type: String },
    firstname: { type: String, trim: true },
    lastname: { type: String, trim: true },
    email: { type: String, trim: true },
    username: { type: String, trim: true },
    password: { type: String, trim: true },
    gender: { type: String, trim: true },
    phoneNumber: { type: Number, trim: true },
    nationality: { type: String, trim: true },
    maritalStatus: { type: String, trim: true },
    religion: { type: String, trim: true },
    dateOfBirth: { type: String, trim: true },
    employmentStatus: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
  },
  {
    timestamps: true
  }
);

UserSchema.pre<userSchema>("save", function(next) {
    this.password = bcrypt.hashSync(this.password, saltRound);
    next();
  });



export default mongoose.model<userSchema>("User", UserSchema);
