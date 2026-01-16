const os = require('os');
const fs = require('fs');

function logSystemInfo() {
    const info = `
Time: ${new Date().toLocaleString()}
Platform: ${os.platform()}
CPU Architecture: ${os.arch()}
CPU Cores: ${os.cpus().length}
Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
-----------------------------------
`;

    fs.appendFile('systemInfo.txt', info, (err) => {
        if (err) {
            console.error('Error writing system info:', err);
        } else {
            console.log('System info logged');
        }
    });
}

// Log info every 5 seconds
setInterval(logSystemInfo, 5000);
