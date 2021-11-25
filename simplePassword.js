// Have the function SimplePassword(str) take the str parameter being passed and 
// determine if it passes as a valid password that follows the list of constraints:
// 1. It must have a capital letter.
// 2. It must contain at least one number.
// 3. It must contain a punctuation mark or mathematical symbol.
// 4. It cannot have the word "password" in the string.
// 5. It must be longer than 7 characters and shorter than 31 characters.
// If all the above constraints are met within the string, the your program should 
// return the string true, otherwise your program should return the string false. 
// For example: if str is "apple!M7" then your program should return "true".

function StringChallenge(str) {

  var capitalLetter = false;
  var number = false;
  var punctuationMark = false;
  var password = false;
  var size = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str.toUpperCase()[i]) {
      capitalLetter = true;
      break;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (typeof (parseInt(str[i])) == 'number') {
      number = true;
      break;
    }
  }

  if ((/[.?!:,;*-\=+]/).test(str)) {
    punctuationMark = true;
  }

  if (!str.toLowerCase().includes('password')) {
    password = true;
  }

  if (str.length > 7 && str.length < 31) {
    size = true;
  }

  if (capitalLetter && number && punctuationMark && password && size) {
    return true;
  }
  else {
    return false;
  }

}