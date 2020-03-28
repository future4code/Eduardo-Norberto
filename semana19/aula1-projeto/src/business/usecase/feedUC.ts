import { FeedGateway } from "../../business/gateways/feedGateway";
import { PostType } from "../../business/entities/post";

interface FeedOutput {
    id: string
    image: string
    description: string
    creationDate: Date
    postType: PostType
    userId: string
    name: string
}

interface FeedInput {
    userId: string
}

export class FeedUC {
    constructor(private feedGateway: FeedGateway) { }

    async execute(input: FeedInput): Promise<FeedOutput[]> {
        const post = await this.feedGateway.feedPost(input.userId);

        return post.map(post => {
            return {
                id: post.getId(),
                image: post.getPhoto(),
                description: post.getDescription(),
                creationDate: post.getCreationDate(),
                postType: post.getType(),
                userId: post.getUserId(),
                name: post.getName()
            };
        });
    }
}

