/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u']
  const modifiedStr1 = str.toLowerCase().split("")
  modifiedStr1.forEach((character)=>{
    vowels.forEach((vowel)=>{
      if (vowel===character){
        vowelsCount += 1;
      }
    })
  })
  return vowelsCount;
}

console.log(countVowels("kunaJJU"))
module.exports = countVowels;