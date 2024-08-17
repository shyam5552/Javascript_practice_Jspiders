// literal way of creating object
let obj={
    name:"shyam",
    id:1,
    married:false,
    undefined:undefined,
    dept:null

}
console.log(obj);
// this is constructor function
// function obj1(name,id){

//     this.name=name;
//     this.id=id;
// }

// let b=new obj1("shyam",1);
// console.log(b);

let obj1={
    name:"shyam",
    id:1
}
//print value
console.log(obj1.name);
//adding new key add value

obj1.phoneNum=7730911492
console.log(obj1);

//update value
obj1.id=2;
console.log(obj1);

//delete key and value

delete obj1.id
console.log(obj1);

//print all keys and values

let b=Object.values(obj1);
console.log(b);

let c=Object.keys(obj1)
console.log(c);

//entries
obj1.id=2;
let d=Object.entries(obj1);
console.log(d);

//assign()

let res=Object.assign(obj,obj1);
console.log(res);

//seal()

// Object.seal(obj1)
// console.log(Object.isSealed(obj1));

//freeze

Object.freeze(obj1);
console.log(Object.isFrozen(obj1));

console.log(obj1);










