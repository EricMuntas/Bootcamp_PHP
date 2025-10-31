
<?php
$numeros = [1, 2, 3, 4, 5];

$esDivisiblePorDos = function ($number) {

   if ($number % 2 == 0) {
      echo "El nº $number es divisible por 2.\n";
   } else {
      echo "El nº $number NO es divisible por 2.\n";
   }
};

array_map($esDivisiblePorDos, $numeros);

// **👉🏻🧠 Ejer2 -  Uso de `array_map` con función anónima para verificar divisibilidad**

// En este ejercicio, vamos a utilizar la función `array_map` junto con una función anónima para comprobar si cada elemento de un array es divisible por 2.

// El array que utilizaremos es el siguiente:

// ```php
//  $numeros = [1, 2, 3, 4, 5];
// ```

// **Requisitos:**

// 1. Usar la función `array_map`.
// 2. La función anónima debe verificar si cada número del array es divisible por 2.
// 3. Imprimir el resultado final indicando si el número es divisible por 2 o no.

// El código imprimirá un array donde, para cada número, se indica si es divisible por 2 o no. Por ejemplo: