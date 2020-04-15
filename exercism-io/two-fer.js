// Given a name, return a string with the message:
  // One for X, one for me.
// Where X is the given name.

// However, if the name is missing, return the string:
  // One for you, one for me.



const two_fer = (input) => {
  let name = input ? input : "you";
  return `One for ${name}, one for me.`;
}

console.log(two_fer("Ike"));
console.log(two_fer("Bob"));
console.log(two_fer());