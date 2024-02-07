
// Anonymous function
// let oddNumber = function(numbers){
//     for (let i=0; i < numbers.length; i++){
//         if (numbers[i] %2 == 1){
//             console.log(numbers[i]);
//         }
//     }
// }

// oddNumber(numbers);


// // IIFE

// ((numbers) => {
//     for (let i=0; i < numbers.length; i++){
//         if (numbers[i] %2 == 1){
//             console.log(numbers[i]);
//         }
//     }
// }
// ) (numbers);

//var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var stringArray = ["apple", "orange", "mango", "banana", "strawberry"];

// let titleCaps = function(stringArray) {
//     for(let i=0; i < stringArray.length; i++){
//         var value = stringArray[i].charAt(0);
//         var changeUpperCase = value.toUpperCase();
//         var output = stringArray[i].substring(1)
//     console.log(changeUpperCase+output);
// }
// }

// titleCaps(stringArray);

// var stringArray = ["apple", "orange", "mango", "banana", "strawberry"];

// ((stringArray) => {
//     for(let i=0; i < stringArray.length; i++){
//         var value = stringArray[i].charAt(0);
//         var changeUpperCase = value.toUpperCase();
//         var output = stringArray[i].substring(1)
//     console.log(changeUpperCase+output);
// }
// } )(stringArray);

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = function(numbers) {
//     var total = 0;
//     for (let i=0; i < numbers.length; i++){
//         total = total + numbers[i];
//     }
//     console.log(total);
// }
// sum(numbers);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let checkPrimeNumbers = function(numbers) {
//     for (let i=0; i < numbers.length ; i++){
//         if (numbers[i] %2 === 0){
//         console.log(numbers[i]);
//     }

// }
//     }
// checkPrimeNumbers(numbers);

// let strArray = ["madam", "malayalam", "teacher", "language"];

// let checkPalindrome = function(strArray) {
//             palindromeArray = [];
            
//             for (let word of strArray){
//                 let reverse = "";
//             for (let index = strArray.length - 1; index >= 0; index--) {
//                 reverse = reverse + word[index];
//             }
        
//             if (word === reverse){
//                 palindromeArray.push(reverse);
//             }
//             return palindromeArray;
//             )
// }
// console.log(palindromeArray)
// }

// checkPalindrome(strArray);

// let duplicateArray = [1, 2, 3, 4, 4, 3, 2, 1, 5];

// let outputArray = (duplicateArray) => {
//     let uniqueArray = duplicateArray.filter((item, index) => {
//         return duplicateArray.indexOf(item) === index;
//     });
//     console.log(uniqueArray);
// }

// outputArray(duplicateArray);

// let array = [1, 2, 3, 4, 5];
// let k = 3;
// console.log(((array, k) => {
//     let n = array.length;
//      k = k % n;
//     if (k < 0) {
//         k = n + k;
//     }
//     let rotatedArray = [];
//     for (let i = 0; i < n; i++) {
//         rotatedArray[(i + k) % n] = array[i];
//     }
//     return rotatedArray;
   
// }
// )(array, k));

//let rotations = 3;
// console.log(rotateArray(array, rotations));\

// let  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let oddNumber = (numbers) => {
//     for (let i=0; i < numbers.length; i++){
//         if (numbers[i] %2 == 1){
//             console.log(numbers[i]);
//         }
//     }
// }

// oddNumber(numbers);

// let stringArray = ["apple", "orange", "mango", "banana", "strawberry"];

// let titleCaps = (stringArray) => {
//     for(let i=0; i < stringArray.length; i++){
//         var value = stringArray[i].charAt(0);
//         var changeUpperCase = value.toUpperCase();
//         var output = stringArray[i].substring(1)
//     console.log(changeUpperCase+output);
// }
// }

// titleCaps(stringArray);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let checkPrimeNumbers = (numbers) => {
//     for (let i = 0; i < numbers.length; i++) {
//         let isPrime = true;
//         if (numbers[i] === 1) {
//             isPrime = false;
//         } else if (numbers[i] > 1) {
//             for (let j = 2; j <= Math.sqrt(numbers[i]); j++) {
//                 if (numbers[i] % j === 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }
//         }
//         if (isPrime) {
//             console.log(`Prime number is: ${numbers[i]}`);
//         } 
//     }
// }

// checkPrimeNumbers(numbers);

// let arra1 = 

// let strArray = ["madam", "malayalam", "teacher", "language"];

// let checkPalindrome = (strArray) => {
//     palindromeArray = [];

//     for (let word of strArray) {
//         let reverse = "";
//         for (let index = word.length - 1; index >= 0; index--) {
//             reverse = reverse + word[index];
//         }

//         if (word === reverse) {
//             palindromeArray.push(reverse);
//         }
//     }
//     return palindromeArray;
// };

// console.log(checkPalindrome(strArray));

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [7, 8, 9, 10];
console.log(((array1, array2) => {
    let merged = [...array1, ...array2].sort((a,b) => a - b);

    let n = merged.length;
    if (n % 2 === 0){
        return (merged[Math.floor(n / 2) - 1] + merged[Math.floor(n / 2)]) / 2;
    }else {
            return merged[Math.floor(n / 2)];
        }
    }
)(array1, array2));
    
