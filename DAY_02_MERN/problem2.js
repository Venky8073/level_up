const fs = require('fs');
const path = require('path');

// Function to read a file asynchronously
function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data);
    });
}

// Function to read and aggregate data from multiple files asynchronously using callbacks
function readAndAggregateFiles(filePaths, callback) {
    let aggregatedData = [];

    let completedCount = 0;

    filePaths.forEach(filePath => {
        readFile(filePath, (err, data) => {
            if (err) {
                callback(err);
                return;
            }
            aggregatedData.push(data);

            completedCount++;

            if (completedCount === filePaths.length) {
                callback(null, aggregatedData);
            }
        });
    });
}

// Example usage
const files = ['file1.txt', 'file2.txt', 'file3.txt'];
readAndAggregateFiles(files, (err, aggregatedData) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Aggregated Data:', aggregatedData);
});
