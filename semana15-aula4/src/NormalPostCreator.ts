import { PostCreator } from "./PostCreator";
import { Post } from "./post";
import { FileManager } from "./JSONFileManager";
import { ErrorPrinter } from "./ErrorPrinter";

export class NormalPostCreator implements PostCreator {

    public creator(author: string, text: string) {
        this.validateInput(author, text)
        this.savePost(new Post(author, text, new Date()))   
    }

    protected savePost(post: Post) {
        const fileManager = new FileManager("post.json")
        const data = JSON.parse(fileManager.readFile())  
        data.posts.push(post)     
        fileManager.writeFile(data)
    }

    protected validateInput(text: string, author: string) {
        if (!text || !author) {
            throw new ErrorPrinter("Erro na criação do post", new Date())
        }
    }
}