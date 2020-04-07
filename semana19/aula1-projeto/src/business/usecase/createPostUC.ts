import { v4 } from "uuid";
import { PostGateway } from "../gateways/postGateway";
import { Post } from "../entities/post";

interface CreatePostInput {
    image: string;
    description: string;
    postType: string,
    userId: string
}

export class CreatePostUC {
    constructor(private postGateway: PostGateway) { }

    public async execute(input: CreatePostInput): Promise<void> {

        const id = v4();
        const post = new Post(
            id,
            input.image,
            input.description,
            new Date(),
            Post.checkPostType(input.postType),
            input.userId);

        await this.postGateway.createPost(post);

    }
}
