let productarr=JSON.parse(localStorage.getItem("products")) || [];
function append(){
    productarr.array.forEach(function(element,index){
let box=document.createElement("div");

let image=document.createElement("img");
image.src=element.image;
let type=document.createElement("p");
type.innerText=element.type;
let desc=document.createElement("p");
desc.innerText=element.desc;
let price=document.createElement("p");
price.innerText=element.price;
let remove=document.createElement("button");
remove.innerText="Remove Item";
remove.setAttribute="#remove_product";
remove.addEventListener("click",function(){
    removeData(index);
})
box.append(image,type,des,price,remove);
document.getElementById("all_product").append(box)
    })
}
append();
function removeData(index){
    productarr.splice(index,1);
    localStorage.setItem("products",JSON.stringify(productarr));
    window.location.reload();
}



    

