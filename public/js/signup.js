$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  // signUpForm.on("submit", function(event) {
  //   event.preventDefault();
   
  // });

  $("#modal-signup-button").click(() => {
    $("#modal-container").addClass("hidden");
    // const newUserEmail = $(".signup-email-field").val();
    // console.log(newUserEmail)
    var userData = {
      name: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData.name)
    console.log(userData.password)
    if (!userData.name || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.name, userData.password);
    emailInput.val("");
    passwordInput.val("");
  })

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(name, password) {


    $.post("/api/signup", {
      name: name,
      password: password
    })
      .then(function(data) {
        // window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
