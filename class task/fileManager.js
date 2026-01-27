const fs = require('fs').promises;
const path = require('path');


const [,, command, targetPath, extraArg] = process.argv;

async function manageFiles() {
    try {
        switch (command) {
            case 'read':
                const data = await fs.readFile(targetPath, 'utf8');
                console.log('--- File Content ---\n', data);
                break;

            case 'write':
                await fs.writeFile(targetPath, extraArg || '');
                console.log(`Successfully wrote to ${targetPath}`);
                break;

            case 'append':
                await fs.appendFile(targetPath, `\n${extraArg}`);
                console.log(`Log appended to ${targetPath}`);
                break;

            case 'copy':
                await fs.copyFile(targetPath, extraArg);
                console.log(`Copied ${targetPath} to ${extraArg}`);
                break;

            case 'delete':
                await fs.unlink(targetPath);
                console.log(`Deleted ${targetPath}`);
                break;

            case 'list':
                const files = await fs.readdir(targetPath || '.');
                console.log('Files in directory:', files.join(', '));
                break;

            default:
                console.log('Usage: node fileManager.js <read|write|append|copy|delete|list> <path> [extraArg]');
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`Error: The file or directory "${targetPath}" does not exist.`);
        } else if (error.code === 'EACCES') {
            console.error(`Error: Permission denied at "${targetPath}".`);
        } else {
            console.error('An unexpected error occurred:', error.message);
        }
    }
}

manageFiles();