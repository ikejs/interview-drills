const everyOther = (str) => {

  let final = "";

  str.split('').map((char, i) => {
    if (i%2 == 0) {
      final += char
    }
  });

  return final
  
}

console.log(everyOther("Hello World!"));
