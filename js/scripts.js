$(document).ready(function() {
  $("#grocery-list form").submit(function(event) {

    $("#grocery-list").hide();

    var blanks = [ "item1", "item2", "item3", "item4", "item5", "item6" ];

    var userInput = [];

    blanks.forEach(function(blank) {
      userInput.push( $("#" + blank).val().toUpperCase() );
      userInput.sort();
    });

    $(".listItem1").text(userInput[0]);
    $(".listItem2").text(userInput[1]);
    $(".listItem3").text(userInput[2]);
    $(".listItem4").text(userInput[3]);
    $(".listItem5").text(userInput[4]);
    $(".listItem6").text(userInput[5]);

    console.log(userInput);

    event.preventDefault();
  });
});
