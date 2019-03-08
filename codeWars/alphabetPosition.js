// function alphabetPosition(text) {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     let alphabetNumber = [];
//     let textNumber = text.toLowerCase().split('');
//     let answer = [];
//     for(let i = 0; i< alphabet.length; i++){
//         // get the number from alphabet 
//         alphabetNumber.push(i);

//         for(let j= 0; j< textNumber.length; j++){
//             // check  user input   with alphabet
//             // console.log(textNumber[j]);
//             console.log(alphabet[i]);
//             // if(textNumber[j] === alphabet[i]){
//             //     // add 1 with alphabetNumber since it start with zero. It needs to be convert to string first
//             //     // console.log(answer.push( parseInt(alphabetNumber[i] +1)));
//             //     answer.splice(j,0,parseInt(alphabetNumber +1));
//             // } 

//         }
//     }
//     // console.log(answer);
// }

// alphabetPosition("ab");

function alphabetPosition(text) {
    /*
    - Split text into an array.
    - Create an alphabet array.
    - Loop thru getting the letter at each position in the array and converting it to lowercase.
    - If the letter has an index in the alphabet array greater than -1, then push it into a new array.
    - Join the array to convert it back to a string with a space inb/w each number.
    */
      
      text.split("");
      var char = "";
      var arr = [];
      var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
      
      for(var i = 0; i < text.length; i++){
        char = text.charAt(i).toLowerCase();
        
        if(alphabet.indexOf(char) > -1){
          arr.push(alphabet.indexOf(char) + 1);
          var arr2 = arr.join(" ");
        }
        
      }
      return arr2;
    }
    
    console.log(alphabetPosition("The sunset sets at twelve o' clock."));
    console.log(alphabetPosition("The narwhal bacons at midnight."));