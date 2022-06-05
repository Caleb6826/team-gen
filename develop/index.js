const inquirer = require("inquirer");
const employee = require("../lib/employee.js");
const teamMembers = [];

function start() {
    addmanager();
  }
  start();
  function addmanager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the team manager?",
        },
        {
          type: "input",
          name: "id",
          message: "Team Manager's ID number:",
        },
        {
          type: "input",
          name: "email",
          message: "Team Manager's email address:",
        },
        {
          type: "input",
          name: "officenumber",
          message: "Team Manager's office number:",
        },
      ])
      .then((data) => {
        const manager = new employee(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
        teamMembers.push(manager);
        addTeamMember();
      });
  }
  
  function addTeamMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "title",
          message: "Add an engineer or intern to the team or finish?",
          choices: ["Engineer", "Intern", "Done"],
        },
      ])
      .then((val) => {
        if (val.title === "Engineer") {
          addengineer();
        } else if (val.title === "Intern") {
          addintern();
        } else {
            
        }
      });
  }
  
  function addengineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Engineer's name?",
        },
        {
          type: "input",
          name: "id",
          message: "Engineer's ID number:",
        },
        {
          type: "input",
          name: "email",
          message: "Engineer's email address:",
        },
        {
          type: "input",
          name: "github",
          message: "What is the Engineer's GitHub Username?",
        },
      ])
      .then((data) => {
        const engineer = new employee(data.name, data.id, data.email, data.github);
        teamMembers.push(engineer);
        addTeamMember();
      });
  }
  
  function addintern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Intern's name?",
        },
        {
          type: "input",
          name: "id",
          message: "Intern's ID number:",
        },
        {
          type: "input",
          name: "email",
          message: "Intern's email address:",
        },
        {
          type: "input",
          name: "school",
          message: "What school does/did the intern attend?",
        },
      ])
      .then((data) => {
        const intern = new employee(data.name, data.id, data.email, data.school);
        teamMembers.push(intern);
        addTeamMember();
      });
  }

  function createfile(employee){
     
   var cardtitle = $('<h1>')
         .text(employee.name)
    $('body').append(cardtitle);
  };


