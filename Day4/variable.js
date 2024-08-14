'use strict'
var a=10;
console.log(a);//golbal
console.log(window);//here the a will be go to (present in ) inside the Window. when we print window the a=10 was displayed.

let b=10;
console.log(b);//local
console.log(window);//because we are declaring the  let so it will didn't present in window
let c=10;
console.log(c);//local
console.log(window);//because we are declaring ith let so it will didn't present in window
 //const d;
 //console.log(d);// it will give the syntax error

 // declaratio and initialzatio is possible in all the three (var let const)

 //reinitialization
 var a1=10;
 a1='hello';//possible
 console.log(a1);

 let b1=20;
 b1='hell';//re initialization possible
 console.log(b1);

 const c1=30;
 //c1='hello';//not possible TypeError: Assignment to constant variable.
 console.log(c1);
//Re declaration
 var a2=30;
 console.log(a2);
 var a2='he'//re declaratio is possible
 console.log(a2);
 
 let b2=40;
 //let b2=50; SyntaxError: Identifier 'b2' has already been declared (at variable.js:36:6)Understand this error.
 
 const c2=90;// not possible
  //const c2=9;//SyntaxError: Identifier 'c2' has already been declared (at variable.js:39:9)

  //don't user variable type case
a3='hai';
console.log(a3);//we will get the out even without useing variable type

//if use use strict above this file the it will does not allow the any initializatin without using varieble  type
//we will get this errror ReferenceError: a3 is not defined.