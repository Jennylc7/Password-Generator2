
// Function to prompt user for password options
var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var LowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var numChars = "0123456789".split("")
var specialCharacters = "!@#$%^&*?".split("")
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
  var numChars = prompt("How many characters would you like your password to be?");
  console.log(numChars);
  //checks if number is valid
  while(numChars <8 || numChars >128 ) {
   numChars = prompt("Invalid character length, please enter again.") 
  }
  var hasUppercase = confirm("Would you like upper case letters?")
  var hasLowercase = confirm("Would you like lower case letters?")
  var hasNumbers = confirm("Would you numbers?")
  var hasspecialCharacters = confirm("Would you like special characters?")
  console.log(hasUppercase)
  console.log(hasLowercase)
  console.log(hasNumbers)
  console.log(hasSpecialcharacters)
  
  If (hasUppercase)
    generate (hasUppercase)

  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?"
  function hasUppercase {
    let result;
    if (true)
      result = 'hasUppercase';
  } else  {
    result = 'false'
  } 
   function hasLowercase {
     let result;
     if (true)
      result = 'hasLowercase';
   } else {
     result = 'false'
   }
   function hasNumbers {
    let result;
    if (true)
      result = 'hasNumbers';
  } else  {
    result = 'false'
    function hasUppercase {
      let result;
      if (true)
        result = 'hasSpecialcharacters';
    } else  {
      result = 'false'

  let password = "";
  //create for loop to choose password characters
  // For loop
  var newPassword = "";
  for (var i = 0; i < x; i++) {
    newPassword += "generate random";
  }
   function getRandomInt(max) {
     return Math.floor(Math.random() * Math.floor(max));
   }
   console.log(getRandomInt(1))
   console.log(Math.random()); {

   }
