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

      <div className="tab-title">
        Tab title:{" "}
        <span>
          {productName} | {selectedColor} | Cart: {quantity}
        </span>
      </div>

      <main>
        {showProduct && (
          <ProductCard
            productName={productName}
            price={price}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
          />
        )}

        <div className="controls">
          <div className="field">
            <label>Product colour</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option>Black</option>
              <option>Blue</option>
              <option>White</option>
            </select>
          </div>

          <div className="field">
            <label>Delivery city</label>
            <input
              type="text"
              value={deliveryCity}
              onChange={(e) => setDeliveryCity(e.target.value)}
            />
          </div>
        </div>

        <div className="buttons">
          <button
            className="add"
            onClick={() => setQuantity((q) => q + 1)}
          >
            Add to Cart
          </button>

          <button
            onClick={() => setQuantity((q) => q - 1)}
            disabled={quantity === 0}
          >
            Remove One
          </button>

          <button onClick={() => setQuantity(0)}>
            Reset Cart
          </button>

          <button onClick={() => setShowProduct((s) => !s)}>
            {showProduct ? "Hide Product" : "Show Product"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;