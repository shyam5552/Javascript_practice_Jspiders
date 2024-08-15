// function main(m,n){

//     setTimeout(()=>{
//         for(let i=m;i<=n;i++){
//             console.log(i);
//         }    
//     },5000)
// }
// main(1,10);
// function demo(){
//     console.log("dadfa");
    
// }
// demo();


function main(m,n){
   new Promise((resolve,reject)=>{
    setTimeout(()=>{

        if(isNaN(m)||isNaN(n)){
            return reject();
        }
        for(let i=m;i<=n;i++){
            console.log(i);
            
        }
        return resolve();
        
    },5000)
   }).then(()=>{console.log("async success")
   }).catch(()=>{console.log("async fail");
   })
    
}
main(1,10);
function demo(){
    console.log("dadfa");
    
}
demo();
