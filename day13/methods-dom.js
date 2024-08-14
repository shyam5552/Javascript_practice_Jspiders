// let a=document.getElementById("demo");
// a.textContent="hello-world"
// a.style.color="red"

// let d=document.getElementsByClassName("demo1");
// d[0].firstChild.textContent="hii how r u";

// d[0].style.border="2px solid red"
// d[0].style.color="yellow";
// d[0].style.backgroundColor="black";
// d[0].firstElementChild.textContent="contact";


// console.log(d[0].children);//only gives

//console.log(d[0].childNodes);// gives including text indexes.

// let a=document.getElementsByName("demo2");
// console.log(a);//nodlist

// a[1].style.color="red"

// let b=document.getElementsByTagName("h1");
// console.log(b);//html collection
// b[0].textContent="my name  is shyam from visakhapatnam";
// b[1].style.backgroundColor="green"

let a=document.querySelector("#demo");
console.log(a.textContent);// only gives forst one
a.textContent="welcome to the party"
a.style.color="red";
let b=document.querySelectorAll(".demo1");
console.log(b);//nodelist



b[0].firstElementChild.textContent="dengy";
let c=document.querySelectorAll("*");
console.log(c);

console.log(c[10]);


console.log(c[4].textContent);











