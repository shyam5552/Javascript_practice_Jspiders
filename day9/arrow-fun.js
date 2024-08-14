//we can use $ and _ if we dont have anu parameters to arrow function
// let demo=()=>console.log('hello');
// demo();
// let demo1= a =>console.log('hello'+a);

// demo1(10);


// let operation=(a,b,task)=>{
//     let c=task(a,b)
//     return c;

// }
// let a=Number(prompt("enter a:"))
// let b=Number(prompt("enter b:"))

// let add=operation(a,b,(x,y)=>{return x+y})
// alert(`result of ${a}+${b}=${add}`)
// let mul=operation(a,b,(x,y)=>{return x*y})
// alert(`result of ${a}*${b}=${mul}`)
// let div=operation(a,b,(x,y)=>{return x/y});
// alert(`result of ${a}/${b}=${div}`)

var x=1;
function d(){
    var  x=3;
    console.log(x);
    console.log(this.x);
}
d();