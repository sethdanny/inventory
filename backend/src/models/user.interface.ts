import { Document } from 'mongoose';

export interface UserInterface extends Document {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'salesperson';
    //isPasswordMatch: (password: string) => boolean;
}