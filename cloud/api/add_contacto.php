<?php
header('Content-type:application/json');
require('../config/conexion.php');
require('../classes/ClaseMatchContacts.php');


$form_data=json_decode(file_get_contents("php://input"),true);



   
    $id_usuario=$form_data['id_usuario'];
    $id_contacto=$form_data['id_contacto'];
  


$ClaseMatchContacts=new ClaseMatchContacts($id_contacto,$id_usuario);
$ClaseMatchContacts->creaRegistro();


$data= array(
    "id_usuario" => $id_usuario ,
    "id_contacto" => $id_contacto,
    
    );

   $arrayTareasJSON = json_encode($data);
    echo $arrayTareasJSON;