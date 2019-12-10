import User from '../models/user';
import Account from '../models/account';
import BVN from '../models/bvn';

type accountDetailsType = {
  userId: string;
  accountType: string;
  accountNumber: number;
  accountName: string;
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
  bvn: number;
  createdAt: Date;
  deletedAt: Date;
}

type accountType ={
    accountType?: string;
    accountNumber?: number;
    accountName?: string;
    userId?: string;
    BVNId?: string;
    bvn?: number;
}


export async function openAccount(accountOpeningDetails: accountDetailsType){
    const {accountType, password, username, firstname, lastname, gender, nationality, maritalStatus, religion, dateOfBirth, employmentStatus, bvn} = accountOpeningDetails;
    let detailsForUser = {password, username, firstname, lastname, gender, nationality, maritalStatus, religion, dateOfBirth, employmentStatus}
    let detailsForAccount: accountType = {accountType};
    let detailsForBVN: accountType = {bvn};
    let newUser = new User(detailsForUser);
    let userId = newUser._id;
    let newBvn = new BVN(detailsForBVN);
    let BVNId = newBvn._id
    detailsForAccount.accountNumber = Math.floor(Math.random() * 10000000000);
    detailsForAccount.accountName = `${firstname} ${lastname}`;
    detailsForAccount.userId = userId;
    detailsForAccount.BVNId = BVNId;
    detailsForBVN.userId = userId;

    const user = new User(detailsForUser);
    const userSaved = user.save();
    const newbvn = new BVN(detailsForBVN);
    const bvnSaved = newbvn.save();
    const newaccount = new Account(detailsForAccount);
    const accountSaved = newaccount.save();
    return {status: 201, message: "Your account has been created successfully", payload: [accountSaved, userSaved]};
    
}
