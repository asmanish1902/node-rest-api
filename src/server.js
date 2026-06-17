import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/database.js";
import logger from "./config/logger.js";

const PORT = process.env.PORT || 5000;

let server;

const startServer = async () => {
  try {
    await connectDB();

    server = app.listen(PORT, () => {
      // console.log(`Server running on port ${PORT}`);
      logger.info(`Server running on port ${PORT}`);
    });
  } catch (error) {
    // console.error("Server startup failed:", error);
    logger.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();

process.on("unhandledRejection", (err) => {
  // console.error("Unhandled Rejection:", err);

  logger.error("Unhandled Rejection:", err);



  server?.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  // console.error("Uncaught Exception:", err);
  logger.error("Uncaught Exception:", err);


  server?.close(() => {
    process.exit(1);
  });
});