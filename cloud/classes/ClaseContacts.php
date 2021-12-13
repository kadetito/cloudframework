<?php
// usaremos cadenas UTF-8 hasta el final
mb_internal_encoding('UTF-8');
// generaremos cadenas UTF-8
mb_http_output('UTF-8');


/**
 * Contacts
 * id
 * firstname 
 * lastname
 * email 
 * telefono 
 * address 
 *
 */
class ClaseContacts {
   

    private $id;
    
    const TABLA = 'cloud_contacts'; 
    const TABLA2 = 'cloud_match_contacts'; 
    


        public function geTid_persona(){
            return $this->id;
        }
        public function geTnombres(){
            return $this->firstname;
        }

        public function geTlastname(){
            return $this->lastname;
        }


        public function geTemail(){
            return $this->email;
        }
        public function geTtelefono(){
            return $this->telefono;
        }

        public function geTaddress(){
            return $this->address;
        }
       


   
    public function __construct($address,$telefono,$email,$lastname,$firstname,$id=null)
    {

        $this->address  = $address;
        $this->telefono  = $telefono;
        $this->email  = $email;
        $this->lastname  = $lastname;
        $this->firstname  = $firstname;
        $this->id  = $id;

    }
    
    /**
     * CONSULTA 
     * devuelve los registros
     */
    public static function consultaListado(){
        $conexion = new conexion();
        $conexion->exec("SET NAMES 'utf8'");
        $consulta = $conexion->prepare("
                    SELECT *
                    FROM " . self::TABLA . " a
                    ORDER BY a.id DESC");
        $consulta->execute();
        $registros = $consulta->fetchAll(PDO::FETCH_ASSOC);
        $total = $conexion->query("SELECT FOUND_ROWS() as total")->fetch()['total'];
        return [ $registros ];
    }



    public function creaRegistro(){
        try {           
            $conexion = new Conexion();
            $conexion->exec("SET NAMES 'utf8'");
            $consulta = $conexion->prepare('INSERT INTO '.self::TABLA.' 
            (address,telefono,email,lastname,firstname) 
            VALUES 
            (:address,:telefono,:email,:lastname,:firstname)');
            $consulta->bindParam(':address',  $this->address);
            $consulta->bindParam(':telefono',  $this->telefono);
            $consulta->bindParam(':email',  $this->email);
            $consulta->bindParam(':lastname',  $this->lastname);
            $consulta->bindParam(':firstname',  $this->firstname);
     
            $consulta->execute();
            $this->id= $conexion->lastInsertId();


        } catch (PDOException $e) {
            echo "DataBase Error: The user could not be added.<br>".$e->getMessage();
        } catch (Exception $e) {
            echo "General Error: The user could not be added.<br>".$e->getMessage();
        }
      }





      

      public static function consultaDetallePorID($id){
        $conexion = new conexion();
        $conexion->exec("SET NAMES 'utf8'");
        $consulta = $conexion->prepare("SELECT * FROM " . self::TABLA . " WHERE id = :id ");
        $consulta->execute(array(':id' => $id));
        $registro = $consulta->fetch();
        if($registro){
            return new self(
                $registro['address'],
                $registro['telefono'],
                $registro['email'],
                $registro['lastname'],
                $registro['firstname'],   
                $id
               );

        } else {
            return false;
        }
    }






    
    public static function updateRegistro($address,$telefono,$email,$lastname,$firstname,$id){

        $conexion = new Conexion();
        $conexion->exec("SET NAMES 'utf8'");
        
        $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET
        address  = :address,
        telefono  = :telefono,
        email  = :email,
        lastname  = :lastname,
        firstname  = :firstname
                       WHERE id = :id');
        $consulta->bindParam(':address', $address);
        $consulta->bindParam(':telefono', $telefono);
        $consulta->bindParam(':email', $email);
        $consulta->bindParam(':lastname', $lastname);
        $consulta->bindParam(':firstname', $firstname);
        $consulta->bindParam(':id', $id);
        $consulta->execute();
        $conexion = null; //cierro conexion

    }




    public static function consultaListadoContactos($id_usuario){
        $conexion = new conexion();
        $conexion->exec("SET NAMES 'utf8'");
        $consulta = $conexion->prepare("
                    SELECT *
                    FROM " . self::TABLA2 . " a 
                    INNER JOIN " . self::TABLA . " b  ON  b.id = a.id_contacto
                    
                    WHERE a.id_usuario = :id_usuario
                    ");
        $consulta->bindParam(':id_usuario', $id_usuario);
        $consulta->execute();
        $registros = $consulta->fetchAll(PDO::FETCH_ASSOC);
        $total = $conexion->query("SELECT FOUND_ROWS() as total")->fetch()['total'];
        return [ $registros ];
    }




    
}
