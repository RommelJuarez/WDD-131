
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear} | Rommel Juarez | Quito-Ecuador`;

const lastModifiedElement = document.getElementById("lastModified");
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;


function calculateWindChill(temperature, windSpeed) {
    return Math.round(13.12 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
}


const temperature = 18;
const windSpeed = 12;


let windChill;
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed);
} else {
    windChill = "N/A";
}


const windChillElement = document.createElement("li");
windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChill}°C`;
document.querySelector(".card-2 ul").appendChild(windChillElement);
