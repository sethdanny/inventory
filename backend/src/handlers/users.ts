import { Request, Response } from 'express';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import asyncHandler from 'express-async-handler';
import User from '../models/users';


export const register = asyncHandler(
    async (req: Request<{}, {}, CreateUserDto>, res: Response) => {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400);
            throw new Error('Please fill in all fields!');
        }

        if (password.length < 6) {
            res.status(400);
            throw new Error('Password must be 6 characters');
        }

        const userExists = await User.findOne({email});

        if (userExists) {
            res.status(400);
            throw new Error('Email already registered');
        }

        const user = await User.create({
            name,
            email,
            password
        })
        
        if (user) {
            res.status(201).json({
                _id: user._id,
                name,
                email
            })
        } else {
            res.status(500);
            throw new Error('Internal server error');
        }
})
