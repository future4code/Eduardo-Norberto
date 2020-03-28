import { v4 } from "uuid";
import { User } from "../entities/user";
import * as bcrypt from "bcrypt";
import { UserGateway } from "../gateways/userGateway";
import * as jwt from 'jsonwebtoken';

interface SignupInput {
    email: string
    password: string
    name: string
}

export interface SignUpUCOutput {
    message: string
    token: string
}

export class SignupUC {
    constructor(private db: UserGateway) { }

    async execute(input: SignupInput): Promise<SignUpUCOutput> {
        try {

            const jwtAuth: string = process.env.JWT_SECRET || "";

            const userId = v4()

            const hashPassword = await bcrypt.hash(input.password, 10)

            const newUser = new User(userId, input.name, input.email, hashPassword)

            const jwtToken = jwt.sign({
                name: input.name,
                email: input.email,
                password: input.password
            }, jwtAuth, {
                expiresIn: "1h"
            })

            await this.db.createUser(newUser)

            return {
                message: "User created successfully.",
                token: jwtToken
            }

        } catch (e) {
            console.log(e)
            throw new Error("Problema ao criar usuário")
        }

    }
}