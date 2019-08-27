$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#user-input").val());
    var numbers = [...Array(userInput+1).keys()];
    var output = [];

    //console.log(numbers);
    for (var i = 0; i<=userInput; i++) {
      if (numbers[i].toString().includes("3")) {
        output.push("I'm sorry, Dave. I'm afraid I can't do that.");
      } else if (numbers[i].toString().includes("2")) {
        output.push("Boop!");
      } else if (numbers[i].toString().includes("1")) {
        output.push ("Beep!");
      } else {
        output.push (i);}
      }
      //console.log(output);
      $(".result").show();
      $(".output").text(output);
    });
  });
  // // if (isNaN(userInput)) {
  // //   alert(userInput + " is not a number!");
  // // }
