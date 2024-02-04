/* 
3. Use the same rest countries and print all countries names, regions, sub-region and populations
*/
let XMLHttpRequest = require("xhr2");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function(){
    let output = JSON.parse(xhr.responseText);
    //console.log(output);
    for (let op of output){
    console.log("Name:", op.name.common);
    console.log("Region:", op.region);
    console.log("Subregion:", op.subregion);
    console.log("Populations:", op.population);
    
    }

}