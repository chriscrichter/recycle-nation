
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  //alert("hello world!!");

  var bookSearched = $("#material-search").val().trim();

  $.get("/api/" + bookSearched, function(data) {

    console.log(data);
    renderBooks(data);

  });
});

function renderBooks(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();
    $(".search").css("display", "none");
    $(".slogan").addClass("invisible");
    $(".photo").css("clip-path", "inset(0% 100% 0% 0%)");
    $(".blue-background").css("margin-right", "40%");
    $(".recycle").css("margin-right", "60%");
    $(".nation").css("margin-right", "70%");
    $(".fact").css("margin-right", "33%");
    $(".nav-buttons").css("margin-right", "33%");
    $("#results-modal").removeClass("invisible");
    $("#results-modal").addClass("seen");
    $("#results-modal").css("clip-path", "circle(75%)");

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>")
      div.append("<h5>" + data[i].description + "</h5>");
      div.append("<h6>Description: " + data[i].long_description + "</h6>");
 
      $("#stats").append(div);
      //$(".name-slogan").append(div);

    }

  }
}