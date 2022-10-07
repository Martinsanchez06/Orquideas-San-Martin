-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: 5bPvv5pu0J
-- ------------------------------------------------------
-- Server version	8.0.30



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES UTF8MB3 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = UTF8MB3mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=UTF8MB3mb4 COLLATE=UTF8MB3mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Categoria 1'),(2,'Categoria 2'),(3,'Categoria 3'),(4,'Categoria 4');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `climas`
--

DROP TABLE IF EXISTS `climas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = UTF8MB3mb4 */;
CREATE TABLE `climas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipoDeClima` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=UTF8MB3mb4 COLLATE=UTF8MB3mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `climas`
--

LOCK TABLES `climas` WRITE;
/*!40000 ALTER TABLE `climas` DISABLE KEYS */;
INSERT INTO `climas` VALUES (1,'Caliente'),(2,'Frio'),(3,'Templado');
/*!40000 ALTER TABLE `climas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orquideas`
--

DROP TABLE IF EXISTS `orquideas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = UTF8MB3mb4 */;
CREATE TABLE `orquideas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `clima_id` int NOT NULL,
  `precio` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `categoria_id` int NOT NULL,
  `tamanio_id` int NOT NULL,
  `disponibilidad` varchar(100) NOT NULL,
  `flor` varchar(100) NOT NULL,
  `imagen1` varchar(500) NOT NULL,
  `imagen2` varchar(500) NOT NULL,
  `imagen3` varchar(500) NOT NULL,
  `secciondehome_id` int NOT NULL,
  `usuarios_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `clima_idx` (`clima_id`),
  KEY `categoria_idx` (`categoria_id`,`tamanio_id`),
  KEY `tamaño_idx` (`tamanio_id`),
  KEY `fk_orquideas_secciondehome1_idx` (`secciondehome_id`),
  KEY `fk_orquideas_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `categoria` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  CONSTRAINT `clima` FOREIGN KEY (`clima_id`) REFERENCES `climas` (`id`),
  CONSTRAINT `fk_orquideas_secciondehome1` FOREIGN KEY (`secciondehome_id`) REFERENCES `secciones` (`id`),
  CONSTRAINT `fk_orquideas_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `tamaño` FOREIGN KEY (`tamanio_id`) REFERENCES `tamanios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=824 DEFAULT CHARSET=UTF8MB3mb4 COLLATE=UTF8MB3mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orquideas`
--

LOCK TABLES `orquideas` WRITE;
/*!40000 ALTER TABLE `orquideas` DISABLE KEYS */; 
INSERT INTO `orquideas` VALUES (1,'Phalenopsis',2,' $44.000 ','Perefcta para decorar al rededores ',1,3,'disponible','en florecencia','306029064_4776763052426877_7382168403176845397_n.jpg','305684647_610646347203837_1149710466102780314_n.jpg','305699117_598968538368594_7853510116671051646_n.jpg',1,0),(2,'zapato',3,'   $907.000   ','prueba',3,3,'disponible','en florecencia','305470139_8048368828569330_3286076508260797433_n.jpg','305516381_518945503567148_1616571734187842262_n.jpg','305699117_598968538368594_7853510116671051646_n.jpg',2,0),(3,'Phalenopsis',2,' $44.000 ','Perefcta para decorar al rededores ',1,3,'disponible','en florecencia','306029064_4776763052426877_7382168403176845397_n.jpg','305684647_610646347203837_1149710466102780314_n.jpg','305699117_598968538368594_7853510116671051646_n.jpg',4,0),(4,'zapato',3,'   $907.000   ','prueba',3,3,'disponible','en florecencia','305470139_8048368828569330_3286076508260797433_n.jpg','305516381_518945503567148_1616571734187842262_n.jpg','305699117_598968538368594_7853510116671051646_n.jpg',3,0),(5,' maria',2,'   $907.000   ','prueba',2,2,'disponible','en florecencia','305521491_790517758950299_2864935359761439152_n.jpg','306008782_651085009603111_4874865378094624683_n.jpg','305699117_598968538368594_7853510116671051646_n.jpg',2,0),(6,' martin',2,'   $907.000   ','Perefcta para decorar al rededores ',3,2,'disponible','prueba','305470139_8048368828569330_3286076508260797433_n.jpg','305699117_598968538368594_7853510116671051646_n.jpg','305516381_518945503567148_1616571734187842262_n.jpg',1,0),(7,'zapato',3,'   $907.000   ','prueba',3,3,'disponible','en florecencia','305470139_8048368828569330_3286076508260797433_n.jpg','305516381_518945503567148_1616571734187842262_n.jpg','305699117_598968538368594_7853510116671051646_n.jpg',2,0),(8,'Phalenopsis',2,' $44.000 ','Perefcta para decorar al rededores ',1,3,'disponible','en florecencia','306029064_4776763052426877_7382168403176845397_n.jpg','305684647_610646347203837_1149710466102780314_n.jpg','305699117_598968538368594_7853510116671051646_n.jpg',1,0),(9,'Phalenopsis',2,' $44.000 ','Perefcta para decorar al rededores ',1,3,'disponible','en florecencia','306029064_4776763052426877_7382168403176845397_n.jpg','305684647_610646347203837_1149710466102780314_n.jpg','305699117_598968538368594_7853510116671051646_n.jpg',4,0),(10,' martin',2,'   $907.000   ','Perefcta para decorar al rededores ',3,2,'disponible','prueba','305470139_8048368828569330_3286076508260797433_n.jpg','305699117_598968538368594_7853510116671051646_n.jpg','305516381_518945503567148_1616571734187842262_n.jpg',4,0),(11,'Producto para experimentar',2,'   $907.000   ','s',3,2,'prueba','prueba','305924015_631775865004455_1263329073213365402_n.jpg','305470139_8048368828569330_3286076508260797433_n.jpg','305884353_1113221726294407_7699975900467568102_n.jpg',1,0),(12,' a',3,'   $907.000   ','prueba',1,2,'disponible','en florecencia','305682781_504505915013815_391776139684816771_n.jpg','305676893_429432832501150_3439667803994767240_n.jpg','305699117_598968538368594_7853510116671051646_n.jpg',2,0),(13,'Producto para experimentar',2,'   $907.000   ','Perefcta para decorar al rededores ',2,3,'disponible','en florecencia','305869968_842239853817661_2457802082347923122_n.jpg','305857649_3226626404259353_5297812572894923828_n.jpg','305857649_3226626404259353_5297812572894923828_n.jpg',4,0);
/*!40000 ALTER TABLE `orquideas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secciones`
--

DROP TABLE IF EXISTS `secciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = UTF8MB3mb4 */;
CREATE TABLE `secciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `seccion` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=UTF8MB3mb4 COLLATE=UTF8MB3mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secciones`
--

LOCK TABLES `secciones` WRITE;
/*!40000 ALTER TABLE `secciones` DISABLE KEYS */;
INSERT INTO `secciones` VALUES (1,'Nuestros más vendidos'),(2,'Orquideas Florecidas'),(3,'En descuento'),(4,'Otras');
/*!40000 ALTER TABLE `secciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tamanios`
--

DROP TABLE IF EXISTS `tamanios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = UTF8MB3mb4 */;
CREATE TABLE `tamanios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tamanio` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=UTF8MB3mb4 COLLATE=UTF8MB3mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tamanios`
--

LOCK TABLES `tamanios` WRITE;
/*!40000 ALTER TABLE `tamanios` DISABLE KEYS */;
INSERT INTO `tamanios` VALUES (1,'Pequeño'),(2,'Mediano'),(3,'Grande');
/*!40000 ALTER TABLE `tamanios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = UTF8MB3mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipoDeDocumento` varchar(160) NOT NULL,
  `documento` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contraseniaConf` varchar(100) NOT NULL,
  `pais` varchar(100) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cedulaDeCiudadania_UNIQUE` (`documento`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=UTF8MB3mb4 COLLATE=UTF8MB3mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (7,'Tarjeta de identidad TI',1030538674,' martin sanchez','$2a$10$MdIQ40LDJr3ONDUBqCRgLOIRMhvdYB/OKjfnKgI1bTUNT69F3zVQC','sanchezmartin2435@gmail.com','$2a$10$JUrn0IMe3axoCaeIPVsbEu6I4Rbr9u3VwBkkH1faAO3Z4yDFqv4lm','Colombia','Bogota','mi Direccion');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-06 11:08:45
