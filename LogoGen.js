// Runs the application using imports from lib/
const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

const generateSVG = ({textInput, textColor, logoShape, logoColor}) => {
    let logo;
    if (logoShape = 'triangle' ){
        logo =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150, 18 244, 182 56, 182" fill="${logoColor}" />
    
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${textInput}</text>
    
        </svg>
        `;

    }
    if (logoShape = 'square'){
        logo =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="90" y="40" width="120" height="120" fill="${logoColor}" />
    
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}"></t${textInput}ext>
    
        </svg>
        `;

    }
    if (logoShape = 'circle'){
        logo =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
            <circle cx="150" cy="100" r="80" fill="${logoColor}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textInput}</text>
        
        </svg>
        `;
    }
return logo;
}

    // const generateSVG = ({textInput, textColor, logoColor}) => 

        
    //         `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    //             <polygon points="150, 18 244, 182 56, 182" fill="${logoColor}" />
        
    //             <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${textInput}</text>
        
    //         </svg>
    //         `;
    
        
       

inquirer
    .prompt([
    {
        type: 'input',
        name: 'textInput',
        message: 'What would you like this logo to say?',
        
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Give a three-character hexadecimal or color keyword to indicate what color your text will be.',
    },
    {
        type: 'input',
        name: 'logoShape',
        message: 'Is the shape of this logo a triangle, circle, or square?',
        // choices: ['triangle', 'circle', 'square'],
    },
    {
        type: 'input',
        name: 'logoColor',
        message: 'Give a three-character hexadecimal or color keyword to indicate what color your logo will be.',
    },
    ])

    // .then((answers) => {
    // // Use user feedback for... whatever!!
    // writeFile('logo.svg', generateSVG(answers));
    // console.log('Created logo ;)');
    // })

    .then((answers) => writeFile('logo.svg', generateSVG(answers).toString()))
    .then(() => console.log('Created logo ;)'))

    .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
    console.log(error);
    }
    });



