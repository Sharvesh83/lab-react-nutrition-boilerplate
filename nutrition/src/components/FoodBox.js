import React, { useState } from "react";

const FoodBox = ({ food }) => {
  const [quantity, setQuantity] = useState(1);
  const [foodList, setFoodList] = useState([]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddClick = () => {
    const item = {
      name: food.name,
      calories: food.calories,
      quantity: quantity,
    };

    setFoodList((prevFoodList) => [...prevFoodList, item]);
  };

  const handleResetClick = () => {
    setFoodList([]);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt={food.name} className="food-image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleAddClick}>
                +
              </button>
            </div>
            <div className="control">
              <button className="button is-danger" onClick={handleResetClick}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </article>
      <div className="added-items">
        {foodList.map((item, index) => (
          <p key={index}>
            {item.quantity} {item.name} = {item.calories * item.quantity} cal
          </p>
        ))}
      </div>
    </div>
  );
};

export default FoodBox;
