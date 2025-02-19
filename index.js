// Automated Task Scheduler with Logging

const fs = require('fs');
const path = require('path');

// Log file path
const logFile = path.join(__dirname, 'task_scheduler_log.txt');

// Function to log task execution
function logTaskExecution(taskName) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Task Executed: ${taskName}\n`;
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });
}



// Simulated tasks
const tasks = [
    'Database Backup',
    'Generate Report',
    'Send Email Notification',
    'Cleanup Temp Files',
    'Sync User Data'
];



function getRandomTask() {
    return tasks[Math.floor(Math.random() * tasks.length)];
}

// Function to execute and log random tasks
function executeRandomTask() {
    const task = getRandomTask();
    logTaskExecution(task);
    console.log(`Task Executed: ${task}`);
}

// Schedule task execution
setInterval(executeRandomTask, 4000); // Every 4 seconds

// Initial log message
logTaskExecution('Task Scheduler started.');
console.log('Task Scheduler started.');

// Stop after 1 minute
setTimeout(() => {
    logTaskExecution('Task Scheduler stopped.');
    console.log('Task Scheduler stopped.');
    process.exit(0);
}, 60000);
