import { NormalPostCreator } from "./NormalPostCreator";
import { Post } from "./post";

export class LowerCasePostCreator extends NormalPostCreator {
    public creator(text: string, author: string) {
        this.validateInput(text, author)
        const post = new Post(text.toLowerCase(), author, new Date())
        this.savePost(post)
    }
}