$(document).ready(function(){

    // Seconda
    var $about = $("#about-content");
    var $contact = $("#contact-content");
    var $project = $("#project-content");
    var $corkpad = $("#corkpad-content");
    var $404 = $("#project-content");
    

    // About  
    $("#about-content-btn, #about-content-btn-mob").click(function() {

        // Delay Pointer Events for Nav Bar
        $("#no-click").addClass("show-content").delay(560).queue(function(next){
            $(this).removeClass("show-content");
            next();
        });

        $("#content-content-btn").removeClass("active-btn");
        $("#project-content-btn").removeClass("active-btn");

        $("#contact-content-btn").addClass("glass-nav-btn");
        $("#project-content-btn").addClass("glass-nav-btn");

        $("#about-content-btn").removeClass("glass-nav-btn");
        $("#about-content-btn").addClass("active-btn");

        $corkpad.removeClass("show-content");
        $corkpad.addClass("hidden-content");

        $project.removeClass("show-content");
        $project.addClass("hidden-content");

        $contact.removeClass("show-content");
        $contact.addClass("hidden-content");

        $about.addClass("show-content").effect("slide", { direction: "up" }, 550);

        $("#dropdown-bar").removeClass("dropdown-bar-active");
    }); 

    // Contact   
    $("#contact-content-btn, #contact-content-btn-mob").click(function() {

        $("#no-click").addClass("show-content").delay(560).queue(function(next){
            $(this).removeClass("show-content");
            next();
        });

        $("#about-content-btn").removeClass("active-btn");
        $("#project-content-btn").removeClass("active-btn");

        $("#about-content-btn").addClass("glass-nav-btn");
        $("#project-content-btn").addClass("glass-nav-btn");

        $("#contact-content-btn").removeClass("glass-nav-btn");
        $("#contact-content-btn").addClass("active-btn");

        $corkpad.removeClass("show-content");
        $corkpad.addClass("hidden-content");

        $project.removeClass("show-content");
        $project.addClass("hidden-content");

        $about.removeClass("show-content");
        $about.addClass("hide-content");
        
        $contact.addClass("show-content").effect("slide", { direction: "up" }, 550);

        $("#dropdown-bar").removeClass("dropdown-bar-active");
    }); 

    // Projects 
    $("#project-content-btn, #project-content-btn-mob").click(function() {

        $("#no-click").addClass("show-content").delay(560).queue(function(next){
            $(this).removeClass("show-content");
            next();
        });

        $("#about-content-btn").removeClass("active-btn");
        $("#contact-content-btn").removeClass("active-btn");
        $("#project-content-btn").addClass("active-btn");


        $("#about-content-btn").removeClass("active-btn");
        $("#contact-content-btn").removeClass("active-btn");

        $("#about-content-btn").addClass("glass-nav-btn");
        $("#contact-content-btn").addClass("glass-nav-btn");

        $("#project-content-btn").removeClass("glass-nav-btn");
        $("#project-content-btn").addClass("active-btn");

        $corkpad.removeClass("show-content");
        $corkpad.addClass("hidden-content");

        $contact.removeClass("show-content");
        $contact.addClass("hidden-content");

        $about.removeClass("show-content");
        $about.addClass("hide-content");

        $project.addClass("show-content").effect("slide", { direction: "up" }, 550);

        $("#dropdown-bar").removeClass("dropdown-bar-active");
    }); 

    // Project / CorkPad  
    $("#corkpad-content-btn").click(function() {

        $("#no-click").addClass("show-content").delay(560).queue(function(next){
            $(this).removeClass("show-content");
            next();
        });

        $project.removeClass("show-content");
        $project.addClass("hidden-content");

        $about.removeClass("show-content");
        $about.addClass("hide-content");

        $contact.removeClass("show-content");
        $contact.addClass("hidden-content");

        $corkpad.addClass("show-content").effect("slide", { direction: "up" }, 550);
    }); 

    // Project / CorkPad / Return 
    $("#project-corkpad-content-return-btn").click(function() {

        $("#no-click").addClass("show-content").delay(560).queue(function(next){
            $(this).removeClass("show-content");
            next();
        });

        $corkpad.removeClass("show-content");
        $corkpad.addClass("hidden-content");

        $about.removeClass("show-content");
        $about.addClass("hide-content");

        $contact.removeClass("show-content");
        $contact.addClass("hidden-content");

        $project.addClass("show-content").effect("slide", { direction: "up" }, 550);

    }); 
    

    // 404  
    $("#404-content-btn").click(function() {

        $("#no-click").addClass("show-content").delay(560).queue(function(next){
            $(this).removeClass("show-content");
            next();
        });

        $contact.removeClass("show-content");
        $contact.addClass("hidden-content");

        $about.removeClass("show-content");
        $about.addClass("hide-content");

        $404.addClass("show-content").effect("slide", { direction: "up" }, 550);

    }); 


});

