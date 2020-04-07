import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoint/singupEP";
import { loginEndpoint } from "./endpoint/loginEP";
import { followUserEndpoint } from "./endpoint/followEP";
import { unfollowUserEndpoint } from "./endpoint/unfollowEP";
import { createPostEndpoint } from "./endpoint/createPostEP";
import { feedEndpoint } from "./endpoint/feedEP";
import { feedTypeEndpoint } from "./endpoint/feedTypeEP";

const app = express();
app.use(express.json());

app.post("/signup", signupEndpoint)
app.post("/login", loginEndpoint)
app.post("/follow", followUserEndpoint)
app.post("/unfollow", unfollowUserEndpoint)
app.post("/createPost", createPostEndpoint)
app.get("/feed", feedEndpoint);
app.get("/feedtype", feedTypeEndpoint);

export default app;
