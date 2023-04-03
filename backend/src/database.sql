
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema julienphotography_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema julienphotography_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `julienphotography_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `julienphotography_db` ;

-- -----------------------------------------------------
-- Table `julienphotography_db`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `julienphotography_db`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_un` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `julienphotography_db`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `julienphotography_db`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cart_FK` (`user_id` ASC) VISIBLE,
  CONSTRAINT `cart_FK`
    FOREIGN KEY (`user_id`)
    REFERENCES `julienphotography_db`.`user` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `julienphotography_db`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `julienphotography_db`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL,
  `photo` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `julienphotography_db`.`cart_product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `julienphotography_db`.`cart_product` (
  `cart_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL DEFAULT 1,
  INDEX `fk_cart_has_product_product1_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_cart_has_product_cart1_idx` (`cart_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cart_has_product_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `julienphotography_db`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_has_product_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `julienphotography_db`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
