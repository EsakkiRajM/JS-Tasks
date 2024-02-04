/*

1. How to compare two JSON have the same properties without order

*/

/* let obj1 = { name: "esakki raj", age: 22 };
let obj2 = { age: 22, name: "esakki raj" };

function compareObjects(obj1, obj2) {
  for (let key in obj1) {
    // Check if the key exists in both objects
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      // Compare values
      if (obj1[key] !== obj2[key]) {
        return false; // Values are not equal
      }
    } else {
      return false; // Key doesn't exist in both objects
    }
  }
  return true; // All keys and values are equal
}

// Check if objects are equal
if (compareObjects(obj1, obj2)) {
  console.log("The objects are equal.");
} else {
  console.log("The objects are not equal.");
} 
*/

/*

2. Use the rest countries API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console

*/

let XMLHttpRequest = require("xhr2");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function(){
    let output = JSON.parse(xhr.responseText);
    //console.log(output);
    for (let op of output){
        console.log(op.flags);
    }
}