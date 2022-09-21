-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema orquideas_san_martin_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema orquideas_san_martin_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `orquideas_san_martin_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `orquideas_san_martin_db` ;

-- -----------------------------------------------------
-- Table `orquideas_san_martin_db`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orquideas_san_martin_db`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `orquideas_san_martin_db`.`climas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orquideas_san_martin_db`.`climas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipoDeClima` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `orquideas_san_martin_db`.`secciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orquideas_san_martin_db`.`secciones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `seccion` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `orquideas_san_martin_db`.`tamanios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orquideas_san_martin_db`.`tamanios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tamanio` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `orquideas_san_martin_db`.`orquideas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orquideas_san_martin_db`.`orquideas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `clima_id` INT NOT NULL,
  `precio` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `categoria_id` INT NOT NULL,
  `tamanio_id` INT NOT NULL,
  `disponibilidad` VARCHAR(100) NOT NULL,
  `flor` VARCHAR(100) NOT NULL,
  `imagen1` VARCHAR(500) NOT NULL,
  `imagen2` VARCHAR(500) NOT NULL,
  `imagen3` VARCHAR(500) NOT NULL,
  `secciondehome_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `clima_idx` (`clima_id` ASC) VISIBLE,
  INDEX `categoria_idx` (`categoria_id` ASC, `tamanio_id` ASC) VISIBLE,
  INDEX `tamaño_idx` (`tamanio_id` ASC) VISIBLE,
  INDEX `fk_orquideas_secciondehome1_idx` (`secciondehome_id` ASC) VISIBLE,
  CONSTRAINT `categoria`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `orquideas_san_martin_db`.`categorias` (`id`),
  CONSTRAINT `clima`
    FOREIGN KEY (`clima_id`)
    REFERENCES `orquideas_san_martin_db`.`climas` (`id`),
  CONSTRAINT `fk_orquideas_secciondehome1`
    FOREIGN KEY (`secciondehome_id`)
    REFERENCES `orquideas_san_martin_db`.`secciones` (`id`),
  CONSTRAINT `tamaño`
    FOREIGN KEY (`tamanio_id`)
    REFERENCES `orquideas_san_martin_db`.`tamanios` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `orquideas_san_martin_db`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orquideas_san_martin_db`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cedulaDeCiudadania` INT NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `contraseña` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `contraseñaConfimacion` VARCHAR(100) NOT NULL,
  `pais` VARCHAR(100) NOT NULL,
  `ciudad` VARCHAR(100) NOT NULL,
  `direccion` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `cedulaDeCiudadania_UNIQUE` (`cedulaDeCiudadania` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
