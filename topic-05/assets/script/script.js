const url = "assets/data/weather-data.json"

const container = document.getElementById("container");

function valueToHSL(value, minVal = -5, maxVal = 50){

    val = Math.max(minVal, Math.min(maxVal, value))
    const hue = ((maxVal - value) / (maxVal - minVal)) * 240;

    return `hsl(${hue}, 80%, 50%)`;

}

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        displayError(error);
    });

function displayData(data){
    console.log(data);

    const forecast = data.list;
    // console.log(forecast);

    for (const item of forecast){
        const temp = item.main.temp;
        // console.log(temp);

        if (temp < 0){
            barWidth = 0;
        }
        else {
            barWidth = temp * 20;
        }

        const row = document.createElement("div");
        row.classList.add("row");

        if (item.dt_txt.substring(12,13) == 0){
            row.style.borderTop = "1px solid gray"
        }

        const date = document.createElement("div");
        date.classList.add("date");
        date.textContent = `${item.dt_txt.substring(0,16)}`;

        const value = document.createElement("div");
        value.classList.add("value");
        value.textContent = `${temp.toFixed(1)}°` ;

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.width = barWidth + "px";
        bar.style.backgroundColor = valueToHSL(temp);

        row.appendChild(date);
        row.appendChild(value);
        row.appendChild(bar);

        container.appendChild(row);

    }
}