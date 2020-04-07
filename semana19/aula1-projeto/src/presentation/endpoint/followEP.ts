import { Request, Response } from "express";
import { FollowUserUC } from "../../business/usecase/followUserUC";
import { UserDB } from "../../data/userDB";
import * as jwt from "jsonwebtoken";

export const followUserEndpoint = async (request: Request, response: Response) => {
    try {
        const jwtAuth: string = process.env.JWT_SECRET || "";

        const data = jwt.verify(request.headers.auth as string, jwtAuth) as { id: string }

        const useCase = new FollowUserUC(new UserDB())

        await useCase.execute({
            userId: data.id,
            userToFollowId: request.body.userToFollowId
        })

        response.send({ message: "Começou uma nova amizadade." })
    }
    catch (e) {
        response.status(500.).send({ message: e.message })
    }
}