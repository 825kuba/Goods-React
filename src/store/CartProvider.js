import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
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
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // add item price to totalAmount
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.qty;
    // check if cart already contains this specific item
    const existingItemIndex = state.items.findIndex(
      item => item.cartId === action.item.cartId
    );
    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    // if yes, increase the qty of the item
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        qty: existingItem.qty + action.item.qty,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    // if not, add new item
    else {
      updatedItems = [...state.items];
      updatedItems.push(action.item);
    }
    // return updated state
    return {
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    // find item and it's index
    const existingItemIndex = state.items.findIndex(
      item => item.cartId === action.item.cartId
    );
    const existingItem = state.items[existingItemIndex];
    // update total amount
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    // if the item has qty of 1
    if (existingItem.qty === 1) {
      // delete it from the items array
      updatedItems = state.items.filter(
        item => item.cartId !== action.item.cartId
      );
    } else {
      // else update it's qty
      const updatedItem = { ...existingItem, qty: existingItem.qty - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    // return updated state
    return {
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'DELETE') {
    // find item and it's index
    const existingItemIndex = state.items.findIndex(
      item => item.cartId === action.item.cartId
    );
    const existingItem = state.items[existingItemIndex];

    // update total amount
    const updatedTotalAmount =
      state.totalAmount - existingItem.qty * existingItem.price;

    // delete the item from items array
    const updatedItems = state.items.filter(
      item => item.cartId !== existingItem.cartId
    );
    // return updated state
    return {
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'CLEAR_CART') {
    // clear items, total amount and checkout data
    return {
      ...state,
      items: [],
      totalAmount: 0,
      checkout: {
        discount: {},
        shipping: {},
        instructions: '',
      },
    };
  }

  if (action.type === 'CLEAR_CUSTOMER') {
    // clear all customer data
    return {
      ...state,
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
    };
  }

  return defaultCartState;
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = item => {
    dispatchCartAction({ type: 'REMOVE', item: item });
  };

  const deleteItemToCartHandler = item => {
    dispatchCartAction({ type: 'DELETE', item: item });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR_CART' });
  };

  const clearCustomerHandler = () => {
    dispatchCartAction({ type: 'CLEAR_CUSTOMER' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    checkout: cartState.checkout,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: deleteItemToCartHandler,
    clearCart: clearCartHandler,
    clearCustomer: clearCustomerHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
