import { Mission } from "./Mission";
import { Teacher } from "./teacher";
import { Student } from "./student";
import { CreateMission } from "./createMission";
import { FileManager } from "./fileManager";


export class WebMission extends Mission implements CreateMission{
    public classIdentification: any

    constructor(initialDate: Date, finalDate: Date, teachers: Teacher[], students: Student[], classIdentification?: number | string){
        super(initialDate, finalDate, teachers, students)
        this.classIdentification = classIdentification
    }

    public createMission(initialDate: Date, finalDate: Date, teachers: Teacher[], students: Student[], classIdentification: any){
        this.saveMission(new WebMission(initialDate, finalDate, teachers, students, classIdentification))
    }

    protected saveMission(mission: Mission) {
        const fileManager = new FileManager("post.json")
        const data = JSON.parse(fileManager.readFile())  
        data.missions.push(mission)     
        fileManager.writeFile(data)
    }
}