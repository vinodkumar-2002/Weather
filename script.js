// Function to handle the dropdown change
function handleDropdownChange(selectedValue) {
  if (selectedValue === "Country") {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    //window.location.href = "index.html"; // Redirect to index.html
    Country();
  }
  else if (selectedValue === "States in India") {
    //window.location.href = "index.html"; // Redirect to index.html
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    states();
  }

}

//modal search function
/*
async function myFunction() {
  var search = document.getElementById("search").value;
  if (search == '') {
    alert("Missing");
  } else {
    document.getElementById("exampleModalLabel").innerHTML = search;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e4818b9112msh4f77d2b264371e3p1e17e3jsnd7419f9ef438',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + search, options)
      .then(response => {
        if (!response.ok) {
          document.getElementById("mt").innerHTML = "Error";
          document.getElementById("mh").innerHTML = "Error";
          document.getElementById("mc").innerHTML = "Error";
          document.getElementById("mwd").innerHTML = "Error";
          document.getElementById("mws").innerHTML = "Error";
          document.getElementById("mwdi").innerHTML = "Error";
          document.getElementById("mlu").innerHTML = "Error";
          console.log(response);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(response => {
        if (response.ok) {
          const name = response.location.name;
          const temp = response.current.temp_c;
          const wind_deg = response.current.wind_degree;
          const wind_dir = response.current.wind_dir;
          const wind_speed = response.current.wind_kph;
          const humidity = response.current.humidity;
          const lupdate = response.current.last_updated;
          const climate = response.current.condition.text;
          console.log(response);

          document.getElementById("mt").innerHTML = temp + "°C";
          document.getElementById("mh").innerHTML = humidity;
          document.getElementById("mc").innerHTML = climate;
          document.getElementById("mwd").innerHTML = wind_deg;
          document.getElementById("mws").innerHTML = wind_speed + " km/h";
          document.getElementById("mwdi").innerHTML = wind_dir;
          document.getElementById("mlu").innerHTML = lupdate;
        }
      })
      .catch(err => {
        // Handle errors here by displaying an alert
        console.error(err);
        alert("Error: " + err.message);
      });

    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
  }
}*/
async function myFunction() {
  var search = document.getElementById("search").value;
  if (search === '') {
    alert("Missing");
    return; // Return early to prevent further execution
  }

  document.getElementById("exampleModalLabel").innerHTML = search;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e4818b9112msh4f77d2b264371e3p1e17e3jsnd7419f9ef438',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + search, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const name = data.location.name;
    const temp = data.current.temp_c;
    const wind_deg = data.current.wind_degree;
    const wind_dir = data.current.wind_dir;
    const wind_speed = data.current.wind_kph;
    const humidity = data.current.humidity;
    const lupdate = data.current.last_updated;
    const climate = data.current.condition.text;

    document.getElementById("mt").innerHTML = temp + "°C";
    document.getElementById("mh").innerHTML = humidity;
    document.getElementById("mc").innerHTML = climate;
    document.getElementById("mwd").innerHTML = wind_deg;
    document.getElementById("mws").innerHTML = wind_speed + " km/h";
    document.getElementById("mwdi").innerHTML = wind_dir;
    document.getElementById("mlu").innerHTML = lupdate;
  } catch (err) {
    // Handle errors here by displaying an alert
    console.error(err);
    alert("Error: " + err.message);
  }

  var myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
}




document.getElementById("myButton").addEventListener("click", function () {
  var v = myFunction(); // Call the function
});



function fetchWeather(place) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e4818b9112msh4f77d2b264371e3p1e17e3jsnd7419f9ef438',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + place, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      const name = response.location.name;
      const temp = response.current.temp_c;
      const wind_deg = response.current.wind_degree;
      const wind_dir = response.current.wind_dir;
      const wind_speed = response.current.wind_kph;
      const humidity = response.current.humidity;
      const lupdate = response.current.last_updated;
      console.log(lupdate)
      const climate = response.current.condition.text.toLowerCase();
      //console.log(conditionText);
      if (response) {
        const tableBody = document.getElementById("tableBody");
        //name
        const row = document.createElement("tr");
        const celln = document.createElement("td");
        celln.textContent = name + "      ";
        row.appendChild(celln);
        row.appendChild(celln)

        if (climate.includes('sunny')) {
          const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svgElement.setAttribute("width", "16");
          svgElement.setAttribute("height", "16");
          svgElement.setAttribute("fill", "orange");
          svgElement.setAttribute("class", "bi bi-brightness-high-fill");
          svgElement.setAttribute("viewBox", "0 0 16 16");

          // Create the <path> element for the SVG
          const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
          pathElement.setAttribute("d", "M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z");
          // Append the path to the SVG element
          svgElement.appendChild(pathElement);
          // Append the SVG element to the table cell
          celln.appendChild(svgElement);
          // Append the table cell to the table row
          row.appendChild(celln);
        }
        else if (climate.includes('rainy') || climate.includes('rain')) {
          // Create an SVG element
          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.setAttribute("width", "16");
          svg.setAttribute("height", "16");
          svg.setAttribute("fill", "blue");
          svg.setAttribute("class", "bi bi-cloud-lightning-rain");
          svg.setAttribute("viewBox", "0 0 16 16");

          // Add the path to the SVG element
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("d", "M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.500 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z");
          // Append the path to the SVG element
          svg.appendChild(path);
          // Append the SVG element to the table cell
          celln.appendChild(svg);
          // Append the table cell to the table row
          row.appendChild(celln);

        }
        else if (climate.includes('cloudy')) {
          // Create an svg element
          const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          svgElement.setAttribute("width", "16");
          svgElement.setAttribute("height", "16");
          svgElement.setAttribute("fill", "blue");
          svgElement.setAttribute("class", "bi bi-clouds-fill");
          svgElement.setAttribute("viewBox", "0 0 16 16");

          // Create and set the path elements
          const pathElement1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
          pathElement1.setAttribute("d", "M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z");
          const pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
          pathElement2.setAttribute("d", "M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769");

          // Append the path elements to the svg element
          svgElement.appendChild(pathElement1);
          svgElement.appendChild(pathElement2);
          celln.appendChild(svgElement);
          // Append the table cell to the table row
          row.appendChild(celln);



        }
        else {
          // Create an svg element
          const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          svgElement.setAttribute("width", "20");
          svgElement.setAttribute("height", "18");
          svgElement.setAttribute("fill", "orange");
          svgElement.setAttribute("class", "bi bi-cloud-sun");
          svgElement.setAttribute("viewBox", "0 0 16 16");

          // Create and set the path element
          const pathElement1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
          pathElement1.setAttribute("d", "M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z");
          const pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
          pathElement2.setAttribute("d", "M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z");

          // Append the path elements to the svg element
          svgElement.appendChild(pathElement1);
          svgElement.appendChild(pathElement2);
          celln.appendChild(svgElement);
          // Append the table cell to the table row
          row.appendChild(celln);

        }



        //temp
        const cellt = document.createElement("td");
        cellt.textContent = temp + "°C";
        row.appendChild(cellt)

        //humidity
        const cellh = document.createElement("td");
        cellh.textContent = humidity;
        row.appendChild(cellh)

        //climate
        const cellc = document.createElement("td");
        cellc.textContent = climate;
        row.appendChild(cellc)

        //degree
        const celld = document.createElement("td");
        celld.textContent = wind_deg + "°";
        row.appendChild(celld)

        //speed
        const cells = document.createElement("td");
        cells.textContent = wind_speed + "km/h";
        row.appendChild(cells)

        //direction
        const celldi = document.createElement("td");
        celldi.textContent = wind_dir;
        row.appendChild(celldi)

        //update
        const cellu = document.createElement("td");
        cellu.textContent = lupdate;
        row.appendChild(cellu)
        tableBody.appendChild(row);
      }

    })
    .catch(err => console.error(err));
}

//calling state function
window.onload = states;

//state data print
function states() {
  const stateCapitals = [
    "Andhra Pradesh",  // Amaravati
    "Gujarat",        // Gandhinagar
    "Haryana",        // Chandigarh
    "Himachal Pradesh", // Shimla
    "Jharkhand",      // Ranchi
    "Karnataka",      // Bengaluru
    "Madhya Pradesh", // Bhopal
    "Maharashtra",    // Mumbai
    "Jaipur",        // Rajasthan
    "Hyderabad",     // TelanganaS
    "Lucknow",       // Uttar Pradesh
  ];
  //const tableBody = document.getElementById("tableBody");
  for (i = 0; i < 12; i++) {
    var stc = stateCapitals[i];
    fetchWeather(stc);
  }
  //tableBody.appendChild(row);
}
function Country() {
  const popularCountries = [
    "China",
    "India",
    "United States",
    "Indonesia",
    "Pakistan",
    "Brazil",
    "Nigeria",
    "Bangladesh",
    "Russia",
    "Mexico",
  ];
  //const tableBody = document.getElementById("tableBody");
  //tableBody.innerHTML='';
  for (i = 0; i < 10; i++) {
    var coun_cap = popularCountries[i];
    fetchWeather(coun_cap);
  }
}





