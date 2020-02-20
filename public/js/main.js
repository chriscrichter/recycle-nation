// click through buttons?

// CHANGES DISPLAY WHEN MODALS APPEAR
const changeModal = () => {
  $(".search").addClass("invisible");
  $(".slogan").addClass("invisible");
  $(".photo").css("clip-path", "inset(0% 100% 0% 0%)");
  $(".blue-background").css("margin-right", "40%");
  $(".recycle").css("margin-right", "60%");
  $(".nation").css("margin-right", "70%");
  $(".fact").css("margin-right", "33%");
  $(".nav-buttons").css("margin-right", "33%");
}

// SHOW RESULTS
// $("#submit").click((event) => {
//   const itemToSearch = $("#item-search-input-field").val();
//   event.preventDefault();
//   changeModal();
//   $("#results-modal").removeClass("invisible");
//   $("#results-modal").addClass("seen");
//   $("#results-modal").css("clip-path", "circle(75%)");
//   console.log(itemToSearch)
// })

// SHOW RESULTS
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  var materialSearched = $("#material-search").val().trim();

console.log(materialSearched);

  $.get("/api/" + materialSearched, function(data) {

  renderMaterials(data);
  });

});

// MODAL CLOSE ELEMENT
$(".closing-x").click(() => {
$(".information").addClass("invisible");
$(".search").removeClass("invisible");
$(".slogan").removeClass("invisible");
$(".search").addClass("seen");
$(".slogan").addClass("seen");
$(".photo").css("clip-path", "inset(0% 100% 0% 0%)");
$(".blue-background").css("margin-right", "30%");
$(".recycle").css("margin-right", "30%");
$(".nation").css("margin-right", "40%");
$(".fact").css("margin-right", "13%");
})

var viewportSize = window.matchMedia("(min-width: 678px)")
// myFunction(viewportSize) // Call listener function at run time
// viewportSize.addListener(myFunction) // Attach listener function on state changes

const resultsModal = $("#results-modal")
const tweetsModal = $("#tweets-modal")
const messagesModal = $("#messages-modal")
const addMessagesModal = $("#add-messages-modal")
const loginModal = $("#login-modal")
const signupModal = $("#signup-modal")

const changeModalDesktop = () => {
  $(".search").css("display", "none");
  $(".slogan").addClass("invisible");
  $(".photo").css("clip-path", "inset(0% 100% 0% 0%)");
  $(".blue-background").css("margin-right", "40%");
  $(".recycle").css("margin-right", "60%");
  $(".nation").css("margin-right", "70%");
  $(".fact").css("margin-right", "33%");
  $(".nav-buttons").css("margin-right", "33%");
}

const changeModalMobile = () => {
  $(".search").css("display", "none");
  $(".slogan").addClass("invisible");
  $(".photo").css("clip-path", "inset(0% 100% 0% 0%)");
  $(".blue-background").css("margin-right", "20%");
  $(".recycle").css("margin-right", "40%");
  $(".nation").css("margin-right", "40%");
  $(".fact").css("margin-right", "13%");
  $(".nav-buttons").css("margin-right", "13%");
}

// SIGNUP BUTTON
$("#signup-button").click(() => {
  $("#signup-modal").removeClass("invisible");
  $("#signup-modal").addClass("seen");
  $(".information").css("clip-path", "circle(75%)");
  changeModal();
  if (viewportSize.matches) {
    changeModalDesktop();
  } else {
    changeModalMobile();
  }
  resultsModal.addClass("invisible");
  tweetsModal.addClass("invisible");
  messagesModal.addClass("invisible");
  addMessagesModal.addClass("invisible");
  loginModal.addClass("invisible");
  })
  
  // LOGIN BUTTON
  $(".login").click(() => {
  $("#login-modal").removeClass("invisible");
  $("#login-modal").addClass("seen");
  $("#login-modal").css("clip-path", "circle(75%)");
  resultsModal.addClass("invisible");
  tweetsModal.addClass("invisible");
  messagesModal.addClass("invisible");
  addMessagesModal.addClass("invisible");
  signupModal.addClass("invisible");
  })

// // SIGNUP BUTTON
// $("#signup-button").click(() => {
// $("#signup-modal").removeClass("invisible");
// $("#signup-modal").addClass("seen");
// $("#signup-modal").css("clip-path", "circle(75%)");
// changeModal();

// })

// // LOGIN BUTTON
// $(".login").click(() => {
//   $("#login-modal").removeClass("invisible");
//   $("#login-modal").addClass("seen");
//   $("#login-modal").css("clip-path", "circle(75%)");
//   changeModal();
  
// })

// // TWEETS
// $(".tweets").click(() => {
//   $("#tweets-modal").removeClass("invisible");
//   $("#tweets-modal").addClass("seen");
//   $(".information").css("clip-path", "circle(75%)");
//   changeModal();
//   })
  
//   // MESSAGE BOARD
//   $(".messages").click(() => {
//   $("#messages-modal").removeClass("invisible");
//   $("#messages-modal").addClass("seen");
//   $("#messages-modal").css("clip-path", "circle(75%)");
//   changeModal();
//   })
  
//   // ADD MESSAGE 
//   $(".add-message-button").click(() => {
//   $("#add-messages-modal").removeClass("invisible");
//   $("#add-messages-modal").addClass("seen");
//   $("#add-messages-modal").css("clip-path", "circle(75%)");
//   // $(".modal").addClass("invisible");
//   changeModal();
//   })












// $("#modal-signup-button").click(() =>{
//   event.preventDefault();
//   let newUser = {
//     name: $("#email-input").val(),
//     password: $("#password-input").val()
//   }
//   console.log(newUser)
  
//   $.ajax("api/signup",{
//     type: "POST",
//     data: newUser 
//   }).then(() => {
//     console.log("created new user")
//     // location.reload();
//   })
// })

// SIGNUP BUTTON
