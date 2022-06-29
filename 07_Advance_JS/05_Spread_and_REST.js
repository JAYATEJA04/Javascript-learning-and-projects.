// var maximumNum = Math.max(2, 3, 5, 4, 11, 54, 6,0,-9);
// console.log(maximumNum);

// var obj = {};
// Object.assign(obj, {a : 1, b : 2, c : 3}, {x : 11, y : 12, z : 13});
// console.log(obj);
// it combines both the arguements.

function forSum(arg1, arg2){
    return arg1 + arg2;
}

// The below code prints the elements in the array but they cannot be passed as an arguement, hence
// undefined will be printed along with it.
//      var myArr = [2, 3, 4, 5];
//      console.log(forSum(myArr));

var myArr = [2, 3, 4, 5];
console.log(forSum(...myArr)); //spread operator.
// it takes only the required number of elements from the array. The datatype should also be matched.

console.log();

function sumArgs(...args){
    console.log(args);                      // the args is always expected to be array. When we print them
    let sum = 0;                            // the the numbers will be combined and forms an array and thus
    for (const arg of args) {               // the array will be printed.
        sum += arg;
    }
    return sum;
}
console.log(sumArgs(2, 6, 7, 3, 9));
                
console.log();

function sumArgs2(arg1, arg2, ...args){                         // the arg1, arg2 are the first two elements passed in the function which
    console.log(args);                                          // are seperated from the rest of the elements. Rest of the elements will
    let multiply = arg1 * arg2;                                 // stay as the elements in an array. Even if we print args it will print
    let sum = 0;                                                // the elements in the arrays but not the first two elements.
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multiply];                                     // we return as an array which has sum and multiply in it. The sum will
}                                                               // the rest of the elements and the multiply will be the first two elements.
console.log(sumArgs2(2, 3, 4, 5, 6, 12, 8, 9));