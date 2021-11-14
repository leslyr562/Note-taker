DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;


CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30 ) NOT NULL,
    salary DECIMAL NOT NULL,
    departmentId INTEGER
    -- CONSTRAINT fk_department FOREIGN KEY (departmentId) REFERENCES department(id) ON DELETE SET NULL
);

-- SELECT role.*, department.name
--     -> AS department_name
--     -> FROM role
--     -> LEFT JOIN department
--     -> ON role.department_id = department.id;

CREATE TABLE  employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    roleId INTEGER,
    managerId INTEGER
    -- CONSTRAINT fk_role FOREIGN KEY (roleId) REFERENCES role(id) ON DELETE SET NULL,
    -- FOREIGN KEY(managerId) REFERENCES employee(id)
);





