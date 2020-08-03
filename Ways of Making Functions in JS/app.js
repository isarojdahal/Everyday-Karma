//First way

function namePrinter(name){

console.log("Hi "+name);
}

namePrinter("Leonardo Da Vinci");

//Second way

var namePrinter = function printName(name){

console.log("Hi "+name);
}

console.log(namePrinter); //prints function itself (the codes of function)
namePrinter("Wright Brothers");


//Third way

var namePrinter = (name) => console.log("Hi " + name);
//OR

var namePrinter = (name) => {console.log("Hi " + name)};


namePrinter("Wright Brothers");
