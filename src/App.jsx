import { useState } from "react";
import ProductList from "./components/ProductList.jsx";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  function handleToggle() {
    setShowProducts(!showProducts);
  }

  return (
    <div>
      <h1>React Product Dashboard</h1>

      <button onClick={handleToggle}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;