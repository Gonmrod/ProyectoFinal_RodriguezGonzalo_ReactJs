import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=> {
        setLoading(true)
        const docRef = doc(db, 'Items', itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productsAdapted = {id: response.id, ...data}
            setProduct(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=> {
            setLoading(false)
        })
    }, [itemId])
    return (
        loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) :
        <ItemDetail {...products} />
        )
}

export default ItemDetailContainer;