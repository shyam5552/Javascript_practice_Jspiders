demo();//hoisting
function demo(){
    console.log("hello world");
}
console.log(demo);// it will print the entire function as output
demo();// it give output as hello world
console.log(demo());// it will give the output as hello world and Undefined.
//console.log(demo.prototype.constructor);// it will print the entire copy of function

function add(a,b){
    let c=a+b;
    return c;

}
console.log(add(1,10));
console.log(add(1+4,10));

//prompt method is used to take input from users
// it is present in window object
let n=window.prompt("enter your name");
console.log(n);


