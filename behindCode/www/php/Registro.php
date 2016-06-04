<?php
//header('Access-Control-Allow-Origin: *');
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");  
/*****************************/
/***DESARROLLO HIDROCALIDO****/
/*****************************/
require 'connector.php';
// TOMAMOS NUESTRO JSON RECIBIDO DESDE LA PETICION DE ANGULAR JS Y LO LEEMOS

$JSON       = file_get_contents("php://input");
$request    = json_decode($JSON);
$nombre     = $request->nombre;
$usuario    = $request->usuario; 
$contrasena = $request->contrasena;
$correo     = $request->correo;
$telefono   = $request->telefono;

consultarRegistro($nombre,$usuario,$contrasena,$correo,$telefono);

function consultarRegistro($nombre,$usuario,$contrasena,$correo,$telefono){
    $sql ="INSERT INTO Registro (nombre,usuario,contrasena,correo,telefono)
    VALUES ('$nombre','$usuario','$contrasena','$correo','$telefono'); 
    try {
        $db = getConnection();
        $stmt = $db->query($sql);  
        $db = null;
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}


?>