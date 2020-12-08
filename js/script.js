$(window).on("scroll", function() {
    var y = $(window).scrollTop();

    //alert("ola");

    if(y >= $(window).height() / 3) {
        $("#menu").addClass("menu-style");
        $("#menu a").css("color", "#000");
        $("#menu .side-item i").css("color", "#000");
    } else {
        $("#menu").removeClass("menu-style");
        $("#menu a").css("color", "#fff");
        $("#menu .side-item i").css("color", "#fff");
    }
});

// close the menu with the window is bigger than 480px
$(window).on("resize", function() {
    var width = $(window).width();

    if(width > 480) {
        $("#mobile-menu").hide();
    }
});

// thumb buttons click
$("#thumb #contact-button").click(function() {
    window.open("#contato","_self");
});

// open the mobile-menu
$("#menu .side-item").click(function() {
    $("#mobile-menu").show();
}); 

// close the mobile-menu
$("#mobile-menu #close").click(function() {
    $("#mobile-menu").hide();
}); 

$("#mobile-menu li").click(function() {
    $("#mobile-menu").hide();
});
// mobile menu item link
$("#mobile-menu #inicio-item").click(function() {
    window.open("#","_self");
});
$("#mobile-menu #about-item").click(function() {
    window.open("#about","_self");
});
$("#mobile-menu #projects-item").click(function() {
    window.open("#projects","_self");
});
$("#mobile-menu #habilidades-item").click(function() {
    window.open("#habilidades","_self");
});
$("#mobile-menu #contact-item").click(function() {
    window.open("#contato","_self");
});