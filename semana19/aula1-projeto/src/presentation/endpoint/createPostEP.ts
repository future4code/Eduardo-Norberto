import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { CreatePostUC } from "../../business/usecase/createPostUC";
import { PostDB } from "../../data/postDB";

export const createPostEndpoint = async (request: Request, response: Response) => {
    try {
        const jwtAuth: string = process.env.JWT_SECRET || "";

        const data = jwt.verify(request.headers.auth as string, jwtAuth) as { id: string }

        const useCase = new CreatePostUC(new PostDB())

        await useCase.execute({
            image: request.body.image,
            description: request.body.description,
            postType: request.body.postType,
            userId: data.id,
        })

        response.send({ message: "Post criado com sucesso" })
    }
    catch (e) {
        response.status(500.).send({ message: e.message })
    }
}