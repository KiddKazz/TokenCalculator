//Initializing Variables
var userInput; // will hold user input
const TWENTY_TOKEN = 20, //Token currency
      TEN_TOKEN = 10
      FIVE_TOKEN = 5
      TWO_TOKEN = 2
      ONE_TOKEN = 1;

var twentyCount = 0, //Will increase based on how many of each coin it takes to get the user's input.
    tenCount = 0,
    fiveCount= 0,
    twoCount= 0,
    oneCount = 0;
    attempts = 1; //How many times the user can fail to enter the correct input.
  
//Greetings
alert('Hello there traveler! Welcome to the token calculator.')
alert('This program is designed to show you how much of each coin it\'ll\ take to get the number you enter.');

userInput = parseInt(prompt('Please enter a number between 20 and 100'));

//Processing 

function tokenCheck(tokens){
    var twenty_remainder = userInput % TWENTY_TOKEN; //Calculates the remainder of what the user input as a number
    twentyCount = userInput / TWENTY_TOKEN; //Divides the user input by the token amount. Adds it to our counter variables

    var ten_remainder = twenty_remainder % TEN_TOKEN; //Finds the remainder after we divide by 10
    tenCount = twenty_remainder / TEN_TOKEN; //Divides the previous remainder by the ten token value

    var five_remainder = ten_remainder % FIVE_TOKEN; //Finds the remainder after we divide by 5
    fiveCount = ten_remainder / FIVE_TOKEN;//Divides the previous remainder by the five token value

    var two_remainder = five_remainder % TWO_TOKEN; //Finds remainder after division by 2
    twoCount = five_remainder / TWO_TOKEN; //Divides the previous remainder by the two token value

    var one_remainder = two_remainder % ONE_TOKEN; //Gives us the remainder from what was left after all the above modulus.
    oneCount = two_remainder / ONE_TOKEN; //Divides the remainder of what's left by 1's.
    return twentyCount, tenCount, fiveCount, twoCount, oneCount;
}


//Output 
while (attempts < 3){ //Loop will iterate while attempts is not 3
     if (userInput < 20 || userInput > 100){ //Checks user input to be between 20-100
        userInput = parseInt(prompt(`Let's try that again.. Please only enter a number between 20 and 100.`));
        attempts++;
        if (userInput < 20 || userInput > 100){ //Gives the user one more chance 
            userInput = parseInt(prompt('Not quite... I\'\ll give you another chance though!'));
            if (userInput < 20 || userInput > 100){
                alert('Sorry! Program will end due to incorrect input.');
                document.write('<p> If you wish to try again please reload the page, or <a href="index.html">click here.</a></p>');
                document.write('<p><i>Have a great day!!</i></p>');
                break;
            }
        }
     } else if (isNaN(userInput) == true) { //Checks userInput and makes sure it IS a number.. and not something else.
        attempts++;
        userInput = parseInt(prompt(`Let's try that again.. Please only enter a number between 20 and 100.`));
        if (isNaN(userInput) == true) { //If cancel is put in twice or if user put incorrectly too many times.
            alert('Sorry! Program will end due to choosing cancel twice.');
            document.write('<p> If you wish to try again please reload the page, or <a href="index.html">click here.</a></p>');
            document.write('<p><i>Have a great day!!</i></p>');
            break;
        }
     } else {
        tokenCheck(userInput);
        document.write(`<p>So you're trying to get to a total of ${parseInt(userInput)} right?</p>`);
        document.write(`<p>You need ${parseInt(twentyCount)} token(s) worth twenty <br> ${parseInt(tenCount)} token(s) worth ten <br> ${parseInt(fiveCount)} token(s) worth five<br> ${parseInt(twoCount)} token(s) worth two <br> finally ${parseInt(oneCount)} token(s) worth one.</p>`);
        document.write('<p>If you wish to try again please reload the page, or <a href=\"index.html\">click here.</a></p>');
        document.write('<p><i>Have a great day!!</i></p>');
        break;
     }
}