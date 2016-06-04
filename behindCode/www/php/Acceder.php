<?php
require 'connector.php';
// TOMAMOS NUESTRO JSON RECIBIDO DESDE LA PETICION DE ANGULAR JS Y LO LEEMOS

$JSON       = file_get_contents("php://input");
$request    = json_decode($JSON);
$usuario    = $request->user; 
$contrasena = $request->pass;

consultarLogin($usuario,$contrasena);

function consultarLogin($usuario,$contrasena){
    $sql ="SELECT * FROM users WHERE Usuario = '$usuario' AND Contrasena = '$contrasena' "; 
    try {
        $db = getConnection();
        $stmt = $db->query($sql);  
        $usuario = $stmt->fetchObject();
        $db = null;
        echo  json_encode($usuario);
    } catch(PDOException $e) {
        echo 'Putos todos';
    }
}
?>