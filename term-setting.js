$(document).ready(function() {
  var dummyTerm = $(".term")
    .first()
    .clone();

  $(document).on("click", ".close", function() {
    $(this)
      .parent()
      .remove();
  });

  $(document).on("click", ".add", function() {
    var newTerm = dummyTerm.clone();
    $(this).before(newTerm);
  });
});
