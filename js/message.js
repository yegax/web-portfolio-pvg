$(document).ready(function(){
  
  // Background Color (Darker)    
    var $messageBtn = $("#message-btn");

    // Light Mode    
    $("#message-btn").click(function() {
        $messageBtn.toggleClass("message-button-active");
    });
});
