let inputel = document.querySelector(".input");

console.log(inputel.value);
inputel.checked=false
let bodyel=document.querySelector("body")
let circle=document.querySelector(".circle")


coolorbody()

function coolorbody(){
    if (inputel.checked) {
        bodyel.style.backgroundColor = "black";
        circle.style.backgroundColor="black"
    } else {
        bodyel.style.backgroundColor = "white";
        circle.style.backgroundColor="white"
    }
    
}


inputel.addEventListener("input",()=>{
    coolorbody()
})