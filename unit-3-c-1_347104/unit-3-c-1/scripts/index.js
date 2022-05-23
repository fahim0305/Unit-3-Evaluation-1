//store the products array in localstorage as "products" 
let arr = JSON.parse(localStorage.getItem("products"))   || [] 
let details = document.getElementById("products"); 

details.addEventListener('submit', addProduct)  

function addProduct() {  
    event.preventDefault(); 

    let product_type = details.type.value; 
    let product_description = details.desc.value; 
    let product_price = details.price.value; 
    let product_image = document.getElementById("image").value;  

    let object = { 

        type: product_type, 
        desc: product_description, 
        price: product_price, 
        image: product_image
    } 

    // console.log(object) 

    arr.push(object) 

    localStorage.setItem("products", JSON.stringify(arr)) 
}
