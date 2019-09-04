import { converter } from './scripts';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('.converter').submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numInput").val());
    var romanNumeralString = '';
    var output = converter(number, romanNumeralString);

    $("p#output").text("result =" + output);
  });
});
