var step =0;
var palindromeChainLength = function(n) {

  if(palindromeCheck(n)) {
    return 0;
  } 
    else{
    var reversed =  parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);

    var sum =  n + reversed;
    step +=1;
    console.log(sum);
      if(palindromeCheck(sum)) {

        return step;
      }


     return palindromeChainLength(sum);
      
  }
    
};

function palindromeCheck(a) {
  //   convert the number to string and reversed it
        var reversed =  parseInt(a.toString().split('').reverse().join('')) * Math.sign(a);
        if(a=== reversed) {
          return true;
        } 
          else {
            return false;
          }
  }