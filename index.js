var inquirer = require("inquirer")
var mysql = require("mysql")
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "$0ftC0rnHu$k!",
    database: "company_db"
})

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
    console.log("Frank's employee system")
    displayuserchoice()
})

function displayuserchoice() {
    inquirer.prompt([
        {
            type: "list",
            name: "userresponse",
            message: "your choice",
            choices: ["add employee", "add department", "add role", "View Employee", "View Departments", "View Roles", "Update Employee Role", "Exit Application"]
        }
    ]).then(function (response) {
        switch (response.userresponse) {
            case "add employee":
                addEmployee();
                break;
            case "add department":
                addDepartment();
                break;
            case "add role":
                addRole();
                break;
            case "View Employee":
                viewEmployee();
                break; 
            case "View Departments":
                viewDepartment();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "Update Employee Roles":
                    updateEmployeeRoles();
                    break;
            default: process.exit(0)
        }
    })
}
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name:"first_name",
            message: "enter employee first name"
        },
        {
            type: "input",
            name:"last_name",
            message: "enter employee last name"
        },
        {
            type: "list",
            name:"role_id",
            message: "enter employee role id", 
            choices: [1,2,3,4,5,6,7,8,9]
        }, 
        {
            type: "list",
            name:"manager_id",
            message: "enter manager id",
            choices: [1,2,3]
        }
    ]).then(function(response){
        connection.query("INSERT INTO EMPLOYEE(FIRST_NAME,LAST_NAME,ROLE_ID,MANAGR_ID)VALUES(?,?,?,?)",
         [response.first_name, response.last_name, response.role_id, response.manager_id], function(err,result){
            if (err) {
                console.error("error")
            }
            console.log("Emplouee added",result)
            displayuserchoice()
        })
    })
}