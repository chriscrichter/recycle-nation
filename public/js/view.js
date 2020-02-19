
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

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>")
      div.append("<h5>" + data[i].description + "</h5>");
      div.append("<h6>Description: " + data[i].long_description + "</h6>");
 
      $("#stats").append(div);

    }

  }
}