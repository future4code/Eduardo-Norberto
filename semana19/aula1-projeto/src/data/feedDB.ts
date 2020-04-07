import { BaseDB } from "./baseDB";
import { FeedGateway } from "../business/gateways/feedGateway";
import { FeedPost } from "../business/entities/feed";

export class FeedDB extends BaseDB implements FeedGateway {

    private postTableName = "fature_book_post";
    private userTableName = "future_book_user";
    private relationsTableName = "future_book_relations";

    async feedPost(userId: string): Promise<FeedPost[]> {
        const response = await this.connection.raw(`
        SELECT ${this.postTableName}.*, ${this.userTableName}.name 
        FROM ${this.relationsTableName}
        JOIN ${this.postTableName} ON ${this.postTableName}.id=${this.relationsTableName}.followed_id
        JOIN ${this.userTableName} ON ${this.relationsTableName}.followed_id=${this.userTableName}.id
        WHERE userId='${userId}'
        ORDER BY ${this.postTableName}.creationDate DESC;
        `);

        return response[0].map((post: any) => {
            return new FeedPost(
                post.id,
                post.image,
                post.description,
                post.creationDate,
                post.postType,
                post.userId,
                post.name,
            );
        });
    }

    async feedPostType(userId: string, postType: string): Promise<FeedPost[]> {
        const response = await this.connection.raw(`
        SELECT ${this.postTableName}.*, ${this.userTableName}.name 
        FROM ${this.relationsTableName}
        JOIN ${this.postTableName} ON ${this.postTableName}.id=${this.relationsTableName}.followed_id
        JOIN ${this.userTableName} ON ${this.relationsTableName}.followed_id=${this.userTableName}.id
        WHERE userId='${userId}' AND ${this.postTableName}.postType = '${postType}'
        `);

        return response[0].map((post: any) => {
            return new FeedPost(
                post.id,
                post.image,
                post.description,
                post.creationDate,
                post.postType,
                post.userId,
                post.name,
            );
        });
    }
}