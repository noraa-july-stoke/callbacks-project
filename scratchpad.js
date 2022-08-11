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

// let none = function (arr, cb) {
//     for (let i=0; i<arr.length; i++) {
//         if (cb(arr[i])) return false
//     }
//     return true
// };


// let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function (w) {
//     return w.includes('e')});

// console.log(result2);   // false


let suffixCipher = function (str, obj) {
    let wordArr=str.split(` `);
    let keys = Object.keys(obj);
    wordArr.forEach(word => {
        for (let suffix of keys) {
            if (word.endsWith(suffix)) {
                wordArr[wordArr.indexOf(word)] = obj[suffix](word)
                console.log(word)
            }
        }
    })
    return wordArr.join(' ')
};


let cipher1 = {
    ly: function (word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function (word) {
        return word + 'r';
    }
};

//console.log(cipher1.ly('quietly'))

console.log(suffixCipher('quietly and gently visualize', cipher1));
//quietlee and gentlee visualizer
