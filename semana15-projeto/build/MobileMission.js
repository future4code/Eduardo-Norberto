"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mission_1 = require("./Mission");
const fileManager_1 = require("./fileManager");
class MobileMission extends Mission_1.Mission {
    constructor(initialDate, finalDate, teachers, students, classIdentification) {
        super(initialDate, finalDate, teachers, students);
        this.classIdentification = classIdentification;
    }
    createMission(initialDate, finalDate, teachers, students, classIdentification) {
        this.saveMission(new MobileMission(initialDate, finalDate, teachers, students, classIdentification));
    }
    saveMission(mission) {
        const fileManager = new fileManager_1.FileManager("post.json");
        const data = JSON.parse(fileManager.readFile());
        data.missions.push(mission);
        fileManager.writeFile(data);
    }
}
exports.MobileMission = MobileMission;
//# sourceMappingURL=MobileMission.js.map