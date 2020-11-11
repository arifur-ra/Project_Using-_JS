function assigningValues(val1, val2) {
    console.log(val1);
    val1 = val2;
    console.log(val1);
    //return is the only way to pass values outside function
}

let arrayO = ['a', 'b', 'c'];
let arrayC = ['a', 'b'];

assigningValues(arrayC, arrayO);
console.log(arrayC);
