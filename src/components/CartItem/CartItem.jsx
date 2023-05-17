import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ id, name, price, quantity}) => {
 const {removeItem} = useContext(CartContext)
  const subtotal = price * quantity;


  return (
    <div className="CartItem">
      <div className="CartItem__info">
        <h3 className="CartItem__name">{name}</h3>
        <p className="CartItem__price">${price}</p>
        <p className="CartItem__quantity">Cantidad: {quantity}</p>
      </div>
      <div className="CartItem__subtotal">
        <p className="CartItem__subtotalLabel">Subtotal:</p>
        <p className="CartItem__subtotalValue">${subtotal.toFixed(2)}</p>
      </div>
      <button className="CartItem__removeButton" onClick={() => removeItem(id)}>
        Quitar
      </button>
    </div>
  );
};

export default CartItem;
