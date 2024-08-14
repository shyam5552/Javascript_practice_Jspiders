let img=document.images;


for(let i=0;i<img.length;i++){

    img[i].style.height="200px";
    img[i].style.borderRadius="50%";
}
let f=document.forms;
console.log(f);
for(let i=0;i<f.length;i++){
    f[i].style.height="100px";
    f[i].style.width="200px";

    f[i].style.backgroundImage="URL(https://cdn.pixabay.com/photo/2024/05/30/19/37/girl-8799169_1280.jpg)";
    f[i].style.backgroundSize="cover";
    f[i].style.marginBottom="10px"
   f[i].style.backgroundRepeat="no-repeat"
}