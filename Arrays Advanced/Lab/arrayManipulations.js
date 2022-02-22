function arrayManipulations(input) {
    let arr = input
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, firstName, secondName] = input[i].split(' ');
        firstName = Number(firstName);
        secondName = Number(secondName);

        switch (command) {
            case 'Add': add(firstName);
                break;
            case 'Remove': remove(firstName);
                break;
            case 'RemoveAt': removeAt(firstName);
                break;
            case 'Insert': insert(firstName, secondName);
                break;
        }
        
    }
    console.log(arr.join(' '));
    function add(el) {
        arr.push(el)
    }
    function remove(num) {
       arr = arr.filter(x => x != num);
    }
    function removeAt(index) {
       arr.splice(index, 1);
    }
    function insert(num, index) {
       arr.splice(index, 0, num);
    }
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);