//nested function

// var a=10;
// let b=20;
// function demo(){
//     var a="hello"
//     let b="react"
//     console.log(a);

//     console.log(b);
//     console.log(this.a);
//     console.log(this.b);//undefined not present in window
// }
// demo()


// function parent(){
//     let a=10;
//     function child(){
//         console.log(a);//here lexical scope will occur it will scarch a in parent because a is not in this child fun

//     }
//     return child()
// }
// parent()
// console.log("start");
// function parent1(){
//     let a=30;
//    function child(){
//     console.log(a);
//    } 
//    return child;
// }
// parent1()()//clouser
//senario 2
// console.log("start");
// function parent1(){
//     let a=30;
    
//    function child(){
//     console.log("in child");
//     function child1(){
//         console.log("in child1");
//     }
//     return child1
    
//    } 
//    return child;
// }
// parent1()()()//clouser

function parent3(){
    function child1(){
        console.log("in child1");

    }
    function child2(){
        console.log("in child2");


    }
    return [child1,child2]
}

parent3()[0]()
