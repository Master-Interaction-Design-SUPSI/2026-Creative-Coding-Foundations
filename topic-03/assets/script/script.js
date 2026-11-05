const container = document.getElementById("container");

// ---------------------------------------
// Array

const sports = ["judo","karate","cycling","swimming"];

console.log(sports);

console.log(sports[1]);
console.log(sports[3]);
console.log(sports.length);
console.log(sports[sports.length - 1]);

// add an item to the array
sports.push("boxe");
console.log(sports);

// remove 1 item from the array starting from the index 2
sports.splice(2,1);
console.log(sports);

sports[1] = "yoga";
console.log(sports);

// loop the array and add the item in a list item
// for (const sport of sports){
//     const newLi = document.createElement("li");
//     newLi.textContent = sport;
//     container.appendChild(newLi);
// }

const sortedSports = sports.sort((a,b) => a.localeCompare(b));

const numbers = [10.2, 373, 29, 390, 1394, 394];
const sortednumbers = numbers.sort((a,b) => b - a );

const filteredSports = sports.filter(
    sport => sport != "karate"
)

const filteredNumbers = numbers.filter(
    number => number > 200    
)

const doubledNumbers = numbers.map(
    number => "The number is " + number
)


for (const item of doubledNumbers){
    const newLi = document.createElement("li");
    newLi.textContent = item;
    container.appendChild(newLi);
}

// ---------------------------------------
// Objects

const firstStudent = {
  name: "Alice",
  age: 25,
  address: {
    street: "Corso Elvezia 6",
    city: "Lugano"
  },
  hobbies: [
    "judo",
    "karate",
    "cycling",
    "swimming",
    "walking"
  ]
};