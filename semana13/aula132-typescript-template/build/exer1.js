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
const fs_1 = require("fs");
const folderText = "../textos";
const myPromiseReading = new Promise((resolve, reject) => {
    fs_1.readdir(folderText, (error, fileText) => {
        if (error) {
            reject(error);
        }
        resolve(fileText);
    });
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contentText = yield myPromiseReading;
        for (let i = 0; i <= contentText.length; i++) {
            fs_1.readFile(`/textos/${contentText[i]}`, (error, data) => {
                if (error) {
                    console.error(error);
                }
                console.log(data);
            });
        }
    }
    catch (error) {
        console.error("Promise Failed", error);
    }
});
init();
//# sourceMappingURL=exer1.js.map