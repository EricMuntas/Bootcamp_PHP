<?php


function convertirACelsius($fahrenheit) {

return round(($fahrenheit - 32) * 5/9);

}

function convertirAFahrenheit($celsius) {

   return round(($celsius * 9/5 ) + 32);

}

function mostrarConversion($grados, $escala) {

   if ($escala == "celsius") {

      echo convertirAFahrenheit($grados) . " °C\n";
   
   }
   if ($escala == "fahrenheit") {
   
      echo convertirACelsius($grados) . " °F\n";
   }

}
mostrarConversion(30, "celsius");
mostrarConversion(30, "fahrenheit");