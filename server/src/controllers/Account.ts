import User from "../models/user";
import Account from "../models/account";
import BVN from "../models/bvn";

type accountDetailsType = {
  userId: string;
  accountType: string;
  accountNumber: number;
  accountName: string;
  username: string;
  email: string;
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
};

type accounttype = {
  accountType?: string;
  accountNumber?: number;
  accountName?: string;
  userId?: string;
  BVNId?: string;
  bvn?: number;
};

type bvntype = {
  userId?: string;
  BVN: number;
};

export async function openAccount(accountOpeningDetails: accountDetailsType) {
  const {
    accountType,
    password,
    username,
    firstname,
    lastname,
    gender,
    nationality,
    maritalStatus,
    religion,
    dateOfBirth,
    employmentStatus,
    bvn,
    email
  } = accountOpeningDetails;
  let detailsForUser = {
    password,
    username,
    firstname,
    lastname,
    gender,
    nationality,
    maritalStatus,
    religion,
    dateOfBirth,
    employmentStatus,
    email
  };
  let detailsForAccount: accounttype = { accountType };
  let newUser = new User(detailsForUser);
  let userId = newUser._id;
  let detailsForBVN: bvntype = { BVN: bvn };
  let newBvn = new BVN(detailsForBVN);
  let BVNId = newBvn._id;
  detailsForAccount.accountNumber = Math.floor(Math.random() * 10000000000);
  detailsForAccount.accountName = `${firstname} ${lastname}`;
  detailsForAccount.userId = userId;
  detailsForAccount.BVNId = BVNId;
  detailsForBVN.userId = userId;

  const user = new User(detailsForUser);
  const userSaved = await user.save();
  const bvnSaved = await newBvn.save();
  const newaccount = new Account(detailsForAccount);
  const accountSaved = await newaccount.save();
  return {
    status: 201,
    message: "Your account has been created successfully",
    payload: { accountSaved, userSaved, bvnSaved }
  };
}

export async function closeAccount(accoundID: string) {
  let closedAccount = await Account.findOneAndUpdate(
    { _id: accoundID },
    { deletedAt: new Date() },
    { new: true,  }
  );
  return {
    status: 200,
    message: "Your account has been closed successfully",
    payload: closeAccount
  };
}
