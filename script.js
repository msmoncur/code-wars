/*Code Wars Mission 1
* We need a function that can transform a string into a number. What ways of achieving this do you know?
* Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/

const stringToNumber = function(str){
  return Number.parseInt(str, 10);
}
//Took me 2 and a half minutes from start to finish. Looked up syntax after to add radix.

/*Code Wars Mission 2 
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).*/
function opposite(number) {
  let invertedNumber = number; 
      if(invertedNumber > 0){
          invertedNumber = -invertedNumber
      } else if (invertedNumber <= 0){
         invertedNumber = -invertedNumber; 
}
  return invertedNumber; 
  }
/*This took me 20 minutes because I was trying to return the wrong variable and made my math more complicated than It needed 
to be. Could’ve just been one line return -number;  */

/*Code Wars Mission 3
Description: Task you get an array of numbers, return the sum of all the positive ones 
If there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr) {
  let total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

//This was okay. Math questions seem to take me longer

/*Code Wars Mission 4
Description: Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
- need to sort the array using the sort method 
- write a comparison function to compare the lengths of the strings  */
  // Return an array containing the same strings,
  // ordered from shortest to longest

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length); 
}

//knew the method had to look up the correct syntax

/*Code Wars Mission 5
Description: Make a simple function called greet that returns the most-famous "hello world!". */

function greet() {
  return "hello world!"; 
}

//This one was easy surpised it showed up in level 7


/*Code Wars Mission 6
Description: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/

function XO(str) {
    //be able to check string 
    //use a for loop to go through each letter
    //store count each letter
    //create a conditiional that compares number of x's and o's
    //return comparison
  if (str.charAt('x') === str.charAt('o')){
     const newStr = str.toLowerCase(); 
    
      let xCount = 0; 
      let oCount = 0; 
    
    for(let i = 0; i < newStr.length; i++) {
        const char = newStr[i]; 
      if(char === 'x'){
        xCount++; 
      }
      else if (char === 'o') {
        oCount++; 
      }
    }
  return xCount === oCount; }
  
}

//this took me a while.  had most of it right but gave up and checked the solution for what to return.

/*Code Wars Misson 7
Description: You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
* If the string's length is odd, return the middle character.
* If the string's length is even, return the middle 2 characters.*/

/*Logic 
- check to see if the string is even or odd
- return the middle charachters
- to check for center even string length/2-1 and string lenth
- connect both together 
- for odd find middle index by using Math.floor(length/2)
*/

function getMiddle(s) {
    if(s.length % 2 === 0){
       const firstMiddle = s.length / 2 - 1; 
       const secondMiddle = s.length / 2; 
       return s[firstMiddle] + s[secondMiddle]; 
    } else {
      middleLetter = Math.floor(s.length/2); 
      return s[middleLetter]; 
    }
}

/*Code Wars Mission 8
Description: Given an integral number, determine if it's a square number:
-to check find the square root of n if n is whole return true*/
  function isSquare(n){
  const newNum = Math.sqrt(n); 
  
  return Number.isInteger(newNum); // fix me
}
// took me a while because I had to look up how to find the square root 


/*Code Wars Mission 9
Description: You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
  -have to iterate over array (for loop)
  -if odd pull even number (conditional)
  -if even pull odd nuber
  - find out which count only has one  */

function findOutlier(integers){
  let oddCount = 0; 
  let evenCount = 0; 
  let lastOdd; 
  let lastEven; 
  
  for(let i = 0; i < integers.length; i++) {
    if(integers[i] % 2 === 1){
      oddCount++; 
      lastOdd = integers[i];
    }else{
      evenCount++; 
      lastEven = integers[i]; 
    }
  }
  
  if(oddCount === 1) {
    return lastOdd; 
  } else{
    return lastEven; 
  }
}

/* reminded me of the XoXo question and I made ths more difficult when it came to figuring out what to return. 
was also a way to solve this in just one line after reviewing solutions others came up with */

/* overall review of my codewars. I need to review working with math methods and pulling specific values. That seemed to be what
would trip me up the most. I worked on 3 other problems which were math missions but I could not solve those on my own */