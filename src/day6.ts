import { readFileSync } from "fs";
export = function () {
    let input = readFileSync("./i6.txt", { encoding: "utf-8" }).split("\r\n\r\n");
    console.log(input.map(line=>line.split("").filter(a=>a!="\r"&&a!="\n").sort().reduce((val,curr,index,array)=>curr != array[index+1]?val+1:val,0)).reduce((a,b)=>a+b));
    console.log(input.map(line=>line.split("").filter((a,index,array)=>array.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map()).get(a)>(array.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map()).get("\n")||0)).sort().reduce((val,curr,index,array)=>curr != array[index+1]?val+1:val,0)).reduce((a,b)=>a+b));
}
