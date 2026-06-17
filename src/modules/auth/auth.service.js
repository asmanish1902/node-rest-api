import bcrypt from "bcryptjs";

import userRepository from "../user/user.repository.js";

import { userResponse } from "../user/user.mapper.js";

import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../../utils/jwt.js";

import ApiError from "../../utils/ApiError.js";

class AuthService {

    // register method
    async register(payload) {

        const {
            name,
            email,
            password,
        } = payload;

        const existingUser =
            await userRepository.findByEmail(
                email
            );

        if (existingUser) {
            throw new ApiError(
                409,
                "Email already exists"
            );
        }

        const hashedPassword =
            await bcrypt.hash(
                password,
                12
            );

        const user =
            await userRepository.create({
                name,
                email,
                password:
                    hashedPassword,
            });

        return userResponse(user);
    }



    // login method
    async login(payload) {

        const { email, password } = payload;

        const user = await userRepository.findByEmailWithPassword(email);

        if (!user) {
            throw new ApiError(
                401,
                "Invalid credentials"
            );
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
            throw new ApiError(
                401,
                "Invalid credentials"
            );
        }

        const accessToken = generateAccessToken({
            id: user._id,
            email: user.email,
            role: user.role,
        });

        const refreshToken = generateRefreshToken({
            id: user._id,
        });

        return {
            user: userResponse(user),
            accessToken,
            refreshToken,
        };
    }


    // verify refresh token
    async refreshToken(refreshToken) {

        const decoded = verifyRefreshToken(refreshToken);

        const user = await userRepository.findById(decoded.id);

        if (!user) {
            throw new ApiError(401, "User not found");
        }

        const accessToken = generateAccessToken({
            id: user._id,
            email: user.email,
            role: user.role,
        });

        return {
            accessToken,
        };
    }

}

export default new AuthService();