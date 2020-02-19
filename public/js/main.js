// click through buttons?

// SHOW RESULTS
$("#submit").click((event) => {
  const itemToSearch = $("#item-search-input-field").val();
  event.preventDefault();
  changeModal();
  $("#results-modal").removeClass("hidden");
  $("#results-modal").addClass("visible");
  $("#results-modal").css("clip-path", "circle(75%)");
  console.log(itemToSearch)
})

const changeModal = () => {
$(".search").css("display", "none");
$(".slogan").addClass("hidden");
$(".photo").css("clip-path", "inset(0% 100% 0% 0%)");
$(".blue-background").css("margin-right", "40%");
$(".recycle").css("margin-right", "60%");
$(".nation").css("margin-right", "70%");
$(".fact").css("margin-right", "33%");
$(".nav-buttons").css("margin-right", "33%");
}

// MODAL CLOSE ELEMENT
$(".close").click(() => {
$(".modal").addClass("hidden");
})

// TWEETS
$(".tweets").click(() => {
$("#tweets-modal").removeClass("hidden");
$("#tweets-modal").addClass("visible");
$("#tweets-modal").css("clip-path", "circle(75%)");
changeModal();
})

// MESSAGE BOARD
$(".messages").click(() => {
$("#messages-modal").removeClass("hidden");
$("#messages-modal").addClass("visible");
$("#messages-modal").css("clip-path", "circle(75%)");
changeModal();
})

// ADD MESSAGE 
$(".add-message-button").click(() => {
$("#add-messages-modal").removeClass("hidden");
$("#add-messages-modal").addClass("visible");
$("#add-messages-modal").css("clip-path", "circle(75%)");
// $(".modal").addClass("hidden");
changeModal();
})

// SIGNUP BUTTON
$("#signup-button").click(() => {
$("#signup-modal").removeClass("hidden");
$("#signup-modal").addClass("visible");
$("#signup-modal").css("clip-path", "circle(75%)");
changeModal();
})

// SIGNUP BUTTON
$(".login").click(() => {
$("#login-modal").removeClass("hidden");
$("#login-modal").addClass("visible");
$("#login-modal").css("clip-path", "circle(75%)");
changeModal();
})
