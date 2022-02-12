$(document).ready(function(){

    // Main Color (Orange/Purple)
    var $mainColor = $("#file-btn-base, #edit-btn-base");
    // Secondary Color (Lighter)
    var $secondColor = $("#file-btn-base, #edit-btn-base");
    // Background Color (Darker)    
    var $backgroundColor = $("#dark-theme, #settings-dropdown-theme");
    // Text (White/Black)
    var $textColor = $("#dark-theme, #settings-dropdown-theme");


    // Dark Mode    
    $("#dark-theme").click(function() {

        $("#name-form, #email-form, #message-form").removeClass("font-form-light");
        $("#name-form, #email-form, #message-form").addClass("font-form-dark");

        $brightMainBlank.removeClass("bg-gray-main");
        $brightMainBlank.addClass("bg-gray-main-dark-a");


        $brightSecond.addClass("bg-gray-second-dark");

        $brightMain.addClass("bg-gray-main-dark");

        $brightSecond.removeClass("bg-gray-second-bright");

        $brightMain.removeClass("bg-gray-main");
    }); 

    // Light Mode    
    $("#bright-theme").click(function() {

        $("#name-form, #email-form, #message-form").removeClass("font-form-dark");
        $("#name-form, #email-form, #message-form").addClass("font-form-light");

        $brightMainBlank.removeClass("bg-gray-main-dark-a");
        $brightMainBlank.addClass("bg-gray-main");
     

        $brightSecond.removeClass("bg-gray-second-dark");

        $brightMain.removeClass("bg-gray-main-dark");

        $brightSecond.addClass("bg-gray-second-bright");

        $brightMain.addClass("bg-gray-main");
    });
    
});

