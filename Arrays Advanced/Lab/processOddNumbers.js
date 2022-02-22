function processOddNumbers(input) {
//     let odd = [];
//     for(let i = 0; i < input.length; i++) {
//         if(i % 2 != 0) {
//           odd.push(input[i] * 2);
//         }
//     }
//     let result = '';
//     for(let i = odd.length - 1; i >= 0; i-- ) {
//         result += odd[i] + ' ';
//     }
//    return result;

let filtred = input.filter((v, i) => (i % 2) == 1);

let doubled = filtred.map(x => x * 2);
console.log(doubled.reverse().join(' '));

}

//console.log(processOddNumbers([10, 15, 20, 25]));
processOddNumbers([10, 15, 20, 25]);