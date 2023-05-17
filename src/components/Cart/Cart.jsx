import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <Link to="/" className="Option">
          Productos
        </Link>
      </div>
    );
  }

  const formattedTotal = total !== undefined ? total.toFixed(2) : '0.00';

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${formattedTotal}</h3>
      <button onClick={() => clearCart()} className="boton">
        Vaciar Carrito
      </button>
      <Link to="/checkout" className="Option">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;

