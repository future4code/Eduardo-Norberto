import { Request, Response } from "express";
import { BandDatabase } from "../../data/bandDatabase";
import { GetBandDetailsUC } from "../../business/usecase/getBandDetailsUC";

export const getBandDetailsEndpoint = async (req: Request, res: Response) => {
    try{
        const useCase = new GetBandDetailsUC(new BandDatabase())

        const result = await useCase.execute({
            id: req.query.id,
            name: req.query.name
        })

        res.status(200).send(result)

        res.send("The Band included")
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}