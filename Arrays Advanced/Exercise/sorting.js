function sorting(input) {
 let inputN = input.slice();
 let reversed = inputN.sort((a, b) => b - a);
 let result = [];
 for(let i = 0; i < input.length; i++) {
    
    if(i % 2 == 0) {
        result.push(reversed.shift());
    }
    if(i % 2 != 0) {
        result.push(reversed.pop());
    }
     
 }
 console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);