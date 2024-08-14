let ol=document.querySelector("ol");

ol.addEventListener("click",(e)=>{
    // console.log("ol clicked");
    
        if(e.target.tagName==="LI"){
            console.log("li clicked");
            e.target.style.backgroundColor="red";
            
        }
})
//event deligation

