const fs = require("fs");
const path = require("path");

function exploreDirectory(dirPath, indent = "") {
  fs.readdir(dirPath, (err, items) => {
    if (err) {
      console.error("Error reading directory:", err.message);
      return;
    }

    items.forEach((item) => {
      const fullPath = path.join(dirPath, item);

      fs.stat(fullPath, (err, stats) => {
        if (err) return;

        if (stats.isDirectory()) {
          console.log(`${indent}[DIR]  ${item}`);
          exploreDirectory(fullPath, indent + "  ");
        } else {
          console.log(
            `${indent}[FILE] ${item} - ${stats.size} bytes`
          );
        }
      });
    });
  });
}


exploreDirectory("./");
