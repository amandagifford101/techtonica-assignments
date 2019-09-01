const inquirer = require('inquirer');
const axios = require('axios');
const connection = require('./connection');
require('dotenv').config();
const eventfulKey = process.env.EVENTFUL_KEY;

 const app = {};

 app.startQuestion = (closeConnectionCallback) => {
  inquirer.prompt({
    type: 'list',
    message: 'What action would you like to do?',
    choices: [
      'Complete a sentence',
      'Create a new user',
      'Search a local SF event by keyword',
      'Mark an existing user to attend an event in database',
      'See all events that a particular user is going to',
      'See all the users that are going to a particular event',
      'Exit'
    ],
    name:'action',
  }).then((res) => {
    const continueCallback = () => app.startQuestion(closeConnectionCallback);

     if (res.action === 'Complete a sentence') app.completeSentence(continueCallback);
    if (res.action === 'Create a new user') app.createNewUser(continueCallback);
    if (res.action === 'Search a local SF event by keyword') app.searchEventful(continueCallback);
    if (res.action === 'Mark an existing user to attend an event in database') app.matchUserWithEvent(continueCallback);
    if (res.action === 'See all events that a particular user is going to') app.seeEventsOfOneUser(continueCallback);
    if (res.action === 'See all the users that are going to a particular event') app.seeUsersOfOneEvent(continueCallback);
    if (res.action === 'Exit') {
      closeConnectionCallback();
      return;
    }
  });
}

 app.completeSentence = (continueCallback) => {
  inquirer.prompt([
    {
      name: 'sentence',
      message: 'The cat jumped over the moon...'
    },
  ])
  .then(answers => {
    console.log('The cat jumped over the moon', answers.sentence);
    continueCallback();
  });
}


 app.createNewUser = (continueCallback) => {
  let questions = [
    {name: 'firstName', message: 'First name:'},
    {name: 'lastName', message: 'Last name:'},
    {name: 'email', message: 'Email:'},
    {name: 'username', message: 'Username:'}
  ];
  inquirer
        .prompt(questions)
        .then(answers => {
              const { firstName, lastName, email, username } = answers;
              connection.query('INSERT INTO users (firstName, lastName, email, username) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, username], (error, results) => {
                if (error) {
                  throw error;
                }
                console.log(`User added to database.`);
              })
              continueCallback();
        });
 }

 app.searchEventful = (continueCallback) => {
    inquirer  
      .prompt({
          name: 'searchEvent', message: 'What event would you like to search for?'
        })
      .then(answer => {
        const { searchEvent } = answer;
        axios.get('http://api.eventful.com/json/events/search?' + `category=${searchEvent}` + `&app_key=` + process.env.EVENTFUL_KEY)
          .then(response => {
            const event = response.data.events.event[0].title;
            console.log(response.data.events.event[0].title);
            inquirer
      .prompt({
        name:'saveFunction', message: 'Would you like to save this event? Please answer yes or no.'
      })
      .then(answer => {
        const { saveFunction } = answer; //.uppercase to be added
        if (saveFunction.toUpperCase() === "YES") {
          connection.query('INSERT INTO events (eventtitle) VALUES ($1)', [event], (error, results) => {
            if (error) {
              throw error;
            }
            console.log('Event successfully added to queue!');
            continueCallback();
          })
        } else {
          app.searchEventful(continueCallback);
        }
      })
          })
          .catch(error => console.log(error));
      
    })
}

 app.matchUserWithEvent = (continueCallback) => {
   let questions = [
    {name: 'username', message: 'What is the username of the user you would like to match with an event?'},
    {name: 'eventTitle', message: 'What is the event title of the user you would like to match this user with?'}
   ];
  inquirer
  .prompt(questions)
  .then(answer => {
    const { username, eventTitle } = answer;
    connection.query('INSERT INTO usersPerEvent (username, eventTitle) VALUES ($1, $2)', [username, eventTitle], (error, results) => {
        if (error) {
          throw error;
        }
        console.log(`User ${username} linked with ${eventTitle}.`);
        continueCallback();   
    }) 
  })
}

 app.seeEventsOfOneUser = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 app.seeUsersOfOneEvent = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 module.exports = app;