
fetch("https://fakestoreapi.com/products",{
    method:"GET"
}).then(res=>res.json()).then(data=>console.log(data))
.catch((err)=>console.log(err))

fetch("https://fakestoreapi.com/products",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        title:"this is title",
        price:15000,
        name:"Shirts"
    })
}).then(res=>res.json()).then(data=>console.log(data))


fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        userId:"4M5",
        title:"CLothes",
        body:"My products"
    })
}).then(res=>res.json()).then(data=>console.log(data))
