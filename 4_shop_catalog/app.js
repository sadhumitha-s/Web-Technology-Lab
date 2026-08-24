const { useState } = React;

function App() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, quantity: 5 },
    { id: 2, name: "Headphones", category: "Electronics", price: 2000, quantity: 0 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 700, quantity: 10 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, quantity: 3 },
    { id: 5, name: "Rice Bag", category: "Grocery", price: 1200, quantity: 8 },
    { id: 6, name: "Milk", category: "Grocery", price: 60, quantity: 0 },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || product.category === category;

    let matchPrice = true;

    if (price === "Below1000") {
      matchPrice = product.price < 1000;
    } else if (price === "1000to5000") {
      matchPrice = product.price >= 1000 && product.price <= 5000;
    } else if (price === "Above5000") {
      matchPrice = product.price > 5000;
    }

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <main className="catalog">
      <h1>Online Shopping Product Catalog</h1>

      <section className="filters">
        <input
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option>All</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Grocery</option>
        </select>

        <select value={price} onChange={(event) => setPrice(event.target.value)}>
          <option value="All">All Prices</option>
          <option value="Below1000">Below ₹1000</option>
          <option value="1000to5000">₹1000 - ₹5000</option>
          <option value="Above5000">Above ₹5000</option>
        </select>
      </section>

      <h2>Products Found: {filteredProducts.length}</h2>

      <section className="product-list">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price}</p>

            {product.quantity === 0 ? (
              <p className="out-of-stock">Out of Stock</p>
            ) : (
              <p>Quantity: {product.quantity}</p>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
