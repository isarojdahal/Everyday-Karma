// document.write("Javascript Crash Course from external JS");

//Console

console.log("Hello I am " + "Console");
console.log("1", "2", "3");
console.warn("this is warning message");
console.error("this is error message");

//var,let and const

var fruit = "apple";
console.log(fruit);

let another_fruit = "mango";
console.log(another_fruit);

another_fruit = "stawberry";
console.log(another_fruit);

const book = "5 5AM Club";
console.log(book);

// book = "The Alchemist";
// console.log(book);

//Datatype

//int age = 10;
let age = 10; //Integer datatype
let name = "Saroj"; //String datatype
let money = 100; //Integer datatype
let grade = 4.0; // decimal datatype
let microphone = null; //null datatype
let gadgets; //undefined datatype
let isProgrammer = true; // boolean datatype
let person = { name: "Saroj Dahal", age: 21 }; // Object Datatype

console.log(age, name, money, grade, microphone, gadgets, isProgrammer);

console.log(typeof age);
console.log(typeof name);
console.log(typeof gadgets);

//Loops & Coditional Statement

let i = 0;
for (i; i <= 10; i++) {
  console.log(i);
}

console.log("value of i : " + i);

i = 10;
while (i != 0) {
  console.log("i : " + i);
  i -= 2; // i = i-2;
}

if (i == 0) console.log("i is zero");

//Functions

function printName(name) {
  console.log("Given name : " + name);
}

printName("Hritik Roshan");

let showName = function printName(name) {
  console.log("Given name : " + name);
};
showName("Hari");

let displayName = (name) => console.log("Given name : " + name);
displayName("Shyam lal");

//Common String functions
//lowercase,uppercase,length

let acid = "Hydrochloric acid";
console.log("intially : " + acid);
console.log(acid.toLowerCase());
console.log(acid.toUpperCase());
console.log(acid.length);
console.log("Index of y : " + acid.indexOf("y"));
console.log(acid.charAt(1));

//Arrays & Common Array Functions
//push,pop,shift,unshift,sort,reverse,concat,isArray

// In Javascript  it is Array, In Python it is list
let structures = ["methane", "ethane", "propane", "beutane"];
console.log(structures);
// let structures2 = new Array("methane", "ethane", "propane", "beutane");
structures.pop();
console.log(structures);

structures.push("pentane", "hexane");
console.log(structures);

structures.shift();
console.log(structures);

structures.unshift("test1");
console.log(structures);

structures.sort();
console.log(structures);

structures.reverse();
console.log("In reverse order : " + structures);

let randomElement = "Helium";
console.log(typeof randomElement);
console.log(Array.isArray(randomElement));

let terms = ["Sedimentation", "Decantation", "Distillation", "Filtration"];

let structuresAndTerms = [];
structuresAndTerms = structures.concat(terms);
console.log(structuresAndTerms);

let newTerms = terms.join(",");
console.log(newTerms);

//JSON

//in python objects are called dictionary
let data = { id: "1", username: "username123", email: "username@gmail.com" };

let data2 = { id: "2", username: "ram", email: "ram@gmail.com" };

let fetchedData = [data, data2];
console.log(fetchedData);
console.log(JSON.stringify(fetchedData));

//DOM (Document Object Model), Diff. betn document & window
//<img src="a.jpg" height="" width="">

const paragraph = document.getElementById("mypara");

//to add 1. textNode  2. innerHTML  3. innerText

paragraph.innerText += " this is me"; // from innerText
paragraph.innerHTML += " <b> another</b> text"; //inner HTML

const h1 = document.createElement("h1"); //<h1></h1>
const headingText = document.createTextNode("Heading"); // Heading
h1.appendChild(headingText); //<h1>Heading</h1>

paragraph.appendChild(h1);

//Events

function showText(event) {
  //   console.log(event.value);
  document.getElementById("writtenText").innerText = event.value;
}

document.getElementById("clickBtn").addEventListener("click", showMessage);

function showMessage() {
  alert("This is another message");
}

//Ajax
// Simple Signup validation
