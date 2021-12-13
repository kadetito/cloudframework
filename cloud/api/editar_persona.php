<?php
 header('Content-type: application/json');
require('../config/conexion.php');
require('../classes/ClasePersonas.php');


 $form_data = json_decode(file_get_contents("php://input"), true);




    $id        = $form_data['id'];
    $firstname = $form_data['firstname'];
    $lastname  = $form_data['lastname'];
    $username  = $form_data['username'];
    $email     = $form_data['email'];
    $birthday  = $form_data['birthday'];
    $password  = $form_data['password'];
    $role      = $form_data['role'];
 

  $ClaseRB4 = ClasePersonas::updateRegistro($birthday,$email,$firstname,$lastname,$password,$role,$username,$id);

  $data= array(
    "id" => $id ,
    "firstname" => $firstname,
    "lastname" => $lastname ,
    "username" => $username ,
    "email" => $email    ,
    "birthday" => $birthday ,
    "password" => $password ,
    "role" => $role     
    );



  //$arrayTareasJSON = json_encode($form_data);
   $arrayTareasJSON = json_encode($data);
    echo $arrayTareasJSON;