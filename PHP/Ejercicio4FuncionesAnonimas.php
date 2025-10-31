
<?php
$numero = 8;

$alCuadrado = function ($num) {
    return pow($num, 2);
};

$aplicarOperacion = function ($numero, $alCuadrado) {
    return $alCuadrado($numero);
};

echo $aplicarOperacion($numero, $alCuadrado);


// **👉🏻🧠 Ejer4 -  Función anónima como** `callback`

// Crea una función llamada `aplicarOperacion` que reciba dos parámetros: un número y una función (callback). Esta función debe aplicar la operación (función) al número y devolver el resultado. Luego, pasa una función anónima que calcule el cuadrado de un número como parámetro.

// **Requisitos:**

// - Usar una función anónima como `callback`.
// - La función `aplicarOperacion` debe devolver el resultado de aplicar la operación.