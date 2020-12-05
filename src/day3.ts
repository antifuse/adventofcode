import "fs";
import { readFileSync } from "fs";


function trees(lines: string[], right: number, down: number = 1) {
    let counter = 0;
    let x = 0;
    let y = 0;
    while (y < lines.length) {
        if (lines[y].charAt(x) == "#") {
            counter++;
            console.log("X");
        } else console.log("O");
        x = (x + right) % (lines[y].length - 1);
        y += down;
    }
    return counter;
}

export = function(){
    let input = readFileSync("./i3.txt", { encoding: "utf-8" }).split("\n");
    console.log(input.length)
    console.log(trees(input, 1) * trees(input, 3) * trees(input, 5) * trees(input, 7) * trees(input, 1, 2));
}