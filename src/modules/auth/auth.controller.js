import asyncHandler from "../../utils/asyncHandler.js";
import sendResponse from "../../utils/sendResponse.js";

import authService from "./auth.service.js";

class AuthController {

    // Register
    register = asyncHandler(
        async (req, res) => {

            const user =
                await authService.register(
                    req.body
                );

            // return res.status(201).json({
            //     success: true,
            //     message:
            //         "User registered successfully",
            //     data: user,
            // });

            return sendResponse(res, 201, "User registered successfully.", user);
        }
    );

    // Login
    login = asyncHandler(
        async (req, res) => {

            const result = await authService.login(
                req.validated.body
            );

            // return res.status(200).json({
            //     success: true,
            //     message: "Login successful",
            //     data: result,
            // });

            return sendResponse(res, 200, "Login successful.", result);

        }
    );


    //logout
    logout = asyncHandler(
        async (req, res) => {

            // return res.status(200).json({
            //     success: true,
            //     message:
            //         "Logged out successfully",
            // });

            return sendResponse(res, 200, "User Logged out successfully.");


        }
    );

    // refresh token
    refreshToken = asyncHandler(
        async (req, res) => {

            const { refreshToken } = req.body;

            const result =
                await authService.refreshToken(
                    refreshToken
                );


            return sendResponse(res, 200, "Token Refreshed.", result);

            // return res.status(200).json({
            //     success: true,
            //     data: result,
            // });
        }
    );
}

export default new AuthController();