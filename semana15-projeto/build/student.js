"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileManager_1 = require("./fileManager");
class Student {
    constructor(name, email, dateOfBirth, classIdentification) {
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.classIdentification = classIdentification;
    }
    createUser(name, email, dateOfBirth, classIdentification) {
        this.saveStudent(new Student(name, email, dateOfBirth, classIdentification));
    }
    saveStudent(student) {
        const fileManager = new fileManager_1.FileManager("post.json");
        const data = JSON.parse(fileManager.readFile());
        data.students.push(student);
        fileManager.writeFile(data);
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map