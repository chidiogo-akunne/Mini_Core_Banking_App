import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!process.env.ACCESS_TOKEN_SECRET) {
    res
      .status(500)
      .json({ message: 'Server error, please try again at a later time' });

    return;
  }

  if (!token) {
    res.status(401).json({ message: 'Not Authorized' });

    return;
  }

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err: jwt.VerifyErrors, _user) => {
      if (err) {
        res.status(403).json({ message: 'token expired' });

        return;
      }
      next();
    },
  );
}
