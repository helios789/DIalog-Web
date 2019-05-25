$(document).ready(function() {
  var dummyEmployee = $(".employee")
    .first()
    .clone();

  $(document).on("click", ".close", function() {
    $(this)
      .parent()
      .remove();
  });

  $(document).on("click", ".add", function() {
    var newEmployee = dummyEmployee.clone();
    $(this)
      .prev()
      .append(newEmployee);
  });
});
