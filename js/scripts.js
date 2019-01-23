$(document).ready(function() {
$("#form").submit(function(event) {
  var formInput = $("input#form-input").val();
  var toString = formInput.toString();
  var splitFormInput = formInput.split(" ");
  splitFormInput.forEach(function(element) {
  var cloneArray = splitFormInput.slice();
  var reverseArray = cloneArray.reverse();
  alert(reverseArray);
});
});
$("#button").submit(function(event) {
  alert("G")
  fromInput.push($("#from-input").val());
  $("#display").append("<h2>" + $("#from-input").val() + "</h2>");
  event.preventDefault();
});
});
