function sumFirstAndLast(input) {
    arr = input.map(Number);
     sum = arr[0] + arr[input.length - 1];
     return sum;
}

console.log(sumFirstAndLast(['20','30', '40']));
sumFirstAndLast(['20','30', '40']);