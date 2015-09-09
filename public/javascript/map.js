function initMap() {
  var myLatLng = {lat: -37.818116, lng: 144.959229};
  var icon = "public/images/ga-pointer.svg";
  var label = 'General Assembly : 12A/45 William Street, Melbourne VIC 3000';
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: {scaledSize : new google.maps.Size(70, 100), url: icon},
    title: 'General Assembly : 12A/45 William Street, Melbourne VIC 3000'
  });
}