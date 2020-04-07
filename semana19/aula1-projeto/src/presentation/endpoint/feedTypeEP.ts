import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { FeedDB } from "../../data/feedDB";
import { FeedTypeUC } from "../../business/usecase/feedTypeUC";

export const feedTypeEndpoint = async (request: Request, response: Response) => {
    try {
        const jwtAuth: string = process.env.JWT_SECRET || "";

        const data = jwt.verify(request.headers.auth as string, jwtAuth) as { id: string }

        const useCase = new FeedTypeUC(new FeedDB())

        const result = await useCase.execute({
            userId: data.id,
            postType: request.query.postType
        })

        response.status(200).send(result);
    }
    catch (e) {
        response.status(500.).send({ message: e.message })
    }
}