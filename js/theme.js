$(document).ready(function(){

    // Main Color (Orange/Purple)
    var $mainColor = $("#nav-bg, #footer-bg, #header-content, #section-divider, #project-corkpad-content-header, #project-content-about");
    // Secondary Color (Lighter)
    var $textColor = $("#about-content, #footer-bg #footer-text, #footer-text-hl, #corkpad-content-text, #home-name-text, #home-web-text");
    // Background Color (Darker)    
    var $backgroundColor = $("#body-bg");
    // Background Color (Darker)    
    var $backgroundColorMob = $("#dropdown-bar");
    // Background Color (Darker) 
    var $buttonColor = $("#home-content-btn, #about-content-btn, #light-theme, #contact-content-btn, #project-content-btn");
    // Background Color (Darker)    
    var $iconColor = $("#icon-bg, #resume-dwnld, #dropdown-btn");
        // Background Color (Darker)    
        var $iconText = $("#icon-logo");
        // Background Color (Darker)    
        var $iconBG = $("#icon-bg");
    // Background Color (Darker)    
    var $messageColor = $("#message-btn, #msg-btn");
    // Background Color (Darker)    
    var $backdrop = $("#backdrop-img");
    // Background Color (Darker)    
    var $deskimg = $("#desk-img");
    // Background Color (Darker)    
    var $deskimgLight = $("#desk-img-l");
    // Background Color (Darker)    
    var $backdropMob = $("#backdrop-img-mob");
    // Background Color (Darker)    
    var $backdropMobL = $("#backdrop-img-mob-light");
    // Background Color (Darker)    
    var $buttonsMob = $("#home-content-btn-mob, #about-content-btn-mob, #contact-content-btn-mob, #project-content-btn-mob, #light-theme-mob");
    // Background Color (Darker)    
    var $contactColor = $("#contact-content-header, #contact-content-linkedin, #contact-content-email, #contact-content-phone, #contact-content-git, #camviewer-btn, #yegax-btn, #csscom-btn, #kampa-btn, #osos-btn, #music-btn, #osos2-btn, #corkpad-content-btn, #project-content-header, #project-corkpad-return-btn, #project-corkpad-content-return-btn, #corkpad-livedemo-btn, #corkpad-github-btn");
    // Background Color (Darker)    
    var $galleryButtons = $("#prevbutton, #nextbutton");
    // Background Color (Darker)    
    var $backgroundImage = $("#bg-img-full");
    // Background Color (Darker)    
    var $backgroundImageLight = $("#bg-img-full-light"); 
    // Background Color (Darker)    
    var $separatorLine = $("#home-name-line, #home-name-line-b, #home-name-line-c");
    //sdsd
    var $homeTitle = $("#home-name-text-a, #home-name-text-b, #home-name-text-c");
    
    
   

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
        $iconText.toggleClass("icon-fade-light");
        $iconBG.toggleClass("icon-bg-light-b");

        $separatorLine.toggleClass("separator-line-dark");
        $homeTitle.toggleClass("home-title-dark");

        $deskimg.toggleClass("desk-light");
        $deskimgLight.toggleClass("desk-dark");

        $backgroundImage.toggleClass("bg-opacity-light");
        $backgroundImageLight.toggleClass("bg-opacity-dark");

        $backdropMob.toggleClass("hide-content");
        $backdropMobL.toggleClass("show-content");
        $buttonsMob.toggleClass("gray-main-btn-mob");
        $contactColor.toggleClass("light-content-contact");
        $galleryButtons.toggleClass("gallery-light-buttons");
    });
    
});

