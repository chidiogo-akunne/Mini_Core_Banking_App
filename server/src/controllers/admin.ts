import Admin from "../models/admin";
import bcrypt from "bcrypt";

export async function loginAdmin(username: string, password: string) {
  const findAdmin = await Admin.findOne({ username: username });
  if (!findAdmin) {
    //    return {status: 404, message: 'Invalid username or password'};
    throw new Error("Invalid username or password");
  }

  const comparePassword = await bcrypt.compare(password, findAdmin.password);
  if (!comparePassword) {
    // return { status: 404, message: 'Invalid username or password'};
    throw new Error("Invalid username or password ");
  }
  return { status: 200, message: "Login Succesful", payload: findAdmin };
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
