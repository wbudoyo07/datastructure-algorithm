/*This time no story, no theory. 
 The examples below show you how to write function accum:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"*/

function accum(s) {
	// your code
  let strArray = [];

    for(let i=0; i< s.length; i++){
        strArray.push(format(s[i], i + 1));
      }

      return strArray.join("-");

}

function format(str, num) {
    // format string
    let letter = str.toUpperCase();

    while(letter.length !== num) {
        letter += str.toLowerCase();
    }
    return letter;
}

accum("sas");

