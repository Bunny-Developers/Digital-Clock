// Initialize variables to keep track of the start time and elapsed time
let startTime = 0;
let elapsedTime = 0;
let stopwatchInterval;

// Function to format time as HH:MM:SS
function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

// Function to update element text
function updateElementText(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

// Function to start or resume the stopwatch
function startStopwatch() {
    startTime = Date.now() - elapsedTime * 1000; // Adjust start time based on elapsed time
    stopwatchInterval = setInterval(updateRunningTime, 1000);
}

// Function to update running time
function updateRunningTime() {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    updateElementText('time', `Time: ${formatTime(elapsedTime)}`);
}

// Start the stopwatch immediately when the script loads
startStopwatch();

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(stopwatchInterval); // Stop the current interval
    elapsedTime = 0; // Reset elapsed time
    updateElementText('time', 'Time: 00:00:00'); // Reset display
    startStopwatch(); // Restart the stopwatch
}

// Clock function to update current time
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Update the clock div
    updateElementText('clock', `${hours}:${minutes}:${seconds}`);
}

// Call updateClock immediately to avoid delay on load
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);

// Date function to update current date
function updateDate() {
    const now = new Date();
    
    // Format the date as DD-MM-YYYY
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');

    const dateString = `${day}-${month}-${year}`;
    
    // Update the date div
    updateElementText('date', dateString);
}

// Call updateDate immediately to avoid delay on load
updateDate();
// Update the date every second (optional)
setInterval(updateDate, 1000);

// Attach event listener for reset button click
document.getElementById('reset').onclick = resetStopwatch;
