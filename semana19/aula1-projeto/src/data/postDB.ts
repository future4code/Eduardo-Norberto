import { BaseDB } from "./baseDB";
import { PostGateway } from "../business/gateways/postGateway";
import { Post } from "../business/entities/post";

export class PostDB extends BaseDB implements PostGateway {

    private postTableName = "fature_book_post";

    async createPost(post: Post) {

        await this.connection
            .insert({
                id: post.getId(),
                image: post.getPhoto(),
                description: post.getDescription(),
                creationDate: post.getCreationDate(),
                postType: post.getType(),
                userId: post.getUserId(),
            })
            .into(this.postTableName);
    }
}