//number datatype
console.log(typeof 0.5);
//strings
let a='hello'
console.log(a);
console.log(typeof a);
let b="hello";
console.log(typeof b);
let c=`hello
        i am 
        
        developer`
// we can use backtics for writing a string in multiple lines       
console.log(c);
console.log(typeof c);
let n=10;
let m=5;
let sum=n+m;
console.log(`sum of ${n} and ${m} is ${sum}`);
console.log("sum of ${n} and ${m} is ${sum}");// it will not work for using the values it  will print as it is.
let e=null;
console.log(e);
console.log(typeof e);
console.log(typeof true);

//undeined ,null 0 all default considered as fasle
//undefined+undefined is NaN
console.log((undefined)?true:false);//it will givw false
console.log((null)?true:false);
console.log((0)?true:false);// these 2 also gives false
console.log((10)?true:false);//true

//bigint
console.log(typeof 1n);
let f=Symbol(`hello`);
let g=Symbol(`hello`);
//symbo will give unique value
console.log(f===g);//false
console.log(f==f);