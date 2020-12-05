import { readFileSync } from "fs";
import { join } from "path";

export = function () {
    let input = readFileSync("./i5.txt", { encoding: "utf-8" }).split("\r\n");
    let ids = input.map(line => getSeatID(line))

    console.log(Math.max(...ids));
    console.log(ids.sort((a, b) => a - b).filter((value, index, array) => { return (array[index - 1] != value - 1) }).map(a => a - 1)[1]);
}

function getSeatID(bincode: string, possibleR: number[] = Array.from(Array(128).keys()), possibleS: number[] = Array.from(Array(8).keys())): number {
    if (bincode.length != 0) {
        switch (bincode.charAt(0)) {
            case ("F"): return getSeatID(bincode.substr(1), possibleR.slice(0, possibleR.length / 2));
            case ("B"): return getSeatID(bincode.substr(1), possibleR.slice(possibleR.length / 2, possibleR.length));
            case ("L"): return getSeatID(bincode.substr(1), possibleR, possibleS.slice(0, possibleS.length / 2));
            case ("R"): return getSeatID(bincode.substr(1), possibleR, possibleS.slice(possibleS.length / 2, possibleS.length));
        }
    }
    return possibleR[0] * 8 + possibleS[0];
}

