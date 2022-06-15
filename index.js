// Import packages
const inquirer = require("inquirer");
const fs = require("fs");

// Import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Import HTML templates
const addManagerCard = require('./src/card-manager');
const addEngineerCard = require('./src/card-engineer');
const addInternCard = require('./src/card-intern');
const wrapProfileCards = require('./src/card-wrapper');

// Team members start off as an empty array
const team = [];

// Add manager
const addManager = [
    {
        name: 'role',
        type: 'confirm',
        message: 'Welcome! Ready to start?',
      },
      {
        name: 'name',
        type: 'input',
        message: 'Please enter the name of the manager:',
        default: 'Micah Jon',
      },
      {
        name: 'id',
        type: 'input',
        message: 'What is the employee ID?',
        default: '28',
      },
      {
        name: 'email',
        type: 'input',
        message: 'Please enter the email address:',
        default: 'lepme@gmail.com',      
      },
      {
        name: 'officeNumber',
        type: 'input',
        message: 'What is the office number?',
        default: '32',
      },
      {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
      },
];

// Add new engineer
const addEngineer = [
    {
      name: 'name',
      type: 'input',
      message: "Please enter the name of the engineer:",
      default: 'Nan Wang',
    },
    {
      name: 'id',
      type: 'input',
      message: "Please enter the ID of the engineer:",
      default: '45',
    },
    {
      name: 'email',
      type: 'input',
      message: "What is the engineer's email address?",
      default: 'wanny017@gmail.com',
    },
    {
      name: 'github',
      type: 'input',
      message: "Please enter the engineer's Github username:",
      default: 'wanny017',

    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
      message: 'What would you like to do next?',
    },
  ];

  // Add intern
  const addIntern = [
    {
      name: 'name',
      type: 'input',
      message: "What is the intern's name?",
      default: 'Vincent Wong',
    },
    {
      name: 'id',
      type: 'input',
      message: "What is the intern's employee ID?",
      default: '34',
    },
    {
      name: 'email',
      type: 'input',
      message: "Please enter the intern's email address:",
      default: 'vincent525@gmail.com',
    },
    {
      name: 'school',
      type: 'input',
      message: "What college or university is the intern from?",
      default: 'University of Adelaide',
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
      message: 'What would you like to do next?',
    },
  ];
  
// Initialize application
ask(addManager);

// Cycle through questions if member needs to be added
function ask(questionArr) {
    inquirer
      .prompt(questionArr)
      .then((member) => {
        team.push(member);
  
        if (member.upNext === 'Add Engineer') {
          ask(addEngineer);
        } else if (member.upNext === 'Add Intern') {
          ask(addIntern);
        } else {
          createProfiles(team);
        }
      })
      .catch((err) => console.log(err));
  }


function createProfiles(team) {
    
    const profiles = team.map((member) => {
      const { name, id, email } = member;
  
      // If you're adding a manager, ask for office number
      if (member.hasOwnProperty('officeNumber')) {
        const { officeNumber } = member;
        return new Manager(name, id, email, officeNumber);
      }
  
      // if you're adding an engineer, as for github
      if (member.hasOwnProperty('github')) {
        const { github } = member;
        return new Engineer(name, id, email, github);
      }
  
     // if you're adding an intern, ask for school
      if (member.hasOwnProperty('school')) {
        const { school } = member;
        return new Intern(name, id, email, school);
      }
    });
  
    // Generate HTML from the profiles made
    generateHtml(profiles);
  }

  function generateHtml(profiles) {
      let profileCards = '';
      profiles.forEach((profile) => {
        if (profile instanceof Manager) {
          const card = addManagerCard(profile);
          profileCards += card;
        } else if (profile instanceof Engineer) {
          const card = addEngineerCard(profile);
          profileCards += card;
        } else if (profile instanceof Intern) {
          const card = addInternCard(profile);
          profileCards += card;
        }
  })


const newHtml = wrapProfileCards(profileCards);

writeHtml(newHtml);
};

// Function to write the final HTML document in dist folder
function writeHtml(newHtml) {
    fs.writeFile('./dist/team-profile.html', newHtml, (err) => {
      if (err) throw err;
      console.log('HTML document successfully created in the /dist folder.');
    });
  };