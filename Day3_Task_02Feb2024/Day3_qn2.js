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
        console.log(op.flag[0]);
    }
}
