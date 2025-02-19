import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Configure dotenv at the top of the file
dotenv.config();

const PostgresSequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
  },
);

async function ConnectDB() {
  try {
    await PostgresSequelize.authenticate();
    console.log("PostgreSQL Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

export { PostgresSequelize, ConnectDB };
