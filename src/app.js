import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
// import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";

import routes from "./routes/index.js";

import errorMiddleware from "./middlewares/error.middleware.js";
import testRoutes from "./routes/test.routes.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(helmet());

app.use(compression());

// app.use(mongoSanitize());

app.use(hpp());

app.get("/health", (req, res) => {

    res.status(200).json({
        success: true,
        message: "Server running"
    });

});


app.use("/api/v1", testRoutes);

app.use("/api/v1", routes);

app.use(errorMiddleware);

export default app;