window.fetch("http://localhost:8081/books")
  .then((data) => data.json())  // Return the parsed JSON
  .then((res) => {
     // Now res will contain the parsed JSON data
    res.map((ele) => {
        let demo = document.getElementById("demo"); 
        demo.innerHTML += `
         <tr>
            <td>${ele.book_id}</td>
            <td>${ele.book_name}</td>
            <td>${ele.book_publisher}</td>
            <td>${ele.book_author}</td>
         </tr>
        `;
    });
  })
  .catch(() => {
    console.log("error occurred");
  });
