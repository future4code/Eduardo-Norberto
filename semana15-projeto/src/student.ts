import { User } from "./user";
import { CreateUser } from "./createUser"
import { FileManager } from "./fileManager"

export class Student implements User, CreateUser{
    
    constructor(
        public name: string, 
        public email: string, 
        public dateOfBirth: Date,
        public classIdentification: any
    ){}
    
    public createUser(name: string, email: string, dateOfBirth: Date, classIdentification?: number | string ){
        this.saveStudent(new Student(name, email, dateOfBirth, classIdentification))
    }
    
    protected saveStudent(student: Student) {
        const fileManager = new FileManager("post.json")
        const data = JSON.parse(fileManager.readFile())  
        data.students.push(student)     
        fileManager.writeFile(data)
    }
}
