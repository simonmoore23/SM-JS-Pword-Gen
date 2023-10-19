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

generateButton.addEventListener("click", function () {
  var length = getPasswordLength();
  if (length === null) 
  return; 
});