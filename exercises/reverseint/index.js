// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
        // convert the number to string and reversed it 
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

/*function reverseInt(n) {
    // convert the number to string and reversed it 
  const reversed = n.toString().split('').reverse().join('');

//   if the number less than 0 times with negative -1
    if(n < 0) {
        return parseInt(reversed) * -1;
    } else {
        return parseInt(reversed);
    }

} */