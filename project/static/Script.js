
const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('nav a').forEach(link => {    
   if(link.href.includes(`${activePage}`)){
     link.classList.add('active');
   }
 });

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};


 
var x = document.getElementById("demo");
var y=document.getElementById("dis")

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
   
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  const dist = distance(position.coords.latitude,position.coords.longitude, 32.819472, 35.591233 );
  y.innerHTML="distance is:"+dist;


}

function distance(lat1, lon1, lat2, lon2) {
   const R = 6371; // Radius of the earth in km
   const dLat = deg2rad(lat2 - lat1);
   const dLon = deg2rad(lon2 - lon1);
   const a =
     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
     Math.cos(deg2rad(lat1)) *
       Math.cos(deg2rad(lat2)) *
       Math.sin(dLon / 2) *
       Math.sin(dLon / 2);
   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   const d = R * c; // Distance in km
   return d;
 }
 
 function deg2rad(deg) {
   return deg * (Math.PI / 180);
 }

 

 const getNearestSiteBtn = document.getElementById('');
getNearestSiteBtn.addEventListener('click', () => {
  // Replace :lat and :long with actual latitude and longitude values
  const url = '/sites/nearest?lat=:lat&long=:long';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Handle the data returned by the server
    })
    .catch(error => {
      console.error(error);
    });
});
 





 


/*
function calculateDistance(lat1, lon1, lat2, lon2) {
   const R = 6371; // Radius of the earth in km
   const dLat = deg2rad(lat2 - lat1);
   const dLon = deg2rad(lon2 - lon1);
   const a =
     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
     Math.cos(deg2rad(lat1)) *
       Math.cos(deg2rad(lat2)) *
       Math.sin(dLon / 2) *
       Math.sin(dLon / 2);
   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   const d = R * c; // Distance in km
   return d;
 }
 
 function deg2rad(deg) {
   return deg * (Math.PI / 180);
 }

function showNearestSite() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition((position) => {
       const lat = position.coords.latitude;
       const long = position.coords.longitude;
 
       fetch('/sites') // replace with your API endpoint for getting the sites data
         .then((response) => response.json())
         .then((data) => {
           const site = data.reduce((nearestSite, currentSite) => {
             const distance = calculateDistance(
               currentSite.No,
               currentSite.East,
               lat,
               long
             );
             if (!nearestSite || distance < nearestSite.Dis) {
               return {
                 Name: currentSite.Name,
                 price: currentSite.price,
                 HikingLev: currentSite.HikingLev,
                 Dis: distance,
               };
             } else {
               return nearestSite;
             }
           }, null);
           // display the nearest site data on the page
           var outputElementName = document.getElementById('nearestSiteName');
           outputElementName.innerHTML = (nearestSite.Name);
           var outputElementPrice = document.getElementById('nearestSitePrice');
           outputElementPrice.innerHTML = (nearestSite.price);
           var outputElementHikingLev = document.getElementById('nearestSiteLev');
           outputElementHikingLev.innerHTML = (nearestSite.HikingLev);
           var outputElementDis = document.getElementById('nearestSiteDis');
           outputElementDis.innerHTML =  (nearestSite.Dis);
         })
         .catch((error) => console.error(error));
     });
   } else {
     console.log('Geolocation is not supported by this browser.');
   }
 }

 */
 

 







