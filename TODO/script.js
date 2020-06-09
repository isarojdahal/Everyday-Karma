
const field = document.getElementById("todoTextField");
field.addEventListener("keypress",function(e){

   if(e.keyCode==13)addTODO();

})

function addTODO(){

    const todoTextField = document.getElementById("todoTextField");

    let todoTextFieldValue = todoTextField.value;

    const myList = document.getElementById("myList");

    if(todoTextFieldValue!=""){

        //add to myList div

        const li = document.createElement("li");
        li.innerHTML = todoTextFieldValue;
        myList.appendChild(li)

        let date = new Date();

        const  small= document.createElement("small")
        small.innerHTML = "<br/>"+date.toLocaleDateString()
        li.appendChild(small)

        const span  = document.createElement("span");
        span.className="close";
        span.innerHTML="x";
        //<span class="close">x</span>

        span.addEventListener("click",function(){

            li.remove();

        });

        li.appendChild(span);


        todoTextField.value="";
    }
    else alert("Enter fields.")

}