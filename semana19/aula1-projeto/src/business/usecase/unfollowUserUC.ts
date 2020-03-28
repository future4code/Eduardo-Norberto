import { UserGateway } from "../gateways/userGateway";

export class UnfollowUC {
    constructor(private userGateway: UserGateway) { }

    async execute(input: UnfollowUCInput) {
        await this.userGateway.unfollowerRelation(input.userId, input.userToFollowId)
    }
}

export interface UnfollowUCInput {
    userId: string
    userToFollowId: string
}

export interface UnfollowUCOutput {
    message: string
}