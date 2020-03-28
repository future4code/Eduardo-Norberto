import { FeedPost } from "../entities/feed";

export interface FeedGateway {
    feedPost(userId: string): Promise<FeedPost[]>;
    feedPostType(userId: string, postType: string): Promise<FeedPost[]>;
}