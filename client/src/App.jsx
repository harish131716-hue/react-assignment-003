
import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  return (
    <div className="app">
      <Header />

      <main>
        <div className="controls">
          <label htmlFor="color">Select Colour:</label>
          <select
            id="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="White">White</option>
          </select>

          <label htmlFor="city">Delivery City:</label>
          <input
            id="city"
            type="text"
            value={deliveryCity}
            onChange={(e) => setDeliveryCity(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button onClick={() => setQuantity(q => q + 1)}>
            Add to Cart
          </button>

          <button
            onClick={() => setQuantity(q => q - 1)}
            disabled={quantity === 0}
          >
            Remove One
          </button>

          <button onClick={() => setQuantity(0)}>
            Reset Cart
          </button>

          <button onClick={() => setShowProduct(s => !s)}>
            {showProduct ? "Hide Product" : "Show Product"}
          </button>
        </div>

        {showProduct && (
          <ProductCard
            productName={productName}
            price={price}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
