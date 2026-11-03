async function fetchAPI() {
    try {
        let responce = await fetch('https://fakestoreapi.com/products');

        let products = await responce.json();

        let container = document.getElementById("products");

        container.innerHTML = "";

        products.forEach((product) => {

            let card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="price">$${product.price}</p>
                <p>${product.category}</p>
            `;

            container.appendChild(card);
        });

    } catch (err) {
        console.log(err);
    }
}
fetchAPI();