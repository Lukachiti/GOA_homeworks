import chalk from 'chalk';
import figlet from 'figlet';
import filget from "figlet";
import moment from "moment";
import inquirer from "inquirer";
import {v4} from 'uuid';






console.log(chalk.green('გამარჯობა!'));
console.log(chalk.red('შეცდომა!'));

figlet.text("Luka", function (err, data) {
  if (err) {
    console.log("Error bro");
    console.dir(err);
    return;
  }
  console.log(data);
});

console.log(moment().format())

// inquirer
//   .prompt([
//     {
//       name: "user_name",
//       type: "input",
//       message: "What is your name?",
//     },
//   ])
//   .then((answer) => {
//     console.log("Hello " + answer.user_name);
//   });

console.log(v4())




