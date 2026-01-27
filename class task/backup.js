const fs = require("fs").promises;
const path = require("path");


const SOURCE_DIR = "./uploads";
const BACKUP_DIR = "./backup";
const LOG_FILE = "./backup.log";


const DAYS_7 = 7 * 24 * 60 * 60 * 1000;


async function log(message) {
  const time = new Date().toISOString();
  await fs.appendFile(LOG_FILE, `[${time}] ${message}\n`);
}


async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
    await log(`Created directory: ${dir}`);
  }
}


async function backupAndCleanup() {
  try {
    await ensureDir(SOURCE_DIR);
    await ensureDir(BACKUP_DIR);

    const files = await fs.readdir(SOURCE_DIR);

    for (const file of files) {
      const filePath = path.join(SOURCE_DIR, file);
      const stats = await fs.stat(filePath);

      if (stats.isFile()) {
        const now = Date.now();
        const fileAge = now - stats.mtimeMs;

     
        const timestamp = Date.now();
        const backupFileName = `${timestamp}-${file}`;
        const backupPath = path.join(BACKUP_DIR, backupFileName);

        await fs.copyFile(filePath, backupPath);
        await log(`Backed up: ${file}`);

       
        if (fileAge > DAYS_7) {
          await fs.unlink(filePath);
          await log(`Deleted old file: ${file}`);
        }
      }
    }

    console.log(" Backup & cleanup completed successfully.");
  } catch (err) {
    await log(`ERROR: ${err.message}`);
    console.error(" Error:", err.message);
  }
}


backupAndCleanup();
