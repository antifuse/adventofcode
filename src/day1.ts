import "fs";
import { readFileSync } from "fs";

export = function(){
    let input = readFileSync("./i1.txt", {encoding: "utf-8"}).split("\n").map(a=>parseInt(a));
    let a = input.find((x)=>input.includes(2020-x));
    if (a) {
        let b = a * (2020-a);
        console.log(`Ergebnis von Teil I: ${b}`)
    }

    for (let x of input) {
        let c = input.find((y)=>input.includes(2020-(y+x)));
        if (c) console.log(`Mögliches Ergebnis für Teil II: ${(c * x * (2020-c-x))} als ${c} * ${x} * ${2020-c-x}`);
    }

}