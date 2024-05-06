function fetchVehicles(){
fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json"

)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}
  fetchVehicles()




  fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json', {
    method: 'POST',
    body: JSON.stringify({ key1: 'value1', key2: 'value2' }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Do something with the response from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch request
    console.log(error);
  });
