import Admin from "../models/admin";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export async function loginAdmin(username: string, password: string) {
  const findAdmin = await Admin.findOne({ username: username });
  if (!findAdmin) {
    throw new Error("Invalid username or password");
  }

  const comparePassword = await bcrypt.compare(password, findAdmin.password);
  if (!comparePassword) {
    throw new Error("Invalid username or password ");
  }
  const token = jwt.sign({userId: findAdmin._id}, 'secretKey', {expiresIn: '30m'})
  return { status: 200, message: "Login Succesful", payload: findAdmin, token };
}

export async function createAdmin(firstname: string, lastname: string, email: string, username: string, password: string){
    const alreadyExists = await Admin.findOne({email: email});
    if(alreadyExists){
        throw new Error("Admin already exists");
    }
    const response = await Admin.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password,
    }) 

    return {status: 200, message: "Admin has been added successfully", payload: response}
}
