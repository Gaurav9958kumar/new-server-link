
const url="https://new-server-link.onrender.com/masai"

window.onload=()=>{
    getData();
}

 async function getData(){
    res=await fetch(`${url}`)
    res=await res.json();
 }

 async function addDetails(){
  let form=document.getElementById("form");
  let name=form.name.value;
  let brand=form.brand.value;
  let price=+form.price.value;
  let image=form.image.value;
    
   let obj={
    name:name,
    brand:brand,
    price:price,
    image:image,
    id:Math.random()
   }

   let res=await fetch(url,{
    method:"POST",
    body:JSON.stringify(obj), headers: {
        "Content-Type": "application/json",
      },
   })
 }