// mobile click navbar
$(document).ready(function(){
    $(".menu-ham").click(function(){
        $("#navigation").slideToggle(700);
    });
});

// change height of nav on scroll
$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 50) {
        $('#header-wrapper').stop().animate({height: "50px"},100);
    }
    else {
        $('#header-wrapper').stop().animate({height: "70px"},100);   
    }
});

// cycle through reviews
setInterval(function thing() {

    var test1 = document.getElementById('testimonial1');
    var test2 = document.getElementById('testimonial2');
    
    if(test1['style'].display == 'none') {
        test1['style'].display = 'grid';
        test1['style'].transition = 'opacity 500ms ease-in-out 0s';
        test2['style'].display = 'none';
    } else {
        test1['style'].display = 'none';
        test2['style'].display = 'grid';
        test2['style'].transition = 'opacity 500ms ease-in-out 0s';
    }

}, 10000);