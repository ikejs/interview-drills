// check if number is palindrome

const isPalindrome = (x) => {
    x = x.toString().split('')
    let leftIndex = 0;
    let rightIndex = x.length - 1;
    while (leftIndex < rightIndex) {
        if (x[leftIndex] != x[rightIndex]) {
            return false;
        }
        leftIndex += 1
        rightIndex -= 1
        return true;
    }
};

console.log(isPalindrome(12321)); // true
