let bt=document.getElementById("demo");

// let color=window.prompt("enter color");

bt.innerHTML="click";


// bt.onmouseover=function(){
//     bt.style.backgroundColor=`${color}`
//     document.body.style.backgroundColor=`${color}`
// }

let i= document.querySelector("#container")

bt.onclick=()=>{
let display= i.classList.toggle("ssmb");
if(display){
    i.style.visibility="visible";

}else{
    i.style.visibility="hidden";
}
}

let bod=document.body;
console.log(bod);
bod.onclick=()=>{
    
    i.style.visibility="hidden";
    
}






