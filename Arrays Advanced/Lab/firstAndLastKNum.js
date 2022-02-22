function firstAndLastKNum(input) {
    //let k = input.shift();
    let k = input.splice(0, 1)

 let firstK = input.slice(0, k);
 let lastK = input.slice(input.length - k, input.length);
 console.log(firstK.join(' '));
 console.log(lastK.join(' '));
}

function firstAndLastNumbers(input) {
    let k = input.shift();
    let firstElement = input.slice(0, k);
    let secondElement = input.slice(input.length - k);
    let firstResult = '';
    let lastResult = '';
    for(let i = 0; i < k; i++) {
        firstResult += firstElement[i] + ' ';
        lastResult += secondElement[i] + ' ';
    }
    console.log(firstResult);
    console.log(lastResult);
 }

firstAndLastKNum([2, 7, 8, 9]);

firstAndLastNumbers([2, 7, 8, 9]);