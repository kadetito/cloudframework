<?php header('Content-type: application/json');
require('../config/conexion.php');
require ('../classes/ClaseContacts.php');

$id_usuario = $_REQUEST['id'];


            $resulRB1 = ClaseContacts::consultaListadoContactos($id_usuario);
            $bucle_RB1 = $resulRB1[0];
            $contadorRB1 = count($bucle_RB1);
            $arrayRB1 = [];

            foreach($bucle_RB1 as $itemRB1):   
            if($contadorRB1!=''){
                $arrayRB1[]= array(
                    "id" => $itemRB1['id'],
                    "id_usuario" => $itemRB1['id_usuario'],
                    "id_contacto" => $itemRB1['id_contacto'],
                    "firstname"    => $itemRB1['firstname'],
                    "lastname"    => $itemRB1['lastname'],   
                    "email"    => $itemRB1['email'],
                    "telefono"    => $itemRB1['telefono'],
                    "address"    => $itemRB1['address'],
                
                    );
            }
            endforeach;
            $arrayRB1JSON = json_encode($arrayRB1);
            echo $arrayRB1JSON;


?>