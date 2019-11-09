exports.fizzBuzz = function(val){
    if(val % 3 === 0 && val % 5 === 0){
        return 'Fizz Buzz';
    } else if(val % 3 === 0){
        return 'Fizz';
    } else if (val % 5 === 0) {
        return 'Buzz';
    } else if(!Array(val + 1).join(1).match(/^1?$|^(11+?)\1+$/)) {
        return 'Prime'
    } else {
        return val;
    }
}
