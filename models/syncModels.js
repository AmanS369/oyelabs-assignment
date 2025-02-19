import { PostgresSequelize } from "../config/database.js";
import User from "./user.model.js"; // Import User model

const syncDatabase = async () => {
  try {
    await PostgresSequelize.sync({ alter: true });
    console.log("Tables synced successfully!");
  } catch (error) {
    console.error("Failed to sync tables:", error);
  }
};

export { PostgresSequelize, User, syncDatabase };
