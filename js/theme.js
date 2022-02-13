$(document).ready(function(){

    // Main Color (Orange/Purple)
    var $mainColor = $("#nav-bg, #footer-bg, #header-content");
    // Secondary Color (Lighter)
    var $textColor = $("#about-content, #footer-bg");
    // Background Color (Darker)    
    var $backgroundColor = $("#body-bg");
    // Background Color (Darker) 
    var $buttonColor = $("#about-content-btn, #light-theme, #contact-content-btn, #project-content-btn");
    // Background Color (Darker)    
    var $iconColor = $("#icon-bg, #resume-dwnld");
    // Background Color (Darker)    
    var $messageColor = $("#message-btn");


    // Light Mode    
    $("#light-theme").click(function() {
        $buttonColor.toggleClass("light-text-btn");
        $textColor.toggleClass("light-text-theme");
        $backgroundColor.toggleClass("gray-bg-theme");
        $mainColor.toggleClass("gray-main-theme");
        $iconColor.toggleClass("icon-bg-light");
        $messageColor.toggleClass("message-button-dark");

    });
    
});

