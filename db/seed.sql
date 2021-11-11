INSERT INTO department (name)
VALUES
('Finance'),
('Engineering'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', '100000', '4'),
('Salesperson', '80000', '4'),
('Lead Engineer', '150000', '2'),
('Software Engineer', '120000', '2'),
('Accountant', '125000', '1'),
('Legal Team Lead', '250000', '3'),
('Lawyer', '120000', '3');


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', ' Doe', '1', '3'),
('Mike', 'Chan', '2', '2'),
('Ashley', 'Rodriguez', '3', '0'),
('Kevin', 'Tupik', '3', '3');



