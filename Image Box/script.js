function showBox(number){

    let box = getBox();
    box.style.display = "block";

    let image = document.createElement("img");
    image.src="/images/img"+number+".jpg";

    let content = document.getElementById("content");

    if(content.childNodes.length>0)content.innerHTML="";
    content.appendChild(image);

    window.addEventListener("keyup",function(key){

        if(key.keyCode==27)closeBox();

    })

}

function closeBox(){

    let box = getBox();
    box.style.display="none";


}

function getBox(){
    return document.getElementById("imageBox");
}