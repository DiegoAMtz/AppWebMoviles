<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//Área de conexión a base de datos
function getConnection() {
	$dbhost="localhost";
	$dbuser="root";
	$dbpass="root";
	$dbname="behindcode";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh -> exec("set names utf8");
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo $dbh;
	return $dbh;
}

getConnection();
?>
<!--

<?php
$con = mysqli_connect("localhost", "root", "root", "sakila");
$result = mysqli_query($con,"SELECT * FROM customer where customer_id=1");
$row = mysqli_fetch_array($result);
$id = $row['customer_id'];
$nombre = $row['first_name'];
$paterno= $row['last_name'];
$tienda= $row['store_id'];
$dir= $row['address_id'];
$correo= $row['email'];
$fe_ultima = $row['last_update'];
?>
-->

