import { NormalPostCreator } from "./NormalPostCreator";
import { Post } from "./post";

export class UpperCasePostCreator extends NormalPostCreator {
    public creator(text: string, author: string) {
        this.validateInput(text, author)
        const post = new Post(text.toUpperCase(), author, new Date())
        this.savePost(post)
    }
}