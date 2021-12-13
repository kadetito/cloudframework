<?php
header('Content-type:application/json');
require('../config/conexion.php');
require('../classes/ClasePersonas.php');


$form_data=json_decode(file_get_contents("php://input"),true);



    $birthday=$form_data['birthday'];
    $email=$form_data['email'];
    $firstname=$form_data['firstname'];
    $lastname=$form_data['lastname'];  
    $password=$form_data['password'];
    $role=$form_data['role'];
    $username=$form_data['username'];
  


$ClasePersonas=new ClasePersonas($birthday,$email,$firstname,$lastname,$password,$role,$username);
$ClasePersonas->creaRegistro();


