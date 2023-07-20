$(document).ready(function(){
   $('.arrow-icon').click(function(){
    var email = $('#email').val();
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
        alert("Email is valid");
      } else {
        $("input").addClass("error-style");
        $(".error-icon").show();
        $(".error-message").show();

      }
    });
})