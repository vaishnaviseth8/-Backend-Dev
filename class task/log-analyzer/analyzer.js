const fs = require("fs");
const readline = require("readline");


const logFilePath = "./server.log";
const reportFilePath = "./abc.txt";

let totalLines = 0;
let errorCount = 0;
let warningCount = 0;
let infoCount = 0;


const readStream = fs.createReadStream(logFilePath, {
  encoding: "utf-8"
});


const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity
});


rl.on("line", (line) => {
  totalLines++;

  if (line.includes("ERROR")) errorCount++;
  else if (line.includes("WARNING")) warningCount++;
  else if (line.includes("INFO")) infoCount++;
});


rl.on("close", () => {
  const report = `
Log File Analysis Report
-------------------------
Total Lines   : ${totalLines}
ERROR Count   : ${errorCount}
WARNING Count : ${warningCount}
INFO Count    : ${infoCount}
`;

  fs.writeFileSync(reportFilePath, report);
  console.log(" Log analysis complete.");
  console.log(" Summary report generated: abc.txt");
});


readStream.on("error", (err) => {
  console.error("Error reading log file:", err.message);
});
