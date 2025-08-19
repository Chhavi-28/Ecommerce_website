const products = [
  { id: 1, name: "Wireless Headphones", price: 2999, category: "electronics", image: "images/headphones.jpg" },
  { id: 2, name: "Bluetooth Speaker", price: 1999, category: "electronics", image: "images/speaker.jpg" },
  { id: 3, name: "Cotton T-Shirt", price: 799, category: "clothing", image: "images/tshirt.jpg" },
  { id: 4, name: "Smart Watch", price: 4999, category: "accessories", image: "images/watch.jpg" }
];

const productList = document.getElementById("product-list");
const priceFilter = document.getElementById("priceFilter");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
    `;
    productList.appendChild(div);
  });
}

priceFilter.addEventListener("change", () => {
  let value = priceFilter.value;
  let filtered = products;

  if (value === "0-1000") {
    filtered = products.filter(p => p.price <= 1000);
  } else if (value === "1000-5000") {
    filtered = products.filter(p => p.price > 1000 && p.price <= 5000);
  } else if (value === "5000") {
    filtered = products.filter(p => p.price > 5000);
  }

  displayProducts(filtered);
});

displayProducts(products);
