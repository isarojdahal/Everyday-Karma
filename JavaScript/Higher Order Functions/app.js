
// var myFunction = function(){

//     console.log("abc")
// }

// // myFunction();


// // function printResult(value){

// //     console.log(value)


// // }
// // function add(a,b,fxn){

// //     let sum = a+b;
// //     fxn(sum);

// // }

// // add(1,2, printResult)



// // function outer(c,d){

// //     function inner(a,b){

// //         console.log("inner a : "+a+" b : "+b);
// //     }

// //     return inner;
// // }

// // outer(1,2)(1,2);


// // function student(){
// //     this.name="Saroj";
// // }

// // // console.log(typeof student)

// // var s = new student();
// // console.log(s.name);


// function add(a,b){

//     return a+b;
// }

// // add.message = "Hello";
// add.message = function(){

//     return "Hello";
// }

// console.log(add.message())


//HIGHER ORDER FUNCTION
//function takes another function as an argument. 
// or 
//function takes another function as an argument and returns function return.

const doSquare =  (data)=>data*data;
const doCube = (data)=>data*data*data;
const doSquareRoot= (data)=>Math.sqrt(data);


function calculate(arr,fxn){

    let result = [];

    for(let i=0;i<arr.length;i++){

        result.push(fxn(arr[i]));
    }
    return result;

}

console.log(calculate([1,2,3,4], (data)=>data*data))
console.log(calculate([1,2,3,4], doCube))
console.log(calculate([1,2,3,4], doSquareRoot))


function abc(cb){

    //code

    cb();
}

abc(def)