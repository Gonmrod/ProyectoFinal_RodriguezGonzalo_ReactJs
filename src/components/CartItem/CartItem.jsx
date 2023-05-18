import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';
import { getFirestore, doc, getDoc } from 'firebase/firestore';



const CartItem = ({ id, name, img, price, quantity}) => {
 const {removeItem} = useContext(CartContext)
 
 const subtotal = price * quantity;
 
 const [imageUrl, setImageUrl] = useState('');

 useEffect(() => {
   const fetchImageUrl = async () => {
     const url = await getImageUrl(id);
     setImageUrl(url);
   };
 
   fetchImageUrl();
 }, [id]);

const getImageUrl = async (itemId) => {
  try {
    const db = getFirestore();
    const docRef = doc(db, 'Items', itemId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const itemData = docSnap.data();
      return itemData.img;
    } else {
      console.error(`No se encontró el item con ID: ${itemId}`);
      return null;
    }
  } catch (error) {
    console.error('Error al obtener la URL de la imagen:', error);
    return null;
  }
};

  return (
    <div className="CartItem">
              <figure className='cart-img'>
        <img src={imageUrl} alt={name} />
      </figure>
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
