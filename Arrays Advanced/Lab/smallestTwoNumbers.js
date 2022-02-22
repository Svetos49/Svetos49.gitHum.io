function smallestTwoNumbers(input) {
  input.sort((a, b) => a - b);
  let smallest = input.slice(0, 2);
     return smallest.join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
smallestTwoNumbers([30, 15, 50, 5]);