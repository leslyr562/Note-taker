const inquirer = require('inquirer');
<<<<<<< HEAD
const db = require("./db/connection");
=======
const db = require('./db/connection');
>>>>>>> develop
const cTable = require('console.table');


const menu = [
    {
        type: 'list',
        name: "menubar",
        message: "What would you like to do?",
        choices: [
            {
                name: "View All Departments",
                value: "VIEW_DEPARTMENTS"
            },
            {
                name: "View All Roles",
                value: "VIEW_ROLES"
            },
            {
                name: "View All Employees",
                value: "VIEW_EMPLOYEES"
            },
            {
                name: "Add a Department",
                value: "ADD_DEPARTMENT"
            },
            {
                name: "Add Role",
                value: "ADD_ROLE"
            },
            {
                name: "Add Employees",
                value: "ADD_EMPLOYEE"
<<<<<<< HEAD
=======
            },
            {
                name: "Quit",
                value: "Quit"
>>>>>>> develop
            }
        ]
    }
];

const addEmployee = [
    {
        type: "input",
        name: "firstName",
        message: "What is employee's first name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a valid name');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "lastName",
        message: "What is employee's last name?",
        validate: lastNameInput => {
            if (lastNameInput) {
                return true;
            } else {
                console.log('Please enter a valid last name');
                return false;
            }
        }
    },
    {
        type: "list",
        name: "role",
        message: "What is employee's role? Choose 1 for Sales Lead, 2 for Salesperson, 3 for Lead Engineer , 4 for Software Engineer , 5 for Accountant, 6 for Legal Team Lead, 7 for Lawyer",
        choices: ["1", "2", "3", "4", "5", "6", "7"]
    },
    {
        type: "list",
        name: "manager",
        message: "Which is employee's manager?",
        choices: ["0", "1", "2", "3", "4", "5", "6"]
    }
];

const addDepartment = [{
    type: "input",
    name: "department",
    message: "What is department name?",
}];

const addRole = [{
    type: "input",
    name: "title",
    message: "What is employee's role?"
},
{
    type: "input",
    name: "salary",
    message: "What is role's income salary? Write numbers without commas Ex. $100,000 as 100000"
},
{
    type: "list",
    name: "department",
    message: "What is the role's department number? Choose: 1 for Sales lead, 2 for Salesperson, 3 for Lead Engineer and 4 for Software Engineer, 5 for Accountant, 6 for Legal Team Lead and 7 for Lawyer",
    choices: ["1", "2", "3", "4", "5", "6", "7"]
}
];


function menuBar() {
    inquirer
        .prompt(menu)
        .then(response => {
            console.log(response)
            switch (response.menubar) {
                case "VIEW_DEPARTMENTS":
                    //return query
                    db.query(`SELECT * FROM  department`, (err, row) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(cTable.getTable(row));
                        return menuBar()
                    });
                    break
                case "VIEW_ROLES":
                    //return query
                    db.query(`SELECT * FROM role`, (err, row) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(cTable.getTable(row))
                        return menuBar()
                    });
                    break
                case "VIEW_EMPLOYEES":
                    //return query
                    db.query(`SELECT * FROM employee`, (err, row) => {
                        if (err) {
                            console.log(err)
                        }
                        console.log(cTable.getTable(row))
                        return menuBar()
                    });
                    break
                case "ADD_DEPARTMENT":
                    //return function
                    makeDepartment();
                    break
                case "ADD_ROLE":
                    //return function
                    makeRole();
                    break
                case "ADD_EMPLOYEE":
                    //return function
                    makeEmployee();
<<<<<<< HEAD

=======
                    case "Quit":
                        console.log("goodbye!")
>>>>>>> develop
            }
        });

};

function makeDepartment() {
    inquirer
        .prompt(addDepartment)
        .then(response => {
            console.log(response)
            db.query(`INSERT INTO department SET?`, {
                name: response.department
            }, function (error) {
                if (error) throw error;
                console.log(" Successfully Added Department");
                return menuBar()
            })
        })
};

function makeRole() {
    inquirer
        .prompt(addRole)
        .then(response => {
            console.log(response)
            db.query("INSERT INTO role SET ?", {
                title: response.title,
                salary: response.salary,
                departmentId: response.department
            }, function (error) {
                if (error) throw error;
                console.log("Successfully Added Role!");
                return menuBar()
            })
        })
};

function makeEmployee() {
    console.log("console2")
    inquirer
        .prompt(addEmployee)
        .then(response => {
            console.log(response)

            db.query(`INSERT INTO employee SET ?`, {
                firstName: response.firstName,
                lastName: response.lastName,
                roleId: response.role,
                managerId: response.manager
            }, function (error) {
                if (error) throw error;
                console.log("Successfully Added Employee");
                return menuBar()

            })

        })

};

menuBar();