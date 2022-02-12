$(document).ready(function(){

    // Main Color (Orange/Purple)
    var $mainColor = $("#nav-bg, #edit-btn-base");
    // Secondary Color (Lighter)
    var $secondColor = $("");
    // Background Color (Darker)    
    var $backgroundColor = $("#body-bg");
    // Text (White/Black)
    var $textColor = $("");


    // Dark Mode    
    $("#dark-theme").click(function() {

        $("#name-form, #email-form, #message-form").removeClass("font-form-light");
        $("#name-form, #email-form, #message-form").addClass("font-form-dark");

        $brightMainBlank.removeClass("bg-gray-main");

        $backgroundColor.addClass("dark-bg-theme");

    }); 

    // Light Mode    
    $("#light-theme").click(function() {

        $("#name-form, #email-form, #message-form").removeClass("font-form-dark");
        $("#name-form, #email-form, #message-form").addClass("font-form-light");


        $backgroundColor.toggleClass("gray-bg-theme");
        $mainColor.toggleClass("gray-main-theme");

    });
    
});

