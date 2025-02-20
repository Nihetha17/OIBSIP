const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const resultText = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");

convertBtn.addEventListener("click", () => {
    const tempValue = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(tempValue)) {
        resultText.textContent = "Please enter a valid number!";
        return;
    }

    let convertedTemp = "";
    switch (unit) {
        case "celsius":
            convertedTemp = `${tempValue}°C = ${(tempValue * 9/5 + 32).toFixed(2)}°F | ${(tempValue + 273.15).toFixed(2)}K`;
            break;
        case "fahrenheit":
            convertedTemp = `${tempValue}°F = ${((tempValue - 32) * 5/9).toFixed(2)}°C | ${(((tempValue - 32) * 5/9) + 273.15).toFixed(2)}K`;
            break;
        case "kelvin":
            convertedTemp = `${tempValue}K = ${(tempValue - 273.15).toFixed(2)}°C | ${((tempValue - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
    }

    resultText.textContent = convertedTemp;
});

clearBtn.addEventListener("click", () => {
    temperatureInput.value = "";
    resultText.textContent = "--";
});
