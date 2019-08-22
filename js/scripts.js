//frontend
$(document).ready(function() {
  $('.converter').submit(function(event) {
    event.preventDefault();
    number = $("input#numInput").val();
    output = constructAdditively(number);
    $("p#output").text("result =" + output);

  });
});


//backend

var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
var romanValues = [1,5,10,50,100,500,1000];
var romanNumeralString;

function constructAdditively(num){
  console.log("check");
  while (num != 0)
  for(var i =0; i < 10; i++)  {
    for(var j = 6; j >= 0; j--) {
      if (num - romanValues[j] > 0){
        romanNumeralString += roman[j];
        num -= romanValues[j];
      }
    }
  }
  return romanNumeralString;
}
console.log(romanNumeralString);



//   if (romanNumeralString.includes([IVXLCDM]\4)
//   return romanNumeralString;
// }
