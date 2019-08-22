//frontend
$(document).ready(function() {
  $('.converter').submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numInput").val());
    var romanNumeralString = '';
    var output = constructAdditively(number, romanNumeralString);

    $("p#output").text("result =" + output);
  });
});


//backend



function constructAdditively(number, romanNumeralString){
  console.log("check");
  var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  var romanValues = [1,5,10,50,100,500,1000];

  for (var i = 0; i < 7; i++) {
    if (number === romanValues[i]) {
      console.log(roman[i]);
      romanNumeralString += roman[i];
    }
  }
  return romanNumeralString;
}



  // return romanNumeralString;
  // for(var i =0; i < 10; i++)  {
  //   for(var j = 6; j >= 0; j--) {
  //     if (num - romanValues[j] > 0){
  //       string += roman[j];
  //       num -= romanValues[j];
  //     }
  //   }
  // }







//
//
//   if (romanNumeralString.includes([IVXLCDM]\4)
//   return romanNumeralString;
// }
