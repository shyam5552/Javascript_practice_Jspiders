window.fetch("country.json")
.then((data)=>data.json())
.then((res)=>{

    res.map((ele)=>{

        let ip=document.getElementById("countries")
        ip.innerHTML+=`
        <option value="${ele.country}"></option>
        `
    })
})

let sub=document.getElementById("submit")
sub.addEventListener("click",()=>{
    
    let s=document.getElementById("country").value;
    console.log(s);
    //alert("data submitted")
})

// usinfg a async and await
// let demo=async()=>{
//     let x=fetch("country.json")
//      let x1 =await x;
//     console.log(x1);
//     let res=await x1.json()
//      res.map((ele)=>{
//         console.log(ele.country);
        
//      })
     
     
        
// }
// demo()