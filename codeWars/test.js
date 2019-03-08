function greet(first, second) {
    if(first) {
        if(second) {
            return 'Hello ' + first + ', this is ' + second + '.';
        } else {
            return 'Hello ' + first + '.';
        }
    } else {
        return 'Hello there.'
    }
}

 console.log(greet());