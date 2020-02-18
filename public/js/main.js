// Collectiing val from input field for what item to search in the database
// ajax will go inside that click
$("#submit").click((event) => {
    const itemToSearch = $("#item-search-input-field").val();
    event.preventDefault();
    console.log(itemToSearch)
  })
  
  // click event that hides name-slogan-search
  // and displays modal-container instead
  $("#signup-button").click(() => {
    $(".background").css("filter", "blur(2px)");
    $(".background").css("opacity", "0.9");
    $(".name-slogan-search").removeClass("visible");
    $(".name-slogan-search").addClass("hidden");
    $("#modal-container").removeClass("hidden");
    $("#modal-container").addClass("visible");
    $(".name-slogan").css("display", "none");
    $(".search").css("display", "none");
    $(".slogan").addClass("hidden");
    $("#modal-container").css("clip-path", "circle(75%)");
    $(".photo").css("clip-path", "inset(0% 100% 0% 0%)");
    $(".blue-background").css("margin-right", "40%");
    $(".recycle").css("margin-right", "60%");
    $(".nation").css("margin-right", "70%");
    $(".fact").css("margin-right", "33%");
    $(".nav-buttons").css("margin-right", "33%");
  })
  
  // click on close button to close the modal
  $(".close").click(() => {
    $("#modal-container").addClass("hidden");
  })
  
  // click on signup button in the modal to close 
  // and ajax to add user to databse will go here 
  