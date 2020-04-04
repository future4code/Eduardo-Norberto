import { Request, Response } from "express";
import { CreateShowUC } from "../../business/usecase/createShowUC";
import { ShowDatabase } from "../../data/showDatabase";

export const createShowEndpoint = async (req: Request, res: Response) => {
    try {
        const useCase = new CreateShowUC(new ShowDatabase())

        const result = await useCase.execute({
            weekDay: req.body.weekDay,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            bandId: req.body.bandId
        })

        res.status(200).send(result)

        res.send("The Show included")
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}