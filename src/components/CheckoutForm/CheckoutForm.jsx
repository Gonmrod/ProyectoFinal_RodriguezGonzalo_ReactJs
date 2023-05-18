import { useState } from 'react';
import './CheckoutForm.css';

export const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email
        }
        onConfirm(userData);
    }

    return (
        <div className='checkoutForm'>
            <form onSubmit={handleConfirm} className='form'>
                <label className='label'>
                    Nombre:
                    <input className='input' 
                        type="text"
                        value={name}
                        onChange={({target}) => setName(target.value)}
                        required
                    />
                </label>
                <label className='label'>
                    Telefono:
                    <input className='input' 
                        type="text"
                        value={phone}
                        onChange={({target}) => setPhone(target.value)}
                        required
                    />
                </label>
                <label className='label'>
                    Email:
                    <input className='input' 
                        type="email"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                        required
                    />
                </label>
                <div className='label'>
                    <button type='submit' className='button'>Generar Orden</button>
                </div>
            </form>
        </div>
    )
}
