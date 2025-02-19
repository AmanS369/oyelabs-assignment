import express from "express";
import { ConnectDB } from "./config/database.js";
import { syncDatabase } from "./models/syncModels.js";
import userRoute from "./routes/userRoute.js";
import errorHandler from "./middleware/errorHandler.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import cors from "cors";

const swaggerDocument = YAML.load("./swagger.yaml");
const app = express();

syncDatabase();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/users", userRoute);
app.use(errorHandler);

app.listen(7000, () => console.log(` Server running on port ${7000}`));

export default app;
