<?php
$palabras = ['holaMundo', 'qué tal', 'siSoy', 'yes Sir', 'Hello World', 'kebab-case'];


function validarVariable($palabras)
{

   foreach ($palabras as $word) {
      if (((int)$word[0])) {
         echo "Contienen número en el primer dígito: $word\n";
         $word = substr($word, 1);
         echo "$word\n";
      }

         $snakeCaseSugerencia = "";
         $camelCaseSugerencia = "";
         $siguienteMayuscula = false;


         for ($i = 0; $i < strlen($word); $i++) {

            if ($word[$i] == " " || $word[$i] == "-") {

               $snakeCaseSugerencia .= '_';
               $siguienteMayuscula = true;
            } else {

               $snakeCaseSugerencia .= $word[$i];

               if ($siguienteMayuscula == true) {
                  $camelCaseSugerencia .= strtoupper($word[$i]);
                  $siguienteMayuscula = false;
               } else {
                  $camelCaseSugerencia .= $word[$i];
               }
            }
         }
         if($snakeCaseSugerencia == $camelCaseSugerencia) {
            echo "-------------------------\n";
            echo "$word es un nombre de variable válida.\n";
         } else {
            echo "-------------------------\n";
         echo "$word no es un nombre de variale válido, aquí unas sugeréncias:\nSnake: $snakeCaseSugerencia\nCamel: $camelCaseSugerencia\n";
         }
      }
   
}

validarVariable($palabras);



// **👉🏻🧠 Ejer4 -  Validación de la variable**

// Este ejercicio consiste en crear una función en PHP que permita validar si un nombre de variable es válido según las reglas de nomenclatura de PHP. Además, deberá generar sugerencias para convertir el nombre de la variable a dos estilos populares de escritura: camelCase y snake_case.

// **Requisitos:**

// **Validación de la variable:**

// La función debe verificar si el nombre de la variable proporcionada es válido para PHP. Para que un nombre de variable sea válido:

// Debe comenzar con una letra (mayúscula o minúscula) o un guion bajo _.

// Puede contener letras (mayúsculas o minúsculas), números y guiones bajos.

// No debe contener caracteres especiales ni espacios en blanco.

// **Generación de sugerencias de formato:**

// La función debe generar dos sugerencias de formato para cualquier nombre de variable no válido:

// **Sugerencia en camelCase:** El nombre de la variable debe transformarse a formato camelCase, donde la primera palabra comienza en minúsculas y las siguientes en mayúsculas, sin espacios ni guiones bajos.

// **Sugerencia en snake_case:** El nombre debe transformarse a formato snake_case, donde todas las palabras están en minúsculas y separadas por guiones bajos (_).

// **Manejo de tildes y caracteres especiales:**

// La función debe ser capaz de limpiar los caracteres con tildes en las letras y otros caracteres especiales, reemplazándolos por su equivalente sin tildes. Además, debe manejar correctamente los espacios en blanco.

// **Verificación de formato camelCase:**

// La función debe identificar si el nombre de la variable ya está en formato camelCase. Si es así, no debe modificarlo.

// **Entrada de texto:**

// El programa debe procesar un conjunto de palabras que incluyen ejemplos con diferentes tipos de formateo, como holaMundo, qué tal, siSoy, yes Sir, y Hello World.

// **Entrada:**

// El programa recibirá un conjunto de palabras como array de ejemplo:

// ```php
// $palabras = ['holaMundo', 'qué tal', 'siSoy', 'yes Sir', 'Hello World', 'kebab-case'];
// ```

// **Salida:**

// Para cada palabra en el array, el programa deberá mostrar si la variable es válida según las reglas de PHP, junto con las sugerencias en camelCase y snake_case.

// Este ejercicio permite practicar la validación de variables en PHP y la conversión entre distintos formatos de nombres de variables, como camelCase y snake_case, respetando las reglas de nomenclatura.
