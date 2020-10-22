// Write a function that uppercases the first character of string
const upperCaseFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.split(str.charAt(0))[1];
}


// Write a function that uppercases the first letter of each word in a string
const upperCaseEachWord = (str) => {

  const words = str.split(" ");
  const upperCasedWords = [];

  words.map(word => {
    upperCasedWords.push(upperCaseFirst(word));
  });
  return upperCasedWords;
}


// Write a function that uppercases every other letter
const upperCaseEveryOtherLetter = (str) => {

  let newStr = "";

  str.split("").forEach((letter, i) => {
    i % 2
    ? newStr += letter.toUpperCase()
    : newStr += letter
  });

  return newStr;

}


// Write a function that removes all whitespace from a given string
const removeWhitespace = (str) => {

  let newStr = "";

  str.split(" ").map(word => {
    newStr += word;
  });

  return newStr;
}


// Write a function that removes only the extra whitespace from a given string (example: “ a        b ” → “a b”)
const removeExtraWhiteSpace = (str) => {

  const charList = str.split("");
  let newStr = "";

  charList.forEach((char, i) => {
    ((char == " ") && (charList[i+1] == " "))
    ? newStr += ""
    : newStr += char
  });
return newStr;
}





console.log(upperCaseFirst("hello world"));
console.log(upperCaseEachWord("the quick brown fox"));
console.log(upperCaseEveryOtherLetter("abcdefg"));
console.log(removeWhitespace("the quick brown fox with no spaces"));
console.log(removeExtraWhiteSpace("this sentence      had    too        much  space"));