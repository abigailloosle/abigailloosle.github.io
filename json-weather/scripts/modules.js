// Include modules into the html file
// Pathes may need altered depending on site structure
$(function () {
  $("#page-header").load("/json-weather/modules/header.html");
  $("#page-nav").load("/json-weather/modules/navigation.html");
  $("#footer-content").load("/json-weather/modules/footer.html");
});
