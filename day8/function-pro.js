function demo(a,b,fun){
    fun(a,b)
}
demo(10,20,function (x,y){
    console.log(x+y);
})
demo(10,20,function (x,y){
    console.log(x-y);
})
demo(10,20,function (x,y){
    console.log(x*y);
})
demo(10,20,function (x,y){
    console.log(x%y);
})
function operation(q,r,functi){
    functi(q,r);
}

// let n=Number(prompt("enter a numnber 1:"))
// let m=Number(prompt("enter a numnber 2:"))
// operation(n,m,function (q,r){
//     console.log(q+r);
// })

// let o=Number(prompt("enter a numnber 1 for mul:"))
// let p=Number(prompt("enter a numnber 2 for mul:"))
// operation(o,p,function (q,r){
//     console.log(q*r);
// })

//function is object ot not

function dxy(){
    console.log("hi prototype");
}

console.log("prototype" in dxy);//true

let x=new dxy();

console.log(Object.getPrototypeOf(x)==dxy.prototype);



