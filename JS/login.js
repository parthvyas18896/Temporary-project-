$(function () {
  $("#linkCreateAccount").click(function (e) {
    // location.reload();
    //$("#login").css("display", "none");
    //$("#createAccount").css("display", "inline");
    window.location.href = "signup.html";
    e.preventDefault();
  });
});
$(function () {
  $("#linklogin").click(function (e) {
    //$("#error").hide();
    // $("#login").css("display","inline");
    // $("#createAccount").css("display", "none");
    window.location.href = "login.html";
    e.preventDefault();
  });
});
$(function () {
  $("#forgotpassword").click(function (e) {
    $("#createAccount").css("display", "none");
    $("#login").css("display", "none");
    $("#resetpassword").css("display", "inline");
    e.preventDefault();
  });
});

$("#createAccount").submit(function (e) {
  var errorMessage = "";
  e.preventDefault();

  function checkuserName(username) {
    var usernamerequirement = new RegExp(/^[a-zA-Z,.'-]+$/);
    return usernamerequirement.test(username);
  }

  if (!checkuserName($("#signupUsername").val())) {
    $("#error").show();
    errorMessage += "Please enter your name";

    $("#signupUsername").css("border-bottom", "2px solid #FF0000");
  } else {
    $("#signupUsername").css("border-bottom", "2px solid #00FF00");
  }

  function checkEmailAddress(email) {
    var emailrequirement = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return emailrequirement.test(email);
  }

  if (!checkEmailAddress($("#email").val())) {
    $("#error").show();
    $("#error").css({ opacity: 0.5 });
    $("#email").css("border-bottom", "2px solid #FF0000");
    errorMessage += "<br> Please enter a valid email address";
  } else {
    $("#email").css("border-bottom", "2px solid #00FF00");
  }

  
  function checkpassword(password)
  {
    var passwordrequirement = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
    return passwordrequirement.test(password);
  }
  if(!checkpassword($("password").val())){
   $("#error").show();
   $("#error").css({ opacity: 0.5 });
   $("#password").css("border-bottom", "2px solid #FF0000");
   errorMessage += "<br> Please enter at least 6 character in your password \n<br> password must have atleast one symbol <br> password must have at least one upper and lower word ";
   result = false;
  }
  else{
   $("#password").css("border-bottom", "2px solid #00FF00");
  }

  // if (
  //   $("#password").val() != $("#password2").val() ||
  //   ($("#password").val().length < 8) & ($("#password2").val().length < 8) ||
  //   $("#password").val() == "" ||
  //   $("#password2").val() == "" )
  //   {
  //   $("#error").show();
  //   $("#error").css({ opacity: 0.5 });
  //   $("#password").css("border-bottom", "2px solid #FF0000");
  //   $("#password2").css("border-bottom", "2px solid #FF0000");
  //   errorMessage += "<br> Space would be not allow in your password";
  // } 
  // if ($("password").val().seach(/[a-z]/i) < 0)
  // {
  //   $("#error").show();
  //   $("#error").css({ opacity: 0.5 });
  //   $("#password").css("border-bottom", "2px solid #FF0000");
  //   $("#password2").css("border-bottom", "2px solid #FF0000");
  //   errorMessage += "<br> your password must have at least one letter,<br>";
  // }
  // if ($("password").val().seach(/[0-9]/)< 0)
  // {
  //   $("#error").show();
  //   $("#error").css({ opacity: 0.5 });
  //   $("#password").css("border-bottom", "2px solid #FF0000");
  //   $("#password2").css("border-bottom", "2px solid #FF0000");
  //   errorMessage +="<br> your password must have at least one digit,<br>";
  // }
  
  // else {
  //   $("#password").css("border-bottom", "2px solid #00FF00");
  //   $("#password2").css("border-bottom", "2px solid #00FF00");
  // }

  if (errorMessage == "") {
    $("#error").hide();
    $("#createAccount").fadeOut("slow", function () {
      window.location.href = "index.html";
      //$("#login").fadeIn("slow");
    });
  } else {
    $("#error").html(errorMessage);
  }
});

$("#resetpassword").submit(function (e) {
  var errorMessage = "";
  var result = true;
  e.preventDefault();

  function checkuserName(username) {
    var usernamerequirement = new RegExp(/^[a-zA-Z,.'-]+$/);
    return usernamerequirement.test(username);
  }

  if (!checkuserName($("#resetusername").val())) {
    $("#error").show();
    $("#error").css({ opacity: 0.5 });
    errorMessage += "Please enter your name";
    $("#resetusername").css("border-bottom", "2px solid #FF0000");
    result = false;
  } else {
    $("#resetusername").css("border-bottom", "2px solid #00FF00");
  }

  function checkEmailAddress(email) {
    var emailrequirement = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return emailrequirement.test(email);
  }

  if (!checkEmailAddress($("#resetemail").val())) {
    $("#error").show();
    $("#error").css({ opacity: 0.5 });
    $("#resetemail").css("border-bottom", "2px solid #FF0000");
    errorMessage += "<br> Please enter a valid email address";
    result = false;
  } else {
    $("#resetemail").css("border-bottom", "2px solid #00FF00");
  }


   function checkpassword(password)
   {
     var passwordrequirement = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
     return passwordrequirement.test(password);
   }
   if(!checkpassword($("rpassword").val())){
    $("#error").show();
    $("#error").css({ opacity: 0.5 });
    $("#rpassword").css("border-bottom", "2px solid #FF0000");
    errorMessage += "<br> Please enter a valid email address";
    result = false;
   }
   else{
    $("#rpassword").css("border-bottom", "2px solid #00FF00");
   }
  // if (
  //   $("#rpassword").val() != $("#rpassword2").val() ||
  //   ($("#rpassword").val().length < 8) & ($("#rpassword2").val().length < 8) ||
  //   $("#rpassword").val() == "" ||
  //   $("#rpassword2").val() == "" ||
  //   $("#rpassword").val().includes("@") !== true
  // ) {
  //   $("#error").show();
  //   $("#error").css({ opacity: 0.5 });
  //   $("#rpassword").css("border-bottom", "2px solid #FF0000");
  //   $("#rpassword2").css("border-bottom", "2px solid #FF0000");
  //   errorMessage +=
  //     "<br> Password  must match with confirm password,<br> Password must have more than 8 character <br> Password must have @ somewhere";
  //   result = false;
  // } else {
  //   $("#rpassword").css("border-bottom", "2px solid #00FF00");
  //   $("#rpassword2").css("border-bottom", "2px solid #00FF00");
  // }

  if (errorMessage == "") {
    $("#error").hide();
    $("#login").fadeOut("slow", function () {
      $("#resetpassword").fadeIn("slow");
    });
  } else {
    $("#error").html(errorMessage);
    result = false;
  }
  if (result) {
    // $("#resetpassword").css("display", "none");
    // $("#createAccount").css("display", "none");
    // $("#login").css("display", "inline");
    window.location.href = "login.html";

    //  $('#resetpassword').each(function(){
    // // 	  this.reset();
    // });
  }
});
