import express from "express";
import dotenv from "dotenv";
import connection from "./utils/connection.js";
import createRoute from "./routes/createRoute.js";
import getAllRoute from "./routes/getAllRoute.js";
import getByIdRoute from "./routes/getByIdRoute.js";
import updateByIdRoute from "./routes/updateByIdRoute.js";
import deleteByIdRoute from "./routes/deleteByIdRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/get", getAllRoute);
app.use("/getbyid", getByIdRoute);
app.use("/update", updateByIdRoute);
app.use("/delete", deleteByIdRoute);
app.use("/create", createRoute);

app.listen(3000, () => connection());
