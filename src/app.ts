import express from "express";
import bodyParser from "body-parser";
import itemRoutes from "./routes/itemRoutes";
import { errorHandler } from "./utils/errorHandler";

const app = express();

app.use(bodyParser.json());
app.use("/items", itemRoutes);
app.use(errorHandler);

export default app;
