
const id = 10;

// const user = {
//     id,
//     name:"Prashant Ghimire",
//     profileURL :"https://ab.com/1/a.jpeg",
//     message:"Namaste"
// };

// const updateUser = {...user, address:"Kathmandu", interest:"Astrology", name:"Saroj Dahal"};
// console.log(updateUser)

// // const id = user['id'];
// // const name = user.name;
// // const profileURL = user.profileURL;

// // const {id:userID, name:userName} = user;

// const {name:{first="Prashant"}} = user;

// console.log(first);


// const date = ['2021','01','01'];

// const year= date[0];
// const month = date[1];
// const day = date[2];

// const [year, , ,text] = ['2021','01','01','abc'];


// console.log(year, text)

// const planets = ["Venus","Mercury"];
// const shadowPlanets = ["Rahu","Ketu"];

// const allPlanets = [...planets,"Saturn",...shadowPlanets,"Jupiter"];

// const [a,...rest] = [1,2,3,4];
// console.log(a,b);


function add(a,b,...rest){

    var sum = 0;
    sum+=a;

    for(let i=0;i<rest.length;i++){

        sum+=rest[i];
    }
    return sum;
}

console.log(add(1,2,3,4,5,6,3))

// add(1,2,3,4)

console.log(a,b,c)