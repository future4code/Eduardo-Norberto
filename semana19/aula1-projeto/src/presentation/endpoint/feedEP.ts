import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { FeedUC } from "../../business/usecase/feedUC";
import { FeedDB } from "../../data/feedDB";



export const feedEndpoint = async (request: Request, response: Response) => {
    try {
        const jwtAuth: string = process.env.JWT_SECRET || "";

        const data = jwt.verify(request.headers.auth as string, jwtAuth) as { id: string }

        const useCase = new FeedUC(new FeedDB())

        const result = await useCase.execute({
            userId: data.id,
        })

        response.status(200).send(result);
    }
    catch (e) {
        response.status(500.).send({ message: e.message })
    }
}