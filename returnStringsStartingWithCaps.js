// Given a list of n strings with mixed casing, return a new list of all
// strings that start with a capitalized letter.

strings = [
  "erisrgkhsejr",
  "hnskegrhse",
  "Kieuhgisg",
  "rhgrkhjg",
  "Buirghkssr"
]

const getCapitalStrings = (listOfStrings) => {
  const capitalStrings = [];
  listOfStrings.map(str => {
    if (str[0] == str[0].toUpperCase()) {
      capitalStrings.push(str);
    }
  });
  return capitalStrings;
}

console.log(getCapitalStrings(strings));