//for plain text css is not possible.... without using the any tag
let a=document.body
let c=a.children
console.log(a);

a.firstElementChild.firstElementChild.style.backgroundColor="yellow";


a.firstElementChild.firstElementChild.nextElementSibling.style.backgroundColor="green"

a.firstElementChild.firstElementChild.firstElementChild.firstElementChild.style.backgroundColor="red"

a.firstElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.style.backgroundColor="green"

a.firstElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.style.backgroundColor="blue"
a.firstElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.style.backgroundColor="pink"

console.log(a.firstElementChild.firstElementChild.firstElementChild.lastChild
);
a.firstElementChild.firstElementChild.firstElementChild.lastChild.textContent="web-tech"

