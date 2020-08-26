use company_db;

insert into department (name) values("marketing");
insert into department (name) values("stores");
insert into department (name) values("businesses");

insert into role (title, salary, department_id) values 
("Manager", 100000, 1),
("Sales Lead", 250, 1),
("Worker", 50000, 1)
;

insert into role (title, salary, department_id) values 
("Manager 2", 200000, 2),
("Sales Lead Person", 250, 2),
("Worker 2", 50000, 2)
;

insert into role (title, salary, department_id) values 
("Manager 3", 200000, 3),
("Sales Lead Person 3", 250, 3),
("Worker 3", 50000, 3)
;

select * from role;
select * from department;
select * from employee;
insert into employee(first_name, last_name, role_id, manager_id) values
("Joey", "Rogers", 1, null),
("Bob", "Bill", 4, null),
("Pegasus","Horse",7,null);

insert into employee(first_name, last_name, role_id, manager_id) values
("Joey", "Rogers", 1, 1),
("Bob", "Bill", 4, 2),
("Pegasus","Horse",7,3)