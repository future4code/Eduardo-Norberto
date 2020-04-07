import { Request, Response } from "express";
import { SignupUC } from "../../business/usecase/singupUC";
import { UserDB } from "../../data/userDB";

export const signupEndpoint = async (request: Request, response: Response) => {
    try {
        const signUpUC = new SignupUC(new UserDB());
        const result = await signUpUC.execute({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        })
        response.status(200).send(result)

        response.send("Usuário criado")
    } catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
}