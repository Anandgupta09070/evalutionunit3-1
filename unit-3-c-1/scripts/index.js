//store the products array in localstorage as "products"

let form=document.getElementById("products");
let productsarr =JSON.parse(localStorage.getItem("products")) ||[];

function addData(event){
    event.preventDefault();
 let productData={
     ptype:form.type.value,
     pdesc:form.desc.value,
     pprice:form.price.value,
     pimage:form.image.value,
  
 };

 productsarr.push(productData);
 
 localStorage.setItem("storeData",JSON.stringify(productsarr));
 Document.getElementById("type").value=null;
 Document.getElementById("des").value=null;
 Document.getElementById("price").value=null;
 Document.getElementById("image").value=null;
 window.location.href="inventory.html"
}
console.log(productData);

