/*

Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

*/


let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();


    xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();



/*
a. Get all the countries from Asia continent /region using Filter function
*/

//console.log(xhr.responseText);

xhr.onload = function(){
    let output = JSON.parse(xhr.responseText);
    let filterData = output.filter(country => country.continents == "Asia");

    console.log(filterData);
    }

/*
b. Get all the countries with a population of less than 2 lakhs using Filter function
*/

// xhr.onload = function(){
//     let output = JSON.parse(xhr.responseText);
//     let filterPopulation = output.filter(populations => populations.population <= 200000);

//     console.log(filterPopulation);
//     }
/*
c. Print the following details name, capital, flag, using forEach function
*/
// xhr.onload = function(){
//     let output = JSON.parse(xhr.responseText);
//     output.forEach(country => {
//             console.log(`Name: ${country.name.common}
// Capital: ${country.capital[0]}
// Flag: ${country.flag}
// `);
//     });
// }

/*
d. Print the total population of countries using reduce function
*/

// xhr.onload = function(){
//     let output = JSON.parse(xhr.responseText);
//     let tempArr = [];
//     output.forEach(country =>{
//        // console.log(country.population);
//         return tempArr.push(country.population);
//     });
    
//     let filterPopulation = tempArr.reduce((firstValue, secondValue) => firstValue + secondValue);
//     console.log(filterPopulation);
//     }
/*
e. Print the country that uses US dollars as currency.
*/
// xhr.onload = function(){
//     let output = JSON.parse(xhr.responseText);
//     output.forEach(country =>{
//         if(country.currencies && country.currencies.hasOwnProperty("USD")){
//             console.log(`Country: ${country.name.common}`);
//             console.log("Currencies:", country.currencies);
//             console.log("\n");
//         }

//     });
// }


