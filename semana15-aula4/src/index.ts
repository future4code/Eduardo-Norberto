import { UpperCasePostCreator } from "./UpperCasePostCreator"
import { LowerCasePostCreator } from "./LowerCasePostCreator"
import { NormalPostCreator } from "./NormalPostCreator"
import { Post } from "./post"

const newPost = new Post("Eduardo", "BlaBla", new Date())

const message = "%hello"

const main = () => {
    
    if(message.indexOf("&") !== -1) {
        const postCreator = new UpperCasePostCreator()
        postCreator.creator(message, "")
    }else if (message.indexOf("%") !== -1) {
        const postCreator = new LowerCasePostCreator()
        postCreator.creator(message, "")
    } else {
        const postCreator = new NormalPostCreator()
        postCreator.creator(message, "")
    }
}