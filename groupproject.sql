CREATE DATABASE groupproject;

USE groupproject;

CREATE TABLE touristmem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    city VARCHAR(100)
);
