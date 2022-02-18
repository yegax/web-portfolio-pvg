$(document).ready(function(){

    // Main Color (Orange/Purple)
    var $mainColor = $("#nav-bg, #footer-bg, #header-content, #section-divider");
    // Secondary Color (Lighter)
    var $textColor = $("#about-content, #footer-bg #footer-text, #footer-text-hl");
    // Background Color (Darker)    
    var $backgroundColor = $("#body-bg");
    // Background Color (Darker)    
    var $backgroundColorMob = $("#dropdown-bar");
    // Background Color (Darker) 
    var $buttonColor = $("#about-content-btn, #light-theme, #contact-content-btn, #project-content-btn");
    // Background Color (Darker)    
    var $iconColor = $("#icon-bg, #resume-dwnld, #dropdown-btn");
    // Background Color (Darker)    
    var $messageColor = $("#message-btn");
    // Background Color (Darker)    
    var $backdrop = $("#backdrop-img");
    // Background Color (Darker)    
    var $deskimg = $("#desk-img");
    // Background Color (Darker)    
    var $backdropMob = $("#backdrop-img-mob");
    // Background Color (Darker)    
    var $backdropMobL = $("#backdrop-img-mob-light");
    // Background Color (Darker)    
    var $buttonsMob = $("#about-content-btn-mob, #contact-content-btn-mob, #project-content-btn-mob, #light-theme-mob");
    // Background Color (Darker)    
    var $contactColor = $("#contact-content-header, #contact-content-linkedin, #contact-content-email, #contact-content-phone, #contact-content-git, #camviewer-btn, #yegax-btn, #csscom-btn, #kampa-btn, #osos-btn, #music-btn, #osos2-btn, #corkpad-content-btn, #project-content-header");
  

    // Light Mode    
    $("#light-theme, #light-theme-mob").click(function() {
        $buttonColor.toggleClass("light-text-btn");
        $textColor.toggleClass("light-text-theme");
        $backgroundColor.toggleClass("gray-bg-theme");
        $backgroundColorMob.toggleClass("gray-bg-theme-mob");
        $mainColor.toggleClass("gray-main-theme");
        $iconColor.toggleClass("icon-bg-light");
        $messageColor.toggleClass("message-button-dark");
        $backdrop.toggleClass("backdrop-light");
        $deskimg.toggleClass("desk-light");
        $backdropMob.toggleClass("hide-content");
        $backdropMobL.toggleClass("show-content");
        $buttonsMob.toggleClass("gray-main-btn-mob");
        $contactColor.toggleClass("light-content-contact");
    });
    
});

