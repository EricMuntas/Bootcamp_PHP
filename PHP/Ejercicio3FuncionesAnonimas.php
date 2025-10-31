
<?php
$descuento = 0.2;
$precio = 100;

$calcular = function ($precioTotal) use ($descuento) {
   $obtenerPrecioFinal = $descuento * $precioTotal;
   return $obtenerPrecioFinal;
};

$precioFinal = $calcular($precio);
echo "El descuento de $precio es de $precioFinal";

// **👉🏻🧠 Ejer3 -  Función anónima con** `use`

// Define una variable externa `$descuento` con valor `0.2` y crea una función anónima que calcule el precio final de un producto después de aplicar el descuento. La función debe recibir el precio original y usar la variable `$descuento` a través de `use`.

// **Requisitos:**

// - Usar `use` para acceder a la variable `$descuento`.
// - La función anónima debe calcular el precio final aplicando el descuento.