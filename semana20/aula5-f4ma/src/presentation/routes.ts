import express, { Request, Response } from "express";
import { createBandEndpoint } from "./endpoints/createBandEP";
import { getBandDetailsEndpoint } from "./endpoints/getBandDetailsEP";
import { createShowEndpoint } from "./endpoints/createShowEP";
import { getShowByDateEndpoint } from "./endpoints/getShowByDateEP";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/create/band", createBandEndpoint)
app.get("/bandDetails",getBandDetailsEndpoint)
app.post("/create/show", createShowEndpoint)
app.get("/showForDay", getShowByDateEndpoint)


export default app;
