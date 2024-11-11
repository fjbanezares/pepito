// This function takes in data and a callback. It processes the data and then invokes the callback with the result.
function processData(data, callback) {
    // Sort the data numerically using a compare function
    const processedData = data.sort((a, b) => a - b);

    // Call the callback function with the processed data
    callback(processedData);
}

// This function acts as a callback. It simply logs the provided data to the console.
function displayData(data) {
    console.log('Processed data:', data);
}

// Sample data - an array of numbers
const unprocessedData = [5, 2, 8, 1, 4, 24];

// Call the processData function and pass in the sample data and the displayData function as a callback
processData(unprocessedData, displayData);
