// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// ------------------------------------------------------------------

const getIndicesForTargetSum = (numList, targetSum) => {

    for(i=0; i < numList.length; i +=1) {
        for(j=i; j < numList.length; j +=1) {
            if ((numList[i] != numList[j]) && (numList[i] + numList[j] == targetSum)) { // if the two comparing numbers don't have equal indices && both equal targetSum
                return [i, j] // return both indices
            }
        }
    }
}


numbers = [1, 12, 6, 9, 3];
target = 12; // find two indices in numbers that add up to 12

console.log(getIndicesForTargetSum(numbers, target))