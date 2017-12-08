//Navigation bar
$(function(){
    console.log("success");
    $.getJSON("/acme/js/acme.json", function(data){
              let output = '<ul class="navbar">';
              $.each(data, function (key, val){
                output += '<li>';
                output += '<a href="#" title= Go to the ' + val.name + 'page">' + val.name + '</a>';
                output += '</li>';
        });
    output += '</ul>';
    $("#navigation").html(output);
    });
});

// *** Nav bar Click --> create Pages
$("#navigation").on("click", "a", function (evt) {
    evt.preventDefault();
// collect name, find in data a matching name and get based on that
    let linkclick = $(this).text();
    console.log(linkclick);

    if (linkclick === 'Home'){
        document.getElementById("product-content").style.display = "none";
        document.getElementById("home-content").style.display = "block";
    }
    else {
        $.ajax({
            url: "/acme/js/acme.json"
            , dataType: "json"
            , success: function (data) {
                console.log(data);

                document.getElementById("home-content").style.display = "none";
                document.getElementById("product-content").style.display = "block";


                var prod_title = data[linkclick].name;
                var prod_name = data[linkclick].fullname;
                var pic = data[linkclick].path;
                var tell_more = data[linkclick].description;
                var make = data[linkclick].manufacturer;
                var cost = data[linkclick].price;
                var rate = data[linkclick].reviews;

                console.log('Product: ' + prod_name);


                $("title").html(prod_title + ' | ACME');
                $("#product").text(prod_name);
                $("#product-img").html('<img src='+ pic +'>');
                $("#descrip").text(tell_more);
                $("#manufac").html('<b>Made by: ' + make + '</b>');
                $("#price").html('<b>Price: $' + cost + '</b>');
                $("#review").html('<b>Reviews: ' + make + '/5 stars</b>');

            }
        });
    }
});
