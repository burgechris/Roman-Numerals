//frontend
$(document).ready(function() {
  $('.converter').submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numInput").val());
    var romanNumeralString = '';
    var output = converter(number, romanNumeralString);

    $("p#output").text("result =" + output);
  });
});


//backend


function converter(number, romanNumeralString) {
  if(number > 3999){
    romanNumeralString = "input must be less than 4,000";
    alert(romanNumeralString)
  }
  while(number > 0){
   if(Math.floor(number / 1000) >= 1){
     romanNumeralString += 'M';
     number -= 1000;
   } else if (Math.floor(number / 900) >= 1) {
     romanNumeralString += 'CM';
     number -= 900;
   } else if (Math.floor(number / 500) >= 1) {
     romanNumeralString += 'D';
     number -= 500;
   } else if (Math.floor(number / 400) >= 1) {
     romanNumeralString += 'CD';
     number -= 400;
   } else if (Math.floor(number / 100) >= 1) {
     romanNumeralString += 'C';
     number -= 100;
   } else if (Math.floor(number / 90) >= 1) {
     romanNumeralString += 'XC';
     number -= 90;
   } else if (Math.floor(number / 50) >= 1) {
     romanNumeralString += 'L';
     number -= 50;
   } else if (Math.floor(number / 40) >= 1) {
     romanNumeralString += 'XL';
     number -= 40;
   } else if (Math.floor(number / 10) >= 1) {
     romanNumeralString += 'X';
     number -= 10;
   } else if (Math.floor(number / 9) >= 1) {
     romanNumeralString += 'IX';
     number -= 9;
   } else if (Math.floor(number / 5) >= 1) {
     romanNumeralString += 'V';
     number -= 5;
   } else if (Math.floor(number / 4) >= 1) {
     romanNumeralString += 'IV';
     number -= 4;
   } else if (Math.floor(number / 1) >= 1) {
     romanNumeralString += 'I';
     number -= 1;
   }
 }
 return romanNumeralString;
}
