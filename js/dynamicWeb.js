$(document).ready(function(){

    // Seconda
    var $about = $("#about-content");
    var $contact = $("#contact-content");
    var $project = $("#project-content");
    var $corkpad = $("#corkpad-content");
    var $404 = $("#project-content");
    

    // About  
    $("#about-content-btn").click(function() {

        $corkpad.removeClass("show-content");
        $corkpad.addClass("hidden-content");

        $project.removeClass("show-content");
        $project.addClass("hidden-content");

        $contact.removeClass("show-content");
        $contact.addClass("hidden-content");

        $about.addClass("show-content");

    }); 

    // Contact   
    $("#contact-content-btn").click(function() {

        $corkpad.removeClass("show-content");
        $corkpad.addClass("hidden-content");

        $project.removeClass("show-content");
        $project.addClass("hidden-content");

        $about.removeClass("show-content");
        $about.addClass("hide-content");
        
        $contact.addClass("show-content").animation("slide");

        

    }); 

    // Projects 
    $("#project-content-btn").click(function() {

        $corkpad.removeClass("show-content");
        $corkpad.addClass("hidden-content");

        $contact.removeClass("show-content");
        $contact.addClass("hidden-content");

        $about.removeClass("show-content");
        $about.addClass("hide-content");

        $project.addClass("show-content");

    }); 

    // Project / CorkPad  
    $("#corkpad-content-btn").click(function() {
        $project.removeClass("show-content");
        $project.addClass("hidden-content");

        $about.removeClass("show-content");
        $about.addClass("hide-content");

        $contact.removeClass("show-content");
        $contact.addClass("hidden-content");

        $corkpad.addClass("show-content");

    }); 

    // Project / CorkPad / Return 
    $("#project-content-return-btn").click(function() {
        $corkpad.removeClass("show-content");
        $corkpad.addClass("hidden-content");

        $about.removeClass("show-content");
        $about.addClass("hide-content");

        $contact.removeClass("show-content");
        $contact.addClass("hidden-content");

        $project.addClass("show-content");

    }); 
    

    // 404  
    $("#404-content-btn").click(function() {

        $contact.removeClass("show-content");
        $contact.addClass("hidden-content");

        $about.removeClass("show-content");
        $about.addClass("hide-content");

        $404.addClass("show-content");

    }); 


});

