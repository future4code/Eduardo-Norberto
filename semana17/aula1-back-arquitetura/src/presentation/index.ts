import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/signup";
import { getUserByEmail } from "./endpoints/getUserByEmail";
import { getAllUsersEndpoint } from "./endpoints/getAllUsers";
import { deleteUser } from "./endpoints/deleteUser";

const app = express();
app.use(express.json());

app.post("/signup", signupEndpoint);

app.get("/user", getUserByEmail);

app.get("/user/all", getAllUsersEndpoint)

app.delete("/user/:id", deleteUser)

export default app;
