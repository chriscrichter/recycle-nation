// click through buttons?

// CHANGES DISPLAY WHEN MODALS APPEAR
const changeModal = () => {
  $(".search").css("display", "none");
  $(".slogan").addClass("invisible");
  $(".photo").css("clip-path", "inset(0% 100% 0% 0%)");
  $(".blue-background").css("margin-right", "40%");
  $(".recycle").css("margin-right", "60%");
  $(".nation").css("margin-right", "70%");
  $(".fact").css("margin-right", "33%");
  $(".nav-buttons").css("margin-right", "33%");
}

// SHOW RESULTS
$("#submit").click((event) => {
  const itemToSearch = $("#item-search-input-field").val();
  event.preventDefault();
  changeModal();
  $("#results-modal").removeClass("invisible");
  $("#results-modal").addClass("seen");
  $("#results-modal").css("clip-path", "circle(75%)");
  console.log(itemToSearch)
})

// SEARCH BUTTON
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  //alert("hello world!!");

  var bookSearched = $("#material-search").val().trim();

  $.get("/api/" + bookSearched, function(data) {

    console.log(data);
    renderBooks(data);

  });
});

// MODAL CLOSE ELEMENT
$(".closing-x").click(() => {
$(".information").addClass("invisible");
})

// TWEETS
$(".tweets").click(() => {
$("#tweets-modal").removeClass("invisible");
$("#tweets-modal").addClass("seen");
$(".information").css("clip-path", "circle(75%)");
changeModal();
})

// MESSAGE BOARD
$(".messages").click(() => {
$("#messages-modal").removeClass("invisible");
$("#messages-modal").addClass("seen");
$("#messages-modal").css("clip-path", "circle(75%)");
changeModal();
})

// ADD MESSAGE 
$(".add-message-button").click(() => {
$("#add-messages-modal").removeClass("invisible");
$("#add-messages-modal").addClass("seen");
$("#add-messages-modal").css("clip-path", "circle(75%)");
// $(".modal").addClass("invisible");
changeModal();
})

// SIGNUP BUTTON
$("#signup-button").click(() => {
$("#signup-modal").removeClass("invisible");
$("#signup-modal").addClass("seen");
$("#signup-modal").css("clip-path", "circle(75%)");
changeModal();

})

// LOGIN BUTTON
$(".login").click(() => {
$("#login-modal").removeClass("invisible");
$("#login-modal").addClass("seen");
$("#login-modal").css("clip-path", "circle(75%)");
changeModal();
})


