window.fetch("fetch-data.json")
    .then((data) => data.json())
    .then((res) => {
        let categories = [];
        res.forEach((item) => {
            if (!categories.includes(item.catagery)) {
                categories.push(item.catagery);
            }
        });

        let datalist = document.getElementById("items");
        categories.forEach((category) => {
            datalist.innerHTML += `<option value="${category}"></option>`;
        });
    })
    .catch(() => {
        console.log("Error fetching data.");
    });

    function showres(event) {
        event.preventDefault(); // Prevent the form from submitting and reloading the page
    
        let selectedValue = document.getElementById("item").value; // Get the value entered in the input field
    
        window.fetch("fetch-data.json")
            .then((data) => data.json()) // Convert the fetched data to JSON
            .then((res) => {
                // Filter the data to find items that match the selected category
                let filteredItems = res.filter((ele) => ele.catagery === selectedValue);
                
                filteredItems.map((ele)=>{
                    let imglis=document.getElementById("img-list")
                    imglis.innerHTML+=`
                    <li><img src="${ele.image_url}"></li>
                    `

                })
                console.log(document.getElementById("img-list").innerHTML);
                
                
                // Log the filtered items to the console    
                // Optional: You can add further logic here to display the filtered items in the UI if needed
            })
            .catch(() => {
                console.log("Error fetching data.");
            });
    }