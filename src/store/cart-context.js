import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: (item) => {},
  removeIte: (id) => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
