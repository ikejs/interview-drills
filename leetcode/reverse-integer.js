// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Challenge: what about negative number?


// ------------------------------------------------------------------


const reverse = (x) => {
    x = x + "";
	return x.split("").reverse().join("");
};

console.log(reverse(123));