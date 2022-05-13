$(document).ready(function(){
  
  // Background Color (Darker)    
    var $messageBtn = $("#msg-btn");
  
    $("#message-btn").click(function() {
      $messageBtn.toggleClass("message-button-active");

    });

    $("#message-btn-close").click(function() {
      $messageBtn.toggleClass("message-button-active");
  });
});
