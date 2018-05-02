<?php
/**
 * Created by PhpStorm.
 * User: nenis
 * Date: 14/4/2018
 * Time: 19:20
 */

    $destino = "correodeluisnqn.@gmail.com";
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $asunto = $_POST['subject'];
    $mensaje = $_POST['message'];

    $contenido = "Saludos." . "\nSoy " . $nombre . " <" . $email. ">. \n" . $mensaje;
    mail($destino,$asunto,$contenido);

    $json = json_encode($contenido);
    header('Content-Type: application/json',false,200);
    echo $json;