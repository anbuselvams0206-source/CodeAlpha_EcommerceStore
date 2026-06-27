fetch("http://localhost:5000/products")
.then(response => response.json())
.then(products => {

    let output = "";

    products.forEach(product => {

        output += `
        <div class="card">

            <h3>${product.name}</h3>

            <p>Price: ₹${product.price}</p>

            <button onclick="addCart('${product.name}',${product.price})">
                Add Cart
            </button>

        </div>
        `;

    });

    document.getElementById("products").innerHTML = output;

});


function addCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart");

}
