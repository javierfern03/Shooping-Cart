import { useState, useId } from "react";
import "./filters.css";
import { useFilters } from "../assets/hooks/useFilters";

export function Filters() {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const { setFilters } = useFilters();

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio a partir de: </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="2000"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Telefonos</option>
          <option value="fragrances">Perfumes</option>
          <option value="home-decoration">Home</option>
        </select>
      </div>
    </section>
  );
}
