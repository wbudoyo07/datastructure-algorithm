/*Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

Note: keep the original order of the names in the output. */

function friend(friends){
    //your code here
    let newFriend = [];
    console.log(friends.length);
    for(let i = 0;  i < friends.length; i++) {
        console.log(friends[i].length);
        if(friends[i].length  === 4) {
          console.log (friends[i]);
        console.log(newFriend.push(friends[i]));
        console.log(newFriend);

    
         console.log(newFriend);
        }
      }

      return newFriend;
  }

  friend(["Ryan","Testagain","Mark"]);