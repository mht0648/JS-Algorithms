function isPalindrome(string) {
  string = string.toLowerCase();
  let charArr = string.split("");
  let validCharArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let letterArr = [];

  charArr.forEach((char) => {
    if (validCharArr.indexOf(char) > -1) letterArr.push(char);
  });

  if (letterArr.join("") === letterArr.reverse().join("")) return true;
  else return false;
}

console.log(isPalindrome("Madam I'm Adam"));
console.log(isPalindrome("Racing car"));
