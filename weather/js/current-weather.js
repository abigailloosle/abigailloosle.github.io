// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url : "http://api.wunderground.com/api/11c33fe5e1c8a83a/geolookup/conditions/q/" + lat + "," + long + ".json",
        dataType : "jsonp",
        success : function(data) {
            var location_c = data['location']['city'];
            var location_s = data['location']['state'];
            var temp_f = data['current_observation']['temp_f'];
            var overview = data['current_observation']['weather'];
            var blow = data['current_observation']['wind_mph'];
//            var imgrep = data['current-observation']['icon_url'];

            console.log("Current weather in "+location+" is "+temp_f);

            $("#city-name").html( location_c + ', ' + location_s );

            let round = Math.round(temp_f);
            $("#cur-temp").html(round + '&deg;F');

//            $("icon").html(imgrep);

            $("#outlook").html('<b>' + overview + '</b>');

            $("#w-info").html('<b>Wind: </b>' + blow + 'mph');

            $("#cover").fadeOut(250);
        }
    });
  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
