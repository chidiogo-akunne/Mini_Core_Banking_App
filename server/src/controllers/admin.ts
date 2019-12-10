import Admin from '../models/admin';
import bcrypt from 'bcrypt'

export async function loginAdmin(username: string, password: string){
    const findAdmin = await Admin.find({username});
    if(!findAdmin.length){
    //    return {status: 404, message: 'Invalid username or password'}; 
    throw new Error('Invalid username or password')
    }

    const comparePassword = await bcrypt.compare(password, password);
    if(!comparePassword){
        // return { status: 404, message: 'Invalid username or password'};
        throw new Error('Invalid username or password ')
    }
    return {staus: 200, message: 'Login Succesful'}
}