<?php
function verificarLogin(string $usuario, string $password)
{
   $usuariosValidos = [
      (object) ['usuario' => 'admin', 'password' => '1234'],
      (object) ['usuario' => 'user1', 'password' => 'abcd'],
      (object) ['usuario' => 'guest', 'password' => 'guest123']
   ];

   for ($i = 0; $i < count($usuariosValidos); $i++) {
      if ($usuario == $usuariosValidos[$i]->usuario && $password == $usuariosValidos[$i]->password) {
      
         echo "Logged";
         return true;
      } 
   }
   echo "Error";
   return false;
}

verificarLogin("user1", "abcd");

?>