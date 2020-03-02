import { Mission } from "./Mission";
import { Teacher } from "./teacher";
import { Student } from "./student";
import { FileManager } from "./fileManager";


export class MobileMission extends Mission {
    public classIdentification: any

    constructor(initialDate: Date, finalDate: Date, teachers: Teacher[], students: Student[], classIdentification?: number | string){
        super(initialDate, finalDate, teachers, students)
        this.classIdentification = classIdentification
    }

    public createMission(initialDate: Date, finalDate: Date, teachers: Teacher[], students: Student[], classIdentification: any){
        this.saveMission(new MobileMission(initialDate, finalDate, teachers, students, classIdentification))
    }
    protected saveMission(mission: Mission) {
        const fileManager = new FileManager("post.json")
        const data = JSON.parse(fileManager.readFile())  
        data.missions.push(mission)     
        fileManager.writeFile(data)
    }
}