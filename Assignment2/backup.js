const fs = require("fs");
const path = require("path");

function backupFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error("File does not exist");
    return;
  }

  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  const dirName = path.dirname(filePath);

  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-");

  const backupFileName = `${baseName}_backup_${timestamp}${ext}`;
  const backupPath = path.join(dirName, backupFileName);

  fs.copyFile(filePath, backupPath, (err) => {
    if (err) {
      console.error("Backup failed:", err);
    } else {
      console.log("✅ Backup created:", backupFileName);
    }
  });
}


backupFile("data.txt");
