let cart = JSON.parse(localStorage.getItem('products')) 

function display_product() { 

cart.map(function (elem, index) { 
    let div_prod = document.createElement("div"); 

    let type = document.createElement("p") 
    type.innerText = elem.type; 

    let desc = document.createElement("p") 
    desc.innerText = elem.desc; 
    
    let price = document.createElement("p") 
    price.innerText = elem.price; 

    let image = document.createElement("img") 
    image.src = elem.image;  

    let remove = document.createElement("button") 
    remove.innerText = "Remove"; 

    remove.setAttribute("id", "remove_product") 

    remove.addEventListener('click', function () { 
        removeItem(elem, index)    
    }) 

    div_prod.append(image, type, desc, price, remove) 

    document.getElementById('all_products').append(cart);  
}) 
} 
display_product(); 

let data = JSON.localStorage.getItem("products") 

data.splice("index, 1") 
localStorage.setItem("products", JSON.stringify(data)) 
window.location.reload() 