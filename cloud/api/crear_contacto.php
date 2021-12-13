<?php
header('Content-type:application/json');
require('../config/conexion.php');
require('../classes/ClaseContacts.php');


$form_data=json_decode(file_get_contents("php://input"),true);

    $firstname=$form_data['firstname'];
    $lastname=$form_data['lastname'];  
    $email=$form_data['email'];
    $telefono=$form_data['telefono'];
    $address=$form_data['address'];
  

$ClaseContacts=new ClaseContacts($address,$telefono,$email,$lastname,$firstname);
$ClaseContacts->creaRegistro();


