<?php

function validarNombre($nombre)
{
   if (strlen($nombre) < 3) {
      echo "$nombre: Es un nombre demasiado corto.\n";
      return false;
   }

   if (preg_match('~[0-9]+~', $nombre)) {
      echo "$nombre: El nombre no debe contener números.\n";
      return false;
   }

   echo "$nombre: Válido.\n";
   return true;
}

function validarCorreo($correo)
{
   if (filter_var($correo, FILTER_VALIDATE_EMAIL)) {
      echo "$correo: Válido.\n";
      return true;
   } else {

      echo "$correo: El email no es válido\n";
      return false;
   }
}

function validarEdad($edad)
{
   if ($edad > 0 && is_int($edad)) {
      echo "$edad: Válido.\n";
      return true;
   } else {
      echo "$edad: Edad no válida.\n";
      return false;
   }
}

validarNombre("test");
validarNombre("t3st");
validarNombre("te");


validarCorreo("test@gmail.com");
validarCorreo("rj@fn.n");
validarCorreo("a@");


validarEdad(10);
validarEdad(0);
validarEdad(2.69);
validarEdad(-2);

?>