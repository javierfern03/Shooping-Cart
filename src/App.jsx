import { products as initialProducts } from "./mocks/products.json";
import "./App.css";
import Products from "./components/Products";
import { useState } from "react";
import Header from "./components/Header";
import { useFilters } from "./assets/hooks/useFilters";


function App() {

  const [products] = useState(initialProducts);


  const {filterProducts} = useFilters()
  

  const filterdProducts = filterProducts(products);

  return (
    <>
      <Header/>
      <Products products={filterdProducts} />
    </>
  );
}

export default App;
