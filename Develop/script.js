// Assignment code here
/*
Citations

https://dev.to/code_mystery/random-password-generator-using-javascript-6a
*/


function generatePassword() {
  //user inputs for the password
  var pwLength = prompt("Enter the length of your password"); // length of the password
  var pwLowCase = prompt ("Do you want to have lower case characters in your password (Y or N)").toUpperCase(); // lowercase 
  var pwUpperCase = prompt ("Do you want to have upper case characters in your password (Y or N)").toUpperCase(); // uppercase
  var pwNumeric = prompt ("Do you want to have numbers in your password (Y or N)").toUpperCase(); // password with both numbers and letters 
  var pwSpecialChars =prompt ("Do you want to have special characters in your password (Y or N)").toUpperCase(); // password with special characters
  var password = ""; // string to store the password
  var noNumPassword = "";
  var noSpecialCharPassword = "";
  var normalPw = "";

  var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var noNumCharacters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var noSpecialChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for (var i = 0; i < pwLength; i++){
    var ranNum = Math.floor(Math.random() * characters.length);
    password += characters.substring(ranNum, ranNum +1);
  }

  for (var i = 0; i < pwLength; i++){
    var ranNum = Math.floor(Math.random() * noNumCharacters.length);
    noNumPassword += noNumCharacters.substring(ranNum, ranNum +1);
  }
  
  for (var i = 0; i < pwLength; i++){
    var ranNum = Math.floor(Math.random() * noSpecialChars.length);
    noSpecialCharPassword += noSpecialChars.substring(ranNum, ranNum +1);
  }

  for (var i = 0; i < pwLength; i++){
    var ranNum = Math.floor(Math.random() * normalChars.length);
    normalPw += normalChars.substring(ranNum, ranNum +1);
  }

  if ((pwLength >= 8 && pwLength <= 128) && (pwLowCase === "Y") && (pwNumeric === "Y") && (pwUpperCase === "Y") && (pwSpecialChars === "Y")){
    //alert(password);
    return password;
  }

  else if ((pwLength >= 8 && pwLength <= 128) && (pwLowCase === "Y") && (pwNumeric === "N") && (pwUpperCase === "Y") && (pwSpecialChars === "Y")){
    //alert(noNumPassword);
    return noNumPassword;
  }

  else if ((pwLength >= 8 && pwLength <= 128) && (pwLowCase === "N") && (pwNumeric === "Y") && (pwUpperCase === "Y") && (pwSpecialChars === "Y")){
    var allUpperCasePw = password.toUpperCase();
    //alert(allUpperCasePw);
    return allUpperCasePw;
  }

  else if ((pwLength >= 8 && pwLength <= 128) && (pwLowCase === "Y") && (pwNumeric === "Y") && (pwUpperCase === "N") && (pwSpecialChars === "Y")){
    var allLowerCasePw = password.toLowerCase();
    //alert(allLowerCasePw);
    return allLowerCasePw;
  }

  else if ((pwLength >= 8 && pwLength <= 128) && (pwLowCase === "Y") && (pwNumeric === "Y") && (pwUpperCase === "Y") && (pwSpecialChars === "N")){
    //alert(noSpecialCharPassword);
    return noSpecialCharPassword;
  }

  else if ((pwLength >= 8 && pwLength <= 128) && (pwLowCase === "Y") && (pwNumeric === "N") && (pwUpperCase === "Y") && (pwSpecialChars === "N")){
    //alert(normalPw);
    return normalPw;
  }


  else{
    return "Invalid inputs";
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
