let gp=document.getElementById("grand-parent");
let p=document.getElementById("parent");
let c=document.getElementById("child");


// gp.addEventListener("click",()=>{
//     console.log("gp clicked");
    
// });
// p.addEventListener("click",()=>{
//     console.log("p clicked");
    
// });

// c.addEventListener("click",()=>{
//     console.log("c clicked");
    
// });

gp.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    console.log("gp clicked");
    
},true);
p.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()

    console.log("p clicked");
    
},true);

c.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()

    console.log("c clicked");
    
},true);
