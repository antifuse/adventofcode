import { readFileSync } from "fs";
const REQUIRED = [/byr:((19[2-9][0-9])|(200[0-2]))( |\n|\r|$)/, /iyr:((201[0-9])|2020)( |\n|\r|$)/, /eyr:((202[0-9])|2030)( |\n|\r|$)/, /hgt:(((1[5-8][0-9])|(19[0-3]))cm|(59|6[0-9]|7[0-6])in)( |\n|\r|$)/, /hcl:#[0-9a-f]{6}( |\n|\r|$)/, /ecl:(amb|blu|brn|gry|grn|hzl|oth)( |\n|\r|$)/, /pid:[0-9]{9}( |\n|\r|$)/];

export = function () {
    let input = readFileSync("./i4.txt", { encoding: "utf-8" }).split("\r\n\r\n");
    console.log(input.length);
    let counter = 0;
    console.log(REQUIRED.length)
    for (let pp of input) {
        console.log(pp)
        if (REQUIRED.every(field => field.exec(pp))) {
            counter++;
            console.log("VALID! (just like you)");
        }
        console.log("\n")
    }
    console.log(counter);
}