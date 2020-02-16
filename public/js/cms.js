// Constructing a newPost object to hand to the database


$(document).ready(function() {

  var newPost = {
    title: titleInput
      .val()
      .trim(),
    body: bodyInput
      .val()
      .trim(),
    AuthorId: authorSelect.val()
  };
  // Submits a new post and brings user to blog page upon completion
  function submitPost(post) {
    $.post("/api/posts", post, function() {
      window.location.href = "/blog";
    });
  }
}
