import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { Timestamp, collection, documentId, getDocs, where, query, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";



const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, clearCart, total } = useContext(CartContext);
    
    
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);
            const outOfStock = [];

            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'Items')
            const productsAddedFromFirestone = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestone;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
                
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity});
                }
                else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit();
                
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            }
        
        
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    if(loading) {
        return (
            <div className="checkoutOrder">
                <h1>Procesando pedido...</h1>
            </div>
        )
    }
    if(orderId) {
        return (
                <div className="checkoutOrder">
                    <h2>Compra realizada con éxito</h2>
                    <h1>El número de orden es: {orderId}</h1>
                </div>
            )
    }

    return (
        <>
        {
            <div>
                <h1>Checkout</h1>
                <CheckoutForm onConfirm={createOrder}/>
            </div>
        }
        </>
    )
}

export default Checkout;
