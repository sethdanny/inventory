import mongoose, { Document } from 'mongoose';
import { UserInterface } from '../models/user.interface';

const userSchema: mongoose.Schema<UserInterface> = new mongoose.Schema<UserInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'please provide an email'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlength: [6, 'minimum password length is 6 characters'],
  },
  role: {
    type: String,
    enum: ['admin', 'salesperson'],
    default: 'salesperson',
  },
}, { timestamps: true });

const User: mongoose.Model<UserInterface & Document> = mongoose.model<UserInterface & Document>('User', userSchema);

export default User;