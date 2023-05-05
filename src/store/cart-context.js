import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  checkout: {
    discount: {},
    shipping: {},
    instructions: '',
  },
  customer: {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    payment: {
      cardNumber: '',
      cardHolder: '',
      cardExp: '',
      cardCode: '',
    },
  },
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
  clearCart: () => {},
});

export default CartContext;
