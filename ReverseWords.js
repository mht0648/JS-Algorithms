function reverseWords(str) {
  let strArr = str.split(" ");
  let reverseWordArr = [];

  strArr.forEach((word) => {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    reverseWordArr.push(reverseWord);
  });
  return reverseWordArr.join(" ");
}

console.log(reverseWords("Hello my World...!"));
