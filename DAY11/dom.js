(function(a,b)
{
    let c=a+b;
    console.log(c);
}
)(1,1);

(()=>
{
    console.log("hello from lambda fun");
}
)();


(function demo(){
    console.log("hello");
})();
(function (){
    console.log("shyam");
})();

(function (){
    function d(){
        console.log("x");
    }
    d();
    function d1(){
        console.log("y");

    }
    d1();
})();