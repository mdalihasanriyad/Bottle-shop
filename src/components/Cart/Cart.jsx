import React from 'react';


const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className='flex items-center gap-5 w-52'>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                    <button onClick={() => handleRemoveFromCart(bottle.id)}>x</button>
                </div>)
            }
        </div>
    );
};

export default Cart;