function sortBy2Criteria(input) {
   let sorted = input.sort(sortNames);
   console.log(sorted.join('\n'));
   function sortNames(a, b) {
       let firstCr = a.length - b.length;
       if(firstCr == 0) {
         return a.localeCompare(b);

       }
       return firstCr;
   }
   
}

sortBy2Criteria(['alpha', 'beta', 'gamma']);