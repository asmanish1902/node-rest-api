import ApiResponse from "./apiResponse.js";

const sendResponse = (res, statusCode, message, data = null) => {

    return res.status(statusCode).json(
        new ApiResponse(true, statusCode, message, data)
    );
};

export default sendResponse;