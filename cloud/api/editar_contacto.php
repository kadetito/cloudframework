<?php
 header('Content-type: application/json');
require('../config/conexion.php');
require('../classes/ClaseContacts.php');


 $form_data = json_decode(file_get_contents("php://input"), true);


    $id        = $form_data['id'];
    $firstname = $form_data['firstname'];
    $lastname  = $form_data['lastname'];
    $email     = $form_data['email'];
    $telefono  = $form_data['telefono'];
    $address  = $form_data['address'];

 

  $ClaseRB4 = ClaseContacts::updateRegistro($address,$telefono,$email,$lastname,$firstname,$id);

  $data= array(
    "id" => $id ,
    "firstname" => $firstname,
    "lastname" => $lastname ,
    "email" => $email    ,
    "telefono" => $telefono ,
    "address" => $address    
    );

   $arrayTareasJSON = json_encode($data);
    echo $arrayTareasJSON;