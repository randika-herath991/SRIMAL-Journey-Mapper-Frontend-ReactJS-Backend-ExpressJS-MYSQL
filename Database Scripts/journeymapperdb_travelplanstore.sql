-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: journeymapperdb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `travelplanstore`
--

DROP TABLE IF EXISTS `travelplanstore`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travelplanstore` (
  `travelPlanID` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) NOT NULL,
  `nic` varchar(255) NOT NULL,
  `mobileNumber` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `travelDate` datetime NOT NULL,
  `venue` varchar(255) NOT NULL,
  `members` varchar(255) NOT NULL,
  `paymentMethod` varchar(255) NOT NULL,
  `specialRequest` tinyint DEFAULT NULL,
  PRIMARY KEY (`travelPlanID`),
  UNIQUE KEY `nic` (`nic`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travelplanstore`
--

LOCK TABLES `travelplanstore` WRITE;
/*!40000 ALTER TABLE `travelplanstore` DISABLE KEYS */;
INSERT INTO `travelplanstore` VALUES (1,'Srimal Randika Herath','098766788v',778654322,'srimalherath0290@gmail.com','2025-02-27 00:00:00','Kandy','Unity','paypal',1),(2,'Gagani Perera','6876888655v',714576098,'gaga@gmail.com','2025-02-28 00:00:00','Kandy','Bandy','creditCard',0),(4,'Srimal Randika Herath','eererev',32323,'abba@gmail.com','2025-03-01 00:00:00','33','2323','creditCard',1);
/*!40000 ALTER TABLE `travelplanstore` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-27 21:33:31
