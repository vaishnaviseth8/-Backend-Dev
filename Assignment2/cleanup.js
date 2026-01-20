const fs = require("fs");
const path = require("path");

const DIRECTORY = "./logs";   
const DAYS = 7;            


if (!fs.existsSync(DIRECTORY)) {
  console.log("Logs folder not found. Creating logs folder...");
  fs.mkdirSync(DIRECTORY);
  process.exit();
}

const now = Date.now();
const maxAge = DAYS * 24 * 60 * 60 * 1000; 

fs.readdir(DIRECTORY, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err.message);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(DIRECTORY, file);

    fs.stat(filePath, (err, stats) => {
      if (err) return;


      if (stats.isDirectory()) return;

      const fileAge = now - stats.mtimeMs;

      if (fileAge > maxAge) {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting file:", file);
          } else {
            console.log("Deleted:", file);
          }
        });
      }
    });
  });
});



