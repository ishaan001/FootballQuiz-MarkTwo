const chalk = require('chalk');
var readlineSync = require('readline-sync');

var name = readlineSync.question("Hi ! , What's your name ? ");
console.log("Hello !, "+chalk.yellow(name));

var score = 0;
var questions = [
   {
     quest : "How many ballon Do'r messi has won ? ",
     options : ["5","4","6","1"],
     ans : "6"
    },
    {
    quest : "who is all time top scorer for UEFA Champions league ? ",
     options : ["messi","ronaldo","lewandoski","benzima"],
     ans : "ronaldo"
    },
    {
    quest : "who is all time top scorer for la liga ? ",
    options : ["messi","ronaldo","suarez","raul"],
     ans : "messi"
    },
    {
    quest : "player who got sold with highest transfer money",
     options : [ "couthino","Mbappe","Neymar","Dembele"],
     ans : "Neymar"
    }
]

var response = readlineSync.question("Let's see how much you are aware of the europe Press any key to start and N to exit !");

var expr = response.toLowerCase();
function Play(question, options, answer){
  var userAnswer = readlineSync.keyInSelect(options, question);
  if(options[userAnswer] === answer){
    score = score + 1;
  }
  console.log("your current score : "+chalk.blue(score));
}
if(expr === "n"){
  console.log("Your Final score is : "+ chalk.red(score));
}else {
  for( var i = 0; i<questions.length && expr != "n" ; i++){
    Play(questions[i].quest, questions[i].options, questions[i].ans);
    expr = readlineSync.question("press N to exit : ").toLowerCase();
  }

  console.log("Your Final score is : "+ chalk.green(score));
}