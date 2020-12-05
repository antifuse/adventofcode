import {readdirSync} from "fs";
import * as collections from "collections";
import { env } from "process";
const files = readdirSync(`./build`).filter(file => file.endsWith('.js'));
let days: Map<string, ()=>void> = new Map();
for (let day of files) {
    days.set(day.substr(0,day.length-3),require("./"+day));
}
let toExec = days.get(process.argv[2]);
if (toExec) toExec();