
console.log(demo);
var demo=function (){
    console.log("hello world");
}
console.log(demo);
demo()



let add=function(a,b){
    return a+b;

}
console.log(add(10,9));

// let add1=function (){
//     let m= Number(prompt("enter a number m"));
//     let n=Number(prompt("enter a number n"));
//     return m+n;
// }
// console.log(add1());

function demo1(){
    let x=arguments[0]
    let y=arguments[1]
    return x+y

}
console.log(demo1(10,20));


let add2=function add3(a,b){
    return a+b;
    
}
//console.log(add3);// here the function expression get prioterized and function declaration will not work
console.log(add2(10,10));
