"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileManager_1 = require("./fileManager");
var Specialty;
(function (Specialty) {
    Specialty["HTML"] = "HTML";
    Specialty["CSS"] = "CSS";
    Specialty["JS"] = "JavaScript";
    Specialty["React"] = "React";
    Specialty["Redux"] = "Redux";
    Specialty["Back"] = "Back";
    Specialty["POO"] = "Orienta\u00E7\u00E3o a Objetos";
})(Specialty = exports.Specialty || (exports.Specialty = {}));
class Teacher {
    constructor(name, email, dateOfBirth, specialty) {
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.specialty = specialty;
    }
    createUser(name, email, dateOfBirth, specialty) {
        this.saveTeacher(new Teacher(name, email, dateOfBirth, specialty));
    }
    saveTeacher(teacher) {
        const fileManager = new fileManager_1.FileManager("post.json");
        const data = JSON.parse(fileManager.readFile());
        data.teachers.push(teacher);
        fileManager.writeFile(data);
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.js.map