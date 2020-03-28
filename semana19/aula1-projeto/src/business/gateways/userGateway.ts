import { User } from "../entities/user";

export interface UserGateway {
    createUser(user: User): Promise<void>
    getUserByEmail(input: string): Promise<User | undefined>
    createUserFollowRelation(followerId: string, followedId: string): Promise<void>
    unfollowerRelation(followerId: string, followedId: string): Promise<void>
}