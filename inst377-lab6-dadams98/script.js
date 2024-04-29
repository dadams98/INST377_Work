
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }


var latitude1 = getRandomInRange(30, 35, 3);
var longitude1 = getRandomInRange(-90, -100, 3);
var latitude2 = getRandomInRange(30, 35, 3);
var longitude2 = getRandomInRange(-90, -100, 3);
var latitude3 = getRandomInRange(30, 35, 3);
var longitude3 = getRandomInRange(-90, -100, 3);

var marker1 = L.marker([latitude1, longitude1]).addTo(map);
var marker2 = L.marker([latitude2, longitude2]).addTo(map);
var marker3 = L.marker([latitude3, longitude3]).addTo(map);

document.getElementById('marker_1').textContent = 'Marker 1: ' + 'Latitude: ' + latitude1 + '\nLongitude: ' + longitude1;
document.getElementById('marker_2').textContent = 'Marker 2: ' + 'Latitude: ' + latitude2 + '\nLongitude: ' + longitude2;
document.getElementById('marker_3').textContent = 'Marker 3: ' + 'Latitude: ' + latitude3 + '\nLongitude: ' + longitude3;


function getLocalityInfo(latitude, longitude, markerId, localityId) {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
      .then(response => response.json())
      .then(data => {
        document.getElementById(localityId).textContent = 'Locality: ' + data.locality;
      })
      .catch(error => console.error(error));
  }
  
  getLocalityInfo(latitude1, longitude1, 'marker1', 'locality1');
  getLocalityInfo(latitude2, longitude2, 'marker2', 'locality2');
  getLocalityInfo(latitude3, longitude3, 'marker3', 'locality3');