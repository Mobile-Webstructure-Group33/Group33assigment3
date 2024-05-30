const flightData=[{airline:"Qatar Airways",from:"New York",to:"Doha",price:"600",stops:"1 Stop",duration:"10 hrs",model:"Airbus A350",capacity:283,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Emirates",from:"Kathmandu",to:"Sydney",price:"650",stops:"Non-stop",duration:"11 hrs",model:"Boeing 777",capacity:396,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Luxury meals"]},{airline:"Delta Airlines",from:"Kathmandu",to:"Sydney",price:"530",stops:"2 Stops",duration:"15 hrs",model:"Boeing 747",capacity:410,classes:["Economy","Business"],features:["Wi-Fi","Onboard meals"]},{airline:"British Airways",from:"London",to:"New York",price:"700",stops:"Non-stop",duration:"8 hrs",model:"Airbus A380",capacity:469,classes:["Economy","Premium Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Singapore Airlines",from:"Kathmandu",to:"Sydney",price:"400",stops:"Non-stop",duration:"7 hrs",model:"Airbus A350",capacity:253,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals","Lounge access"]},{airline:"Lufthansa",from:"Frankfurt",to:"Tokyo",price:"850",stops:"1 Stop",duration:"12 hrs",model:"Boeing 787",capacity:242,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Air France",from:"Paris",to:"Johannesburg",price:"550",stops:"1 Stop",duration:"14 hrs",model:"Airbus A330",capacity:277,classes:["Economy","Business"],features:["In-flight entertainment","Onboard meals"]},{airline:"Cathay Pacific",from:"Hong Kong",to:"San Francisco",price:"750",stops:"Non-stop",duration:"14 hrs",model:"Airbus A350",capacity:280,classes:["Economy","Premium Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Turkish Airlines",from:"Istanbul",to:"Bangkok",price:"450",stops:"Non-stop",duration:"9 hrs",model:"Boeing 777",capacity:349,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"United Airlines",from:"Chicago",to:"London",price:"620",stops:"Non-stop",duration:"8 hrs",model:"Boeing 787",capacity:242,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Qantas",from:"Sydney",to:"Los Angeles",price:"900",stops:"Non-stop",duration:"13 hrs",model:"Airbus A380",capacity:484,classes:["Economy","Premium Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Luxury meals"]},{airline:"KLM",from:"Amsterdam",to:"Cape Town",price:"600",stops:"1 Stop",duration:"11 hrs",model:"Boeing 777",capacity:314,classes:["Economy","Business"],features:["In-flight entertainment","Onboard meals"]},{airline:"American Airlines",from:"Miami",to:"Buenos Aires",price:"650",stops:"Non-stop",duration:"9 hrs",model:"Boeing 777",capacity:304,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Air Canada",from:"Kathmandu",to:"Sydney",price:"900",stops:"1 Stop",duration:"14 hrs",model:"Boeing 787",capacity:298,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Swiss International Air Lines",from:"Zurich",to:"New York",price:"680",stops:"Non-stop",duration:"9 hrs",model:"Airbus A340",capacity:223,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Japan Airlines",from:"Tokyo",to:"Los Angeles",price:"750",stops:"Non-stop",duration:"10 hrs",model:"Boeing 777",capacity:244,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Ethiopian Airlines",from:"Kathmandu",to:"Sydney",price:"700",stops:"1 Stop",duration:"16 hrs",model:"Boeing 787",capacity:270,classes:["Economy","Business"],features:["In-flight entertainment","Onboard meals"]},{airline:"Air India",from:"Delhi",to:"London",price:"500",stops:"Non-stop",duration:"9 hrs",model:"Boeing 777",capacity:342,classes:["Economy","Business"],features:["In-flight entertainment","Onboard meals"]},{airline:"Thai Airways",from:"Bangkok",to:"Frankfurt",price:"750",stops:"Non-stop",duration:"11 hrs",model:"Airbus A380",capacity:507,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Avianca",from:"Bogot\xe1",to:"Madrid",price:"500",stops:"Non-stop",duration:"10 hrs",model:"Boeing 787",capacity:250,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Aeromexico",from:"Mexico City",to:"Paris",price:"800",stops:"1 Stop",duration:"13 hrs",model:"Boeing 787",capacity:274,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Etihad Airways",from:"Abu Dhabi",to:"Sydney",price:"1200",stops:"1 Stop",duration:"15 hrs",model:"Airbus A380",capacity:496,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Luxury meals"]},{airline:"South African Airways",from:"Johannesburg",to:"London",price:"550",stops:"Non-stop",duration:"11 hrs",model:"Airbus A340",capacity:275,classes:["Economy","Business"],features:["In-flight entertainment","Onboard meals"]},{airline:"China Southern Airlines",from:"Guangzhou",to:"Vancouver",price:"850",stops:"1 Stop",duration:"13 hrs",model:"Boeing 787",capacity:309,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Garuda Indonesia",from:"Jakarta",to:"Amsterdam",price:"900",stops:"1 Stop",duration:"15 hrs",model:"Boeing 777",capacity:314,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Qatar Airways",from:"New York",to:"Doha",price:"600",stops:"1 Stop",duration:"10 hrs",model:"Airbus A350",capacity:283,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Emirates",from:"Los Angeles",to:"Dubai",price:"650",stops:"Non-stop",duration:"11 hrs",model:"Boeing 777",capacity:396,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Luxury meals"]},{airline:"Delta Airlines",from:"San Francisco",to:"Paris",price:"530",stops:"2 Stops",duration:"15 hrs",model:"Boeing 747",capacity:410,classes:["Economy","Business"],features:["Wi-Fi","Onboard meals"]},{airline:"Jet Airways",from:"Delhi",to:"London",price:"480",stops:"Non-stop",duration:"9 hrs",model:"Boeing 787",capacity:315,classes:["Economy","Business"],features:["In-flight entertainment","Onboard meals"]},{airline:"Virgin Atlantic",from:"London",to:"New York",price:"680",stops:"Non-stop",duration:"8 hrs",model:"Boeing 787",capacity:264,classes:["Economy","Premium Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Air India",from:"Delhi",to:"Sydney",price:"950",stops:"1 Stop",duration:"15 hrs",model:"Boeing 777",capacity:342,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"British Airways",from:"London",to:"Sydney",price:"1200",stops:"1 Stop",duration:"20 hrs",model:"Airbus A380",capacity:469,classes:["Economy","Premium Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Qantas",from:"Sydney",to:"Kathmandu",price:"800",stops:"1 Stop",duration:"13 hrs",model:"Boeing 787",capacity:242,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Turkish Airlines",from:"Istanbul",to:"Kathmandu",price:"550",stops:"1 Stop",duration:"9 hrs",model:"Airbus A330",capacity:285,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Singapore Airlines",from:"Singapore",to:"Kathmandu",price:"400",stops:"Non-stop",duration:"5 hrs",model:"Airbus A350",capacity:253,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals","Lounge access"]},{airline:"Emirates",from:"Dubai",to:"Sydney",price:"750",stops:"Non-stop",duration:"14 hrs",model:"Boeing 777",capacity:396,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Luxury meals"]},{airline:"Cathay Pacific",from:"Hong Kong",to:"Kathmandu",price:"500",stops:"1 Stop",duration:"6 hrs",model:"Airbus A350",capacity:280,classes:["Economy","Premium Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Air France",from:"Paris",to:"Kathmandu",price:"650",stops:"1 Stop",duration:"10 hrs",model:"Boeing 787",capacity:310,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Delta Airlines",from:"New York",to:"Kathmandu",price:"850",stops:"2 Stops",duration:"20 hrs",model:"Boeing 747",capacity:410,classes:["Economy","Business"],features:["Wi-Fi","Onboard meals"]},{airline:"Lufthansa",from:"Frankfurt",to:"Kathmandu",price:"760",stops:"1 Stop",duration:"12 hrs",model:"Boeing 787",capacity:242,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Swiss International Air Lines",from:"Zurich",to:"Kathmandu",price:"710",stops:"1 Stop",duration:"11 hrs",model:"Airbus A340",capacity:223,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Qatar Airways",from:"Doha",to:"Kathmandu",price:"420",stops:"Non-stop",duration:"4 hrs",model:"Airbus A350",capacity:283,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"American Airlines",from:"Dallas",to:"Kathmandu",price:"1000",stops:"2 Stops",duration:"24 hrs",model:"Boeing 777",capacity:304,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"China Eastern Airlines",from:"Shanghai",to:"Kathmandu",price:"520",stops:"1 Stop",duration:"7 hrs",model:"Boeing 787",capacity:289,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Thai Airways",from:"Bangkok",to:"Kathmandu",price:"350",stops:"Non-stop",duration:"3 hrs",model:"Airbus A350",capacity:507,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Korean Air",from:"Seoul",to:"Kathmandu",price:"650",stops:"1 Stop",duration:"6 hrs",model:"Boeing 777",capacity:272,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Malaysia Airlines",from:"Kuala Lumpur",to:"Kathmandu",price:"400",stops:"Non-stop",duration:"4 hrs",model:"Airbus A330",capacity:277,classes:["Economy","Business"],features:["In-flight entertainment","Wi-Fi","Onboard meals"]},{airline:"Etihad Airways",from:"Abu Dhabi",to:"Kathmandu",price:"450",stops:"Non-stop",duration:"5 hrs",model:"Airbus A380",capacity:496,classes:["Economy","Business","First Class"],features:["In-flight entertainment","Wi-Fi","Luxury meals"]}];
function displayFlights() {
    const fromCity = document.getElementById('departureCity').value;
    const toCity = document.getElementById('arrivalCity').value;
    const resultsArea = document.getElementById('flight-results');
    resultsArea.innerHTML = '';  // Clear previous results

    let filteredFlights = flightData.filter(flight =>
        flight.from.toLowerCase() === fromCity.trim().toLowerCase() &&
        flight.to.toLowerCase() === toCity.trim().toLowerCase()
    );

    // Sort flights by price in ascending order
    filteredFlights.sort((a, b) => a.price - b.price);

    // Find the cheapest flight for highlighting
    const minPrice = filteredFlights.length ? filteredFlights[0].price : 0;

    if (filteredFlights.length > 0) {
        filteredFlights.forEach(flight => {
            const isCheapest = flight.price === minPrice ? 'border-success' : '';
            const cheapestBadge = flight.price === minPrice ? '<span class="badge bg-light text-success">Cheapest</span>' : '';
            // Create a URL for the booking page with flight details as parameters
            const bookingUrl = `booking.html?airline=${encodeURIComponent(flight.airline)}&from=${encodeURIComponent(flight.from)}&to=${encodeURIComponent(flight.to)}&price=${flight.price}&duration=${encodeURIComponent(flight.duration)}&stops=${encodeURIComponent(flight.stops)}&model=${encodeURIComponent(flight.model)}&capacity=${flight.capacity}&classes=${flight.classes}&features=${flight.features}`;
            const flightDetails = `
            <div class="col-md-12">
                <div class="card mb-3 ${isCheapest}">
                    <div class="card-header text-center bg-success text-white">
                        <i class="fas fa-plane-departure" style="font-size:24px;"></i> ${cheapestBadge} ${flight.airline}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">From ${flight.from} to ${flight.to}</h5>
                        <p class="card-text"><strong>Price:</strong> <span class="badge bg-info">$${flight.price}</span></p>
                        <p class="card-text"><strong>Stops:</strong> <span class="badge bg-secondary">${flight.stops}</span></p>
                        <p class="card-text"><strong>Duration:</strong> <span class="badge bg-secondary">${flight.duration}</span></p>
                        <hr>
                        <p class="card-text"><strong>Airplane Model:</strong> ${flight.model}, <strong>Seating Capacity:</strong> ${flight.capacity}</p>
                        <hr>
                        <p class="card-text"><strong>Cabin Classes:</strong></p>
                        ${flight.classes.map(cabinClass => `<span class="badge bg-primary me-1">${cabinClass}</span>`).join('')}
                        <hr>
                        <p class="card-text"><strong>Features:</strong></p>
                        ${flight.features.map(feature => `<span class="badge bg-success me-1">${feature}</span>`).join('')}
                        <div class="d-grid gap-2 mt-3">
                            <a href="${bookingUrl}" class="btn btn-primary btn-sm">Book this flight</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
            resultsArea.innerHTML += flightDetails;
        });
        addComparisonTable(filteredFlights);
    } else {
        resultsArea.innerHTML = `<p>No flights found matching your criteria from ${fromCity} to ${toCity}.</p>`;
    }
}


function addComparisonTable(flights) {
    const tableArea = document.createElement('div');
    tableArea.innerHTML = `
        <h2 class="mt-5">Flight Comparison</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Airline</th>
                    <th>Price</th>
                    <th>Stops</th>
                    <th>Duration</th>
                    <th>Features</th>
                </tr>
            </thead>
            <tbody>
                ${flights.map(flight => `
                    <tr>
                        <td>${flight.airline}</td>
                        <td>$${flight.price}</td>
                        <td>${flight.stops}</td>
                        <td>${flight.duration}</td>
                        <td>${flight.features.join(", ")}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    document.getElementById('flight-results').appendChild(tableArea);
}


