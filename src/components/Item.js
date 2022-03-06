import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  const cartState = isInCart ? "in-cart" :  "";
  //or set className directly: className={isInCart? "in-cart" : ""}

  function handleAddToCart() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={isInCart ? "Remove From Cart" : "Add to Cart"}
        onClick={handleAddToCart}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
