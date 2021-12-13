<?php session_start(); header('Content-type: application/json');
require('../config/conexion.php');
require ('../classes/ClaseContacts.php');

$id = $_REQUEST['id'];

        $get_comer = ClaseContacts::consultaDetallePorID($id);

                $id       =$get_comer-> geTid_persona();
                $firstname =$get_comer->geTnombres();
                $lastname  =$get_comer->geTlastname();
                $email     =$get_comer->geTemail();
                $telefono  =$get_comer->geTtelefono();
                $address  =$get_comer->geTaddress();

                $arrayGlobalDatos= array(
                    "id"=>$id,
                    "firstname"=>$firstname,
                    "lastname"=>$lastname,
                    "email"=>$email,
                    "telefono"=>$telefono,
                    "address"=>$address    
                );

                $arrayTareasJSON = json_encode($arrayGlobalDatos);
                echo $arrayTareasJSON;


?>