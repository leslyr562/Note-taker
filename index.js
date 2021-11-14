const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');


let employees = [];

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
            }
            // "Add a Department",
            // "Add Role",
            // "Add Employees",
            // "Update Employee Role",
            // "Quit"
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
        message: "What is employee's role?",
        choices: ['Sales Lead',
            'Salesperson',
            'Lead Engineer',
            'Software Engineer',
            'Accountant',
            'Legal Team Lead',
            'Lawyer']
    },
    {
        type: "list",
        name: "manager",
        message: "Which is employee's manager?",
        choices: ["John Doe", "Mike Chan", "Ashley Rodriguez", "Kevin, Tupik"]
    }
];

const addDepartment = [{
    type: "input",
    name: "remove",
    message: "What is department name?",
}];



const addRole = [{
    type: "input",
    name: "addRole",
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
    message: "What is the role's department number? Choose: 1 for Finance, 2 for Engineering, 3 for Legal and 4 for Sales",
    choices: [1, 2, 3, 4]
}
];

function menuBar() {
    console.log("console1")
    inquirer
        .prompt(menu)
        .then(response => {
            console.log(response)
            switch (response) {
                case "VIEW_DEPARTMENTS":
                    //return query
                    db.query(`SELECT FROM * departments`, (err, row) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(cTable.getTable(row))
                    });
                    break
                case "VIEW_ROLES":
                    //return query
                    dq.query(`SELECT FROM * roles`, (err, row) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(row)
                    });
                    break
                case "VIEW_EMPLOYEES":
                    //return query
                    db.query(`SELECT FROM * employees`, (err, row) => {
                        if (err) {
                            console.log(err)
                        }
                        console.log(row)
                    })
            }
        });

};


// function querying() {
//     db.promise().query("SELECT * FROM employees", (err, row) => {
//         if(err) throw err;
//         console.log("results", row);
//     })
// }


// function makeEmployee() {
//     inquirer
//         .prompt(addEmployee)
//         .then(response => {
//             console.log(response)
//         })

//             // db.query("INSERT INTO employee SET ?", {
//             //     firstName: response.firstName,
//             //     lastName: response.lastName,
//             //     roleId: response.role,
//             //     managerId: response.manager
//             // }, function(error) {
//             //     if (error) throw error;
//             //     console.log("Added Employee");

//             // })

//         // })
// };
// makeEmployee()

// function addDepartment() {
//     inquirer
//         .prompt(addDepartment)
//         .then(response => {
//             console.log(response)
//         })
// };

// menuBar();