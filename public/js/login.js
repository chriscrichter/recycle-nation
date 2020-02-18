$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      name: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData)
    if (!userData.name || !userData.password) {
      return;
    }
    console.log(userData.name, userData.password); 
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.name, userData.password);
    emailInput.val("");
    passwordInput.val("");

  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(name, password) {
    $.post("/login", {
      name: name,
      password: password
    })
      .then(function(data) {
        console.log(data); 
        sessionStorage.setItem("login", data);

       // window.location.replace("/");
        // If there's an error, log the error
      })
      .catch(function(err) {
       console.log(err);
      });
  }
});
