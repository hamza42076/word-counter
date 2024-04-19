#! usr/bin/node 

import inquirer from "inquirer"

const answer : {
    sentence :string
}=await inquirer.prompt(
    [
        {
            name:"sentence",
            type:"input",
            message:"Enter your sentence "

        }
    ]
);
const word = answer.sentence.trim().split(" ")
console.log(word);
console.log(`The Total word in your sentence: ${word.length}`);



