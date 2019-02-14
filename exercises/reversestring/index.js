// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    //create an empty string called 'reversed
    //for each character in the provided string
    // take the character and add it to the start of 'reversed'
    // return the variable 'reversed'
    let reversed = '';
    for(let character of str) {
        reversed = character + reversed;
    }
    return reversed;
    }

reverse("apple");

module.exports = reverse;

// function reverse(str) {

//     return str.split('').reverse().join('');    
// }

//=====================================




// function reverse(str) {

//     return str.split('').reduce((reversed, character) => character + reversed , '');
// }