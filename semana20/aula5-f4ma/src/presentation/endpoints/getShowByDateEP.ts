import { Request, Response } from "express";
import { ShowDatabase } from "../../data/showDatabase";
import { GetShowByDateUC } from "../../business/usecase/getShowByDateUC";

export const getShowByDateEndpoint = async (req: Request, res: Response) => {
    try {
        const useCase = new GetShowByDateUC(new ShowDatabase())

        const result = await useCase.execute({
            weekDay: req.query.weekDay
        })

        res.status(200).send(result)

        res.send("The Show included")
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}