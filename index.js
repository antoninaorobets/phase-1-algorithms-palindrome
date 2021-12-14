function isPalindrome(word) {
  console.log( typeof word)
   const l = word.length
   const iter = Math.floor(word.length/2 )
   let e = 0
 
 
   for (let i = 0; i< iter; i++){
     if (word[i] !== word[l-i-1]) {
       e = e+1; 
   }}
   
   
   switch (e === 0) {
     case true: return true;  break;
     case false: return false;  break;
   }
 }

/* 
  create revers  string
  compare

  compare first and last character till the middle:
  count string length
  compare a[i] and a[l-i] for l/2 times
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mood o doom"));
}

module.exports = isPalindrome;
