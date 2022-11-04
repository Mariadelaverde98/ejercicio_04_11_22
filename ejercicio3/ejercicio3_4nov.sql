#3. Crea una BD en MySQL con una tabla usuarios, 
#como la de los ejercicios anteriores y permite 
#insertar por medio de un procedimiento usuarios en la tabla.
#Ej de llamada al procedimiento:
#CALL registro('davinia@thebridgeschool.es', 'root')

#DROP DATABASE Ejercicio4nov

CREATE DATABASE Ejercicio4nov;

USE Ejercicio4nov;

CREATE TABLE usuarios(
	id INT AUTO_INCREMENT, 
    email VARCHAR(400), 
    contrasenia VARCHAR(50),
    PRIMARY KEY(id)
);

DELIMITER //
CREATE PROCEDURE registro (IN email VARCHAR(400), IN contrasenia VARCHAR(50))
BEGIN
  INSERT INTO usuarios VALUES (NULL, email, contrasenia);
END;
//
DELIMITER ;

CALL registro('davinia@thebridgeschool.es', 'root');

SELECT * FROM usuarios;