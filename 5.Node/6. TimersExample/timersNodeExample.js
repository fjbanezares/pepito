const { setInterval } = require('timers');

// This function will be executed every minute
const task = () => {
    const now = new Date().getHours();;
    //console.log(`Task is running: ${now.toISOString()}`);
    console.log(`Task is running: ${now}`);

    // Here you can add the code for the task you want to perform
};

// Schedule the task to run every 2000 milliseconds (2 secs)
setInterval(task, 2000);
