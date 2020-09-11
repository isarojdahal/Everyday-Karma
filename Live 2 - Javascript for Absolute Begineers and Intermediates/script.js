let container = document.getElementById("container")
const inputField = document.getElementById("inputField");
const resultField = document.getElementById("resultField");
var num1, num2;

function showResult() {

    if (num1 != undefined && num2 != undefined) {

        let result = parseInt(num1) + parseInt(num2);

        // console.log(`sum : ${result}`);

        resultField.value = num1 + "+" + num2 + "=" + result;
    } else alert("Enter numbers to add");


}

function add() {

    if (num1 != null) {
        num2 = inputField.value;
        clearField();
    } else {
        num1 = inputField.value;
        clearField();

    }

    console.log("num1 : " + num1 + " num2 : " + num2);


}

function clearField() {

    inputField.value = "";
    inputField.focus();


}

for (let i = 0; i <= 9; i++) {

    let button = document.createElement("button");
    button.innerText = i;
    button.value = i;
    button.addEventListener("click", setNumber);


    container.appendChild(button);





}

function setNumber(e) {

    inputField.value += e.target.value;
    // console.log(e.target.value);




}