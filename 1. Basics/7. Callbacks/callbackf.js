//install node and execute this code calling: node script.js


function processData(data, callback) {
    // Process the data (e.g., sort, filter, transform)
    const processedData = data.sort(); //alphabetically

    // Call the callback function with the processed data
    callback(processedData);
}

// Define a callback function to handle the processed data
function displayData(data) {
    console.log('Processed data:', data);
}

// Sample data
const unprocessedData = [5, 2, 8, 1, 4, 24];

// Call the processData function and pass the displayData function as a callback
processData(unprocessedData, displayData);