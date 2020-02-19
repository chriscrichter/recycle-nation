$(document).ready(function() {
  // Getting references to our form and inputs
  var newPost = $("#new-post");

  var loggin = sessionStorage.getItem("login");
  console.log(newPost); 



  newPost.on("click", function(event) {
    // event.preventDefault();
    console.log('clicked new post worked')
    if(loggin){
      console.log('you are loggin in')

      $.get("/cms", function(response){
        // console.log(response)
        // res.redirect("/cms.html");
      })
    }
  })



})

