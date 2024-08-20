// window.localStorage.setItem("name","shyam")
// window.localStorage.setItem("id","s180222")


// console.log(window.localStorage.getItem("name"));

// window.sessionStorage.setItem("name","basha")
// console.log(sessionStorage.getItem("name"));


let btn=document.getElementById("submit");
console.log(btn);

btn.addEventListener("click",(e)=>{
    e.preventDefault()

    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;

   window.localStorage.setItem("name",name);
   window.localStorage.setItem("password",password);



    


})
//