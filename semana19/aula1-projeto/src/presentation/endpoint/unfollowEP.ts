import { Request, Response } from "express";
import { UserDB } from "../../data/userDB";
import { UnfollowUC } from "../../business/usecase/unfollowUserUC";
import * as jwt from "jsonwebtoken";

export const unfollowUserEndpoint = async (request: Request, response: Response) => {
    try {
        const jwtAuth: string = process.env.JWT_SECRET || "";

        const data = jwt.verify(request.headers.auth as string, jwtAuth) as { id: string }

        const useCase = new UnfollowUC(new UserDB())

        await useCase.execute({
            userId: data.id,
            userToFollowId: request.body.userToFollowId
        })

        response.send({ message: "Não é mais amigo dessa pessoa" })
    }
    catch (e) {
        response.status(500.).send({ message: e.message })
    }
}