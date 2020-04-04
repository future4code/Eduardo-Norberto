import { Request, Response } from "express";
import { CreateBandUC } from "../../business/usecase/createBandUC";
import { BandDatabase } from "../../data/bandDatabase";

export const createBandEndpoint = async (req: Request, res: Response) => {
    try{
        const useCase = new CreateBandUC(new BandDatabase())

        const result = await useCase.execute({
            name: req.body.name,
            musicGenre: req.body.musicGenre,
            responsible: req.body.responsible
        })

        res.status(200).send(result)

        res.send("The Band included")
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}