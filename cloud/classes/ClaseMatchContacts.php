<?php
// usaremos cadenas UTF-8 hasta el final
mb_internal_encoding('UTF-8');
// generaremos cadenas UTF-8
mb_http_output('UTF-8');


/**
 * ClaseMatchContacts

 *
 */
class ClaseMatchContacts {
   

    private $id;
    
    const TABLA = 'cloud_match_contacts'; 
    


        public function geTid(){
            return $this->id;
        }
        public function geTidUsuario(){
            return $this->id_usuario;
        }

        public function geTidContacto(){
            return $this->id_contacto;
        }




   
    public function __construct($userB,$userA,$id_contacto,$id_usuario,$id=null)
    {
        $this->userB  = $userB;
        $this->userA  = $userA;
        $this->id_contacto  = $id_contacto;
        $this->id_usuario  = $id_usuario;
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
            (id_usuario,id_contacto) 
            VALUES 
            (:id_usuario,:id_contacto)');
            $consulta->bindParam(':id_usuario',  $this->id_usuario);
            $consulta->bindParam(':id_contacto',  $this->id_contacto);

            $consulta->execute();
            $this->id= $conexion->lastInsertId();


        } catch (PDOException $e) {
            echo "DataBase Error: The user could not be added.<br>".$e->getMessage();
        } catch (Exception $e) {
            echo "General Error: The user could not be added.<br>".$e->getMessage();
        }
      }




    public static function deleteRegistro($id_contacto,$id_usuario){
        $conexion = new Conexion();
        $conexion->exec("SET NAMES 'utf8'");
        $consulta = $conexion->prepare('DELETE FROM ' . self::TABLA .'
        WHERE 
        id_usuario  = :id_usuario AND
        id_contacto  = :id_contacto
                       ');
                        $consulta->bindParam(':id_usuario',  $id_usuario);
                        $consulta->bindParam(':id_contacto',  $id_contacto);
        $consulta->execute();
        $conexion = null; //cierro conexion
    }



    public static function matchContacts($userB,$userA){
        $conexion = new conexion();
        $conexion->exec("SET NAMES 'utf8'");
        $consulta = $conexion->prepare("
                    SELECT *
                    FROM " . self::TABLA . " a

                    INNER JOIN cloud_contacts b ON a.id_contacto = b.id 
                    WHERE id_usuario = :userA AND :userB
                    ");
        $consulta->bindParam(':userB',  $userB);
        $consulta->bindParam(':userA',  $userA);
        $consulta->execute();
        $registros = $consulta->fetchAll(PDO::FETCH_ASSOC);
        $total = $conexion->query("SELECT FOUND_ROWS() as total")->fetch()['total'];
        return [ $registros ];
    }



    
}
