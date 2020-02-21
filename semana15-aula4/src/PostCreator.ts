export interface PostCreator {
    creator(author: string, text: string): void;
}