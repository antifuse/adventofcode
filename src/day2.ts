import "fs";
import { readFileSync } from "fs";

export = function () {
    const pattern: RegExp = /(\d+)-(\d+) (\S): (.*)/;
    let input = readFileSync("./i2.txt", { encoding: "utf-8" }).split("\r");
    let counter: number = 0;

    for (let line of input) {
        console.log(line);
        let groups = pattern.exec(line);
        console.log(groups)
        if (groups && groups != null) {
            let a = groups[4].charAt(parseInt(groups[1]) - 1);
            let b = groups[4].charAt(parseInt(groups[2]) - 1);
            if ((a == groups[3] && b != groups[3]) || (a != groups[3] && b == groups[3])) counter++;
        }
    }
    console.log(counter);
}