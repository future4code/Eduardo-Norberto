import { UserDB } from "../../data/userDB";
import * as bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';
import { UserGateway } from "../gateways/userGateway";

interface LoginInput {
    email: string
    password: string
}

export interface LoginOutput {
    message: string,
    token: string
}

export class LoginUC {

    constructor(private db: UserGateway) { }

    public async execute(input: LoginInput): Promise<LoginOutput> {

        const user = await this.db.getUserByEmail(input.email)

        const jwtAuth: string = process.env.JWT_SECRET || "";

        if (!user) {
            throw new Error("Email incorreto")
        }

        const isPasswordCorrect = await bcrypt.compare(input.password, user.getPassword())

        if (!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const jwttoken = jwt.sign({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        }, jwtAuth, {
            expiresIn: "1h"
        })

        return {
            message: "Login efetuado com sucesso",
            token: jwttoken
        }
    }
}
