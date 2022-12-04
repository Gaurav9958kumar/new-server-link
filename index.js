
const url="https://new-server-link.onrender.com/Product"

window.onload=()=>{
    getData();
    
}

 async function getData(){
    res=await fetch(url)
    res=await res.json();
    console.log(res);
 }

 async function addDetails(){
  let form=document.getElementById("form");
  let name=form.name;
  let brand=form.brand;
  let price=+form.price;
  let image=form.image;
    
   let obj={
    name:name.value,
    brand:brand.value,
    price:price.value,
    image:image.value,
    id:Math.random()
   }

   let res=await fetch(url,{
    method:"POST",
    body:JSON.stringify(obj), headers: {
        "Content-Type": "application/json",
      },
   })
   getData()
   
 }