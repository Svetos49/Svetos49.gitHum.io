function lastKNumSequence(n, k) {
   let result = [1];
   
   for(let i = 1; i < n; i++) {
      let start = Math.max(0, i - k);
      let end = i - 1;
      let sum = 0;
       for(let j = start; j <= end; j++) {
           sum += result[j];
       }
       if(sum > 0) {
           result[i] = sum;
       }
  }
  console.log(result.join(' '));
}
lastKNumSequence(6, 3)

// function lastKNumbersSequance(n,k) {
//     let seq = [1];
    
//     for(let current = 1; current < n; current++) {
//         let start = Math.max(0, current - k);
//         let end = current - 1;
//         let sum = 0;
//         for(i = start; i <= end; i++) {
//             sum += seq[i];
            
//         }
//            if(sum > 0) {
//             seq[current] = sum;
//            }
       
         
//     }
//         console.log(seq.join(' '));
//     }

//     lastKNumbersSequance(6, 3);