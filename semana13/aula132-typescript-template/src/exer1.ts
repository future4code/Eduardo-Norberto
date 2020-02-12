import { readFile, readdir } from "fs";

const folderText: string = "../textos"

const myPromiseReading = new Promise <string[]> ((resolve, reject) => {
    readdir(folderText, (error: Error, fileText: string[]) => {
        if (error) {
            reject(error)
        }
        resolve(fileText)
    })
})

const init = async () => {
    try {
        const contentText: string[] = await myPromiseReading
        for (let i = 0; i <= contentText.length; i++) {
            readFile(contentText[i], (error: Error, data: Buffer) => {
                if (error) {
                    console.error(error)
                } 
                console.log(data)
            })
        }
    } catch (error) {
        console.error("Promise Failed", error)
    }
}
init();

