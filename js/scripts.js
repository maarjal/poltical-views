$(document).ready(function() {
  $("form#politics").submit(function(event) {
    var gender = $("input#gender").val();
    var salary = $("select#salary").val();
    var minimumWage = $("select#minimum-wage").val();
    var food = $("select#food").val();

    var conservative = "Republican Party";
    var liberal = "Democrat Party";
    var moderate = "We don't know";

    if (gender === "") {
      $(".gender-form").addClass("has-error");
      $(".gender-form").append("Please enter gender");
    } else if (salary === "No" && minimumWage === "No") {
      $(".result").text(conservative);
      $("#result").show();
    } else if (food === "Yes" && minimumWage === "Yes") {
      $(".result").text(liberal);
      $("#result").show();
    } else {
      $(".result").text(moderate);
      $("#result").show();
    }
    event.preventDefault();
  });
});
