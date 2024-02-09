/*
1. The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
*/

class Movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

}

let movies1 = new Movie("Iron Man", "Marvel", "R");
let movies2 = new Movie("Guardians of the galaxy", "Marvel", "PG-13");

console.log(movies1);
console.log(movies2);

/*
b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided. 
*/

// class Movie {
//     constructor(title, studio, rating="PG-13"){
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }

// }

// let movies1 = new Movie("Iron Man", "Marvel");
// let movies2 = new Movie("Guardians of the galaxy", "Marvel");

// console.log(movies1);
// console.log(movies2);

/*
C)  Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
*/

// class Movie {
//     constructor(title, studio, rating){
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
//     getPG(movie, rating){
//         return movie.filter(movies => movies.rating === rating)

//     }

// }

// let movies = [];

// let movies1 = movies.push(
//     new Movie("Iron Man", "Marvel", "PG"),
//     new Movie("Guardians of the galaxy", "Marvel", "PG"),
//     new Movie("Singam", "Red giant movies", "G"),
//     new Movie("Love today", "Lyca", "PG"),
//     new Movie("Captain miller", "Sun pictures", "G")
// )

// let output = new Movie("Joe", "Lyca", "PG"); 

// console.log(output.getPG(movies, "PG"));

/*
D) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
*/

// class Movie {
//     constructor(title="Casino Royale", studio="Eon Productions", rating="PG13"){
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }

// }

// let movies1 = new Movie();
// console.log(movies1);

/*
2. Circle Class
*/
// class Circle{
//         constructor(radius= 1.0, color = "red"){
//             this.radius = radius
//             this.color = color
//         }
//         getRadius(){
//             return this.radius;
//         }
//         setRadius(radius){
//             this.radius = radius;
//             console.log(this.radius);
//         }
//         getColor(){
//             return this.color;
//         }
//         setRadius(color){
//             this.color = color;
//             console.log(this.color);
//         }

//         toString(){
//             let newArray = [];
//             newArray.push(this.radius, this.color) ;
//             //toString();
//             console.log(newArray);
//         }
//         getArea(){
//             return 22/7 * this.radius * Math.pow(this.radius, this.radius);
//         }
//         getCircumreference(){
//             return 2 * this.radius * 22/7;
//         }
// }


// let output = new Circle();

//console.log(output.radius, ",",  output.color);

// console.log(output.getRadius());
//output.setRadius("red");
//console.log(output.getColor());

//output.setRadius("red");

//output.toString();
//console.log(output.toString());


// console.log(output.getArea());

//console.log(output.getCircumreference());

/*

3. Write a “person” class to hold all the details.

*/

// class Person{
//     constructor(name, age, address, email){
//         this.name = name,
//         this.age = age,
//         this.address = address,
//         this.email = email
//     }
//     getName(name){
//         return this.name = name;
//     }
//     getAge(age){
//         return this.age = age
//     } 
//     getAddress(address){
//         return this.address = address;
//     }
//     getEmail(email){
//         return this.email = email;
//     }
    
// }

// let output = new Person("Esakki Raj", 22, "Chennai", "esakkiraj1150@gmail.com");

// console.log(output);

/*
4. Write a class to calculate the Uber price
*/

// class Price {
//     constructor(fromPlace, toPlace, km){
//         this.fromPlace = fromPlace,
//         this.toPlace = toPlace,
//         this.km = km
//      }
//     getFromPlace(fromPlace){
//         return this.fromPlace = fromPlace;
//     }
//     getToPlace(toPlace){
//         return this.toPlace = toPlace;
//     }
//     getKM(km){
//         return this.km = km;
//     }
//     getPrice(){
//         return this.km * 20;
//     }
// }

// let output = new Price("Guindy", "Anna nager", 10, 100);

// // Enter the values in console.log()

// console.log(output.getFromPlace(`From Place: Guindy`));

// console.log(output.getToPlace(`To Place: Ashok Nagar`));

// console.log("KM:", output.getKM(5));

// console.log("Price:", output.getPrice());

