import { BaseDB } from "./baseDB";
import { User } from "../business/entities/user";
import { UserGateway } from "../business/gateways/userGateway";

export class UserDB extends BaseDB implements UserGateway {

    private userTableName = "future_book_user";
    private relationsTableName = "future_book_relations";

    private mapDBUserToUser(input?: any): User | undefined {
        return (
            input && new User(
                input.id,
                input.name,
                input.email,
                input.password
            )
        )
    };

    public async createUser(user: User): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.userTableName} 
            VALUES(
                '${user.getId()}',
                '${user.getName()}',
                '${user.getEmail()}',
                '${user.getPassword()}'
            );
        `);
    }

    public async getUserByEmail(email: string): Promise<User | undefined> {
        const user = await this.connection.raw(`
            SELECT * FROM ${this.userTableName} WHERE email='${email}';
        `);

        if (!user[0][0]) {
            return undefined
        }
        return this.mapDBUserToUser(user[0][0])
    }

    public async createUserFollowRelation(followerId: string, followedId: string): Promise<void> {

        await this.connection.raw(`
            INSERT INTO ${this.relationsTableName}(follower_id, followed_id)
            VALUES ('${followerId}', '${followedId}')
        `)
    }

    public async getUsersRelations(followerId: string, followedId: string): Promise<void> {

        const result = await this.connection.raw(`
            SELECT * FROM ${this.relationsTableName}
            WHERE follower_id = '${followedId}' AND followed_id = '${followerId}'
        `)

        if (!result[0][0]) {
            return undefined
        }

        return result[0][0]
    }

    public async unfollowerRelation(followerId: string, followedId: string): Promise<void> {

        await this.connection.raw(`
            DELETE FROM ${this.relationsTableName}
            WHERE follower_id = '${followedId}' AND followed_id = '${followerId}'
        `)

        await this.connection.raw(`
            DELETE FROM ${this.relationsTableName}
            WHERE follower_id = '${followerId}' AND followed_id = '${followedId}'
        `)
    }
}