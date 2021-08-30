/// Assignment code here
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// charachters allowed for password 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numbers allowed for password
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// letters allowed a-z
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// choices declared out of if statement so it can be called upon condition
var choices;

// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

// variable for uppercase conversion
alpha2 = alpha.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  // Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
 
  // if statement if nothing is entered after prompt "You must choose between 8 and 128"
  if (!enter) {
    alert("This needs a value");
} else if (enter < 8 || enter > 128) {
    //step 1 "Choose length of password"
    enter = parseInt(prompt("You must choose between 8 and 128"));

} else {
    // Step 2 "password lowercase,uppercase,number & special character choices"
    confirmLowercase = confirm("Will this contain Lowercase letters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");  
};

//if statement if nothing is entered after prompt "You must choose between 8 and 128"
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
     choices = alert("You must chose a criteria!");
}

// Else if for 4 positive options 
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

   choices = character.concat(number, alpha, alpha2);
}

// Else if for 3 positive options 
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number,alpha);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, alpha);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(alpha, alpha2);
}

// Else if for 2 positive options 
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(alpha);

} else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
  choices = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  choices = alpha.concat(alpha2);

} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);
}
// Else if for 1 positive option 
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = alpha;
}

// array placeholder for user length
var password = [];

// begin random selection of variables
for (var i = 0; i < enter; i++) {
var pickChoices = choices[Math.floor(Math.random() * choices.length)];
password.push(pickChoices);
}

// This joins the password array and converts it to a string
var ps = password.join("");
UserInput(ps);
return ps;
}

// This puts the password value into the textbox
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
