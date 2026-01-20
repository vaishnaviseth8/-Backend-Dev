const fs = require("fs");
const path = require("path");


function logError(errorMessage) {
  const timestamp = new Date().toISOString();
  const log = `[${timestamp}] ${errorMessage}\n`;

  fs.appendFile("error.log", log, (err) => {
    if (err) {
      console.error("Failed to write to error.log");
    }
  });
}


function backupFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error("Source file does not exist");
    }

    const ext = path.extname(filePath);
    const baseName = path.basename(filePath, ext);
    const dirName = path.dirname(filePath);

    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, "-");

    const backupName = `${baseName}_backup_${timestamp}${ext}`;
    const backupPath = path.join(dirName, backupName);

    fs.copyFile(filePath, backupPath, (err) => {
      if (err) {
        logError("Backup failed: " + err.message);
      } else {
        console.log(" Backup created:", backupName);
      }
    });

  } catch (error) {
    logError(error.message);
  }
}


backupFile("data1.txt");
