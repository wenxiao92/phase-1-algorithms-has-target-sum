function hasTargetSum(array, target){
  // Write your algorithm here
  let newArray = [...array]
  let finalArray = []
    
     for (i =0; i < array.length; i++) {
       newArray.shift()
      for(j = 0; j<newArray.length; j++){
        finalArray.push(array[i]+newArray[j])
      }
     }
  //return finalArray
  
  let result = finalArray.includes(target) //goes through array to see if the target value is in the array, assign a true or false value to the variable result
  return result
    
  }

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Prompt: functions takes in two arugments, one an array of numbers and one a target (also a number). Adds all pairs of numbers and see if it equals to target, if there's one case that is true, return true, if not return false
  solution 1:
  1. use target to subtract a number from the array, compare this result with all the numbers in the array. if there's a match then return true.
  2. if the first iteration is false, then continue through all numbers (perhaps we sort the array?)
  3. after all iteration and there is not 'true' then return false

  solution 2:
  1. Add up all number pairs and put it into a new array. Make loop so that numbers will not add each other twice
  2. if we can find the target number in the new array, then return true, otherwise return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
