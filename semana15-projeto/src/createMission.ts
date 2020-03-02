import { Teacher } from "./teacher";
import { Student } from "./student";

export interface CreateMission {
    createMission(initialDate: Date, finalDate: Date, teachers: Teacher[], students: Student[], classIdentification: any): void
}