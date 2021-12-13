<?php
// usaremos cadenas UTF-8 hasta el final
mb_internal_encoding('UTF-8');
// generaremos cadenas UTF-8
mb_http_output('UTF-8');


/**
 * Personas
 * id_persona 
 * nombres 
 * email 
 * password 
 * imagen 
 * id_rol 
 * telefono 
 * direccion 
 * registrado
 *
 */
class ClasePersonas {
   

    private $id;
    
    const TABLA = 'cloud_usuarios'; 

        public function geTid_persona(){
            return $this->id;
        }
        public function geTnombres(){
            return $this->firstname;
        }

        public function geTlastname(){
            return $this->lastname;
        }
        public function geTusername(){
            return $this->username;
        }

        public function geTemail(){
            return $this->email;
        }
        public function geTbirthday(){
            return $this->birthday;
        }

        public function geTpassword(){
            return $this->password;
        }
       
        public function geTid_rol(){
            return $this->role;
        }
        

   
    public function __construct($birthday,$email,$firstname,$lastname,$password,$role,$username,$id=null)
    {
     
        $this->role  = $role;
        $this->password  = $password; 
        $this->birthday  = $birthday;
        $this->email  = $email;
        $this->username  = $username;
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
            (firstname,lastname,username,email,birthday,password,role) 
            VALUES 
            (:firstname,:lastname,:username,:email,:birthday,:password,:role)');
            $consulta->bindParam(':firstname',  $this->firstname);
            $consulta->bindParam(':lastname',  $this->lastname);
            $consulta->bindParam(':username',  $this->username);
            $consulta->bindParam(':email',  $this->email);
            $consulta->bindParam(':birthday',  $this->birthday);
            $consulta->bindParam(':password', $this->password);
            $consulta->bindParam(':role', $this->role);
      
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
                $registro['birthday'],
                $registro['email'],
                $registro['firstname'],
                $registro['lastname'],
                $registro['password'],
                $registro['role'],
                $registro['username'],      
                $id
               );

               echo $id;
        } else {
            return false;
        }
    }


    public static function updateRegistro($birthday,$email,$firstname,$lastname,$password,$role,$username,$id){

        $conexion = new Conexion();
        $conexion->exec("SET NAMES 'utf8'");
        
        $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET
        birthday  = :birthday,
        email  = :email,
        firstname  = :firstname,
        lastname  = :lastname,
        password  = :password,
        role = :role,     
        username = :username
                       WHERE id = :id');
        $consulta->bindParam(':birthday', $birthday);
        $consulta->bindParam(':email', $email);
        $consulta->bindParam(':firstname', $firstname);
        $consulta->bindParam(':lastname', $lastname);
        $consulta->bindParam(':password', $password);
        $consulta->bindParam(':role', $role);
        $consulta->bindParam(':username', $username);
        $consulta->bindParam(':id', $id);
        $consulta->execute();
        $conexion = null; //cierro conexion

    }







    
}
