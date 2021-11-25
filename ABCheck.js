// Have the function StringChallenge(str) take the str parameter being passed and return the 
// string true if the characters a and b are separated by exactly 3 places anywhere in the 
// string at least once (ie. "lane borrowed" would result in true because there is exactly 
// three characters between a and b). Otherwise return the string false.

function StringChallenge(str) {
  newStr = str.toLowerCase();
  for (let i = 0; i < str.length - 4; i++) {
    if ((newStr[i] == 'a' && newStr[i + 4] == 'b') || (newStr[i] == 'b' && newStr[i + 4] == 'a')) {
      return true;
    }
  }
  return false;
}