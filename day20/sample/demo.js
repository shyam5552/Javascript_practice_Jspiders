window.fetch("demo.json")
  .then((data) => data.json())  // Return the parsed JSON
  .then((res) => {
     // Now res will contain the parsed JSON data
    res.map((ele)=>{
        let demo=document.getElementById("demo"); 
        demo.innerHTML+=`
         <tr>
            <td>${ele.name}</td>
             <td>${ele.id}</td>
            
         </tr>
        `

    })
  })
  .catch(()=>{console.log("error occurred");
  })

 
  

  
