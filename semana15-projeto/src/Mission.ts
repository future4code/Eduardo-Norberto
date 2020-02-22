import { Student } from "./student";
import { Teacher } from "./teacher";

export abstract class Mission {
    
    constructor(
        public initialDate: Date,
        public finalDate: Date,
        public teachers: Teacher[],
        public students: Student[],
    ){}
        
}