const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const year = Number(input);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
