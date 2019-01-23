$(document).ready(function() {
$("#form").submit(function(event) {
  var formInput = $("input#form");
  var toString = formInput.toString();
  var splitFormInput = formInput.split(" ");
  alert(typeof splitFormInput);
  splitFormInput.forEach(function(element) {
  var cloneArray = splitFormInput.slice(0);
  var reverseArray = cloneArray.reverse(0);
});
$("#button").submit(function(event) {
  alert("G")
  fromInput.push($("#from-input").val());
  $("#display").append("<h2>" + $("#from-input").val() + "</h2>");
  event.preventDefault();
});
});
});
