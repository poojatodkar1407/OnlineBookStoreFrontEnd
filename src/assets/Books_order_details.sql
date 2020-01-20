-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: Books
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_details` (
  `order_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `book_name` varchar(255) DEFAULT NULL,
  `consumer_email` varchar(255) DEFAULT NULL,
  `consumer_name` varchar(255) DEFAULT NULL,
  `total_price` double NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (1,1,'The Girl in Room 105\'','akshaypatwari24@gmail.com','Akshay',120),(14,5,'Origin\'','hemilturakhia@gmail.com','Vedikaa',746),(9,54,'striadsang','abc12132@gmail.com','Zafaraabid',100),(10,54,'striadsang','abc12132@gmail.com','Zafaraabid',100),(11,54,'striadsang','abc12132@gmail.com','Zafaraabid',100),(12,54,'striadsang','abc12132@gmail.com','Zafaraabid',100),(13,2,'Indian Superfoods\'','abc12132@gmail.com','Zafaraabid',2030),(2,1,'The Girl in Room 105\'','shyam_shundar@gmail.com','Aruun',1015),(3,1,'The Girl in Room 105\'','hemilturakhia1@gmail.com','Hem',1015),(4,1,'The Girl in Room 105\'','mr.kundare@gmail.com','Mahendrakundare',1015),(5,1,'The Girl in Room 105\'','mr.kundare@gmail.com','Mahi',1015),(6,1,'The Girl in Room 105\'','mr.kundare@gmail.com','Sargam',1015),(7,1,'The Girl in Room 105\'','hemilturakhia1@gmail.com','Mahendralloo',9700),(15,5,'Origin\'','hemilturakhia@gmail.com','Vedikaaaa',3530),(16,5,'Origin\'','hemilturakhia@gmail.com','Mohit',3530),(17,5,'Origin\'','hemilturakhia@gmail.com','Moohit',50),(18,1,'The Girl in Room 105\'','hemilturakhia1@gmail.com','Goopi',7770);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-20 15:56:28
