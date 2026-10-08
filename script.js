async function getWeather() {
    let city = document.getElementById("city").value;
    if (city == "") return alert("enter a city name.");

    try {
        let res = await fetch("https://wttr.in/" + city + "?format=j1");
        let data = await res.json();
        let w = data.current_condition[0];
        document.getElementById("result").innerHTML =
            "<h3>" + city + "</h3>" +
            "temperature:" + w.temp_C + "degreec<br>" +
            "condition:" + w.weatherDesc[0].value + "<br>"+
        "humidity:" + w.humidity + "%";
    }
    catch {
        document.getElementById("result").innerHTML =
            "unable to get weather information.";
    }
}