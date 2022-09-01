CREATE DATABASE IF NOT EXISTS patientdb;

USE patientdb;

DROP TABLE IF EXISTS patients;

CREATE TABLE patients(
  id BIGINT UNSIGNED NOT NULL AUTO_INCREAMENT,
  first_name VARCHAR(255) DEFAULT NULL,
  last_name VARCHAR(255) DEFAULT NULL,
  email VARCHAR(255) DEFAULT NULL,
  phone VARCHAR(255) DEFAULT NULL,
  address VARCHAR(255) DEFAULT NULL,
  diagnosis VARCHAR(255) DEFAULT NULL,
  image_url VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT UQ_Patients_email UNIQUE (email)
);

DELIMETER //
CREATE PROCEDURE create_and_return(
  IN first_name VARCHAR(255), 
  IN last_name VARCHAR(255), 
  IN email VARCHAR(255), 
  IN phone VARCHAR(255), 
  IN address VARCHAR(255), 
  IN diagnosis VARCHAR(255), 
  IN image_url VARCHAR(255)
)
BEGIN
  INSERT INTO patients(first_name, last_name, email, phone, address, diagnosis, image_url)
                VALUES(first_name, last_name, email, phone, address, diagnosis, image_url);
  SET @PATIENT_ID = LAST_INSERT_ID();
  SELECT * FROM patients WHERE id=@PATIENT_ID;
END //
DELIMETER ;