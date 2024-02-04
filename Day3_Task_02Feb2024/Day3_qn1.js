/*

1. How to compare two JSON have the same properties without order

*/
 let obj1 = { name: "esakki raj", age: 22 };
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
