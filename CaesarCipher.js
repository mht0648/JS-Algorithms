function caesarCipher(str, num) {
  num = num % 26;
  let lowerStr = str.toLowerCase();
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let newStr = "";

  for (let i = 0; i < lowerStr.length; i++) {
    let currentLetter = lowerStr[i];
    if (currentLetter === " ") {
      newStr += currentLetter;
      continue;
    }
    let currentIndex = alphabets.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex += 26;
    //console.log(newIndex);
    if (str[i] === str[i].toUpperCase())
      newStr += alphabets[newIndex].toUpperCase();
    else newStr += alphabets[newIndex];
  }
  return newStr;
}

console.log(caesarCipher("Zoo Keeper", 2));
console.log(caesarCipher("Big Car", -16));
console.log(caesarCipher("Javascript", -900));
