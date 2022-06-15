// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = str.split(' ');
  let newStr = '';
  let i = 0;
  while (i < words.length) {
    const spacing = i === 0 ? "" : " ";
    newStr = newStr + spacing + capitalizeFirstLetter(words[i]);
    i++;
  }
  console.log('%cindex.js line:18 newStr', 'color: #007acc;', newStr);
  return newStr; 
}

function capitalizeFirstLetter(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
}

module.exports = capitalize;

capitalize('look, it is working!')

// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
// }
