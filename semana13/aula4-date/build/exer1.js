"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const moment = require("moment");
moment.locale("pt-br");
const file = "events.json";
const eventItem = {
    name: process.argv[4],
    desc: process.argv[5],
    startEvent: new Date(process.argv[6]),
    endEvent: new Date(process.argv[7])
};
const getEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    const readEventsPromise = new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data.toString());
        });
    });
    const jsonContent = yield readEventsPromise;
    const eventsObject = JSON.parse(jsonContent);
    eventsObject.eventList.push({
        name: eventItem.name,
        desc: eventItem.desc,
        startEvent: eventItem.startEvent,
        endEvent: eventItem.endEvent
    });
    fs.writeFileSync(file, JSON.stringify(eventsObject));
});
getEvents().then((eventsObject) => {
    console.log(eventsObject.eventList);
});
//# sourceMappingURL=exer1.js.map