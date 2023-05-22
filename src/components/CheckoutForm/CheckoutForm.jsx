import { useState } from 'react';
import './CheckoutForm.css';

export const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [error, setError] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        if (email !== confirmEmail) {
            setError('Error en los correos, por favor verifica ambos campos.');
            return;
        }

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
                    Nombre y Apellido:
                    <input
                        className='input' 
                        type="text"
                        value={name}
                        onChange={({target}) => setName(target.value)}
                        required
                    />
                </label>
                <label className='label'>
                    Telefono:
                    <input
                        className='input' 
                        type="text"
                        value={phone}
                        onChange={({target}) => setPhone(target.value)}
                        required
                    />
                </label>
                <label className='label'>
                    Email:
                    <input
                        className='input' 
                        type="email"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                        required
                    />
                </label>
                <label className='label'>
                    Confirmar Email:
                    <input
                        className='input' 
                        type="email"
                        value={confirmEmail}
                        onChange={({target}) => setConfirmEmail(target.value)}
                        required
                    />
                </label>
                {error && <p className='error'>{error}</p>}
                <div className='label'>
                    <button type='submit' className='button'>Generar Orden</button>
                </div>
            </form>
        </div>
    );
};
