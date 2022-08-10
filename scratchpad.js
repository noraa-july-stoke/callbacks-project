// let mySimpleReduce = function (arr, cb, acc=arr[0]) {
//     let i
//     if (acc===arr[0]) i=1;
//     else i=0
//     while(i<arr.length) {
//         let ele = arr[i]
//         acc = cb(acc, ele)
//         i++
//     }
//     return acc
// };


// let arr1 = [1,2,3,4]
// let cb1 = (num1,num2) => num1*num2;

// console.log(mySimpleReduce(arr1,cb1, 3))

let none = function (arr, cb) {
    for (let i=0; i<arr.length; i++) {
        if (cb(arr[i])) return false
    }
    return true
};


let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function (w) {
    return w.includes('e')});

console.log(result2);   // false
