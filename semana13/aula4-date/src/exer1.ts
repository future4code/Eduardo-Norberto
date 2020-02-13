import * as fs from "fs";
import * as moment from "moment";

moment.locale("pt-br")

const file: string = "events.json"

type event = {
    name: string,
    desc: string,
    startEvent: Date,
    endEvent: Date,
}

type eventsFile = {
    eventList: event[]
}

const eventItem: event = {
    name: process.argv[4],
    desc: process.argv[5],
    startEvent: new Date(process.argv[6]),
    endEvent: new Date(process.argv[7])
}

const getEvents = async () => {
    const readEventsPromise: Promise<string> = new Promise((resolve, reject) => {
        fs.readFile(file, (err: Error, data: Buffer) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data.toString())
        })
    })

    const jsonContent: string = await readEventsPromise
    const eventsObject: eventsFile = JSON.parse(jsonContent)
    eventsObject.eventList.push({
        name: eventItem.name,
        desc: eventItem.desc,
        startEvent: eventItem.startEvent,
        endEvent: eventItem.endEvent
    })
    fs.writeFileSync(file, JSON.stringify(eventsObject))
} 

getEvents().then((eventsObject: any) =>{
    console.log(eventsObject.eventList)
})

// const createEvent = async () =>{
//     const writeEventsPromise: Promise<string> = new Promise((resolve, reject)=>{
//         fs.readdir(file, "bananinha", (err: Error)=>{
//             if(err){
//                 reject(err)
//                 return
//             }
//         })
//     })

//     const writeEvent: string = await writeEventsPromise
// }