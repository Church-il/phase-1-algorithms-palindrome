// index.js

function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split('').reverse().join('');
  return reversed === word;
}

/* 
  Pseudocode:
  1. Reverse the given string.
  2. Compare the reversed string with the original string.
  3. Return true if they are the same, otherwise return false.
*/

/*
  Explanation:
  The function `isPalindrome` checks if a string is a palindrome by:
  1. Reversing the string using `split('')`, `reverse()`, and `join('')`.
  2. Comparing the reversed string with the original string.
  3. Returning `true` if they match, indicating the string is a palindrome; otherwise, it returns `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
