-- MySQL Script generated by MySQL Workbench
-- Sun Oct 23 21:52:36 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema orquideassanmartin_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema orquideassanmartin_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `orquideassanmartin_db` ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `orquideassanmartin_db` ;

-- -----------------------------------------------------
-- Table `orquideassanmartin_db`.`climas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orquideassanmartin_db`.`climas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipoDeClima` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `orquideassanmartin_db`.`secciondehome`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orquideassanmartin_db`.`secciondehome` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `seccion` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `orquideassanmartin_db`.`tamanios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orquideassanmartin_db`.`tamanios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tamanio` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `orquideassanmartin_db`.`orquideas`
-- -----------------------------------------------------
CREATE TABLE `orquideassanmartin_db`.`orquideas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `precio` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `disponibilidad` VARCHAR(100) NOT NULL,
  `flor` VARCHAR(100) NOT NULL,
  `imagen1` VARCHAR(500) NOT NULL,
  `imagen2` VARCHAR(500) NOT NULL,
  `imagen3` VARCHAR(500) NOT NULL,
  `categorias_id` INT NOT NULL,
  `climas_id` INT NOT NULL,
  `secciondehome_id` INT NOT NULL,
  `tamanios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_orquideas_categorias_idx` (`categorias_id` ASC) VISIBLE,
  INDEX `fk_orquideas_climas1_idx` (`climas_id` ASC) VISIBLE,
  INDEX `fk_orquideas_secciondehome1_idx` (`secciondehome_id` ASC) VISIBLE,
  INDEX `fk_orquideas_tamanios1_idx` (`tamanios_id` ASC) VISIBLE,
  CONSTRAINT `fk_orquideas_categorias`
    FOREIGN KEY (`categorias_id`)
    REFERENCES `mydb`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orquideas_climas1`
    FOREIGN KEY (`climas_id`)
    REFERENCES `orquideassanmartin_db`.`climas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orquideas_secciondehome1`
    FOREIGN KEY (`secciondehome_id`)
    REFERENCES `orquideassanmartin_db`.`secciondehome` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orquideas_tamanios1`
    FOREIGN KEY (`tamanios_id`)
    REFERENCES `orquideassanmartin_db`.`tamanios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)


-- -----------------------------------------------------
-- Table `orquideassanmartin_db`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orquideassanmartin_db`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipoDeDocumento` VARCHAR(160) NOT NULL,
  `documento` INT NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `contrasenia` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `contraseniaConf` VARCHAR(100) NOT NULL,
  `pais` VARCHAR(100) NOT NULL,
  `ciudad` VARCHAR(100) NOT NULL,
  `direccion` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `cedulaDeCiudadania_UNIQUE` (`documento` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
