// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const a = charMap(stringA);
  const b = charMap(stringB);

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let char in a) {
    if (a[char] !== b[char]) {
      return false;
    }
  }

  return true;
}

function charMap(str) {
  const newStr = str.replace(/[^\w]/g, "").toLowerCase();
  console.log('%cindex.js line:21 newStr', 'color: #007acc;', newStr);
  const arr = newStr.split('');
  let obj = {}
  for (let char of arr) {
    obj[char] = ++obj[char] || 1;
  }
  return obj;
}

module.exports = anagrams;

anagrams('hello', 'llohe')
anagrams('Whoa! Hi!', 'Hi! Whoa!')