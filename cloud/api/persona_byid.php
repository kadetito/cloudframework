<?php session_start(); header('Content-type: application/json');
require('../config/conexion.php');
require ('../classes/ClasePersonas.php');

$id = $_REQUEST['id'];

        $get_comer = ClasePersonas::consultaDetallePorID($id);

                $id       =$get_comer-> geTid_persona();
                $firstname =$get_comer->geTnombres();
                $lastname  =$get_comer->geTlastname();
                $username  =$get_comer->geTusername();
                $email     =$get_comer->geTemail();
                $birthday  =$get_comer->geTbirthday();
                $password  =$get_comer->geTpassword();
                $role      =$get_comer->geTid_rol();

                $arrayGlobalDatos= array(
                    "id"=>$id,
                    "firstname"=>$firstname,
                    "lastname"=>$lastname,
                    "username"=>$username,
                    "email"=>$email,
                    "birthday"=>$birthday,
                    "password"=>$password,
                    "role"=>$role     
                );

                $arrayTareasJSON = json_encode($arrayGlobalDatos);
                echo $arrayTareasJSON;


?>