exports.fizzBuzz = function(){
    for(i = 1; i<= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('Fizz Buzz');
        } else if(i % 3 === 0){
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if(!Array(i + 1).join(1).match(/^1?$|^(11+?)\1+$/)) {
            console.log('Prime')
        } else {
            console.log(i)
        }
    }
}
