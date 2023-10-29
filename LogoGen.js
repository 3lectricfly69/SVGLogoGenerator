// Runs the application using imports from lib/
import inquirer from 'inquirer';

const { writeFile } = require('fs').promises;

// promptUser = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: ''
//         }
//     ])
// }

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

