<?php
$nombre=$_POST["nombre"];
$telefono=$_POST["telefono"];
$email =$_POST["email"];
$contexto =$_POST["contexto"];
$mensaje=$_POST["mensaje"];

$conten_mench= 'Este mensaje fue enviado por '. $nombre. ".\r\n";
$conten_mench.= 'Su email es: '. $email. ".\r\n";
$conten_mench.= 'Su telefono es: '. $telefono. ".\r\n";
$conten_mench.= 'Su contexto es: '. $contexto. ".\r\n";
$conten_mench .= 'Mensaje: '. $mensaje. ".\r\n";
$conten_mench .= 'Enviado el: '. date ('d/m/Y', time());

$destinario= "maricelsovran@gmail.com";
$asunto= "Porfolio personal";

$headers = "From: $email \r\n";"
$headers .= "Reply-To: $email \r\n";
?>