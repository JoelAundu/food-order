import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: (item) => {},
  removeIte: (id) => {},
});

export default CartContext;
