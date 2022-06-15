// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const arr = str.split('');
  let obj = {}
  for (let char of arr) {
    obj[char] = ++obj[char] || 1;
  }
  console.log(obj)
  let curr;
  for (let key in obj) {
    curr = obj[curr] > obj[key] ? curr : key;
  }
  return curr;
}

module.exports = maxChar;

maxChar('ab1c1d1e1f1g1')