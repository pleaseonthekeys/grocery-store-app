CREATE DATABASE IF NOT EXISTS food;

USE food;

CREATE TABLE fruit (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fruitname VARCHAR(20),
    isle_number INT
);

CREATE TABLE greens (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    veggie_type VARCHAR(20),
    isle_number INT
);

CREATE TABLE protein (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    protein_type VARCHAR(20),
    isle_number INT
);