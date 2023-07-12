import React, { useState } from "react";
import './App.css';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foods from './resources/FoodData';

const App = () => {
  const [filteredFoods, setFilteredFoods] = useState(foods);
  
  const handleSearch = (query) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <div>
      <h1>Nutrition App</h1>
      <Search onSearch={handleSearch} />
      {filteredFoods.map((food, index) => (
        <FoodBox key={index} food={food} />
      ))}
    </div>
  );
};

export default App;
