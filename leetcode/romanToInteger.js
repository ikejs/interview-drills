// convert a roman numeral string to its decimal value


const romanToInt = (romanStr) => {
  num = 0;
  
  // add to num for each roman numeral
  romanStr.split().forEach((char) => {
    switch(char) {
      case "I":
        num += 1;
      break;
      case "V":
        num += 5;
      break;
      case "X":
        num += 10;
        break;
      case "L":
        num += 50;
        break;
      case "C":
        num += 100;
        break;
      case "D":
        num += 500;
        break;
      case "M":
        num += 1000;
        break;
    }
  });


  // find pairs (IV, IX...)
  pairs = [];
  romanStr.split().reduce((result, value, index, array) => {
    if (index % 2 === 0)
      pairs.push(romanStr.split().slice(index, index + 2));
    return result;
  }, []);

  // subtract from num (IV => -2) because I=1 & V=5. We don't want 6, we want 4.
  pairs.forEach((char) => {
    switch(char) {
      case "IV":
        num -= 2;
        break;
      case "IX":
        num -= 2;
        break;
      case "IL":
        num -= 2;
        break;
      case "IC":
        num -= 2;
        break;
      case "ID":
        num -= 2;
        break;
      case "IM":
        num -= 2;
        break;
    }
  });

  return num;
};


console.log(romanToInt("XVII"));