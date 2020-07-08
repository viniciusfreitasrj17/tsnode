import { Schema, model } from 'mongoose';
import { IUser } from '../types/user';

const UserSchema = new Schema(
  {
    email: String,
    firstName: String,
    lastName: String
  },
  {
    timestamps: true
  }
);

export default model<IUser>('User', UserSchema);
