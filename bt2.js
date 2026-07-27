const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const N = Number(input[0]);

let hatDe = 0;
let tao = 0;
let keoMat = 0;
let hopqua = 0;

for (let i = 1; i <= N; i++) {
    const x = Number(input[i]);
    if (x >= 1 && x <= 40) {

    } else if (x >= 41 && x <= 70) {
        tao++;
    }else if (x >= 71 && x <= 90) {
        keoMat++;
    } else if (x >= 91 && x <= 100) {
        hopqua++;
    } 
}
console.log("Hat de: " + hatDe);
console.log("Tao: " + tao);
console.log("Keo mat: " + keoMat);
console.log("Hop qua: " + hopqua);

