import React, { useEffect, useState } from "react";
import recipesData from "./recipesData";
import "./styles.css";

const RecipeFilterApp = () => {
  const [cartItems, setCartItems] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState("");
  const [recipe, setRecipe] = useState(recipesData);

  // Filter and calculate average whenever rating changes
  useEffect(() => {
    const filtered = recipesData.filter(
      (item) => item.rating >= Number(selectedRating)
    );
    setRecipe(filtered);

    // Calculate Avg
    if (filtered.length === 0) {
      setAvgRating(0);
    } else {
      const total = filtered.reduce((sum, item) => sum + item.rating, 0);
      setAvgRating((total / filtered.length).toFixed(2));
    }
  }, [selectedRating]);

  const addCart = () => {
    setCartItems((prev) => prev + 1);
  };

  return (
    <div>
      <h1>🍽️ Recipe Explorer</h1>

      {/* FILTER BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 0",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="rating-filter">Filter by Rating:</label>

          <select
            id="rating-filter"
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
          >
            <option value="">All</option>
            <option value="4.0">4.0+</option>
            <option value="4.3">4.3+</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
            <option value="4.9">4.9+</option>
          </select>
        </div>

        <h2>Cart Items: {cartItems}</h2>
      </div>

      <div style={{ textAlign: "center" }}>
        <h3>Average Rating: {avgRating}</h3>
      </div>

      {/* CARDS */}
      <div className="cards">
        {recipe.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Cuisine: {item.cuisine}</p>
            <p>
              Rating: {item.rating} <span>({item.reviewCount} reviews)</span>
            </p>
            <button onClick={addCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
