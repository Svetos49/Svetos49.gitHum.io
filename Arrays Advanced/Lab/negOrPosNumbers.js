function negOrPosNumbers(input) {
  let result = [];

  for(let num of input) {
      if(num < 0) {
          result.unshift(num);
      } else if(num >= 0) {
          result.push(num);
      }
    }
    return result.join('\n');
}

console.log(negOrPosNumbers([7, -2, 8, 9]));
negOrPosNumbers([7, -2, 8, 9]);