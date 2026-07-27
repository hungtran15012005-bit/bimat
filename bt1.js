const fs = require("fs");

function solve() {
    const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
    if (input.length < 3) return;

    let ptr = 0;
    const M = parseInt(input[ptr++], 10);
    const K = parseInt(input[ptr++], 10);
    const Q = parseInt(input[ptr++], 10);

    const bit = new Uint8Array(M);

    function getSumASCII(name) {
        let sum = 0;
        for (let i = 0; i < name.length; i++) {
            sum += name.charCodeAt(i);
        }
        return sum;
    }

    const output = [];

    for (let q = 0; q < Q; q++) {
        const cmd = input[ptr++];
        const name = input[ptr++];

        const sum = getSumASCII(name);

        if (cmd === "ADD") {
            for (let j = 1; j <= K; j++) {
                const pos = (sum * j + 7) % M;
                bit[pos] = 1;
            }
        } else if (cmd === "CHECK") {
            let ok = true;
            for (let j = 1; j <= K; j++) {
                const pos = (sum * j + 7) % M;
                if (bit[pos] === 0) {
                    ok = false;
                    break;
                }
            }
            output.push(ok ? "CO THE DA DANG KY" : "CHAC CHAN CHUA");
        }
    }

    console.log(output.join("\n"));
}

solve();