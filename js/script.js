//Changing Case
var strInput = prompt("Enter your name?", "anis");
console.log(strInput.toUpperCase());

var firstChar = strInput.charAt(0);
firstChar = firstChar.toUpperCase();

var otherChars = strInput.slice(1);
otherChars = otherChars.toLowerCase();
console.log(firstChar + otherChars);

//Measuring length and extracting parts
var favPhone = prompt("Enter your favourite phone model", "iPhone 10 XS Max");
var favPhoneLength = favPhone.length;
var lastChar = favPhone.charAt(favPhoneLength - 1);

console.log("The length of your favourite phone is: " + favPhoneLength);
console.log("The last character of your favourite phone is: " + lastChar);

//Finding Segments
var myCountry = "Pakistan";
var str = "n";
var findIndex = myCountry.indexOf(str);
console.log("Index of " + str + " is " + findIndex);

var username = "balochanis82@";
var illegalChars = ["@", ".", "!"];
var found = false;
var indexNum;
for (var i = 0; i <= illegalChars.length; i++) {
  indexNum = username.indexOf(illegalChars[i]);
  if (indexNum == -1) {
    found = true;
    break;
  }
}

if (indexNum === true) {
  console.log("You have successfully registered");
} else {
  console.log("Username is invalid");
}




var para = "The quick brown fox jumps over the lazy dog";
var para = para.toLowerCase();
var counts = 0;
var strToFind = "the";
for (var i = 0; i <= para.length; i++) {
  if (para.slice(i, i + 3) === strToFind) {
    ++counts;
  }
  // console.log(counts);
}
console.log(`The word ${strToFind} is found ${counts} times`);

//Finding character at a location
var strTxt = "Pakistani";
var indexNum = 2;
var charAtIndex = strTxt.charAt(indexNum);
console.log(charAtIndex);

// //Replacing characters
var strFind = "Hyder";
var strReplace = "Islam";
var cityName = "Hyderabad";
cityName = cityName.replace(strFind, strReplace);
console.log(cityName);

var message =
  "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
console.log(newMessage);

// //Rounding Numbers
var inputNum = +prompt("Enter any positive number", 3.45214);
var roundNum = Math.round(inputNum);
console.log("Round: " + roundNum);

var floorNum = Math.ceil(inputNum);
console.log("Floor: " + floorNum);

var ceilNum = Math.floor(inputNum);
console.log("Ceil: " + ceilNum);

var inputNegativeNum = +prompt("Enter any negative number", -2.678);
var roundNum = Math.round(inputNegativeNum);
console.log("Round: " + roundNum);

var floorNum = Math.ceil(inputNegativeNum);
console.log("Floor: " + floorNum);

var ceilNum = Math.floor(inputNegativeNum);
console.log("Ceil: " + ceilNum);

//Generating random numbers
var randomNum = Math.round(Math.random() * 5) + 1;
console.log(randomNum);

//Head and Tail game
var flipCoip = Math.round(Math.random() * 1) + 1;
var result;
if (flipCoip === 1) {
  result = "Head";
} else {
  result = "Tails";
}

console.log(result);

//Guess secret number
var userNum = +prompt("Enter a number between 1 to 10", 5);
var secretNum = Math.round(Math.random() * 9) + 1;

if (userNum === secretNum) {
  console.log("congratulations");
} else {
  console.log("please try again");
}

//Converts strings to numbers
var inputWeight = prompt("Enter enter your weight", "53.200kgs");
inputWeight = parseFloat(inputWeight);
console.log(`Your weight is: ${inputWeight}kgs ${typeof inputWeight}`);

//Converting strings to numbers, numbers to strings
var strInput = prompt(
  "Enter a number i will convert its type into number from string",
  472
);
console.log(`Your input is ${strInput} and its type is ${typeof strInput}.`);

var strToNum = parseInt(strInput);
console.log(
  `Your input ${strToNum} and its type is changed to ${typeof strToNum}.`
);

//Controlling the length of decimals
var percentage = (30 / 45) * 100;
percentage = percentage.toFixed(2);
console.log(percentage);
