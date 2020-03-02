import { Student } from "./student";
import { Teacher, Specialty } from "./teacher";
import { WebMission } from "./WebMission";
import { MobileMission } from "./MobileMission";

const newStudent = new Student("Eduardo", "edu@rdo.com", new Date("02/06/1993"), "Bouman")

const newTeacher = new Teacher("AstroDev", "astr@dev.com", new Date("02/06/1993"), Specialty.JS)

const webClass = new WebMission(new Date("01/11/2019"), new Date("15/05/2020"), [], [], "Bouman")

const mobileClass = new MobileMission(new Date("01/11/2019"), new Date("15/05/2020"), [], [], 1)


console.log("**************************************************")
console.log(newStudent)
console.log("**************************************************")
console.log(newTeacher)
console.log("**************************************************")
console.log(webClass)
console.log("**************************************************")
console.log(mobileClass)
console.log("**************************************************")
