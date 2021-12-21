$(document).ready(function(){
  
    $("#dropdown-btn").click(function() {
        $("#dropdown-bar").toggleClass("dropdown-bar-active");
        $("body").toggleClass("toggle-scroll");
        $("#resume-dwnld").toggleClass("resume-hide");
        $("#dropdown-btn").toggleClass("dropdown-btn-active");
    });
});