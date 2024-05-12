// Define static values for temperature and wind speed
const temperature = 5; // in Celsius
const windSpeed = 10; // in km/h

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions are met for wind chill calculation
    if ((temperature <= 10 && temperature >= -50) && (windSpeed > 4.8)) {
        // Calculate wind chill factor using the formula
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        // Conditions not met, return "N/A"
        return "N/A";
    }
}

// Function to display windchill factor on page load
function displayWindChill() {
    // Get the element where windchill will be displayed
    const windChillElement = document.getElementById("windChill");

    // Calculate windchill factor
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display windchill factor on the page
    windChillElement.textContent = windChill;
}

// Call displayWindChill function when the page loads
window.onload = displayWindChill;
