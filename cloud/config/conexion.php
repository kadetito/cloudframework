<?php 
require "global.php";


  
 class Conexion extends PDO { 

   private $tipo_de_base = 'mysql';
   private $host = DB_HOST;
   private $port = DB_PORT;
   private $bbdd = DB_NAME;
   private $usuario = DB_USERNAME;
   private $contrasena = DB_PASSWORD; 

   public function __construct() {
      try{
      	
         parent::__construct(
            $this->tipo_de_base.':host='.$this->host.';
            :port='.$this->port.';
            dbname='.$this->bbdd, 
            $this->usuario, 
            $this->contrasena);
      
      } catch(PDOException $e){     	
         echo 'Ha surgido un error y no se puede conectar a la base de datos. Detalle: ' . $e->getMessage();
         exit;  
      }
   } 

 } 
 

 
?>
