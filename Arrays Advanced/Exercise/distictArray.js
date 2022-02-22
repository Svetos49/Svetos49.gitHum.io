function distinctArray(input) {
   
    // for(let i = 0; i < input.length; i++) {
    //     let index = input.indexOf(input[i], i + 1);

    //     if(index !== -1) {
    //         input.splice(index, 1);
    //     }
    // }
    // console.log(input.join(' '));

    // let arr = input.filter((x, i, arr) => {
    //   let sliceArr = input.slice(0, i);
    //   if(!sliceArr.includes(x)) {
    //       return x;
    //   }
    // })
    // console.log(arr.join(' '));

    let arr = [];
    for(let el of input) {
        if(!arr.includes(el)) {
            arr.push(el);
        }
    }
    console.log(arr.join(' '));
}

distinctArray([1, 2, 3, 4, 2, 3, 2]);