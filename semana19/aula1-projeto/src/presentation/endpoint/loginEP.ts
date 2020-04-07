import { Request, Response } from "express";
import { LoginUC } from "../../business/usecase/loginUC";
import { UserDB } from "../../data/userDB";

export const loginEndpoint = async (request: Request, response: Response) => {
    try {
        const loginUC = new LoginUC(new UserDB());
        const token = await loginUC.execute({
            email: request.body.email,
            password: request.body.password
        })

        response.status(200).send(token)
    } catch (err) {
        console.log(err);
        response.status(500).send({
            message: err.message,
            ...err
        });
    }
}