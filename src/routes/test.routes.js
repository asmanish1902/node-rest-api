import { Router } from "express";
import sendResponse from "../utils/sendResponse.js";

const router = Router();

router.get("/test", (req, res) => {

    return sendResponse(
        res,
        200,
        "API Working"
    );

});

export default router;