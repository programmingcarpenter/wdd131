const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");
const today = new Date();
currentyear.innerHTML = `&copy<span class="highlight">${today.getFullYear()}</span>`;
lastmodified.innerHTML = `<span class="highlight">${(document.lastModified)}</span>`;

const temperature = document.querySelector("#temperature");
const wind_speed = document.querySelector("#wind_speed");
const wind_chill = document.querySelector("#wind_chill");

function calculateWindChill(temperature, wind_speed) {
    if ((temperature <= 50) && (wind_speed > 3)) {
        return 35.74 + 0.6215*(temperature) - 35.75*(wind_speed^0.16) + 0.4275*temperature*(wind_speed^0.16)
    } else {
        return "N/A";
    }
}

temperature.innerHTML = `<span>${103}</span>`;
wind_speed.innerHTML = `<span>${17}</span>`;

wind_chill.innerHTML = `<span>${calculateWindChill(temperature, wind_speed)}</span>`;