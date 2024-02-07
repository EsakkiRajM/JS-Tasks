/*
1. Create your own resume data in JSON format
*/

let myResume = {
        "Name": "Esakki Raj",
        "Age": 22,
        "Phone no": 6385810931,
        "Address": "Adambakkam, chennai - 600 088",
        "Father name": "Muppudathi",
        "Nationality": "Indian",
        "Languages known": ["Tamil","English"],
        "Email": "esakkiraj1150@gmail.com",
        "skills": ["Front-end", "Back-end","Database"],
        "Front-end Technologies": ["HTML", "CSS", "JS", "TS", "React JS"],
        "Back-end Technologies": ["Node js", "Express js"],
        "Database": ["Mongo DB", "Postgresql"]

        
}

/*
2. Fot the above JSON, iterate over all for loops (for, forEach, for in, for of)
*/

// For in loop

for (let key in myResume){
        console.log(`${key}: ${myResume[key]}`);
}

// for of loop

// let entry = Object.entries(myResume)

// for (let key of entry){
//         console.log(`${key[0]}: ${key[1]}`);
// }

// for loop

// let entry = Object.entries(myResume)

// for (let key = 0; key < entry.length; key++){
//         let output = entry[key];
//         console.log(`${output[0]}: ${output[0]}`);
// }

// for Each loop

// let entry = Object.entries(myResume);
// entry.forEach(entry1 => {
//     console.log(`${entry1[0]}: ${entry1[0]}`);
// });
