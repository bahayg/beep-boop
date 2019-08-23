$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#user-input").val());
    var numbers = [...Array(userInput).keys()];
    var output = numbers + "," + userInput

        //console.log(output);

    var two = output.includes("2");
    for (var i = 0; i<=output.length; i++) {
      if two
        alert (boop);
      }
    }


    // var output = [];
    //      for (let i=0; i<=userInput; i+=1) {
    //        output += userInput;
    //output.push(i);
    //return output;

    //var numbersEnd = numbers.includes(userInput,end)
    //console.log(numbers);

    // if (isNaN(userInput)) {
    //   alert("That is not a number!");
    // }
    //         else if (input = )
    // if(text.includes("3")) reply ()
//.includes(userInput, end)
    // var userInput = parseInt($("input#user-input").val());
    // var numbers = Array.from(Array(userInput)).keys());

  //}
  });
 });


 //     var output = [];
 //     for (let i=0; i<=userInput; i+=1) {
 //     //for (let i of math.range(0, userInput)){
 //         output.push(i);
 //         console.log(output);
 //         //return output;
 // }


//    //function range(start=0, end=userInput, step=1) {
//   //    var myArray = [];
//   //    for (i = 0; i <= userInput; i += 1) {
//   //      myArray.push(i);
//   //    }
//   //    return myArray;
//   // //};
//   //  console.log(range(4, 12));
// }


//

// function printNumbers(number) {
//   var output = "";
//   for( var i=0; i<userInput; i++ ){
//     alert( i );
//   });
