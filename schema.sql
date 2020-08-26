-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS company_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE company_db;

USE company_db;

-- Create the table plans.
CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE role (
	id int not null auto_increment,
    title varchar(30),
    salary decimal,
    department_id INT references department(id),
    primary key (id)
);
CREATE TABLE employee (
	id int not null auto_increment,
    first_name varchar (30),
    last_name varchar (30),
    role_id int references role(id),
    manager_id int,
    primary key (id)
);

