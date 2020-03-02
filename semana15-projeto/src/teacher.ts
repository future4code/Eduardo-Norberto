import { User } from "./user";
import { CreateUser } from "./createUser";
import { FileManager } from "./fileManager";

export enum Specialty {
    HTML = "HTML",
    CSS = 'CSS',
    JS = 'JavaScript',
    React = 'React',
    Redux = 'Redux',
    Back = 'Back',
    POO = 'Orientação a Objetos',
}

export class Teacher implements User, CreateUser{

    constructor(
        public name: string, 
        public email: string, 
        public dateOfBirth: Date, 
        public specialty: Specialty
    ){}
    public createUser(name: string, email: string, dateOfBirth: Date, specialty: Specialty){
        this.saveTeacher(new Teacher(name, email, dateOfBirth, specialty))
    }
    
    protected saveTeacher(teacher: Teacher) {
        const fileManager = new FileManager("post.json")
        const data = JSON.parse(fileManager.readFile())  
        data.teachers.push(teacher)     
        fileManager.writeFile(data)
    }
}