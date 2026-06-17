import asyncHandler from "../../utils/asyncHandler.js";
import sendResponse from "../../utils/sendResponse.js";
import userService from "./user.service.js";

class UserController {

    createUser = asyncHandler(
        async (req, res) => {

            const user = await userService.createUser(
                req.body
            );



            // return res.status(201).json({
            //     success: true,
            //     data: user,
            // });

            return sendResponse(res, 201, "User Created Successfully.", user);
        }
    );


    // get user
    getUser = asyncHandler(
        async (req, res) => {

            const user = await userService.getUser(
                req.params.id
            );

            // return res.status(200).json({
            //     success: true,
            //     data: user,
            // });

            return sendResponse(res, 200, "User found!.", user);
        }
    );


    // get profile
    getProfile = asyncHandler(
        async (req, res) => {

            const user = await userService.getProfile(
                req.user.id
            );

            // return res.status(200).json({
            //     success: true,
            //     data: user,
            // });

            return sendResponse(res, 200, "User found!.", user);


        }
    );
}

export default new UserController();