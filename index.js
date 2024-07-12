const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const exemptWords = ['OO', 'API', 'Nan', '', 'to', 'for', 'is', 'can', 'we', 'it'];

function titleCased() {
  return tutorials.map(tutorial => { //iterating through each tutorial of the array
    return tutorial.split(' ').map(word => {//spliting the words to individual strings
      return word.charAt(0).toUpperCase() //capitalizing first character of each word
      + word.slice(1);//making the rest of the characters to lowwercase
    }).join(' ');//rejoining the word strings back to the sentence string
  });
}
const capital =titleCased()
console.log (capital)