// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// var textArea = document.querySelector("#password");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//----------------------------------------------------------------------------------------------

// Section 1: Get references to DOM elements
var generateButton = document.querySelector("#generate");
var passwordTextarea = document.querySelector("#password");

// Section 2: Function to prompt the user for password length
function getPasswordLength() {
  var length = prompt("Enter the desired password length (8 - 128 characters):");
  if (length === null) return null; 

  // Validate the length
  if (isNaN(length) || length < 8 || length > 128) {
    prompt("Please enter a valid password length (8 - 128 characters).");
    return getPasswordLength(); 
  }

  return Number(length);
}

// Section 3: Function to prompt the user for character types
function getCharacterTypes() {
  var useLowercase = prompt("Include lowercase characters?");
  var useUppercase = prompt("Include uppercase characters?");
  var useNumbers = prompt("Include numbers?");
  var useSpecialChars = prompt("Include special characters?");

  // Ensure at least one character type is selected
  if (!(useLowercase || useUppercase || useNumbers || useSpecialChars)) {
    prompt("You must select at least one character type.");
    return getCharacterTypes(); 
  }

  return {
    useLowercase,
    useUppercase,
    useNumbers,
    useSpecialChars,
  };
}

// Section 4: Function to generate a random password based on criteria
function generatePassword(length, characterTypes) {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()";

  var availableChars = "";
  if (characterTypes.useLowercase) availableChars += lowercaseChars;
  if (characterTypes.useUppercase) availableChars += uppercaseChars;
  if (characterTypes.useNumbers) availableChars += numberChars;
  if (characterTypes.useSpecialChars) availableChars += specialChars;

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  return password;
}


generateButton.addEventListener("click", function () {
  var length = getPasswordLength();
  if (length === null) 
  return; 

  var characterTypes = getCharacterTypes();
  if (!characterTypes) 
  return;

  var password = generatePassword(length, characterTypes);
  passwordTextarea.value = password;
  
});