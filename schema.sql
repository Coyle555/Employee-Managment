DROP DATABASE IF EXISTS job_db;
CREATE DATABASE job_db;

USE job_db;

CREATE TABLE departments (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE roles (
    name VARCHAR(30) NOT NULL
);
CREATE TABLE employees (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    role VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);